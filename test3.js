// 本题为考试多行输入输出规范示例，无需提交，不计分。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    //先给所有士兵排序，模拟岸两边士兵情况，分别计算时间和T比较
    let m = Number(await readline())
    let t = Number(await readline())
    let token = await readline()
    let armi = token.split(' ').map(Number).sort()
    let right = true
    let left = true
    let time = 0
    let backTime = 0
    let count = 0
    let armiG = []
    while (armi.length != 0) {
        armi.sort()
        let a, b
        if (left || !right) { //先从时间短的开始拉人
            a = armi[0]
            b = armi[1]
            armi.splice(0, 2)
        } else {
            a = armi[armi.length - 2]
            b = armi[armi.length - 1]
            armi.splice(armi.length - 2, 2)
        }
        count += 2
        let timeWell
        if (a > b) { //计算单独划船和换的慢的比较取最快
            timeWell = a < b * 10 ? a : b * 10
        } else {
            timeWell = b < a * 10 ? b : a * 10
        }
        if (time + timeWell >= t) { //来不及过去了
            if (left) { //快的那边来的
                if (time + timeWell == t) {
                    time += timeWell
                } else {
                    count--
                    time -= backTime
                }
                break
            } else {
                count -= 2
                right = false
                left = true
                armi.push(a)
                armi.push(b)
            }
        } else { //成功过去了
            time += timeWell
            if (armi.length == 0) { //如果过完了
                break
            }
            armiG.push(a)
            armiG.push(b)
            armiG.sort()
            backTime = armiG[0]
            time += backTime
            if (time >= t) { //来不及再拉人了，回不来了
                time -= armiG[0]
                if (left) { //如果是左边过来的，右边肯定比这个慢
                    break
                } else { //如果是右边过来的，就换左边试试
                    time -= timeWell
                    right = false
                    left = true
                    count -= 2
                    armiG.splice(armiG.size() - 2, 2)
                    armi.push(a)
                    armi.push(b)
                }
            } else { //如果回来了
                armi.push(armiG[0])
                armiG.splice(0, 1)
                left = right ? !left : true
                count--
            }
        }
    }
    console.log(count + ' ' + time)
}()