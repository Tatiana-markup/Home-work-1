'use string'

let money, time;

function start()  {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();
    

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    saving : true,
};

function chooseExpreses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", "" ),
            b = prompt ("Во сколько обойдется?" , "");
    
        if(typeof(a)=== "string" && typeof(a) != null && typeof(b) != null
        && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
        } else {
              i--;
        }  
    };
}

chooseExpreses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("Ваш бюджет на день составляет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Ты бомжара!");
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("На пожрать хватит!");
    } else if(appData.moneyPerDay > 2000) {
        console.log("Мажор");
    } else {
        console.log("Что-то пошло не так!");
    }    
}

detectLevel();

function checkSave() {
    if(appData.saving == true) {
        let save = +prompt("Какая сумма накоплений?");
            persent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*persent;
        alert("Доход от накоплений за месяц состовляет " + appData.monthIncome);
    }
}
checkSave();

function chooseOptExpreses() {
    for(let i = 1; i <= 3; i ++ ) {
        let a = prompt("Введите статью необязательных расходов");
            appData.optionalExpenses[i] = a;
    }
}

chooseOptExpreses();













