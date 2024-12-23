// Slow
// function maxArea(height: number[]): number {
//     let result = 0;

//     for (let i = 0; i < height.length; i++) {
//         for (let j = 0; j < height.length; j++) {
//             if (j > i) continue;

//             const count = (i - j) * Math.min(height[i], height[j]);

//             if (count > result) result = count;
//         }
//     }

//     return result;
// }

// Fast
function maxArea(height: number[]): number {
    let max = 0

    let right = height.length - 1,
        left = 0

    while (right >= left) {
        if (height[right] >= height[left]) {
            const curr = (right - left) * height[left]

            if (max < curr) max = curr

            left++;
        } else {
            const curr = (right - left) * height[right]

            if (max < curr) max = curr

            right--;
        }
    }

    return max
}

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]))