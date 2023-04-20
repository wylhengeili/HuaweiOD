const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    var n = await readline();
    let sum = 0;
    let fFen = [];
    const flagMap = {
        CNY: "fen",
        HKD: "cents",
        JPY: "sen",
        EUR: "eurocents",
        GBP: "pence",
    };
    for (let i = 0; i < n; i++) {
        let token = await readline(); //拿到一行
        let nums = token
            .split(/[A-Z|a-z]+/)
            .filter((a) => a)
            .map(Number); //拿出数字
        let flags = token.split(/[0-9]+/).filter((a) => a); //拿出单位
        if (nums.length > 1) {
            //有元有分
            fFen = [nums[0] * 100 + nums[1], flags[1]];
        } else if (flags[0] > "A" && flags[0] < "Z") {
            //只有元
            fFen = [nums[0] * 100, flagMap[flags[0]]];
        } else {
            //只有分
            fFen = [nums[0], flags[0]];
        }
        let a = getSum(fFen);
        sum += a;
    }

    console.log(sum);

    function getSum(list) {
        let num = list[0];
        let flag = list[1];
        switch (flag) {
            case "fen":
                return num;
            case "cents":
                return parseInt((num * 100) / 123);
            case "sen":
                return parseInt((num * 100) / 1825);
            case "eurocents":
                return parseInt((num * 100) / 14);
            case "pence":
                return parseInt((num * 100) / 12);
        }
    }
})();
