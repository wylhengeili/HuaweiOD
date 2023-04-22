/* 寻找链表的中间结点
知识点链表数组
 时间限制：1s 空间限制：256MB 限定语言：不限
题目描述：
给定一个单链表 L，请编写程序输出 L 中间结点保存的数据。如果有两个中间结点，则输出第二个中间结点保存的数据。
例如：给定 L 为 1→7→5，则输出应该为 7；给定 L 为 1→2→3→4，则输出应该为 3。
输入描述：
每个输入包含 1 个测试用例。每个测试用例第 1 行给出链表首结点的地址、结点总个数正整数 N (≤105)。结点的地址是 5 位非负整数，NULL 地址用 −1 表示。
接下来有 N 行，每行格式为：
Address Data Next
其中 Address 是结点地址，Data 是该结点保存的整数数据(0 ≤ Data ≤ 108)，Next 是下一结点的地址。
输出描述：
对每个测试用例，在一行中输出 L 中间结点保存的数据。如果有两个中间结点，则输出第二个中间结点保存的数据。
补充说明：
已确保输入的结点所构成的链表 L 不会成环，但会存在部分输入结点不属于链表 L 情况 。
示例1
输入：
00100 4
00000 4 -1
00100 1 12309
33218 3 00000
12309 2 33218
输出：
3
示例2
输入：
10000 3
76892 7 12309
12309 5 -1
10000 1 76892
输出：
7 */

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let token1 = await readline();
    let count = token1.split(' ')[1];
    let first = token1.split(' ')[0];
    const nodes = [];
    while ((line = await readline())) {
        nodes.push(line.split(" "));
    }

    const nodeMap = {};
    //建立链表
    nodes.forEach((node) => {
        const [addr, value, next] = node;
        nodeMap[addr] = {
            value,
            next,
        };
    });
    //console.log(nodeMap);
    let lianLen = 1; //记录链表长度
    let current = nodeMap[first]; //取出第一项
    while (current.next !== "-1") {
        //第一项的指向地址不为-1，遍历整个链表
        current = nodeMap[current.next];
        lianLen++;
    }
    let center = Math.floor(lianLen / 2); //计算中心节点位置
    let currentNode = nodeMap[first];
    while (center--) {
        currentNode = nodeMap[currentNode.next];
    }
    console.log(currentNode.value);
})();

