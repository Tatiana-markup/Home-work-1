'use string'

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    saving : false,
};

for (let i = 0; i < 2; i++) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", "" ),
        b = prompt ("Во сколько обойдется?" , "");

    if(typeof(a)=== "string" && typeof(a) != null && typeof(b) != null
    && a != "" && b != "" && a.length > 50) {

        console.log("done!");

        appData.expenses[a] = b;

    } else {

        i--;
    }  
};

/* while

let i = 0;

while( i < 2) {
    
    let a = prompt ("Введите обязательную статью расходов в этом месяце", "" ),
    b = prompt ("Во сколько обойдется?" , "");
    
    if(typeof(a)=== "string" && typeof(a) != null && typeof(b) != null
    && a != "" && b != "" && a.length > 50){
        console.log("done!");

        appData.expenses[a] = b;
    }else {

        i--;
    }  

    i++;
}*/

/* do...while

let i = 0;

do {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", "" ),
    b = prompt ("Во сколько обойдется?" , "");

    if(typeof(a)=== "string" && typeof(a) != null && typeof(b) != null
    && a != "" && b != "" && a.length > 50){
        console.log("done!");

        appData.expenses[a] = b;
    }else {

        i--;
    }  

    i++;    
} 

while(i > 2);*/



appData.moneyPerDay = appData.budget / 30;

alert("Ваш бюджет на день составляет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Ты бомжара!");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("На пожрать хватит!");
} else if(appData.moneyPerDay > 2000) {
    console.log("Мажор");
} else {
    console.log("Что-то пошло не так!");
}











