'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = +prompt("Введите дату в формате YYYY-MM-DD", ""),
    expensesFirst = prompt("Введите обязательную статью расходов в этом месяце", "" ),
    spendingFirst = +prompt("Во сколько обойдется?" , ""),
    expensesSecond = prompt("Введите обязательную статью расходов в этом месяце", "" ),
    spendingSecond = +prompt("Во сколько обойдется?" , "");

let appData = {
    budgetData : money,
    timeData : time,
    expenses : {
        expensesFirst : spendingFirst,
        expensesSecond : spendingSecond,
    },
    income : [],
    saving : false,
};

let budget = (money - (spendingFirst + spendingSecond)) / 30 ;

alert("Ваш бюджет на день составляет " + budget + " грн");











