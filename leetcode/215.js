/**
 * 215. Kth Largest Element in an Array (Quick Select)
 * https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    return quickSelect(nums, 0, nums.length - 1, k);
};

function quickSelect(arr, start, end, k) {
    const pivotIndex = partition(arr, start, end);

    if (k < arr.length - pivotIndex) {
        return quickSelect(arr, pivotIndex + 1, end, k);
    } else if (k > arr.length - pivotIndex) {
        return quickSelect(arr, start, pivotIndex - 1, k);
    }

    return arr[pivotIndex];
}

function partition(arr, start, end) {
    const pivot = arr[end];
    let i = start;
    let j = end - 1;

    // pivot 보다 작은 값은 left로 옮기고, pivot보다 큰 값은 right로 옮기기
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }

    swap(arr, i, end);
    return i;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
