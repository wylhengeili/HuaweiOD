/*简单的自动曝光
 时间限制：1s 空间限制：256MB 限定语言：不限
题目描述：
一个图像有n个像素点，存储在一个长度为n的数组img里，每个像素点的取值范围[0,255]的正整数。
请你给图像每个像素点值加上一个整数k（可以是负数），得到新图newImg，使得新图newImg的所有像素平均值最接近中位值128。
请输出这个整数k。
输入描述：
n个整数，中间用空格分开
例如：
0 0 0 0 
4个数值，中间用空格分开
输出描述：
一个整数k
补充说明：
• 1 <= n <= 100
• 如有多个整数k都满足，输出小的那个k；
• 新图的像素值会自动截取到[0,255]范围。当新像素值<0，其值会更改为0；当新像素值>255，其值会更改为255；
   例如newImg="-1 -2 256",会自动更改为"0 0 255"
示例1
输入：
0 0 0 0
输出：
128
说明：
四个像素值都为0
示例2
输入：
129 130 129 130
输出：
-2
说明：
-1的均值128.5，-2的均值为127.5，输出较小的数-2*/
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
//改变原数组中的数计算的得到的新数组平均值和128的差距知道为零
//改变原数组时小于0和大于255的数字会发生改变，没想到除了暴力枚举其他的方法
void (async function () {
    // Write your code here
    while ((line = await readline())) {
        let numArr = line.split(" ").map(Number);
        let ans = 0;
        let t = Number.MAX_VALUE;
        for(let i = -127; i < 255; i++) {
            let sum = 0
            for(let j = 0; j < numArr.length; j++) {
                let t = i + numArr[j] 
                if (t < 0){
                    t = 0
                }else if (t > 255){
                    t = 255
                }
                sum += t
            }
        if (t > Math.abs(128 * numArr.length - sum)){
            ans = i;
            t = Math.abs(128 * numArr.length - sum)
        }
        }
        console.log(ans)
    }
})();
