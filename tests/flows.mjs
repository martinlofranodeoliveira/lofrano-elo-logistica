const text = (element) => element.textContent.replace(/\s+/gu, " ").trim();

export default [
  {
    name: "elo-01 — consulta o segundo código fictício com caixa e espaços normalizados",
    run: async ({ ui, user, assert, within }) => {
      const code = ui.getByRole("textbox", { name: "Código de demonstração" });
      await user.clear(code);
      await user.type(code, " elo-demo-02 ");
      await user.click(
        ui.getByRole("button", {
          name: "Consultar código fictício",
          exact: true,
        }),
      );
      assert.ok(ui.getByText("Curitiba", { exact: true }));
      assert.ok(ui.getByText("Joinville", { exact: true }));
      const current = ui
        .getByText("ETAPA ATUAL", { exact: true })
        .closest("li");
      assert.match(text(current), /Entrega concluída/u);
      const result = current.closest("ol").parentElement;
      assert.equal(result.getAttribute("aria-live"), "polite");
      assert.ok(within(result).getByText("ELO-DEMO-02", { exact: true }));
      assert.ok(
        within(result).getByText(
          "Ciclo demonstrativo concluído. Não corresponde a uma entrega real.",
          { exact: true },
        ),
      );
      assert.equal(
        within(result).queryByText("São Paulo", { exact: true }),
        null,
      );
    },
  },
  {
    name: "elo-02 — apresenta erro para um código fora da demonstração",
    run: async ({ ui, user, assert }) => {
      const code = ui.getByRole("textbox", { name: "Código de demonstração" });
      await user.clear(code);
      await user.type(code, "CODIGO-INEXISTENTE");
      await user.click(
        ui.getByRole("button", {
          name: "Consultar código fictício",
          exact: true,
        }),
      );
      assert.ok(
        ui.getByRole("heading", { name: "Código não encontrado", exact: true }),
      );
      assert.ok(
        ui.getByText(
          "Esta interface só reconhece ELO-DEMO-01 e ELO-DEMO-02. Nenhuma consulta externa foi realizada.",
          { exact: true },
        ),
      );
      assert.equal(ui.queryByText("São Paulo", { exact: true }), null);
      assert.equal(ui.queryByText("Campinas", { exact: true }), null);
      assert.equal(ui.queryByText("ETAPA ATUAL", { exact: true }), null);
    },
  },
  {
    name: "elo-03 — apresenta E-commerce e Carga dedicada",
    run: async ({ ui, user, assert, within }) => {
      const operations = within(
        ui.getByRole("group", { name: "Tipo de operação logística" }),
      );
      const ecommerce = operations.getByRole("button", { name: /E-commerce/u });
      await user.click(ecommerce);
      assert.equal(ecommerce.getAttribute("aria-pressed"), "true");
      assert.ok(ui.getByRole("heading", { name: "E-commerce", exact: true }));
      assert.ok(
        ui.getByText(
          "Do pedido à apresentação da entrega: um conceito de experiência para aproximar lojas e seus clientes.",
          { exact: true },
        ),
      );
      const dedicated = operations.getByRole("button", {
        name: /Carga dedicada/u,
      });
      await user.click(dedicated);
      assert.equal(dedicated.getAttribute("aria-pressed"), "true");
      assert.equal(ecommerce.getAttribute("aria-pressed"), "false");
      assert.ok(
        ui.getByRole("heading", { name: "Carga dedicada", exact: true }),
      );
      assert.ok(
        ui.getByText(
          "Um fluxo de apresentação para operações com necessidades específicas, reunindo origem, destino e contexto.",
          { exact: true },
        ),
      );
    },
  },
];
