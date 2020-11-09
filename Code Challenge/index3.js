
function check (e,t) {
    let a = document.getElementById('predictedNumber');
    if(a.value <=10 && a.value >0){
    if (a.value === "4") {
        alert("Bạn đã trúng thưởng 1 chuyến đi Mỹ!")
    }
    else {
        alert('Mời bạn đoán lại số khác')
    }
    }
    else {
        alert('Số bạn vừa nhập quá giới hạn. Vui lòng nhập số trong khoảng từ 1 đến 10')
    }
}

function enterLogin (e,t){
    if(e.key === 'Enter') {
        check()
    }
}