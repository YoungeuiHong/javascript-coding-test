/**
 * 205. Isomorphic Strings
 * https://leetcode.com/problems/isomorphic-strings/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const mapS = new Map();
    const mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if ((!mapS.has(charS) && !mapT.has(charT))) {
            mapS.set(charS, charT);
            mapT.set(charT, charS);
        } else if (mapS.get(charS) !== charT || mapT.get(charT) !== charS) {
            return false;
        }
    }

    return true;
};
