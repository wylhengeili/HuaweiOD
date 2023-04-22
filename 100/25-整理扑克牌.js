/* 整理扑克牌
知识点贪心排序
 时间限制：1s 空间限制：256MB 限定语言：不限
题目描述：
给定一组数字，表示扑克牌的牌面数字，忽略扑克牌的花色，请按如下规则对这一组扑克牌进行整理：
步骤1、对扑克牌进行分组，形成组合牌，规则如下：
当牌面数字相同张数大于等于4时，组合牌为“炸弹”；
3张相同牌面数字 + 2张相同牌面数字，且3张牌与2张牌不相同时，组合牌为“葫芦”；
3张相同牌面数字，组合牌为“三张”；
2张相同牌面数字，组合牌为“对子”；
剩余没有相同的牌，则为“单张”；
步骤2、对上述组合牌进行由大到小排列，规则如下：
不同类型组合牌之间由大到小排列规则：“炸弹” > "葫芦" > "三张" > "对子" > “单张”；
相同类型组合牌之间，除“葫芦”外，按组合牌全部牌面数字加总由大到小排列；
“葫芦”则先按3张相同牌面数字加总由大到小排列，3张相同牌面数字加总相同时，再按另外2张牌面数字加总由大到小排列；
由于“葫芦”>“三张”，因此如果能形成更大的组合牌，也可以将“三张”拆分为2张和1张，其中的2张可以和其它“三张”重新组合成“葫芦”，剩下的1张为“单张”
步骤3、当存在多个可能组合方案时，按如下规则排序取最大的一个组合方案：
依次对组合方案中的组合牌进行大小比较，规则同上；
当组合方案A中的第n个组合牌大于组合方案B中的第n个组合牌时，组合方案A大于组合方案B；
输入描述：
第一行为空格分隔的N个正整数，每个整数取值范围[1,13]，N的取值范围[1,1000]
输出描述：
经重新排列后的扑克牌数字列表，每个数字以空格分隔
示例1
输入：
1 3 3 3 2 1 5
输出：
3 3 3 1 1 5 2
示例2
输入：
4 4 2 1 2 1 3 3 3 4
输出：
4 4 4 3 3 2 2 1 1 3 */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let obj = {}
    let boomArr = []
    let oneArr = []
    let twoArr = []
    let threeArr = []
    while(line = await readline()){
        let tokens = line.split(' ');
        for(let num of tokens){
            if(obj[num]) {
                obj[num]++
            }else{
                obj[num] = 1
            }
        }
    }
    for(item in obj){
        let a = obj[item]
        if(a >= 4){
            while(a--){
                boomArr.push(item)
            }
            boomArr.sort((a,b) => b - a)
        }
        //console.log(obj[item])
        if(a == 3){
            while(a--){
                threeArr.push(item)
            }
            threeArr.sort((a,b) => b - a)
        }
        if(a == 2){
            while(a--){
                twoArr.push(item)
            }
            twoArr.sort((a,b) => b - a)
        }
        if(a == 1){
            while(a--){
                oneArr.push(item)
            }
            oneArr.sort((a,b) => b - a)
        }
    }
    console.log(boomArr,threeArr,twoArr,oneArr)
}()
