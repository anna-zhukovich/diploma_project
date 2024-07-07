import { MathOperations } from "../src/class_operations";

describe("Jest tests positive", function () {
  test("1 - Check correctly calculation power for positive integers", function () {
    const result = MathOperations.power(2, 3);
    expect(result).toBe(8);
  });

  test("2 - Check correctly calculation power when base is negative", function () {
    const result = MathOperations.power(-2, 3);
    expect(result).toBe(-8);
  });

  test("3 - Check correctly calculation power when exponent is negative", function () {
    const result = MathOperations.power(2, -3);
    expect(result).toBe(0.125);
  });

  test("4 - Check correctly calculation power when exponent is zero", function () {
    const result = MathOperations.power(2, 0);
    expect(result).toBe(1);
  });

  test("5 - Check correctly calculation power when base is zero", function () {
    const result = MathOperations.power(0, 3);
    expect(result).toBe(0);
  });

  test("6 - Check square root of positive number", function () {
    const result = MathOperations.sqrt(25);
    expect(result).toBe(5);
  });

  test("7 - Check square root of large positive number", function () {
    const result = MathOperations.sqrt(10000);
    expect(result).toBe(100);
  });

  test("8 - Check even number", function () {
    const result = MathOperations.isEven(4);
    expect(MathOperations.isEven(4)).toBe(true);
  });

  test("9 - Check zero", function () {
    const result = MathOperations.isEven(0);
    expect(MathOperations.isEven(0)).toBe(true);
  });

  test("10 - Check that function return true for odd number", function () {
    const result = MathOperations.isOdd(3);
    expect(result).toBe(true);
  });

  test("11 - Check that function return false for even number", function () {
    const result = MathOperations.isOdd(4);
    expect(result).toBe(false);
  });

  test("12 - Check that function returns the absolute value of a positive number", function () {
    const result = MathOperations.abs(4);
    expect(result).toBe(4);
  });

  test("13 - Check that function returns the absolute value of a negative number", function () {
    const result = MathOperations.abs(-4);
    expect(result).toBe(4);
  });

  test("14 - Check that function returns the absolute value of a negative number", function () {
    const result = MathOperations.abs(-4);
    expect(result).toBe(4);
  });

  test("15 - Check that function returns the maximum value from a non-empty array", () => {
    const result = MathOperations.max([1, 2, 3, 4, 5]);
    expect(result).toBe(5);
  });

  test("16 - Check that function returns the maximum value from array with negative numbers", () => {
    const result = MathOperations.max([1, 2, 3, 4, -5]);
    expect(result).toBe(4);
  });

  test("16 - Check that function returns the maximum value from array with negative numbers", () => {
    const result = MathOperations.max([1, 2, 3, 4, -5]);
    expect(result).toBe(4);
  });

  test("17 - Check that function returns the average value of a non-empty array", () => {
    const result = MathOperations.average([1, 2, 3, 4, 5]);
    expect(result).toBe(3);
  });

  test("18 - Check that function returns the average value of a non-empty array", () => {
    const result = MathOperations.average([1, 2, 3, 4, 5]);
    expect(result).toBe(3);
  });

  test("19 - Check that function returns the sum of digits for a positive number", () => {
    const result = MathOperations.sumOfDigits(123);
    expect(result).toBe(6);
  });

  test("20 - Check that function returns the sum of digits for a positive number", () => {
    const result = MathOperations.reverseNumber(123);
    expect(result).toBe(321);
  });
});

describe("Jest tests negative", function () {
  test("1 - Сheck that the error is displayedif the base is not a number (string)", function () {
    expect(function () {
      MathOperations.power("a", 3);
    }).toThrow("Base should be a number.");
  });

  test("2 - Сheck that the error is displayed if the base is null", function () {
    expect(function () {
      MathOperations.power(null, 3);
    }).toThrow("Base should be a number.");
  });

  test("3 - Сheck that the error is displayed if the base is undefined", function () {
    expect(function () {
      MathOperations.power(undefined, 3);
    }).toThrow("Base should be a number.");
  });

  test("4 - Сheck that the error is displayed if number < 0", function () {
    expect(function () {
      MathOperations.sqrt(-3);
    }).toThrow("Square root of negative number");
  });

  test("5 - Сheck that the error is displayed if number is string", function () {
    expect(function () {
      MathOperations.isEven("a");
    }).toThrow("Number should be.");
  });

  test("6 - Сheck that the error is displayed if number is null", function () {
    expect(function () {
      MathOperations.isEven(null);
    }).toThrow("Number should be.");
  });

  test("7 - Сheck that the error is displayed if number is sting", function () {
    expect(function () {
      MathOperations.isOdd("b");
    }).toThrow("Number should be.");
  });

  test("8 - Сheck that the error is displayed if number is undefined", function () {
    expect(function () {
      MathOperations.isOdd(undefined);
    }).toThrow("Number should be.");
  });

  test("9 - Сheck that the error is displayed if number is string", function () {
    expect(function () {
      MathOperations.abs("n");
    }).toThrow("Number should be.");
  });

  test("10 - Сheck that the error is displayed if number is  Nan", function () {
    expect(function () {
      MathOperations.abs(NaN);
    }).toThrow("Number should be.");
  });

  test("11 - Сheck that the error is displayed if array is empty", function () {
    expect(function () {
      MathOperations.max([]);
    }).toThrow("Array is empty");
  });

  test("12 - Сheck that the error is displayed if array is empty", function () {
    expect(function () {
      MathOperations.min([]);
    }).toThrow("Array is empty");
  });

  test("13 - Сheck that the error is displayed if array is empty", function () {
    expect(function () {
      MathOperations.average([]);
    }).toThrow("Array is empty");
  });

  test("14 - Сheck that result is true if number = 3", function () {
    const result = MathOperations.isPrime(3);
    expect(result).toBe(true);
  });

  test("15 - Сheck that result is false if number is negative", function () {
    const result = MathOperations.isPrime(-2);
    expect(result).toBe(false);
  });

  test("16 - Сheck that the error is displayed if number is null", function () {
    expect(function () {
      MathOperations.sumOfDigits(null);
    }).toThrow("Input should be a valid number.");
  });

  test("17 - Сheck that the error is displayed if number is undefined", function () {
    expect(function () {
      MathOperations.sumOfDigits(undefined);
    }).toThrow("Input should be a valid number.");
  });
});
