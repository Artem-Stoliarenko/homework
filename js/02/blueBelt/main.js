let flat = +prompt("Введите номер квартиры от 1 до 108",25);

function searchFlat(flat) {
    if (flat >= 1 && flat <= 36) {
        let floor = Math.ceil(flat / 4);
        let section = 1;
        alert(`Квартина номер ${flat} на ${floor} этаже, подьезд : ${section}.` );
    } else if (flat > 36 && flat <= 72 ) {
        let floor = Math.ceil(( flat - 36 ) / 4);
        let section = 2;
        alert(`Квартина номер ${flat} на ${floor} этаже, подьезд : ${section}.` );
    } else if (flat > 72 && flat <= 108) {
        let floor = Math.ceil(( flat - 72 ) / 4);
        let section = 3;
        alert(`Квартина номер ${flat} на ${floor} этаже, подьезд : ${section}.` );
    } else {
        alert(`Ошибка, ведите номер одной квртиры в диапазоне 1 - 108. \nПерезагрузите страницу.` );
    }
}
searchFlat(flat);