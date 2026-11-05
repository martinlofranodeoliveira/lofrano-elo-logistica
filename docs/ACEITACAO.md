# Critérios do modelo Elo

Derivados da demonstração pública antes da implementação independente. Os testes verificam DOM simulado; isso não equivale a QA visual em navegador.

- **elo-01** — Preencher input#el-code com “ elo-demo-02 ” e acionar button[aria-label="Consultar código fictício"].
  Resultado: O handler impede o envio nativo e normaliza espaços e caixa do código consultado. O resultado aria-live=polite passa a ELO-DEMO-02, origem Curitiba, destino Joinville e Entrega concluída como ETAPA ATUAL. A nota declara ciclo demonstrativo concluído sem entrega real.
- **elo-02** — Preencher input#el-code com “CODIGO-INEXISTENTE” e acionar Consultar código fictício.
  Resultado: O resultado anterior sai do DOM e aparece Código não encontrado. A mensagem informa “Esta interface só reconhece ELO-DEMO-01 e ELO-DEMO-02. Nenhuma consulta externa foi realizada.”.
- **elo-03** — No grupo “Tipo de operação logística”, clicar no button que contém E-commerce; depois Carga dedicada.
  Resultado: O tipo ativo fica aria-pressed=true. E-commerce mostra o título correspondente e a descrição iniciada por Do pedido à apresentação da entrega. Carga dedicada troca o título e mostra a descrição iniciada por Um fluxo de apresentação para operações com necessidades específicas.

Além dos fluxos, a suíte confere conteúdo inicial publicado, controles, imagens, âncoras, ausência de configuração privada e reinício do estado.
