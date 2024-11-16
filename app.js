let num1 = 5;
let string = "string"
let str = String(num1)
let nmb = Number(string)
console.log(typeof(str))
console.log(typeof(nmb))
let n1 = +prompt("birinci ededi daxil et")
let n2 = +prompt("ikinci ededi daxil et")
console.log(+n1+ +n2)
if (n1>0) {
    console.log("musbet ededdir")
} else{
    console.log("eded menfi ededdir")
}
if (n1=0) {
    console.log("eded 0 a beraberdir")
}