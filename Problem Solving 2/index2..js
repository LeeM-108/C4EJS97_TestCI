// function merge2String(x, y) {
//     let mergedString=[];
//     for (let i = 0; i < x.length; i++) {
//         mergedString.push (x.charAt(i));
//         for (let j = 0; j < y.length; j++) {
//             mergedString.push(y.charAt(j))
//         } 
//     }
//     return mergedString.toString().replace(",","")
// }

// let str1 = prompt("Nhập chuỗi thứ 1:");
// let str2 = prompt('Nhập chuỗi thứ 2:');

// console.log( merge2String(str1,str2));

function merge2String(x,y) {
    let array1 = x.split('');
    let array2 = y.split('');
    let mergedString = [];
    let lim = Math.min(array1.length , array2.length);

    for (let i = 0; i < lim; i++) {
        mergedString.push (array1[i], array2[i]);
    }
    mergedString.push(array1.slice(lim), array2.slice(lim));
    return mergedString;
}

let str1 = prompt("Nhập chuỗi thứ 1:");
let str2 = prompt('Nhập chuỗi thứ 2:');

console.log(merge2String(str1,str2).toString().replace(",", ""));