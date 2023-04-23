const { read } = require("fs");

// 本题为考试多行输入输出规范示例，无需提交，不计分。
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let m = Number(await readline())
    let token1 = await readline()
    let token2 = await readline()
    let flag = token1.split(' ')
    let counts = token2.split(' ')
    let sum = 0
    //计算每个项目 缓存和不缓存 用的金币数
    let obj = {} //不缓存
    for(let i = 0; i < flag.length; i++) {
        if(obj[flag[i]]) {
            obj[flag[i]] = parseInt(obj[flag[i]]) + parseInt(counts[i])
            continue
        } 
        else obj[flag[i]] = counts[i]
    }
    let objCun = {}
    for(let i = 0; i < flag.length; i++) {
        if(objCun[flag[i]]) {
            continue
        } 
        else objCun[flag[i]] = parseInt(counts[i]) + m
    }
    for(item in obj){
        if(obj[item] >= objCun[item]){
            sum += parseInt(objCun[item])
        }else {
            sum += parseInt(obj[item])
        }
    }
    console.log(sum)
}()