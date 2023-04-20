
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


