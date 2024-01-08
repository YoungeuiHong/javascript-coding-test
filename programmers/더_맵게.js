/**
 * 더 맵게 (힙)
 * https://school.programmers.co.kr/learn/courses/30/lessons/42626
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return minValue;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;

        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.heap[currentIndex] >= this.heap[parentIndex]) {
                break;
            }

            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
            currentIndex = parentIndex;
        }
    }

    heapifyDown() {
        let currentIndex = 0;

        while (true) {
            const leftChildIndex = currentIndex * 2 + 1;
            const rightChildIndex = currentIndex * 2 + 2;
            let nextIndex = currentIndex;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[nextIndex]) {
                nextIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[nextIndex]) {
                nextIndex = rightChildIndex;
            }

            if (currentIndex === nextIndex) {
                break;
            }

            [this.heap[currentIndex], this.heap[nextIndex]] = [this.heap[nextIndex], this.heap[currentIndex]];
            currentIndex = nextIndex;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    peek() {
        return this.heap[0];
    }
}

function solution(scoville, K) {
    let answer = 0;
    const heap = new MinHeap();

    for (const value of scoville) {
        heap.push(value);
    }

    while (heap.peek() < K) {
        if (heap.isEmpty()) {
            return -1;
        }

        const firstMin = heap.pop();
        const secondMin = heap.pop();

        if (secondMin === undefined) {
            return -1;
        }

        const newScoville = firstMin + (secondMin * 2);
        heap.push(newScoville);
        answer++;
    }

    return answer;
}
