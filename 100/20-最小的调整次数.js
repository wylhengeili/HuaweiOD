/* 最小的调整次数
知识点队列栈
 时间限制：1s 空间限制：256MB 限定语言：不限
题目描述：
有一个特异性的双端队列，该队列可以从头部或尾部添加数据，但是只能从头部移出数据。
小A依次执行2n个指令往队列中添加数据和移出数据。其中n个指令是添加数据（可能从头部添加、也可能从尾部添加），依次添加1到n；n个指令是移出数据。现在要求移除数据的顺序为1到n。为了满足最后输出的要求，小A可以在任何时候调整队列中数据的顺序。
请问 小A 最少需要调整几次才能够满足移除数据的顺序正好是1到n；
输入描述：
第一行一个整数 n，表示数据范围。
接下来有 2n 行，其中有 n 行为添加数据：指令“ head add x”表示从头部添加数据x，“ tail add x”表示从尾部添加数据x；另外 n 行为移出数据指令，指令为 “remove” 的形式，表示移出1个数据；1 ≤ n ≤ 3 * 10^5。
所有的数据均合法。
输出描述：
一个整数，表示 小A 要调整的最小次数。
补充说明：
输入会保证按照1到n的顺序加入队列。确保输出时对应的数据已经在队列中。
示例1
输入：
3
head add 1
remove
tail add 2
head add 3
remove
remove
输出：
1 */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let n = await readline()
    let th = 0
    let len = 0
    while (line = await readline()) {
        let arr = line.split(' ')
        if(arr[0] == 'head') {
            if(len == 0){
                len++
            } else {
                th++
                len++
            }
            
        } else if (arr[0] == 'tail') {
            len++
        } else if (arr[0] == 'remove') {
            len--
        }
    }
    console.log(th)
})();
