/* 开心消消乐
知识点编程基础深搜广搜
 时间限制：1s 空间限制：256MB 限定语言：不限
题目描述：
给定一个N行M列的二维矩阵，矩阵中每个位置的数字取值为0或1。矩阵示例如：
1 1 0 0
0 0 0 1
0 0 1 1
1 1 1 1
现需要将矩阵中所有的1进行反转为0，规则如下：
1）当点击一个1时，该1变被反转为0，同时相邻的上、下、左、右，以及左上、左下、右上、右下8个方向的1（如果存在1）均会自动反转为0；
2）进一步地，一个位置上的1被反转为0时，与其相邻的8个方向的1（如果存在1）均会自动反转为0；
按照上述规则示例中的矩阵只最少需要点击2次后，所有值均为0。请问，给定一个矩阵，最少需要点击几次后，所有数字均为0？
输入描述：
第一行为两个整数，分别表示矩阵的行数N和列数M，取值范围均为[1, 100]
接下来N行表示矩阵的初始值，每行均为M个数，取值范围[0,1]
输出描述：
输出一个整数，表示最少需要点击的次数
示例1
输入：
3 3
1 0 1
0 1 0
1 0 1
输出：
1
说明：
上述样例中，四个角上的1均在中间的1的相邻8个方向上，因此只需要点击一次即可
示例2
输入：
4 4
1 1 0 0
0 0 0 1
0 0 1 1
1 1 1 1
输出：
2
说明：
在上述4 * 4的矩阵中，只需要点击2次，即可将所有的1进行消除 */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let n = 0   //记录行数
    let m = 0   //记录列数
    let numArr = [] //记录矩阵
    let ans = 0 //记录点击次数
    while(line = await readline()) {
        let token = line.split(' ').map((a) => parseInt(a))
        if (n == 0){
            //输入第一行记录n和m
            n = token[0]
            m = token[1]
        } else {
            //其他行记录为数组
            numArr.push(token)
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (numArr[i][j] == 1) {
                ans += 1
            }
        }
    }
    console.log(ans)
    function change(i, j) {
        //边界判定
        if(i < 0 || j < 0 || i > n - 1 || j > m - 1 || numArr[i][j] !== 1) {
            return
        }
        if (numArr[i][j] == 1) {
            numArr[i][j] = 0
        }
        change(i-1, j-1)
        change(i-1, j)
        change(i-1, j+1)
        change(i, j-1)
        change(i, j+1)
        change(i+1, j-1)
        change(i+1, j)
        change(i+1, j+1)
    }
})();
