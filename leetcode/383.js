/**
 * 383. Ransom Note
 * https://leetcode.com/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const ransomMap = new Map();
    const magazineMap = new Map();

    for (const c of ransomNote) {
        if (ransomMap.has(c)) {
            ransomMap.set(c, ransomMap.get(c) + 1);
        } else {
            ransomMap.set(c, 1);
        }
    }

    for (const c of magazine) {
        if (magazineMap.has(c)) {
            magazineMap.set(c, magazineMap.get(c) + 1);
        } else {
            magazineMap.set(c, 1);
        }
    }

    for (const key of ransomMap.keys()) {
        if (!magazineMap.has(key) || ransomMap.get(key) > magazineMap.get(key)) {
            return false
        }
    }

    return true;
};
