/* 数组的中心位置
 时间限制：1s 空间限制：256MB 限定语言：不限
题目描述：
给你一个整数数组nums,请计算数组的中心位置 。数组中心位置是数组的一个下标，其左侧所有元素相乘的积等于右侧所有元素相乘的积。
数组第一个元素的左侧积为1，最后一个元素的右侧积为1
如果数组有多个中心位置，应该返回最靠近左边的那一个。如果数组不存在中心位置，返回 -1 。
输入描述：
输入只有一行，给出N个正整数用空格分格：nums = 2 5 3 6 5 6
1 <= nums.length <= 1024
1 <= nums[i] <= 10
输出描述：
输出：3
解释：
中心位置是 3 。
左侧数之积 sum = nums[0] * nums[1] * nums[2] = 2 * 5 * 3 = 30 ，
右侧数之积 sum = nums[4] * nums[5] = 5 * 6 = 30 ，二者相等。
示例1
输入：
2 5 3 6 5 6
输出：
3 */

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    while ((line = await readline())) {
        let numArr = line.split(" "); //获取数组
        let flag = -1
        for(let i = 0; i < numArr.length; i++){
            let left = 1
            let right = 1
            for(let j = 0; j <= i; j++){
                //获取前半段乘积
                left = numArr[j] * left
            }
            for(let k = i; k < numArr.length; k++) {
                //获取后半段乘积
                right = numArr[k] * right
            }
            if(right === left) {
                flag = i
                break
            }
        }
        console.log(flag)
    }
})();
