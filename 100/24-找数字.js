/* 找数字
知识点哈希表
 时间限制：1s 空间限制：256MB 限定语言：不限
题目描述：
给一个二维数组nums，对于每一个元素num[i]，找出距离最近的且值相等的元素，输出横纵坐标差值的绝对值之和，如果没有等值元素，则输出-1。
例如：
输入数组nums为 
0 3 5 4 2
2 5 7 8 3
2 5 4 2 4
对于 num[0][0] = 0，不存在相等的值。
对于 num[0][1] = 3，存在一个相等的值，最近的坐标为num[1][4]，最小距离为4。
对于 num[0][2] = 5，存在两个相等的值，最近的坐标为num[1][1]，故最小距离为2。
...
对于 num[1][1] = 5，存在两个相等的值，最近的坐标为num[2][1]，故最小距离为1。
...
故输出为
-1 4  2  3 3
 1 1 -1 -1 4
 1 1  2  3 2
 输入描述：
输入第一行为二维数组的行
输入第二行为二维数组的列
输入的数字以空格隔开。
输出描述：
数组形式返回所有坐标值。
补充说明：
1. 针对数组num[i][j]，满足0<i<=100；0<j<=100。
2. 对于每个数字，最多存在100个与其相等的数字。
示例1
输入：
3
5
0 3 5 4 2
2 5 7 8 3
2 5 4 2 4
输出：
[[-1, 4, 2, 3, 3], [1, 1, -1, -1, 4], [1, 1, 2, 3, 2]] */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let m = Number(await readline())
    let n = Number(await readline())
    let map = []
    while(line = await readline()){
        map.push(line.split(' '))
    }
    let ans = Array(m).fill(0).map(() => Array(n).fill(0))
    for(let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            ans[i][j] = find(map, i, j)
        }
    }
    console.log(ans)
    function find(map, i, j) {
        let target = map[i][j]
        let ans = Number.MAX_VALUE
        for(let k = 0; k < map.length; k++) {
            for (let l = 0; l < map[0].length ; l++) {
                if(k == i && l == j){
                    continue
                }
                if(map[k][l] == target) {
                    ans = Math.min(ans, Math.abs(i-k) + Math.abs(j - l))
                }
            }
        }
        return ans == Number.MAX_VALUE ? -1 : ans
    }
})();
