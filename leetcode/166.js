/**
 * 166. Fraction to Recurring Decimal (Hash Table, Math)
 * https://leetcode.com/problems/fraction-to-recurring-decimal/
 *
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
    if (numerator === 0) {
        return "0";
    }

    let output = "";

    // 부호
    const isMinus = (numerator > 0) ^ (denominator > 0);
    if (isMinus) {
        output += "-";
    }

    // 나뉘는 수, 나누는 수를 모두 양수로 만들기
    const num = Math.abs(numerator);
    const denom = Math.abs(denominator);

    // 정수 부분
    output += Math.floor(num / denom);

    let remainder = num % denom;

    // 나머지가 0이라면 정수이므로 바로 문자로 변환해서 리턴
    if (remainder === 0) {
        return output;
    } else {
        output += ".";
    }

    // Map의 key는 현재 나머지, value는 현재 반환값의 길이로 한다.
    const map = new Map();
    map.set(remainder, output.length);

    while (remainder !== 0) {
        remainder *= 10;
        output += Math.floor(remainder / denom);
        remainder %= denom;
        if (map.has(remainder)) {
            const idx = map.get(remainder);
            output = output.slice(0, idx) + "(" + output.slice(idx) + ")";
            break;
        } else {
            map.set(remainder, output.length);
        }
    }

    return output;
};

/**
 * 이 문제에서 중요한 포인트 중 하나는 소수점 뒤의 숫자들은 나누고 남은 나머지를 나눈 값이라는 것이다.
 *
 * Example 1: 4 / 333
 * 최초 나머지:  4
 * 나머지 * 10 =  40
 * (나머지 * 10 / denom)한 값을 반환값 뒤에 붙이기 =>  0
 * 다시 구한 나머지 =  40
 * map에 새로운 나머지 추가 =>  Map(2) { 4 => 2, 40 => 3 }
 * --------------------------------------------------
 * 나머지 * 10 =  400
 * (나머지 * 10 / denom)한 값을 반환값 뒤에 붙이기 =>  1
 * 다시 구한 나머지 =  67
 * map에 새로운 나머지 추가 =>  Map(3) { 4 => 2, 40 => 3, 67 => 4 }
 * --------------------------------------------------
 * 나머지 * 10 =  670
 * (나머지 * 10 / denom)한 값을 반환값 뒤에 붙이기 =>  2
 * 다시 구한 나머지 =  4
 * map에 같은 나머지가 있음! 나머지 =  4 , 인덱스 =  2
 *
 *
 * Example 2: 1/6
 * 최초 나머지:  1
 * 나머지 * 10 =  10
 * (나머지 * 10 / denom)한 값을 반환값 뒤에 붙이기 =>  1
 * 다시 구한 나머지 =  4
 * map에 새로운 나머지 추가 =>  Map(2) { 1 => 2, 4 => 3 }
 * --------------------------------------------------
 * 나머지 * 10 =  40
 * (나머지 * 10 / denom)한 값을 반환값 뒤에 붙이기 =>  6
 * 다시 구한 나머지 =  4
 * map에 같은 나머지가 있음! 나머지 =  4 , 인덱스 =  3
 */
