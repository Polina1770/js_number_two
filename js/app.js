//Пример 1
let minute = 46;
if (minute >= 0 && minute <= 14) {
	console.log("В первую четверть часа");
}
if (minute >= 15 && minute <= 30) {
	console.log("Во вторую четверть часа");
}
if (minute >= 31 && minute <= 45) {
	console.log("В третью четверть часа");
}
if (minute >= 46 && minute <= 59) {
	console.log("В четвертую четверть часа");
}

//Пример 2
let lang = 'en';
let arr;
if (lang == 'ru') {
	arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
if (lang == 'en') {
	arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
console.log(arr);


//Пример 3
let num = -2;
if (num / 10 > 1){
    if (num > 0){
       console.log("Двузначное положительное")
    } else{
        console.log("Двузначное отрицательное")
    }
} else{
    if (num > 0){
        console.log("Однозначное положительное")
    } else{
       console.log("Однозначное отрицательное")
    }
}

// Пример 4
let red = "нет";
let yellow = "нет";
if (red == "да") {
    console.log("При красном сигнале стоим - дорогу переходить нельзя!");
} else if(yellow == "да") {
    console.log("При жёлтом сигнале нужно приготовиться, но дорогу пока переходить нельзя!");
} else {
    console.log("Зелёный сигнал - переходим дорогу.");
}

// Пример 5
let i = 1;
while(i <= 12){
  console.log(i);
   i++;
}

// Пример 6
let i_2 = 5;
while(i_2 <= 13){
  console.log(i_2);
   i_2++;
}

//Пример 7 
for (let i_3 = 0; i_3 <=16; i_3++) {
    if(i_3 % 2 == 0) {
        console.log(i_3);
    }
}
//Пример 7 
let result = 0;
let arr_2 = [2,5,8,3,6]
for(let i_4 = 0; i_4 < arr_2.length; i_4++){
    result = result + arr_2[i_4];
}
console.log(result)

  
