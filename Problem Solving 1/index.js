function findOppositeNumber(n, inputNumber) {
    let gap = inputNumber/2;
    let oppositeNumber = 0;
    if (n < gap) {
        if (inputNumber % 2 == 0) {
            oppositeNumber = n - gap;
            }
            else {
                alert('Số giới hạn phải là một số chẵn:')
            }
        }
    else if (n >= gap) {}
        if (inputNumber % 2 == 0) {
        oppositeNumber = n + gap;
        }
        else {
            alert('Số giới hạn phải là một số chẵn:')
        }
return oppositeNumber;
}

let inputNumber = Number(prompt("Nhập 1 số chẵn làm số giới hạn:"));
let n = Number(prompt("Nhập 1 số bất kì nằm trong giới hạn vừa nhập:"));

console.log(` Số đối của số bạn vừa nhập thuộc giới hạn là: ${findOppositeNumber(n, inputNumber)}`);
