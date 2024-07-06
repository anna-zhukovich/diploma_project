export class MathOperations {
    // Возведение числа в степень
    static power(base, exponent) {
        if (base === null || base === undefined || typeof base === 'string') {
            throw new Error('Base should be a number.');
        }
        return Math.pow(base, exponent);
    }

    // Нахождение квадратного корня числа
    static sqrt(number) {
        if (number < 0) {
            throw new Error("Square root of negative number");
        }
        return Math.sqrt(number);
    }

    // Проверка, является ли число четным
    static isEven(number) {
        if (number === null || number === undefined || typeof number === 'string') {
            throw new Error('Number should be.');
        }
        return number % 2 === 0;
    }

    // Проверка, является ли число нечетным
    static isOdd(number) {
        if (number === null || number === undefined || typeof number === 'string') {
            throw new Error('Number should be.');
        }
        return number % 2 !== 0;
    }

    // Нахождение модуля числа
    static abs(number) {
        if (number === null || number === undefined || typeof number === 'string' || isNaN(number)) {
            throw new Error('Number should be.');
        }
        return Math.abs(number);
    }

    // Нахождение наибольшего общего делителя двух чисел
    static gcd(a, b) {
        if (!b) {
            return a;
        }
        return MathOperations.gcd(b, a % b);
    }

    // Нахождение наименьшего общего кратного двух чисел
    static lcm(a, b) {
        return Math.abs(a * b) / MathOperations.gcd(a, b);
    }

    // Нахождение максимального значения в массиве чисел
    static max(arr) {
        if (arr.length === 0) {
            throw new Error("Array is empty");
        }
        return Math.max(...arr);
    }

    // Нахождение минимального значения в массиве чисел
    static min(arr) {
        if (arr.length === 0) {
            throw new Error("Array is empty");
        }
        return Math.min(...arr);
    }

    // Нахождение среднего арифметического массива чисел
    static average(arr) {
        if (arr.length === 0) {
            throw new Error("Array is empty");
        }
        const sum = arr.reduce((acc, num) => acc + num, 0);
        return sum / arr.length;
    }

    // Проверка, является ли число простым
    static isPrime(number) {
        if (number <= 1) return false;
        if (number <= 3) return true;
        if (number % 2 === 0 || number % 3 === 0) return false;
        for (let i = 5; i * i <= number; i += 6) {
            if (number % i === 0 || number % (i + 2) === 0) return false;
        }
        return true;
    }

    // Нахождение суммы цифр числа
    static sumOfDigits(number) {
        if (number === null || number === undefined) {
            throw new Error('Input should be a valid number.');
        }
        return number
            .toString()
            .split('')
            .map(Number)
            .reduce((acc, digit) => acc + digit, 0);
    }

    // Переворачивание числа (например, 12345 становится 54321)
    static reverseNumber(number) {
        return parseInt(number.toString().split('').reverse().join(''), 10);
    }
}

export default MathOperations;
