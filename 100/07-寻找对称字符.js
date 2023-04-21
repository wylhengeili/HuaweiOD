/*题目描述：
对称就是最大的美学，现有一道关于对称字符串的美学。已知：
第 1 个字符串：R 
第 2 个字符串：BR 
第 3 个字符串：RBBR 
第 4 个字符串：BRRBRBBR 
第 5 个字符串：RBBRBRRBBRRBRBBR
相信你已经发现规律了，没错！就是第 i 个字符串 = 第 i - 1 号字符串的取反 + 第 i - 1 号字符串;取反(R->B, B->R); 
现在告诉你 n 和 k，让你求得第 n 个字符串的第 k 个字符是多少。(k的编号从 0 开始)
输入描述：
第一行输入一个T，表示有T组用例；
接下里输入T行，每行输入两个数字，表示n, k
1 <= T <= 100;
1 <= n <= 64;
0 <= k < 2^(n-1);
输出描述：
输出T行表示答案；
输出 "blue" 表示字符是B；
输出 "red" 表示字符是R;
补充说明：
输出字符串区分大小写，请注意输出小写字符串，不带双引号
 收起
示例1
输入：
5
1 0
2 1
3 2
4 6
5 8
输出：
red
red
blue
blue
blue
说明：
第1个字符串：R-> 第0个*/


const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
 const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let num = parseInt(await readline())
    while(line = await readline()){
        let n = Number(line.split(' ')[0])
        let k = Number(line.split(' ')[1])
        let charNum = Math.pow(2, n - 1) //该行总字符数
        var targe = findChar(charNum, k)
        if(targe % 2 == 0){
            console.log('red')
        }else {
            console.log('blue')
        }
    }

function findChar(n ,k ,targe = 0){ //如果寻找的字符在此字符串的后半段则由之前的前半段抄写而来且位置为 k - half;如果在前半段则由上个字符串反转得来且位置不变。
    if(n == 1){
        return targe;       //反转次数偶数为R；奇数为B
    }
    let half = n / 2
    if(k < half){
        targe++
        return findChar(half, k, targe)
    }else{
        return findChar(half, k - half, targe)
    }
}
}() 


