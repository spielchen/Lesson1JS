var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
		budget,
		timeData, 
		expenses: {},
		income:[],
		optionalExpenses:{},
		savings: false
};

var budget = console.log('Наш бюджет: ' + money);
var timeData = console.log('Дата: ' + time);

	//appData.expenses = {};

	let	a1 = prompt("Введите обязательную статью расходов в этом месяце"),
		a2 = prompt("Во сколько обойдется?"),
		a3 = prompt("Введите обязательную статью расходов в этом месяце"),
		a4 = prompt("Во сколько обойдется?");
		appData.expenses[a1] = a2;
		appData.expenses[a3] = a4;

console.log(appData.expenses);

console.log('Бюджет за 1 день: '+Math.floor(money/30));
