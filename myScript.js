//alert("aaa");
function pushButton() {
	alert('押した!!');
}

function myConfirm() {
	let dateId = document.getElementById("date");
	let cd = document.getElementById("cd");
	let val = dateId.value;
	let inputDate = val.split("/");

	let b_year = Number(inputDate[0]);
	let b_month = Number(inputDate[1]);
	let b_day = Number(inputDate[2]);

	myD = new Date();
	now = myD.getTime();
	birthDay = new Date(2023, b_month, b_day, 0, 0, 0);
	myYear = myD.getYear();
	myYear4 = (myYear < 2000) ? myYear + 1900 : myYear;
	myMonth = myD.getMonth() + 1;
	myDate = myD.getDate();
	myDay = myD.getDay();
	myHour = myD.getHours();
	myMinute = myD.getMinutes();
	mySecond = myD.getSeconds();

	countDown = birthDay - now;

	days = Math.floor(countDown / (1000 * 24 * 60 * 60));
	hours = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60 * 60));
	minutes = Math.floor((countDown % (1000 * 60)) / (1000 * 60));
	seconds = Math.floor((countDown % (1000 * 60)) / 1000);

	let month = 0;
	if (b_month < myMonth) {
		myYear4 = myYear4 + 1;
		month = 12 - (myMonth - b_month);
	} else {
		month = b_month - myMonth;
	}

	//console.log(month);

	if (b_month == myMonth) {
		if (b_day <= myDate) {
			month = 12;
		}
	}
	let day = 0;

	let monthDay = 0;
	let b_month1 = b_month;
	for (let i = 0; i < month - 1; i++) {
		if (b_month + (i + 1) == 13) {
			month = month - i;
			i = 0;
			b_month = 0;
		}

		console.log(i);
		if (b_month + (i + 1) == 2) {
			day = day + 28;
		} else if (b_month + (i + 1) == 4 || b_month + (i + 1) == 6
			|| b_month + (i + 1) == 9 || b_month + (i + 1) == 11) {
			day = day + 30;
		} else {
			day = day + 31;
		}
	}

	b_month = b_month1;

	if (myMonth == 2) {
		monthDay = 28;
	} else if (myMonth == 4 || myMonth == 6 || myMonth == 9 || myMonth == 11) {
		monthDay = 30;
	} else {
		monthDay = 31;
	}

	if (b_day < myDate) {
		day = day + (monthDay - myDate + b_day);
	} else {
		day = day + (monthDay - b_day - myDate);
	}

	if (b_month == myMonth) {
		if (b_day <= myDate) {
			myYear4 = myYear4 + 1;
		}
	}

	let old = myYear4 - b_year;

	let hour = 24 - myHour;
	let min = 60 - myMinute;
	let sec = 60 - mySecond;

	if (day == -1) {
		cd.innerHTML = "誕生日です";
	} else {
		let time = day + "日" + hour + "時間" + min + "分" + sec + "秒";
		let aaa = "次の" + old + "歳の誕生日まで";

		cd.innerHTML = time;
		document.getElementById("old").innerHTML = aaa;
		x = setInterval("myConfirm()", 1000);
	}
}
