// //Задание 1
// const prt = +prompt('Введите число')
// switch(true){
//     case (prt <= 5):
//         alert('prt меньше или равно 5')
//         break;
//     case (prt >= 5):
//         alert('prt больше 5')
//         break;
//     default:
//         alert('Не выполнится')
// }

// //Задание 2
// let pmt = +prompt('Введите значение')
// switch(pmt){
//     case 1:
//     case 2:
//     case 3:
//         alert('Зима')
//         break;
//     case 4:
//     case 5:
//     case 6:
//         alert('Весна')
//         break;
//     case 7:
//     case 8:
//     case 9:
//         alert('Лето')
//         break;
//     case 10:
//     case 11:
//     case 12:
//         alert('Осень')
//         break;
//     default:
//         alert('Неизвестное значение')
// }

// //Задание 3
// let p1 = null;
// let p2 = 'Значение 2';
// let p3 = 'Значение 3';
// alert(p1??p2??p3??'Значение')

//Задание 4
let number = +prompt('Введите число от 0 до 3')
switch(number){
    case 0:
        alert('Вы ввели число 0')
        break;
    case 1:
        alert('Вы ввели число 1')
        break;
    case 2:
    case 3:
        alert('Вы ввели 2 или 3')
        break;
    default:
        alert('Вы ввели некорректное значение')
}