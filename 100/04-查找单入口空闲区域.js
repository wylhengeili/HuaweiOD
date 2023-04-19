/* 
    题目描述:
    给定一个 m x n的矩阵，由若干字符和0构成，X表示该处已被占据，0"表示该处空闲，请找到最大的单入口空闲区域.
    解释:
    空闲区域是由连通的O组成的区域，位于边界的0可以构成入口，单入口空闲区域即有且只有一个位于边界的0作为入口的由连通的'O"组成的区域。
    如果两个元素在水平或垂直方向相邻，则称它们是“连通”的。
    输入描述:
    第一行输入为两个数字，第一个数字为行数m，第二个数字列数n，两个数字以空格分隔，1 <= m,n <= 200,剩余各行为矩阵各行元素，元素为'X' 或O，各元素间以空格分隔。
    输出描述
    若有唯一符合要求的最大单入口空闲区域，输出三个数字，第一个数字为入口行坐标(范围为0-行数-1)，第二个数字为入口列坐标(范围为0~列数-1) ，第三个数字为区域大小，
    三个数字以空格分隔;若有多个符合要求的最大单入口空闲区域，输出一个数字，代表区域的大小;若没有，输出NULL。
    示例1
    输入:
    4 4
    X X X X
    X O O X
    X O O X
    X O X X
    输出:
    3 1 5
    说明:
    存在最大单入口区域，入口行坐标3，列坐标1，区域大小5
    示例2
    输入:
    4 5
    X X X X
    X O O O
    O X X O
    O O X X
    O X X O
    输出:
    3 4 1
    说明:
    存在最大单入口区域，入口行坐标3，列坐标4，区域大小1
    示例3
    输入:
    5 4
    X X X X
    X O O O
    X O O O
    X O O X
    X X X X
    输出:
    NULL
    说明:
    不存在最大单入口区域
    示例4
    输入:
    5 4
    X X X X
    X O O O
    X X X X
    X O O O
    X X X X
    输出:
    3
    说明:
    存在两个大小为3的最大单入口区域，两个入口横纵坐标分别为1,3和3,3 
*/
//记录输入
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let token1 = await readline()
    let m = token1.split(' ')[0]
    let n = token1.split(' ')[1]
    let i = 0
    let arr = []
    while(line = await readline()){
            arr[i] = line.split(' ')
            i++
        
    }
    let maxCount = 0;
    
    console.log(arr)
}()






/* //let input = readline().split(" ").map(Number);
let input = "4 5".split(" ").map(Number);
const m = input[0];
const n = input[1];
let ca = [];
let test = [
            "X O X X X",
            "X O X O X",
            "X O O O X",
            "X X X X X"
        ];
for (let i = 0; i < m; i++) {
    //ca[i] = readline().split(" ").map(Number);
    ca[i] = test[i].split(" ");
}
 
let maxCount = 0;
let map = new Map();
for (let j = 0; j < n; j++) {
    if (ca[0][j] == 'O') {
        let count = calc(copy(ca), 0, j, true);
        if (count > 0) {
            let key = 0 + " " + j;
            map.set(key, count);
            if (count > maxCount) {
                maxCount = count;
            }
        }
    }
    
    if (ca[m - 1][j] == 'O') {
        let count2 = calc(copy(ca), m - 1, j, true);
        if (count2 > 0) {
            let key = (m - 1) + " " + j;
            map.set(key, count2);
            if (count2 > maxCount) {
                maxCount = count2;
            }
        }
    }
}
 
for (let i = 1; i < m - 1; i++) {
    if (ca[i][0] == 'O') {
        let count = calc(copy(ca), i, 0, true);
        if (count > 0) {
            let key = i + " " + 0;
            map.set(key, count);
            if (count > maxCount) {
                maxCount = count;
            }
        }
    }
    
    if (ca[i][n - 1] == 'O') {
        let count2 = calc(copy(ca), i, n - 1, true);
        if (count2 > 0) {
            let key = i + " " + (n - 1);
            map.set(key, count2);
            if (count2 > maxCount) {
                maxCount = count2;
            }
        }
    }
}
 
let maxKey = "";
for (let e of map) {
    if (e[1] == maxCount) {
        if (maxKey == "") {
            maxKey = e[0];
        } else {
            maxKey = "more";
            break;
        }
    }
}
 
if (maxCount == 0) {
    console.log("NULL");
} else if (maxKey == "more") {
    console.log(maxCount);
} else {
    console.log(maxKey + " " + maxCount);
}
 
function copy( a) {
    let m = a.length;
    let n = a[0].length;
    let ca = [];
    for (let i = 0; i < m; i++) {
        ca[i] = a[i];
    }
    return ca;
}
 
function calc( ca, i, j, isRuKou) {
    if(!isRuKou) {
        if (i == 0 || i == ca.length - 1 || j == 0 || j == ca[0].length - 1) {
            return 0;
        }
    }
    
    ca[i][j] = 'X';
    let count = 1;
    
    if (j + 1 < ca[0].length && ca[i][j + 1] == 'O') {
        let count1 = calc(ca, i, j + 1, false);
        if (count1 == 0) {
            return 0;
        }
        count += count1;
    }
    
    if (i + 1 < ca.length && ca[i + 1][j] == 'O') {
        let count1 = calc(ca, i + 1, j, false);
        if (count1 == 0) {
            return 0;
        }
        count += count1;
    }
    
    if (j - 1 >= 0 && ca[i][j - 1] == 'O') {
        let count1 = calc(ca, i, j - 1,  false);
        if (count1 == 0) {
            return 0;
        }
        count += count1;
    }
    
    if (i - 1 >= 0 && ca[i - 1][j] == 'O') {
        let count1 = calc(ca, i - 1, j,  false);
        if (count1 == 0) {
            return 0;
        }
        count += count1;
    }
    
    return count;
} */