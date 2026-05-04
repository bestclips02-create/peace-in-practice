// Edge function: aconselhamento contextual via Lovable AI
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM = `Você é um conselheiro espiritual cristão, prático, gentil e não-doutrinador.
Seu papel é ajudar a pessoa a encontrar paz, clareza e a próxima ação concreta.
Linguagem: portuguesa do Brasil, simples, calorosa, moderna. Nada de jargão religioso pesado.
Você nunca faz julgamento. Você nunca diz "ore mais" como única solução — você dá AÇÃO concreta.
Sempre responda chamando a função "responder_acolhimento" com os 4 campos.`;

const tools = [{
  type: "function",
  function: {
    name: "responder_acolhimento",
    description: "Resposta acolhedora estruturada para o estado emocional do usuário.",
    parameters: {
      type: "object",
      properties: {
        direcao: { type: "string", description: "1-2 frases que vão direto ao ponto da emoção/situação. Linguagem direta e empática." },
        reflexao: { type: "string", description: "1-2 frases reframing — uma nova forma de olhar para a situação. Profunda mas acessível." },
        acao: { type: "string", description: "Uma ação concreta, pequena e específica que ela pode fazer NOS PRÓXIMOS 10 MINUTOS." },
        versiculo: { type: "string", description: "Um versículo bíblico curto, relevante, traduzido em linguagem natural." },
        referencia: { type: "string", description: "Referência bíblica, ex: 'Salmos 23:1'." },
      },
      required: ["direcao", "reflexao", "acao", "versiculo", "referencia"],
      additionalProperties: false,
    },
  },
}];

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const { situation, mood, context } = await req.json();
    if (!situation || typeof situation !== "string" || situation.length > 1000) {
      return new Response(JSON.stringify({ error: "situação inválida" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    const KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!KEY) throw new Error("LOVABLE_API_KEY missing");

    const userMsg = `Estado emocional atual: ${mood ?? "não informado"}.
${context ? `Contexto recente do usuário: ${context}.` : ""}
Situação que ele(a) está sentindo agora:
"""${situation}"""
Responda chamando a função.`;

    const r = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [{ role: "system", content: SYSTEM }, { role: "user", content: userMsg }],
        tools,
        tool_choice: { type: "function", function: { name: "responder_acolhimento" } },
      }),
    });

    if (r.status === 429) return new Response(JSON.stringify({ error: "Muitas requisições. Tente novamente em alguns segundos." }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    if (r.status === 402) return new Response(JSON.stringify({ error: "Créditos esgotados. Adicione créditos no workspace." }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    if (!r.ok) {
      const t = await r.text();
      console.error("AI error", r.status, t);
      return new Response(JSON.stringify({ error: "Falha ao gerar resposta" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const data = await r.json();
    const call = data.choices?.[0]?.message?.tool_calls?.[0];
    const args = call ? JSON.parse(call.function.arguments) : null;
    if (!args) return new Response(JSON.stringify({ error: "Resposta vazia" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });

    return new Response(JSON.stringify(args), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "erro" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
