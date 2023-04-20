const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let arr = [];
    let i = 0;
    const set = new Set();
    let m = parseInt(await readline());
    if (m > 10 || m < 0) {
        console.log("[[]]");
    } else {
        while ((line = await readline())) {
            arr[i] = line.split(",");
            if (arr[i].length == 1) {
                set.add(arr[i]);
            } else {
                for (num of arr[i]) {
                    var count = new Set(arr[i].sort());
                }
                set.add([...count]);
            }
            i++;
        }
        var list = [...set];
        let ans = hebing(list, list.length - 1)
        console.log(ans)
    }
    function hebing(list, index) {
        //遍历 list 中的每一项往后找并集会使长度减少2以上的项进行合并并在 list 中删除对应项
        for (let i = 0; i < list.length; i++) {
            if (i == index) {
                continue;
            }
            let setBefore = new Set(list[i]); //当前组合的所有端口
            for (let j = i; j < list.length; j++) {
                let setAfter = new Set(list[j]); //当前组之后的每个端口
                let jiaoji = new Set(
                    [...setBefore].filter((x) => setAfter.has(x))
                );
                if (jiaoji.size >= 2) {
                    //如果可以合并
                    list[i] = [...jiaoji];  //将交集覆盖在当前项
                    list.splice(j, 1)        //将原集中的被合并项删去
                    index = j;
                    hebing(list, index)
                } else {
                    return list
                }
            }
        }
    }
})();