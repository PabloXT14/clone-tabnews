function sum(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") return "Erro";

  return number1 + number2;
}

function subtraction(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") return "Erro";

  return number1 - number2;
}

function multiplication(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") return "Erro";

  return number1 * number2;
}

function division(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") return "Erro";

  if (number2 === 0) return "Erro";

  const result = number1 / number2;

  if (Number.isInteger(result)) return result;

  if (!Number.isInteger(result)) return Number(result.toFixed(2));
}

module.exports = {
  sum,
  subtraction,
  multiplication,
  division,
};
