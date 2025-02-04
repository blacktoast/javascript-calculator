describe("간단 계산기 앱 테스트", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://132.226.18.9:5500");
  });
  it("test", () => {
    cy.get("#total").should("have.text", "0");
    cy.get(".digits").find("[data-num=1]");
  });
  it("클릭 숫자 테스트", () => {
    cy.get("#total").then((result) => {
      let num = result.text();

      cy.get(".digits").contains("1").click();
      cy.get("#total").should("have.text", "1");
    });
  });
  it("test calculate", () => {
    cy.get("[data-num=1]").click();
    cy.get(".operations").contains("+").click();
    cy.get("[data-num=2]").click();
    cy.get(".operations").contains("=").click();
  });

  it("3자리 이상 숫자 입력시 alert창 ", () => {
    for (let i = 0; i < 5; i++) {
      cy.get("[data-num=1]").click();
    }
    cy.on("window:alert", (text) => {
      expect(text).to.contains("세자리 초과 숫자는 입력할수없습니다");
    });
  });
});
