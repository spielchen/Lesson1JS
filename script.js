var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var mainList = {
		money,
		time, 
		expenses: [],
		income:{},
		optionalExpenses:{},
		savings: true
};

console.log('Наш бюджет: '+mainList['money']);
console.log('Дата: '+mainList['time']);

function addNameGoods() {

		for (var i = 0; i < 2; i++) {
			mainList.expenses[i] = prompt("Введите обязательную статью расходов в этом месяце");
	};
		for (var a = 0; a < 2; a++){
			mainList.expenses[i] = prompt("Во сколько обойдется?");
		};
		console.log(mainList.expenses[i] + ': ' + mainList.expenses[i]);
};

let expenses = addNameGoods();


console.log('Бюджет за 1 день: '+Math.floor(money/30));