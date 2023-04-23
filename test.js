// 本题为考试多行输入输出规范示例，无需提交，不计分。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let token1 = await readline()
    let token2 = await readline()
    let anonymousLetter = token2.split(' ')
    let newspaper = token1.split(' ')
    let newspaperArr = []
    let anonymousLetterArr = []
    for (item of newspaper) {
        let set = new Set(item.split(''))
        newspaperArr.push([...set].sort().join(''))
    }
    for (item of anonymousLetter) {
        let set = new Set(item.split(''))
        anonymousLetterArr.push([...set].sort().join(''))
    }
    let trueArr = [] //存放可以找到的单词
    for (let item of anonymousLetterArr) {
        for (let nItem of newspaperArr) {
            if (item == nItem) {
                trueArr.push(item)
                continue
            }
        }
    }
    if(trueArr.length == anonymousLetterArr.length){
        console.log(true)
    } else {
        console.log(false)
    }
}()