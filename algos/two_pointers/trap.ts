/* 
! Тяжёлая программа
* Находим самое высокое число
* Создаём пустой 2D мир
* Наполяем 2D мир ревелантными значениями
* Исходя из каждого значения 2D массива считаем количество воды
 */

/* function trap(height: number[]): number {
    let water = 0;
    const bigger = [...height].sort((a, b) => b - a)[0];
    const world2D = [...Array(bigger)].map((el) => (el = [...Array(height.length)].map((el) => (el = 0))));

    for (let i = 0; i < height.length; i++) {
        for (let j = world2D.length; j > world2D.length - height[i]; j--) {
            world2D[j - 1][i] = 1;
        }
    }

    for (let i = 0; i < world2D.length; i++) {
        let x: number | null = null;

        for (let j = 0; j < world2D[i].length; j++) {
            if (world2D[i][j] === 1) {
                if (x === null) {
                    x = j;
                } else {
                    water += j - x - 1;
                    x = j;
                }
            }
        }

        x = null;
    }

    return water;
} */

function trap(height: number[]): number {
    let water = 0;
    let left = 0,
        right = height.length - 1,
        left_max = 0,
        right_max = 0;

    while (right >= left) {
        if (height[left] < height[right]) {
            if (left_max < height[left]) {
                left_max = height[left];
            } else {
                water += left_max - height[left];
            }

            left++;
        } else {
            if (right_max < height[right]) {
                right_max = height[right];
            } else {
                water += right_max - height[right];
            }

            right--;
        }
    }

    return water;
}
