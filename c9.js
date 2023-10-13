function spiral(param1) {
    let arr = [];
    let arr3 = [];
    let left = 0;
    let right = param1 - 1;
    let bottom = 0;
    let up = param1 - 1;
    let penampung = 0;

    for (let g = 0; g < param1; g++) {
        arr.push([]);
    }

    for (let i = 0; i < param1; i++) {
        for (let j = 0; j < param1; j++) {
            arr[i][j] = penampung;
            penampung++;
        }
    }

    while (left <= right && bottom <= up) {
        for (let i = left; i <= right; i++) {
            arr3.push(arr[bottom][i]);
        }
        bottom++;

        for (let j = bottom; j <= up; j++) {
            arr3.push(arr[j][right]);
        }
        right--;

        if (bottom <= up) {
            for (let k = right; k >= left; k--) {
                arr3.push(arr[up][k]);
            }
            up--;
        }

        if (left <= right) {
            for (let l = up; l >= bottom; l--) {
                arr3.push(arr[l][left]);
            }
            left++;
        }
    }
    console.log(arr3);
}

spiral(5);
spiral(6);
spiral(7);