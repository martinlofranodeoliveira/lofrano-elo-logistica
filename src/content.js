export const model = {
  slug: "elo",
  name: "Elo",
  sector: "Logística & transporte",
  headline: "Conectando cada ponto do caminho.",
  description:
    "Uma operação de transporte com visibilidade de etapas e rastreio de exemplo.",
  tags: ["Rastreio fictício", "Rotas", "Operação"],
  reference: "https://lofranotecnologia.com.br/modelos/elo",
  github: "https://github.com/martinlofranodeoliveira/lofrano-elo-logistica",
};

export const guide = {
  intro:
    "Elo é um conceito de experiência para logística e transporte que aproxima origem, destino e etapas de uma remessa. A página demonstra como tornar o acompanhamento compreensível para quem consulta uma entrega. Ela combina uma visão resumida do percurso com mensagens que distinguem o estado atual das próximas etapas previstas no exemplo.",
  steps: [
    "Consulte os códigos ELO-DEMO-01 e ELO-DEMO-02 para comparar os cenários fictícios. Cada resultado apresenta o percurso e os eventos preparados para esta demonstração.",
    "Digite um código diferente para conhecer o estado de consulta sem resultado. Nenhuma transportadora é consultada e nenhum código de cliente deve ser informado.",
    "Alterne entre os tipos de operação para explorar a apresentação das soluções. Rotas e etapas são ilustrativas; não há mapa ao vivo, contratação de frete ou previsão real de entrega.",
  ],
  planning:
    "Para um acompanhamento conectado à sua operação, identificamos de onde vêm os eventos e como tratar atrasos, duplicidades e correções. Também alinhamos quais dados o cliente pode ver e quem resolve divergências. A interface é uma parte do trabalho: integrações, atualização do histórico e regras de acesso precisam ser definidas e testadas. Você pode começar contando como recebe e acompanha suas entregas atualmente.",
};
