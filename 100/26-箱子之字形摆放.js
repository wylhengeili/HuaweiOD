/* 箱子之形摆放
知识点数组
 时间限制：1s 空间限制：128MB 限定语言：不限
题目描述：
有一批箱子（形式为字符串，设为str），要求将这批箱子按从上到下以之形的顺序摆放在宽度为n的空地，请输出箱子的摆放结果。
例如：箱子为ABCDEFG，空地宽度为3，摆放结果如图：
则输出结果为：
AFG
BE
CD
输入描述：
输入一行字符串，通过空格分割，前面部分为字母或数字组成的字符串str，表示箱子；后面部分为一个数字n，表示空地的宽度。例如：
ABCDEFG 3
输出描述：
箱子摆放结果，如题目示例所示
AFG
BE
CD
补充说明：
1. 请不要在最后一行输出额外的空行
2. str只包含字母和数字，1 <= len(str) <= 1000
3. 1 <= n <= 1000
示例1
输入：
ABCDEFG 3
输出：
AFG
BE
CD */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    while ((line = await readline())) {
        let tokens = line.split(" ");
        let box = tokens[0];
        let n = parseInt(tokens[1]);

        let map = new Map();
        for (let i = 0; i < box.length; i++) {
            let index;
            if (parseInt(i / n) % 2 == 0) {
                index = i % n;
            } else {
                index = n - 1 - (i % n);
            }
            let c = box[i];
            if (map.has(index)) {
                map.set(index, map.get(index) + c);
            } else {
                map.set(index, c);
            }
        }
        for (item of map.values()) {
            console.log(item);
        }
    }
})();
