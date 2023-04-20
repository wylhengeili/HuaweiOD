const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let token1 = await readline()
    let token2 = await readline()
    let newspaperArr = token1.split(' ')
    let anonymouseLetterArr = token2.split(' ')
    let reg = true
    for(let i = 0; i < anonymouseLetterArr.length; i++){
        let strArr = anonymouseLetterArr[i].split('')
        strArr.sort()
        let flag = false
        for(let j = 0; j < newspaperArr.length; j++){
            let strnArr = newspaperArr[j].split('')
            strnArr.sort()
            if(strArr.join('') == strnArr.join('')){
                flag = true
                break
            }
        }
        if(!flag){
                reg = false
                break
            }
    }
    console.log(reg)
}()
