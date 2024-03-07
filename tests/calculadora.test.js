const calculadora = require("../models/calculadora");

describe("Testes de soma", () => {
  test("Somar 2 + 2 deveria retornar 4", () => {
    const result = calculadora.sum(2, 2);

    expect(result).toBe(4);
  });

  test("Somar 5 + 100 deveria retornar 105", () => {
    const result = calculadora.sum(5, 100);

    expect(result).toBe(105);
  });

  test("Somar 'banana' + 100 deveria retornar 'Erro'", () => {
    const result = calculadora.sum("banana", 100);

    expect(result).toBe("Erro");
  });

  test("Somar 5 + 'batata' deveria retornar 'Erro'", () => {
    const result = calculadora.sum(5, "batata");

    expect(result).toBe("Erro");
  });

  test("Somar 1 + '1' deveria retornar 'Erro'", () => {
    const result = calculadora.sum(1, "1");

    expect(result).toBe("Erro");
  });

  test("Somar -1 + -1 deveria retornar -2", () => {
    const result = calculadora.sum(-1, -1);

    expect(result).toBe(-2);
  });

  test("Somar 1.98 + 0.01 deveria retornar 1.99", () => {
    const result = calculadora.sum(1.98, 0.01);

    expect(result).toBe(1.99);
  });
});

describe("Testes de subtração", () => {
  test("Subtrair 1 - 3 deveria retornar -2", () => {
    const result = calculadora.subtraction(1, 3);

    expect(result).toBe(-2);
  });

  test("Subtrair 100 - 5 deveria retornar 95", () => {
    const result = calculadora.subtraction(100, 5);

    expect(result).toBe(95);
  });

  test("Subtrair 'banana' - 10 deveria retornar 'Erro'", () => {
    const result = calculadora.subtraction("banana", 10);

    expect(result).toBe("Erro");
  });

  test("Subtrair 10 - 'banana' deveria retornar 'Erro'", () => {
    const result = calculadora.subtraction(10, "banana");

    expect(result).toBe("Erro");
  });

  test("Subtrair 1 - '1' deveria retornar 'Erro'", () => {
    const result = calculadora.subtraction(1, "1");

    expect(result).toBe("Erro");
  });

  test("Subtrair (-1) - (-1) deveria retornar 0", () => {
    const result = calculadora.subtraction(-1, -1);

    expect(result).toBe(0);
  });

  test("Subtrair 10.99 - 1.98 deveria retornar 9.01", () => {
    const result = calculadora.subtraction(10.99, 1.98);

    expect(result).toBe(9.01);
  });
});

describe("Testes de multiplicação", () => {
  test("Multiplicar 10 * 7 deveria retornar 70", () => {
    const result = calculadora.multiplication(10, 7);

    expect(result).toBe(70);
  });

  test("Multiplicar 'banana' * 70 deveria retornar 'Erro'", () => {
    const result = calculadora.multiplication("banana", 70);

    expect(result).toBe("Erro");
  });

  test("Multiplicar 70 * 'banana' deveria retornar 'Erro'", () => {
    const result = calculadora.multiplication(70, "banana");

    expect(result).toBe("Erro");
  });

  test("Multiplicar 70 * '1' deveria retornar 'Erro'", () => {
    const result = calculadora.multiplication(70, "1");

    expect(result).toBe("Erro");
  });

  test("Multiplicar -70 * -1 deveria retornar 70", () => {
    const result = calculadora.multiplication(-70, -1);

    expect(result).toBe(70);
  });

  test("Multiplicar 70.86 * 1.75 deveria retornar 124.005", () => {
    const result = calculadora.multiplication(70.86, 1.75);

    expect(result).toBe(124.005);
  });
});

describe("Testes de divisão", () => {
  test("Dividir 10 / 2 deveria retornar 5", () => {
    const result = calculadora.division(10, 2);

    expect(result).toBe(5);
  });

  test("Dividir 10 / 0 deveria retornar 'Erro'", () => {
    const result = calculadora.division(10, 0);

    expect(result).toBe("Erro");
  });

  test("Dividir 0 / 10 deveria retornar 0", () => {
    const result = calculadora.division(0, 10);

    expect(result).toBe(0);
  });

  test("Dividir 'banana' / 10 deveria retornar 'Erro'", () => {
    const result = calculadora.division("banana", 10);

    expect(result).toBe("Erro");
  });

  test("Dividir 10 / 'banana' deveria retornar 'Erro'", () => {
    const result = calculadora.division(10, "banana");

    expect(result).toBe("Erro");
  });

  test("Dividir 10 / '2' deveria retornar 'Erro'", () => {
    const result = calculadora.division(10, "2");

    expect(result).toBe("Erro");
  });

  test("Dividir 1 / 3 deveria retornar 0.33", () => {
    const result = calculadora.division(1, 3);

    expect(result).toBe(0.33);
  });
});
