/* 字符串解密
知识点数组字符串排序
 时间限制：1s 空间限制：256MB 限定语言：不限
题目描述：
    给定两个字符串string1和string2。
    string1是一个被加扰的字符串。string1由小写英文字母（'a'~'z'）和数字字符（'0'~'9'）组成，而加扰字符串由'0'~'9'、'a'~'f'组成。string1里面可能包含0个或多个加扰子串，剩下可能有0个或多个有效子串，这些有效子串被加扰子串隔开。
    string2是一个参考字符串，仅由小写英文字母（'a'~'z'）组成。
    你需要在string1字符串里找到一个有效子串，这个有效子串要同时满足下面两个条件：
    （1）这个有效子串里不同字母的数量不超过且最接近于string2里不同字母的数量，即小于或等于string2里不同字母的数量的同时且最大。
    （2）这个有效子串是满足条件（1）里的所有子串（如果有多个的话）里字典序最大的一个。
    如果没有找到合适条件的子串的话，请输出"Not Found"
    示例：
输入字符串string1为"thisisanewday111forme"，输入字符串string2为"good"。string1里有效子串和加扰子串分割后可表示为："thisis"+"a"+"n"+"e"+"w"+"da"+"y"+"111f"+"orm"+"e"，去除加扰子串（"a"、"e"、"da"、"111f"、"e"）后的有效子串候选为("thisis", "n", "w", "y", "orm")。输入字符串string2里不同字母的数量为3（'g'、'o'、'd'），从有效子串候选里可以找出"orm"满足要求，其不同字母的数量为3，最接近于string2不同字母的数量。
输入描述：
input_string1
input_string2
说明：输入为两个字符串，第1行是题目里的string1（被加扰的字符串），第2行是题目里的string2（参考字符串）
输出描述：
output_string
说明：输出为一个字符串（有效字符串）
补充说明：
输入字符串string1的长度在1~100000之间，string2的长度在1~500之间
示例1
输入：
123admyffc79pt
ssyy
输出：
pt
说明：
    将输入字符串1里的加扰子串"123ad"、"ffc79"去除后得到有效子串序列："my"、"pt"，其中"my"里不同字母的数量为2（有'm'和'y'两个不同字母），"pt"里不同字母的数量为2（有'p'和't'两个不同字母）；输入字符串2里不同字母的数量为2（有's'和'y'两个不同字母）。
    可得到最终输出结果为"pt"，其不同字母的数量最接近于"ssyy"里不同字母的数量的同时字典序最大。
示例2
输入：
123admyffc79ptaagghi2222smeersst88mnrt
ssyyfgh
输出：
mnrt
说明：
    将输入字符串1里的加扰子串"123ad"、"ffc79"、"aa"、"2222"、"ee"、"88"去除后得到有效子串序列："my"、"pt"、"gghi"、"sm"、"rsst"、"mnrt"；输入字符串2里不同字母的数量为5（有's'、'y'、'f'、'g'、'h' 5个不同字母）。
    可得到最终输出结果为"mnrt"，其不同字母的数量（为4）最接近于"ssyyfgh"里不同字母的数量，其他有效子串不同字母的数量都小于"mnrt"。
    示例3
输入：
abcmnq
rt
输出：
Not Found
说明：
   将输入字符串1里的加扰子串"abc"去除后得到有效子串序列："mnq"；输入字符串2里不同字母的数量为2（有'r'、't'两个不同的字母）。
    可得到最终的输出结果为"Not Found"，没有符合要求的有效子串，因有效子串的里不同字母的数量（为3），大于输入字符串2里的不同字母的数量 */

    const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let token1 = await readline();
    let token2 = await readline();
    let reg = new RegExp(/[^g-z]/, "g");
    let obj = {};
    let str2Len = new Set(token2).size;
    let ansArr = [];
    token1
        .replace(reg, " ")
        .split(" ")
        .forEach((item) => {
            if (item !== "") {
                obj[item] = new Set(item).size;
            }
        });
    let strArr = Object.keys(obj).sort(function (a, b) {
        return obj[b] - obj[a];
    });
    for (let i = 0; i < strArr.length; i++) {
        if (obj[strArr[i]] <= str2Len) {
            ansArr.push(strArr[i]);
            if (obj[strArr[i + 1]] < obj[strArr[i]]) {
                break;
            }
        }
    }
    if (ansArr.length == 0) {
        console.log("Not Found");
        return;
    } else {
        ansArr = ansArr.sort().reverse();
        console.log(ansArr[0]);
    }
})();
