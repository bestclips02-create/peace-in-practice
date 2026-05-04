export type DailyContent = {
  day: number;
  verse: string;
  reference: string;
  explanation: string;
  application: string;
  action: string;
  prayer: string;
};

export const dailyContent: DailyContent[] = [
  {
    day: 1,
    verse: "Aquietai-vos e sabei que eu sou Deus.",
    reference: "Salmos 46:10",
    explanation: "A pressa rouba a clareza. Quando você desacelera, sua mente volta a enxergar o que importa de verdade.",
    application: "Hoje, em vez de tentar resolver tudo, dê um passo de cada vez. A paz nasce na pausa, não na correria.",
    action: "Antes de responder qualquer mensagem importante, respire fundo 3 vezes.",
    prayer: "Deus, me ajude hoje a desacelerar. Que eu encontre Sua voz no silêncio. Amém.",
  },
  {
    day: 2,
    verse: "O coração tranquilo é vida para o corpo.",
    reference: "Provérbios 14:30",
    explanation: "Suas emoções moldam seu corpo, suas decisões e sua energia. Calma não é fraqueza — é poder.",
    application: "Antes de reagir a algo que te incomodou, pergunte: 'isso vai importar daqui a uma semana?'",
    action: "Hoje, evite reagir no impulso. Espere 10 minutos antes de qualquer resposta carregada.",
    prayer: "Senhor, traga tranquilidade ao meu coração. Que minhas reações venham da paz, não do medo.",
  },
  {
    day: 3,
    verse: "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.",
    reference: "Salmos 37:5",
    explanation: "Controlar tudo cansa. Existe descanso em confiar que algumas coisas não dependem só de você.",
    application: "Identifique uma coisa que você está tentando forçar. Hoje, solte. Faça sua parte e deixe ir.",
    action: "Escreva em um papel: 'isto eu entrego'. E siga o seu dia.",
    prayer: "Pai, hoje eu solto o que não posso controlar. Conduza meus passos. Amém.",
  },
  {
    day: 4,
    verse: "Não temas, porque eu sou contigo.",
    reference: "Isaías 41:10",
    explanation: "O medo grita coisas que ainda não aconteceram. A fé sussurra que você não está sozinho agora.",
    application: "Nomear o medo tira o poder dele. Diga em voz alta o que está te assustando.",
    action: "Faça hoje uma única coisa pequena que o medo te dizia para evitar.",
    prayer: "Deus, caminhe comigo no que me assusta. Que eu sinta Sua presença em cada passo.",
  },
  {
    day: 5,
    verse: "Lâmpada para os meus pés é tua palavra.",
    reference: "Salmos 119:105",
    explanation: "Você não precisa enxergar o caminho inteiro. Só o próximo passo já é suficiente.",
    application: "Pare de tentar planejar os próximos 5 anos. Pergunte: qual é o próximo passo certo hoje?",
    action: "Escolha uma decisão pendente e dê o primeiro passo, mesmo pequeno.",
    prayer: "Senhor, ilumine o próximo passo. Confio que o resto se revela no caminho.",
  },
  {
    day: 6,
    verse: "Tudo posso naquele que me fortalece.",
    reference: "Filipenses 4:13",
    explanation: "Força não é não sentir o peso. É continuar andando mesmo sentindo. E você não anda sozinho.",
    application: "Reconheça: você já superou coisas que pareciam impossíveis. Hoje não é diferente.",
    action: "Faça hoje aquela coisa que você vem adiando há dias. Só comece. 5 minutos bastam.",
    prayer: "Deus, me dê força para o que está diante de mim. Um dia de cada vez.",
  },
  {
    day: 7,
    verse: "O Senhor é o meu pastor; nada me faltará.",
    reference: "Salmos 23:1",
    explanation: "Confiança verdadeira é saber que o que você precisa, no tempo certo, vai chegar.",
    application: "Faça uma lista mental do que você JÁ tem hoje. Comece o dia em gratidão, não em falta.",
    action: "Mande uma mensagem agradecendo a alguém que te apoiou recentemente.",
    prayer: "Pai, obrigado pelo que tenho. Que eu viva hoje com o coração cheio, não vazio.",
  },
];

export type Situation = {
  id: string;
  emotion: string;
  emoji: string;
  direction: string;
  reflection: string;
  action: string;
  verse: string;
  reference: string;
};

export const situations: Situation[] = [
  {
    id: "anxious", emotion: "Ansioso", emoji: "🌬️",
    direction: "Sua mente está acelerada porque está tentando viver vários momentos ao mesmo tempo. Volte ao agora.",
    reflection: "A ansiedade é o futuro invadindo o presente. Você só precisa lidar com este minuto.",
    action: "Inspire por 4 segundos, segure por 4, expire por 6. Repita 5 vezes antes de continuar.",
    verse: "Não andeis ansiosos por coisa alguma.", reference: "Filipenses 4:6",
  },
  {
    id: "confused", emotion: "Confuso", emoji: "🌫️",
    direction: "Confusão geralmente é excesso de opções e falta de silêncio. Pare de buscar respostas e escute.",
    reflection: "A clareza vem na quietude, não na busca frenética. Espere.",
    action: "Escreva em uma frase qual é a verdadeira pergunta que você precisa responder.",
    verse: "Aquietai-vos e sabei que eu sou Deus.", reference: "Salmos 46:10",
  },
  {
    id: "fearful", emotion: "Com medo", emoji: "🕊️",
    direction: "O medo aumenta no escuro da imaginação. Acenda a luz: nomeie exatamente o que você teme.",
    reflection: "Coragem não é ausência de medo. É dar o passo apesar dele.",
    action: "Escreva o pior cenário. Agora, escreva o que você faria nele. O medo perde força quando tem rosto.",
    verse: "Não temas, porque eu sou contigo.", reference: "Isaías 41:10",
  },
  {
    id: "sad", emotion: "Triste", emoji: "🌙",
    direction: "Tristeza pede acolhimento, não conserto. Não tente fugir dela — atravesse com gentileza.",
    reflection: "Sentir é humano. Você não precisa estar bem o tempo todo para ser amado.",
    action: "Coloque a mão no peito. Diga: 'tudo bem sentir isso agora'. Respire.",
    verse: "Perto está o Senhor dos que têm o coração quebrantado.", reference: "Salmos 34:18",
  },
  {
    id: "lost", emotion: "Sem direção", emoji: "🧭",
    direction: "Você não precisa enxergar o destino — só o próximo passo. Comece por ele.",
    reflection: "Quem caminha um passo de cada vez sempre chega. A pressa atrapalha mais que a distância.",
    action: "Liste 3 valores que importam para você. A próxima decisão deve respeitar pelo menos um.",
    verse: "Lâmpada para os meus pés é tua palavra.", reference: "Salmos 119:105",
  },
  {
    id: "angry", emotion: "Com raiva", emoji: "🔥",
    direction: "A raiva é uma mensageira: ela mostra um limite que foi cruzado. Escute antes de agir.",
    reflection: "Reagir agora é multiplicar. Esperar é poder. Você não perde nada esperando.",
    action: "Saia do ambiente por 10 minutos. Caminhe. Só responda quando o corpo estiver calmo.",
    verse: "Irai-vos e não pequeis.", reference: "Efésios 4:26",
  },
];

export type Plan = {
  id: string;
  title: string;
  days: number;
  description: string;
  color: string;
  progress: number;
};

export const plans: Plan[] = [
  { id: "calm", title: "Acalmar a mente", days: 7, description: "Sete dias para reduzir o ruído interno e voltar ao centro.", color: "bg-gradient-sage", progress: 3 },
  { id: "emotion", title: "Controle emocional", days: 14, description: "Aprenda a sentir sem reagir. Responda à vida com clareza.", color: "bg-gradient-dawn", progress: 0 },
  { id: "faith", title: "Fortalecer a fé", days: 21, description: "Construa uma confiança que não depende das circunstâncias.", color: "bg-gradient-evening", progress: 0 },
  { id: "peace", title: "Viver com mais paz", days: 30, description: "Trinta dias de pequenas práticas que mudam o ritmo da sua alma.", color: "bg-gradient-sunrise", progress: 0 },
];

export type Audio = {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
};

export const audios: Audio[] = [
  { id: "a1", title: "Respiração para ansiedade", category: "Ansiedade", duration: "3 min", description: "Volte ao corpo. Volte ao agora." },
  { id: "a2", title: "Pausa de calma", category: "Calma", duration: "5 min", description: "Uma pausa guiada para o meio do dia." },
  { id: "a3", title: "Confiança antes de decidir", category: "Confiança", duration: "4 min", description: "Centramento antes de escolhas importantes." },
  { id: "a4", title: "Entrega — solte o que pesa", category: "Entrega", duration: "5 min", description: "Solte o que você não pode controlar." },
  { id: "a5", title: "Descanso mental", category: "Descanso", duration: "3 min", description: "Para fechar o dia com leveza." },
  { id: "a6", title: "Manhã com clareza", category: "Calma", duration: "4 min", description: "Comece o dia centrado." },
];

export const checkInOptions = [
  { id: "great", label: "Em paz", emoji: "🌿" },
  { id: "ok", label: "Neutro", emoji: "🌤️" },
  { id: "tired", label: "Cansado", emoji: "🌙" },
  { id: "anxious", label: "Ansioso", emoji: "🌬️" },
  { id: "sad", label: "Pra baixo", emoji: "💧" },
];
