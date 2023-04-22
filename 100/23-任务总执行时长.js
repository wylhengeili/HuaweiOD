/* 任务总执行时长
知识点数组循环递归
 时间限制：1s 空间限制：256MB 限定语言：不限
题目描述：
任务编排服务负责对任务进行组合调度。参与编排的任务有两种类型，其中一种执行时长为taskA，另一种执行时长为taskB。任务一旦开始执行不能被打断，且任务可连续执行。服务每次可以编排num个任务。请编写一个方法，生成每次编排后的任务所有可能的总执行时长。
输入描述：
第1行输入分别为第1种任务执行时长taskA，第2种任务执行时长taskB，这次要编排的任务个数num，以逗号分隔。
输出描述：
数组形式返回所有总执行时时长，需要按从小到大排列。
补充说明：
每种任务的数量都大于本次可以编排的任务数量。
0 < taskA
0 < taskB
0 <= num <= 100000
示例1
输入：
1,2,3
输出：
[3, 4, 5, 6]
说明：
可以执行 3 次 taskA，得到结果 3；执行 2 次 taskA和 1 次 taskB，得到结果 4 。以此类推，得到最终结果。 */

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let line = await readline()
    let taskA = line.split(',')[0]
    let taskB = line.split(',')[1]
    let count = line.split(',')[2]
    let ansArr = []
    let a = count
    let b = 0
    while(true){
        let time = taskA * a + taskB * b
        ansArr.push(time)
        a--
        b++
        if (a == -1){
            break
        }
    }
    console.log(ansArr.sort())
})();
