const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    while ((line = await readline())) {
        let numArr = line.split(" ").map(Number);
        let totalgoal = 0
        let totalexit = 0
        let ans = 0
        let beforsum = 0
        let sum = 0
        for(let i = 0; i < numArr.length; i++){
            beforsum = sum
            sum += numArr[i]
            totalgoal = sum
            if(sum >= 100){
                totalgoal = 100
                totalexit += beforsum
                ans = Math.max(ans, totalgoal - totalexit)
                break
            }
            totalexit += beforsum //取得提交之前每次日志提交后的得分
            ans = Math.max(ans, totalgoal -totalexit)
        }
        console.log(ans)
    }
})();
