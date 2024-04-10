// العمليات الحسابيه
// + جمع في حاله الأرقام  او concatination في حاله ارقام وحروف//
// * ضرب  
// ** الأوس     الرقم الأول اوس الرقم التاني
// -  طرح    
//  / قسمه 
// % باقي القسمه
//  NaN  not a number
//  let num = 10;    لو حبيت ازود علي قيمته
//   let += 10;   ++  بتزود واحد فقط
//  let++;   let--; بتنقص واحد او تزود واحد
// عملية الجمع
// let num = 4 + 5;
// عملية الطرح
// let num = 5 – 4;
// عملية الضرب
// let num = 4 * 5;
// عملية القسمة
// let num = 5 / 4;
// باقي القسمة
// let num = 5 % 2;
// الأس
// let num = 4 ** 5; 


// الجافا سكريبت بتحول النصوص لأرقام 
console.log("5" * "4");     

//  تحويل النص الي رقم باسختدام Number

console.log(Number("4"));

// طريقه اكثر ذكائاً  parseint
// بس ده في حالة ان التيكست بعد الرقم
// ومش بتتعامل مع الأرقام العشريه

console.log(parseInt(" 5 moustafa"));

// parseFloat تتعامل مع الأرقام العشريه

console.log(parseFloat(" 5.2 moustafa"))


// let x = +"5";

// let x = Number(‘5’);

// let x = parsInt(‘5’);

// let x = parsFloat(‘5’);



//----------------------//


// function Number // بتحول النص الي رقم 

// object  ===  Number // جواها حاجات كتير دوس .

//  Number.MAX_VALUE    لتحديد القيمه القصوي للأرقام التي تتعامل معاها جافا سكريبت

console.log(Number.MAX_VALUE);

//  Number.MAX_VALUE_INTEGER  لتحديد اكبر رقم اّمن 

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.isSafeInteger(9007199254740991));
console.log(Number.isSafeInteger(900719925474099100));
// لمعرفه الرقم اّمن او لا  ده اكبر رقم اّمن لو ضفنا عليه 1 مش هيبقي اّمن

console.log(Number.isInteger (5));

console.log(Number.isInteger (5.5));

// استقبل الرقم واساله رقم او لا

// اسئله هل NAN

console.log(Number.isNaN ("moustafa" * 5));
console.log(Number.isNaN (5 * 5));

//--------------------//

// object Math //

console.log(Math.E); //ثابت أويلر
console.log(Math.PI); // قيمة باي
console.log(Math.abs(-5)); // تحويل الرقم من سالب الي موجب
console.log(Math.sqrt(4)); // الجزر التربيعي
console.log(Math.pow(2,3));  // الأوس
console.log(Math.round(10.5)); // التقريب العادي المتبع عليه 
console.log(Math.ceil(10.1)); // تقريب بس لفوق يعني بتكبر
console.log(Math.floor(10.9)); // بتقرب لتحت
console.log(Math.min(1,2,3,4,5,0,-5)); // بتطلع اصغر رقم
console.log(Math.max(1,2,3,4,5,0,-5)); // بتطلع اكبر رقم

//-------------------//

// let zakah = prompt();
//  window.alert(zakah * 0.025 +  "جنيه" );

// console.log( 0.025 * zakah + "جنيه")

//-------------//




// String //

// تحويل الرقم الي نص

let x = 100;
console.log(typeof String(10));
 // تستخدم متغير او تحط الرقم بين قوسين
 // او تحط ..
console.log(typeof x.toString()); 
console.log(typeof (100).toString());
console.log(typeof 100..toString());

// strings methodes//  قيم متسلسله
let  name = " moustafa ";
console.log(name.repeat(10));
console.log(name.length);  // هنا عد عدد الحرف 8 + 2 مسافات =10

// العد في البرمجه من صفر مش واحد

// 1st space  =0  m= 1 الي اخره // 
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);
console.log(name[7]);
console.log(name[8]);
console.log(name[9]); 

// [ index number]
// او بطريقه charAt

console.log(name.charAt(1));

// الفرق بينهم  لو كتبت مثلاً رقم index مش موجود هيطلع التالي

console.log(name.charAt(10));  // هنا هتطلع ان الأسترنج ده فاضي
console.log(name[10]); // هنا هتطلع undefined

// ازاي ابحث عن رقم الأندكس  // بتبحث من الشمال
console.log(name.indexOf("m"));
console.log(name.indexOf("o"));
console.log(name.indexOf("s"));
console.log(name.indexOf("t"));


let name2 = "i love java script";

console.log(name2.lastIndexOf("i",14)) // البحث من بعد الرقم المضاف
console.log(name2.slice(0,6)); // تقطيع الكلام  تظهر اول قيمه فقط اما اخر قيمه لا تظهر


console.log(name2.split(" ")); // بتقطع وتطلع الناتج علي شكل Array
// هنا قطع المسافه

console.log(name2.split()); // كده مش هيقطع
console.log(name2.split("")); // كده هيقطعه حرف حرف
console.log(name2.split("",5)); // بحدد عدد الحرف الي عاوز اقطعها


// التقطيع باستخدام substring & substr

console.log(name2.slice(2,6)); // start and end وبتاخد قيمه بالسالب
console.log(name2.substring(2,6)); // لاتقبل القيمه السلبيه
console.log(name2.substr(2,6));// بتقطع وتشمل الرقمين


//البحث في الأسترنج

console.log(name2.indexOf("a")); // بتبدأ من الشمال
console.log(name2.lastIndexOf("a")); //بتبدأ من اليمين

 // لو ملقتش الحرف او العنصر بتطلع قيمه ب -1

console.log(name2.indexOf('z'));
console.log(name2.lastIndexOf("z"))

 // بتدور علي الحرف وترجع True or False
console.log(name2.includes("a"));
console.log(name2.includes("z"));

// startwith

console.log(name2.startsWith("l",2)); // بقدر ابحث من البدايه واحدد الحرف وبدايه البحث منين وبترجه true or false

//endwith 

console.log(name2.endsWith("t")); //بتبحث من الأخر وترجع true or flase
console.log(name2.endsWith("j",8)); // رقم 8 ده lenght مش عدد