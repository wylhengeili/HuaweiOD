let s1 = "the sheep is white i like it it is very beautiful"
let s2 = ["is", "like", "white", "gate"]
let arrS1 = s1.split(' ')
let arrRes = []
let res = []
let objS1 = {}
for (let item of arrS1) {
    if (objS1[item])
        objS1[item]++
    else
        objS1[item] = 1
}
for (let item of s2) {
    if (objS1[item]) {
        arrRes.push([item, objS1[item]])
    }
}
arrRes.sort((a, b) => {
    if (a[1] == b[1]) {
        return b[0].length - a[0].length
    } else {
        return b[1] - a[1]
    }
})
for(let item of arrRes){
    res.push(item[0])
}
console.log(res)