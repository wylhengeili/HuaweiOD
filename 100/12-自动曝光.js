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
