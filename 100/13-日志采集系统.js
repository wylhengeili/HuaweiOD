/*日志采集系统
 时间限制：1s 空间限制：256MB 限定语言：不限
题目描述：
日志采集是运维系统的的核心组件。日志是按行生成，每行记做一条，由采集系统分批上报。
如果上报太频繁，会对服务端造成压力；如果上报太晚，会降低用户的体验；如果一次上报的条数太多，会导致超时失败。
为此，项目组设计了如下的上报策略：
1、每成功上报一条日志，奖励1分
2、每条日志每延迟上报1秒，扣1分
3、积累日志达到100条，必须立即上报
给出日志序列，根据该规则，计算首次上报能获得的最多积分数
输入描述：
按时序产生的日志条数 T1,T2...Tn, 其中 1<=n<=1000, 0<=Ti<=100
输出描述：
首次上报最多能获得的积分数
示例1
输入：
1 98 1
输出：
98
说明：
采集系统第2个时刻上报，可获得最大积分(98+1)-1=98
示例2
输入：
50 60 1
输出：
50
说明：
如果第1个时刻上报，获得积分50。如果第2个时刻上报，最多上报100条，前50条延迟上报1s，每条扣除1分，共获得积分为 100-50=50*/
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
