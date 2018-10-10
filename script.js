var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
		money,
		time, 
		expenses: {},
		income:[],
		optionalExpenses:{},
		savings: false
};

console.log('Наш бюджет: ' + appData['money']);
console.log('Дата: ' + appData['time']);

let expenses = {};
		expenses.question ={};
		a1 = prompt("Введите обязательную статью расходов в этом месяце");
		a2 = prompt("Во сколько обойдется?");
		a3 = prompt("Введите обязательную статью расходов в этом месяце");
		a4 = prompt("Во сколько обойдется?");
		expenses.question[a1] = a2;
		expenses.question[a3] = a4;

console.log(expenses);

console.log('Бюджет за 1 день: '+Math.floor(money/30));