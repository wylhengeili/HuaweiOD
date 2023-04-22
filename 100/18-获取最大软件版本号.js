/* 获取最大软件版本号
知识点排序字符串
 时间限制：1s 空间限制：256MB 限定语言：不限
题目描述：
Maven版本号定义，<主版本>.<次版本>.<增量版本>-<里程碑版本>
举例3.1.4-beta 其中，主版本和次版本都是必须的，主版本，次版本，增量版本由多位数字组成，可能包含前导零，里程碑版本由字符串组成。
<主版本>.<次版本>.<增量版本>：基于数字比较
里程碑版本：基于字符串比较,采用字典序
比较版本号时，按从左到右的顺序依次比较。基于数字比较， 只需比较忽略任何前导零后的整数值 。
输入2个版本号，输出最大版本号
输入描述：
输入2个版本号，换行分割，每个版本的最大长度小于50
输出描述：
版本号相同时输出第一个输入版本号
补充说明：
主版本，次版本，增量版本：基于字符串比较,比如
1.5>1.4>1.3.11>1.3.9
里程碑版本：基于字符串比较 比如
1.2-beta-3>1.2-beta-11
示例1
输入：
2.5.1-C
1.4.2-D
输出：
2.5.1-C
说明：
主版本，数字2大于1
示例2
输入：
1.3.11-S2
1.3.11-S13
输出：
1.3.11-S2
说明：
里程碑版本，S2大于S13
示例3
输入：
1.05.1
1.5.01
输出：
1.05.1
说明：
版本号相同，输出第一个版本号
示例4
输入：
1.5
1.5.0
输出：
1.5.0
说明：
主次相同，存在增量版本大于不存在
示例5
输入：
1.5.1-A
1.5.1-a
输出：
1.5.1-a
说明：
里程碑版本号，字符串比较a大于A */

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let banArr = [];
    while ((line = await readline())) {
        banArr.push(line.split("."));
    }
    if (banArr.length === 2) {
        bijiao(banArr);
    }
    function bijiao(arr) {
        const first = arr[0];
        const second = arr[1];
        //看看谁有扩展版号，都有再向下执行
        if (first.length > second.length) {
            console.log(first.join("."));
            return;
        } else if (first.length < second.length) {
            console.log(second.join("."));
            return;
        }
        for (let i = 0; i < 2; i++) {
            //用前两个版号就能比出大小
            if (Number(first[i]) > Number(second[i])) {
                console.log(first.join("."));
                return;
            } else if (Number(first[i]) < Number(second[i])) {
                console.log(second.join("."));
                return;
            }
        }
        //如果有后两个版号则单独取出处理，如果没有就添0
        const firstSet = first[2] ? first[2].split("-") : "0";
        const secondSet = second[2] ? second[2].split("-") : "0";
        const len = Math.max(firstSet.length, secondSet.length);
        const backArr = [firstSet, secondSet];
        for (let i = 0; i < len; i++) {
            //过滤后两个版号，不存在的版号填0
            firstSet[i] = firstSet[i] ? firstSet[i] : "0";
            secondSet[i] = secondSet[i] ? secondSet[i] : "0";
            if (firstSet[i] > secondSet[i]) {
                console.log(first.join("."));
                return;
            } else if (firstSet[i] < secondSet[i]) {
                console.log(second.join("."));
                return;
            }
            
        }
        console.log(first.join("."));
    }
})();

