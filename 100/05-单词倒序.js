/* 输入单行英文句子，里面包含英文字母，空格以及,.?三种标点符号，请将句子内每个单词进行倒序，并输出倒序后的语句。
输入描述

输入字符串S，S的长度 1 ≤ N ≤ 100
输出描述

输出倒序后的字符串 

yM eman si boB.
My name is Bob.

*/

let token1 = "yM eman si boB." //await Readline()
let result = []
let start = 0
for (i = 0; i < token1.length; i++) {
    let a = token1.charAt(i);
    if (a == ' ' || a == ',' || a == '?' || a == '.') {
        //遍历遇到符号，将之前字符倒叙并拼接符号
        if (i > start) {
            let word = token1.substring(start, i).split('')
            result = result + word.reverse().join('') + a
        } else {
            result = result + a
        }
        start = i + 1  //初始化开始位置跳过符号
    }else if (i == token1.length - 1) {
        //遍历到最后一个时将此到前一个符号的字符倒序并拼接最后的符号(默认最后一个是符号)
        let word = token1.substring(start, i).split('')
        result = result + word.reverse().join('') + a
    }
}
console.log(result)

