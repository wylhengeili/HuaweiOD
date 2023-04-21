/*获得完美走位
 时间限制：1s 空间限制：256MB 限定语言：不限
题目描述：
在第一人称射击游戏中，玩家通过键盘的A、S、D、W四个按键控制游戏人物分别向左、向后、向右、向前进行移动，从而完成走位。假设玩家每按动一次键盘，游戏人物会向某个方向移动一步，如果玩家在操作一定次数的键盘并且各个方向的步数相同时，此时游戏人物必定会回到原点，则称此次走位为完美走位。
现给定玩家的走位（例如：ASDA）,请通过更换其中一段连续走位的方式使得原走位能够变成一个完美走位。其中待更换的连续走位可以是相同长度的任何走位。
请返回待更换的连续走位的最小可能长度。
若果原走位本身是一个完美走位，则返回0。
输入描述：
 输入为由键盘字母表示的走位s，例如：ASDA
输出描述：
输出为待更换的连续走位的最小可能长度
补充说明：
1、走位长度1 <= s.length <= 10^5
2、s.length 是 4 的倍数
3、s 中只含有 'A', 'S', 'D', 'W' 四种字符
示例1
输入：
ASDW
输出：
0
说明：
已经是完美走位了
示例2
输入：
AASW
输出：
1
说明：
需要把一个A更换成D，这样可以得到“ADSW”或者“DASW”
示例3
输入：
AAAA
输出：
3
说明：
可以替换后 3 个 'A'，得到ASDW。*/
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
