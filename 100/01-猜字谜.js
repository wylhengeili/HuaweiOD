/*
    小王设计了一个简单的猜字谜游戏，游戏的谜面是一个错误的单词，比如nesw，玩家需要猜出谜底库中正确的单词。猜中的要求如下：
        对于某个谜面和谜底单词，满足下面任一条件都表示猜中：
        1）变换顺序以后一样的，比如通过变换w和e的顺序，“nwes”跟“news”是可以完全对应的；
        2）字母去重以后是一样的，比如“woood”和“wood”是一样的，它们去重后都是“wod”
    请用js实现对应的算法，并带有注释
    输入描述：
    1、谜面单词列表，以","分隔
    2、谜底库单词列表，以","分隔
    输出描述：
    匹配到的正确单词列表，以“,”分隔
    如果找不到，返回"not found"
    补充说明：
    1、单词的数量N的范围：0 < N < 1000
    2、词汇表的数量M的范围： 0 < M < 1000
    3、单词的长度P的范围：0 < P < 20
    4、输入的字符只有小写英文字母，没有其它字符

    示例1
    输入：
    conection
    connection,today
    输出：
    connection
    示例2
    输入：
    bdni,wooood
    bind,wrong,wood
    输出：
    bind,wood
*/
    let token1 = 'bdni,wooood'        //await readline();
    let token2 = 'bind,wrong,wood'//await readline();
    let qArr = token1.split(",");
    let aArr = token2.split(",");
    let lastArr = []

    for (let i = 0; i < qArr.length; i++) {
        //对应每一个谜面
        let testArr = quchong(qArr[i])//去重
        let lasttestStr = testArr.sort((a,b)=>a.localeCompare(b)).join('')//排序
        for (let j = 0; j < aArr.length; j++) {
            //对应每个答案
            let ansArr = quchong(aArr[j])//去重
            let lastansStr = ansArr.sort((a,b)=>a.localeCompare(b)).join('')//排序
            let reg = new RegExp(lastansStr,'g')
            if(reg.test(lasttestStr)){
                //判断是否是对的谜底
                lastArr.push(aArr[j])
            }
        }
    }

    if(lastArr.length === 0){
        console.log("not found")
    }else{
        console.log(lastArr.join(','))
    }

    function quchong(str) {
        let a = str.split("");
        let b = [];
        for (let i = 0; i < a.length; i++) {
            if (!b.includes(a[i])) {
                b.push(a[i]);
            }
        }
        return b;
    }