/**
 * 소수 찾기 (완전 탐색)
 * https://school.programmers.co.kr/learn/courses/30/lessons/42839
 */

function solution(numbers) {
    const nums = numbers.split('');
    const primes = getAllPrimes(nums);

    return primes.size;
}

function getAllPrimes(set) {
    const result = new Set();

    function permute(arr, current = []) {
        if (arr.length === 0) {
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
            const newNum = Number([...current, arr[i]].join(''));
            if (isPrime(newNum)) {
                result.add(newNum);
            }
            permute(remaining, [...current, arr[i]]);
        }
    }

    permute(set);

    return result;
}

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    if (number === 2) {
        return true;
    }

    if (number % 2 === 0) {
        return false;
    }

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
