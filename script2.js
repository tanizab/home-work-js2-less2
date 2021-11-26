/*№2
Дано случайное число от 2 до 10 (2 значит 2 строки 2 ячейки)
На основании случайного числа отобразить таблицу n на n, В каждой ячейке таблицы записать случайное число от 0 до 100
<table></table>
*/
const getRandom = function(max = 10, min = 0){
    return Math.floor(Math.random() * (max - min) + min);
}

let num = getRandom(10, 2);
//let number = getRandom(100, 0);
//let tableTr = document.body.childNodes[1].childNodes[1];
//let tableTd = document.body.childNodes[1].childNodes[1].childNodes[1];
let tBody = document.body.childNodes[1].childNodes[1];

for(let i = 2; i <= num; i++){
    console.log(i);
    //tableTr.innerHTML += `<tr>${i}</tr>`;
    tBody.innerHTML += `${i}<tr><td></td></tr>`;

    /*for(let j = 2; j <= num; j++){
        console.log(j);
        tableTd.innerHTML += `<tr>${j}</tr>`;
    }*/
}

