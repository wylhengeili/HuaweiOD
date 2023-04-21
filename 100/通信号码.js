/* 通信误码
 时间限制：1s 空间限制：32MB 限定语言：不限
题目描述：
信号传播过程中会出现一些误码，不同的数字表示不同的误码ID，取值范围为1~65535，用一个数组记录误码出现的情况。
每个误码出现的次数代表误码频度，请找出记录中包含频度最高误码的最小子数组长度。
输入描述：
误码总数目：取值范围为0~255，取值为0表示没有误码的情况。
误码出现频率数组：误码ID范围为1~65535，数组长度为1~1000。
输出描述：
包含频率最高的误码最小子数组长度
示例1
输入：
5
1 2 2 4 1
输出：
2
说明：
频度最高的有1和2，频度是2（出现的次数都是2）。
可以包含频度最高的记录数组是[2 2]和[1 2 2 4 1]，最短是[2 2]，最小长度为2
示例2
输入：
7
1 2 2 4 2 1 1
输出：
4
说明：
频度最高的是1和2。最短的是：[2 2 4 2] */

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let n = await readline() //取得通信码长度
    while(line = await readline()){
    let numArr = line.split(' ')
    let obj = {}
    let maxArr = []
    let maxTh = 0
    for(const num of numArr){
        //记录每个数出现的频率
        if(obj[num]) {
            obj[num]++
        }else {
            obj[num] = 1
        }
    }
    for(let i in obj){
        if(obj[i] > maxTh) {
            maxTh = obj[i]
        }
        if (obj[i] === maxTh){
            maxArr.push(i)
        }
    }
    let ans = n
    for(let teger of maxArr){
        let left = 0
        let right = n - 1
        while(numArr[left] != teger) {
            left++
        }
        while(numArr[right] != teger){
            right--
        }
        if(left <= right){
            ans = Math.min(ans , right - left +1)
        }
    }
    console.log(ans)
    }
})();
