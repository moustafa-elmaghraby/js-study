// loops   التكرار //

//  for loop //

// start , condition , steps
//  اول حاجه هيدخل يشوف هي I اصغر من 3
//0 هيحط واحد ويدخل يشوف تاني
// وهيزود واحد
//  I =1  هيشتك تاني  ويوزود واحد
//  I= 2 هيزود واحد
// لحد مايوصل لرقم 3  وهيقف علشان 3 مش اصغر من 3

// for (let i = 0 ;     i <3;      i += 1){
//     console.log("Hello World");
//     console.log(i);
// }

// ممكن بدل ما اكتب i+=
// اكتب i++  يزود 1
// i--  ينقص 1

// for( let i = 0; i <= 3; i++){
// console.log("ahmed " + i);
// }

// loop with Array //

let names = ["ahmed", "mazen", "ali", "gamal"];

// for(i = 0 ;  i <4 ; i++){
//     console.log(names[i]);
// }

// هنا عملت ايه
//loop  دخلت اول لفه  0
// لحد اربع مرات

// لو عندي مصفوفه فيها عناصر معرفش عددها

// for(i=0; i<names.length ; i++){
//     console.log(names[i]);
// }

// لو عاوز اعرض العناصر معكوسه

// for(i=names.length -1;   i>=0;   i--){
//     console.log(names[i]);

// }

// Nested loop //

// هنا ايه الي حصل علشان الموضوع بسيط خالص

//  عندي 3 متغير  كل متغير فيه Array
// عاوز اعمل loop  رئيسيه
// جواها  2 loop
// هي ديه فكره Nested loop

let cars = ["BMW", "Mercedes", "Honda"];
let models = [2020, 2021, 2022];
let colors = ["blue", "red", "white"];

// يعني هنا اول loop هتبقي  موديل السياره

// معناه ايه الكلام ده
//  عملت متغير اسمه I
// وقولتله بدايتك من 0
// ليه  من الصفر
// علشان الأندكس بتاع المصفوفه بيبدأ من الصفر
// وبعدين قولتله نهايته تبقي فين
// حطيت .length
// علشان افتراض معرفش عدد العناصر الي في المصفوفه
// او حبيت مستقبلاً ازود عناصر مش هقعد كل مره ازود
// واخر حاجه زودت i++
//يعني كل لفه زود واحد

console.log("  اللوب العاديه قبل وضع لوب فرعيه وتحتوي علي نوع السياره فقط");

for (let i = 0; i < cars.length; i++) {
	console.log(`car:${cars[i]}`);
	// وهنا زودت كلمه car
	// عملت العلامه ديه ` car`
	// وضفت ${}
	// حطيت جواها المتغير الرئيسي بتاعي cars
	// وبعدها المتغير بتاع الloop
	// جوا اقواس المصفوفه
}
console.log("--------------------------");
// وديه كده شكل اللوب العاديه

// طيب عاوز اخليه كل لفه يعرضي سنه الأصدار اعمل ايه

// هاخد نفس اللوب الرئيسيه واحط جواها لووب فرعيه
console.log(
	" اللوب الرئيسيه بداخلها لووب فرعيه تحتوي علي نوع السياره والموديل"
);
for (let i = 0; i < cars.length; i++) {
	console.log(`car:${cars[i]}`);

	for (let j = 0; j < models.length; j++) {
		console.log(`models:${models[j]}`);
	}

	// هنا كل الي حصل عادي جدا زي الي فوق عطيت متغير  وطبقت عليه نفس الخطوات الي في اللوب الرئيسيه

	console.log("xxxxxxxxxxxxxxxxxxxxxxxx");
}

console.log("--------------------------");

console.log(
	"اللوب الرئيسيه جواها 2 لوب فرعيه  تحتوي علي النوع والموديل واللون"
);
for (let i = 0; i < cars.length; i++) {
	console.log(`car:${cars[i]}`);

	for (let j = 0; j < models.length; j++) {
		console.log(`models:${models[j]}`);
	}

	for (let k = 0; k < colors.length; k++) {
		console.log(`colors:${colors[k]}`);
	}

	//معملتش حاجه جديده نفس الي حصل برضو عطيت متغير وطبقت الي حصل في ال 2 لووب الي فوق

	console.log("xxxxxxxxxxxxxxxxxxxxxxxx");
}

/// ----------------- ///

// وديه شكلها علي بعض

// for( let i=0; i< cars.length; i++){

//     console.log(`car:${cars[i]}`);

//     for(let j =0; j <models.length ; j++)

//     {
//         console.log(`models ${models[j]}`);
//     }

//     for (let k = 0; k <colors.length; k++){
//         console.log(`colors ${colors[k]}`);
//     }

//          console.log("-------------------");

// }

// continue & Break //

// ازاي افرمل اللوب  واو استثني منها عنصر

let users = ["ali", "mazen", "gamal", 1, 2, 3, 6, "odey", "yousef", "ahmed"];

console.log("استبعاد الأرقام");

for (i = 0; i < users.length; i++) {
	// هنا ايه الي حصل
	// continue بتستبعد
	// جوا اللوب كتبت قاعده شرطيه
	// قولتله لو نوع البيانات الي جايه من المصفوفه ديه ارقام استبعدها

	if (typeof users[i] == "number") {
		continue;
	}
	console.log(users[i]);
}
console.log("xxxxxxxxxxxxxxxxxxxxxxxx");

console.log("استبعاد الأسماء");
for (let noname = 0; noname < users.length; noname++) {
	if (typeof users[noname] == "string") {
		continue;
	}

	console.log(users[noname]);
}
console.log("xxxxxxxxxxxxxxxxxxxxxxxx");
// استبعاد عنصر واحد فقط
 console.log('استبعاد عنصر واحد فقط');

for (let removeItem = 0; removeItem < users.length; removeItem++) {
	if (users[removeItem] == "gamal") {
		continue;      
	}

	console.log(users[removeItem]);
}

// هنا لو حطيت !=
// مكان ==
// هتعمل استبعاد لكل العناصر ماعاد الي انا كاتبه فقط هيتعرض
// تعالو نجرب

console.log("xxxxxxxxxxxxxxxxxxxxxxxx");

console.log('عرض عنصر واحد فقط');

for ( let onlyOne=0; onlyOne<users.length; onlyOne++){

    if(users[onlyOne] != 'gamal'){
        continue;
    }
    console.log(users[onlyOne]);
}

console.log("xxxxxxxxxxxxxxxxxxxxxxxx");

// break //

// بيعمل فرمله لحد العنصر الي انا كاتبه

console.log('ازاي ال بريك بتشتغل');

for (let stopItem = 0; stopItem < users.length; stopItem++) {

	// طيب لو حبيت اعرض العنصر الي وقفت عنده 
	// بسيطه هعمل log // قبل البريك
	console.log(users[stopItem]);
	if (users[stopItem] == "yousef") {
		break;      
	}
	// console.log(users[stopItem]);

	  //وهنا وقف عند العنصر الي كتبته وعمله استثناء 
   // يعني معرضهوش

}



// while + dowhile loops //

// زي for
// البدايه بتتكتب بره
// ( الشرط بيتكتب جوا )
// { التكرار بيتكتب هنا}
let x = 0;
while( x<3 ){

	x++;  //بكتب التكرار

	// علي سبيل المثال عاوز اشوف هتكرر ولا لا 
           // الكود بيتكتب بعد التكرار

		   console.log("هذا هو تكرار while");
           // وفعلا هلاقي رقم 3 جمب الجمله الي كتبتها
}


// اما dowhile //
// بتكتب الكود حتي لو الشرط متحققش
// بتتكتب بالطريقه ديه 
  
// بكتب المتغير هنا
// do{
          // هنا بكتب الكود الي عاوز يتكرر
		  //  التكرار
// } while( بكتب الشرط  condition);

// مثال


let p = 0;
do{
	console.log('هذا تكرار dowhile');
	p++;
} while(p<3);

//وديه هتشتغل مره واحده حتي لو الشرط متحققش

//مثال
let p2 =0;
do{
	console.log(' وهذا تكرار مره واحده فقط لأن الشرط لم يتحقق');
	p2++;
	
} while(false) ;  // نفذ الي فوق وبص علي هنا لاقي مفيش تكرار  وقف

console.log(p2);  // هنا تأكيداً للكلام طبعت مره واحده فقط

// اما لو عاوز اتأكد من عدد المرات هرجع الكود طبيعي

let o1= 0;
do{ 
	console.log("عدد مرات التكرار الطبيعي");
    o1++;
} while(o1 < 3);

console.log(o1);  // هنا تأكيداً للكلام طبعت طبيعي جدا 3 مرات



