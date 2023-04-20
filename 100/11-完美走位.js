const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    while ((line = await readline())) {
        //let tokens = line.split('');
        let arr = [];
        let star = 0;
        let end = 4;
        let flag = false
        let min = 3
        let unit = 4; //每四位为一组
        let cost = line.length / 4;
        for (let i = 0; i < cost; i++) {
            arr[i] = line.substring(star, end);
            star = end;
            end += unit;
        }
        for(str of arr){
            let last = [...new Set(str)]
            let len = 4 - last.length
            if(len != 0){
                flag = true
                if(len < min){
                    min = len
                }
            }else {
                flag = false
            }
        }
        if(flag){
            console.log(min)
        }else {
            console.log('0')
        }
        
        
    }
})();
