// Biblioteca expandida — peças independentes que o motor combina.
// Cada categoria tem múltiplas variações para evitar repetição mesmo após meses de uso.

export type Category = "paz" | "ansiedade" | "medo" | "decisoes" | "confianca" | "direcao" | "raiva" | "tristeza" | "gratidao";

export type Verse = { text: string; ref: string; cats: Category[] };
export type Reflection = { text: string; cats: Category[] };
export type Action = { text: string; cats: Category[] };
export type Prayer = { text: string; cats: Category[] };

export const verses: Verse[] = [
  { text: "Aquietai-vos e sabei que eu sou Deus.", ref: "Salmos 46:10", cats: ["paz", "ansiedade"] },
  { text: "O coração tranquilo é vida para o corpo.", ref: "Provérbios 14:30", cats: ["paz", "raiva"] },
  { text: "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.", ref: "Salmos 37:5", cats: ["confianca", "decisoes"] },
  { text: "Não temas, porque eu sou contigo.", ref: "Isaías 41:10", cats: ["medo", "ansiedade"] },
  { text: "Lâmpada para os meus pés é tua palavra.", ref: "Salmos 119:105", cats: ["direcao", "decisoes"] },
  { text: "Tudo posso naquele que me fortalece.", ref: "Filipenses 4:13", cats: ["confianca"] },
  { text: "O Senhor é o meu pastor; nada me faltará.", ref: "Salmos 23:1", cats: ["confianca", "gratidao"] },
  { text: "Não andeis ansiosos por coisa alguma.", ref: "Filipenses 4:6", cats: ["ansiedade"] },
  { text: "Perto está o Senhor dos que têm o coração quebrantado.", ref: "Salmos 34:18", cats: ["tristeza"] },
  { text: "Irai-vos e não pequeis; não se ponha o sol sobre a vossa ira.", ref: "Efésios 4:26", cats: ["raiva"] },
  { text: "Em paz me deito e logo pego no sono.", ref: "Salmos 4:8", cats: ["paz", "ansiedade"] },
  { text: "Vinde a mim, todos os que estais cansados.", ref: "Mateus 11:28", cats: ["paz", "tristeza"] },
  { text: "Lança sobre o Senhor o teu cuidado, e ele te susterá.", ref: "Salmos 55:22", cats: ["ansiedade", "confianca"] },
  { text: "O Senhor pelejará por vós, e vós vos calareis.", ref: "Êxodo 14:14", cats: ["medo", "raiva"] },
  { text: "Buscai primeiro o reino de Deus.", ref: "Mateus 6:33", cats: ["direcao", "decisoes"] },
  { text: "A paz vos deixo, a minha paz vos dou.", ref: "João 14:27", cats: ["paz"] },
  { text: "Confia no Senhor de todo o teu coração.", ref: "Provérbios 3:5", cats: ["confianca", "decisoes"] },
  { text: "A alegria do Senhor é a vossa força.", ref: "Neemias 8:10", cats: ["tristeza", "gratidao"] },
  { text: "Sede fortes e corajosos; não temais.", ref: "Deuteronômio 31:6", cats: ["medo"] },
  { text: "Bem-aventurados os mansos, porque eles herdarão a terra.", ref: "Mateus 5:5", cats: ["raiva", "paz"] },
  { text: "Renovam as suas forças os que esperam no Senhor.", ref: "Isaías 40:31", cats: ["tristeza", "confianca"] },
  { text: "O justo viverá pela fé.", ref: "Hebreus 10:38", cats: ["confianca"] },
  { text: "Em todo tempo ama o amigo.", ref: "Provérbios 17:17", cats: ["gratidao"] },
];

export const reflections: Reflection[] = [
  { text: "A pressa rouba a clareza. Quando você desacelera, sua mente volta a enxergar o que importa.", cats: ["paz", "ansiedade"] },
  { text: "Suas emoções moldam suas decisões. Calma não é fraqueza — é poder.", cats: ["raiva", "paz"] },
  { text: "Controlar tudo cansa. Existe descanso em confiar que algumas coisas não dependem só de você.", cats: ["confianca", "ansiedade"] },
  { text: "O medo grita coisas que ainda não aconteceram. A fé sussurra que você não está sozinho agora.", cats: ["medo"] },
  { text: "Você não precisa enxergar o caminho inteiro. Só o próximo passo já é suficiente.", cats: ["direcao", "decisoes"] },
  { text: "Força não é não sentir o peso. É continuar andando mesmo sentindo.", cats: ["confianca", "tristeza"] },
  { text: "Confiança verdadeira é saber que o que você precisa, no tempo certo, vai chegar.", cats: ["confianca", "gratidao"] },
  { text: "Ansiedade é o futuro invadindo o presente. Você só precisa lidar com este minuto.", cats: ["ansiedade"] },
  { text: "Tristeza pede acolhimento, não conserto. Atravesse com gentileza.", cats: ["tristeza"] },
  { text: "A raiva é uma mensageira: ela mostra um limite cruzado. Escute antes de agir.", cats: ["raiva"] },
  { text: "Decisões grandes nascem de dias pequenos bem vividos.", cats: ["decisoes", "direcao"] },
  { text: "Gratidão muda a química do dia. Comece notando o que JÁ está dando certo.", cats: ["gratidao", "tristeza"] },
  { text: "Coragem não é ausência de medo. É dar o passo apesar dele.", cats: ["medo", "confianca"] },
  { text: "Quem caminha um passo de cada vez sempre chega. A pressa atrapalha mais que a distância.", cats: ["direcao", "paz"] },
  { text: "Reagir agora é multiplicar. Esperar é poder. Você não perde nada esperando.", cats: ["raiva"] },
  { text: "A clareza nasce na quietude, não na busca frenética.", cats: ["direcao", "decisoes"] },
  { text: "Sentir é humano. Você não precisa estar bem o tempo todo para ser amado.", cats: ["tristeza"] },
  { text: "O peso que você carrega hoje não é o tamanho do seu valor.", cats: ["tristeza", "confianca"] },
  { text: "A paz não é ausência de problemas — é presença no meio deles.", cats: ["paz"] },
  { text: "Suas reações de hoje treinam o seu eu de amanhã.", cats: ["raiva", "confianca"] },
  { text: "Você já superou coisas que pareciam impossíveis. Hoje não é diferente.", cats: ["confianca", "medo"] },
];

export const actions: Action[] = [
  { text: "Antes de responder qualquer mensagem importante hoje, respire fundo 3 vezes.", cats: ["raiva", "ansiedade"] },
  { text: "Hoje, evite reagir no impulso. Espere 10 minutos antes de qualquer resposta carregada.", cats: ["raiva"] },
  { text: "Identifique uma coisa que você está tentando forçar. Solte. Faça sua parte e deixe ir.", cats: ["confianca", "ansiedade"] },
  { text: "Faça hoje uma única coisa pequena que o medo te dizia para evitar.", cats: ["medo", "confianca"] },
  { text: "Escolha uma decisão pendente e dê o primeiro passo, mesmo pequeno.", cats: ["decisoes", "direcao"] },
  { text: "Faça hoje aquela coisa que você vem adiando. Só comece. 5 minutos bastam.", cats: ["direcao", "confianca"] },
  { text: "Mande uma mensagem agradecendo a alguém que te apoiou recentemente.", cats: ["gratidao"] },
  { text: "Inspire por 4s, segure por 4, expire por 6. Repita 5 vezes.", cats: ["ansiedade", "raiva"] },
  { text: "Escreva em uma frase qual é a verdadeira pergunta que você precisa responder hoje.", cats: ["direcao", "decisoes"] },
  { text: "Coloque a mão no peito. Diga em voz alta: 'tudo bem sentir isso agora'.", cats: ["tristeza", "ansiedade"] },
  { text: "Liste 3 valores que importam para você. A próxima decisão deve respeitar pelo menos um.", cats: ["decisoes", "direcao"] },
  { text: "Saia do ambiente por 10 minutos. Caminhe. Só responda quando o corpo estiver calmo.", cats: ["raiva"] },
  { text: "Anote 3 coisas pelas quais você é grato agora. Sem filtro.", cats: ["gratidao", "tristeza"] },
  { text: "Beba um copo de água em silêncio, prestando atenção em cada gole.", cats: ["paz", "ansiedade"] },
  { text: "Tire 15 minutos sem celular hoje. Só você e o que está ao seu redor.", cats: ["paz"] },
  { text: "Pergunte a alguém de confiança: 'o que você faria no meu lugar?'", cats: ["decisoes", "direcao"] },
  { text: "Escreva o pior cenário e o que você faria nele. O medo perde força quando tem rosto.", cats: ["medo"] },
  { text: "Se possível, durma 30 minutos a mais hoje. Cansaço amplifica tudo.", cats: ["tristeza", "ansiedade"] },
  { text: "Faça um ato pequeno de bondade — sem que ninguém saiba.", cats: ["gratidao", "tristeza"] },
  { text: "Releia uma vitória do seu passado. Você é mais forte do que se lembra.", cats: ["confianca", "tristeza"] },
];

export const prayers: Prayer[] = [
  { text: "Deus, me ajude hoje a desacelerar. Que eu encontre Sua voz no silêncio.", cats: ["paz"] },
  { text: "Senhor, traga tranquilidade ao meu coração. Que minhas reações venham da paz, não do medo.", cats: ["paz", "raiva"] },
  { text: "Pai, hoje eu solto o que não posso controlar. Conduza meus passos.", cats: ["confianca", "ansiedade"] },
  { text: "Deus, caminhe comigo no que me assusta. Que eu sinta Sua presença a cada passo.", cats: ["medo"] },
  { text: "Senhor, ilumine só o próximo passo. Confio que o resto se revela no caminho.", cats: ["direcao", "decisoes"] },
  { text: "Deus, me dê força para o que está diante de mim. Um dia de cada vez.", cats: ["confianca", "tristeza"] },
  { text: "Pai, obrigado pelo que tenho. Que eu viva hoje com o coração cheio, não vazio.", cats: ["gratidao"] },
  { text: "Senhor, segura minha mão quando eu não souber para onde ir.", cats: ["direcao", "medo"] },
  { text: "Deus, transforma essa dor em algo que me aproxime de Ti.", cats: ["tristeza"] },
  { text: "Pai, me ensine a esperar com paz, mesmo quando tudo em mim quer reagir.", cats: ["raiva", "paz"] },
  { text: "Senhor, abre meus olhos para enxergar a Tua bondade nas pequenas coisas de hoje.", cats: ["gratidao"] },
  { text: "Deus, recoloca em mim a confiança que eu perdi.", cats: ["confianca", "medo"] },
];

export const moodToCategory: Record<string, Category[]> = {
  great: ["gratidao", "paz", "direcao"],
  ok: ["paz", "direcao", "confianca"],
  tired: ["paz", "tristeza", "confianca"],
  anxious: ["ansiedade", "paz", "confianca"],
  sad: ["tristeza", "gratidao", "confianca"],
  angry: ["raiva", "paz"],
  fearful: ["medo", "confianca"],
  lost: ["direcao", "decisoes"],
};

export const goalToCategory: Record<string, Category[]> = {
  paz: ["paz", "ansiedade", "raiva"],
  clareza: ["direcao", "decisoes", "paz"],
  ansiedade: ["ansiedade", "paz", "confianca"],
  fe: ["confianca", "gratidao", "medo"],
};
