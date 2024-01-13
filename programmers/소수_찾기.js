/**
 * 소수 찾기 (완전 탐색)
 * https://school.programmers.co.kr/learn/courses/30/lessons/42839
 */

function solution(numbers) {
    const nums = numbers.split('');
    const visited = Array(nums.length).fill(false);
    const primes = new Set();

    function permute(current) {
        const num = Number(current.join(''));
        if (isPrime(num)) {
            primes.add(num);
        }

        for (let i = 0; i < nums.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                permute([...current, nums[i]]);
                visited[i] = false;
            }
        }
    }

    permute([]);

    return primes.size;
}

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
