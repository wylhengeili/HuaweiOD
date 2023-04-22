/* 异常的打卡记录
知识点数组字符串哈希表循环
 时间限制：1s 空间限制：256MB 限定语言：不限
题目描述：
考勤记录是分析和考核职工工作时间利用情况的原始依据，也是计算职工工资的原始依据，为了正确地计算职工工资和监督工资基金使用情况，公司决定对员工的手机打卡记录进行异常排查。
如果出现以下两种情况，则认为打卡异常：
1、实际设备号与注册设备号不一样
2、或者，同一个员工的两个打卡记录的时间小于60分钟并且打卡距离超过5km。
给定打卡记录的字符串数组clockRecords（每个打卡记录组成为：工号;时间（分钟）;打卡距离（km）;实际设备号;注册设备号），返回其中异常的打卡记录（按输入顺序输出）。
输入描述：
第一行输入为N，表示打卡记录数；
之后的N行为打卡记录，每一行为一条打卡记录。
例如：
2
100000,10,1,ABCD,ABCD
100000,50,10,ABCD,ABCD
输出描述：
输出为异常的打卡记录，例如：100000,10,1,ABCD,ABCD;100000,50,10,ABCD,ABCD
补充说明：
1、clockRecords长度<=1000；
2、clockRecords[i]格式：{id},{time},{distance},{actualDeviceNumber},{registeredDeviceNumber}
3、id由6位数字组成；
4、time由整数组成，范围为0~1000；
5、distance由整数组成，范围为0~100；
6、actualDeviceNumber与registeredDeviceNumber由四位大写字母组成。
示例1
输入：
2
100000,10,1,ABCD,ABCD
100000,50,10,ABCD,ABCD
输出：
100000,10,1,ABCD,ABCD;100000,50,10,ABCD,ABCD
说明：
第一条记录是异常的，因为第二条记录与它的间隔不超过60分钟但是打卡距离超过了5km，同理第二条记录也是异常的。
示例2
输入：
2
100000,10,1,ABCD,ABCD
100000,80,10,ABCE,ABCD
输出：
100000,80,10,ABCE,ABCD
说明：
第二条记录的注册设备号与打卡设备号不一致，所以是异常记录
示例3
输入：
2
100000,10,1,ABCD,ABCD
100001,80,10,ABCE,ABCE
输出：
null
说明：
无异常打卡记录，所以返回null */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let n = Number(await readline());
    let clockRecords = [];
    while ((line = await readline())) {
        let tokens = line.split(",");
        let geRen = new GeRen(tokens);
        geRen.error = errorData(tokens);
        clockRecords.push(geRen);
    }
    for (let i = 0; i < clockRecords.length; i++) {
        for (let j = i + 1; j < clockRecords.length; j++) {
            if (clockRecords[i].id == clockRecords[j].id) {
                let times = Math.abs(
                    clockRecords[i].time - clockRecords[j].time
                );
                let distances = Math.abs(
                    clockRecords[i].distance - clockRecords[j].distance
                );
                if (times < 60 && distances > 5) {
                    clockRecords[i].error = true;
                    clockRecords[j].error = true;
                }
            }
        }
    }
    let str = "";
    for (let i = 0; i < clockRecords.length; i++) {
        if (clockRecords[i].error) {
            str += toString(clockRecords[i]) + " ";
        }
    }
    if (str.length == 0) {
        console.log("null");
    } else {
        console.log(str.trim().replace(" ", ";"));
    }
    function GeRen(tokens) {
        this.id = Number(tokens[0]);
        this.time = Number(tokens[1]);
        this.distance = Number(tokens[2]);
        this.actual = tokens[3];
        this.regisrered = tokens[4];
        this.error = false;
    }
    function errorData(tokens) {
        if (tokens[3] != tokens[4]) {
            return true;
        }
        return false;
    }
    function toString(geRen) {
        return (
            "" +
            geRen.id +
            "," +
            geRen.time +
            "," +
            geRen.distance +
            "," +
            geRen.actual +
            "," +
            geRen.regisrered
        )
    }
    //console.log(clockRecords);
})();
