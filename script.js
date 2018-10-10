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

	appData.expenses = {};

		a1 = prompt("Введите обязательную статью расходов в этом месяце");
		a2 = prompt("Во сколько обойдется?");
		a3 = prompt("Введите обязательную статью расходов в этом месяце");
		a4 = prompt("Во сколько обойдется?");
		appData.expenses[a1] = a2;
		appData.expenses[a3] = a4;

console.log(appData.expenses);

console.log('Бюджет за 1 день: '+Math.floor(money/30));