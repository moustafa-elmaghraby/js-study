// المقارنات

// هل تساوي == وتبص علي Value فقط

// علي سبيل المثال لو طلبت ايميل من المستخدم وعاوز اقارنه بالي عندي

// let askEmail = prompt("enter your email");
// let email = "moustafa@gmail.com";
// console.log(askEmail == email);

// هنا لو دخلت نفس الأيميل هيرجع True
// False لو دخلت اي شي تاني هيرجع
// فرضاً المستخدم حط حرف كابيتل او كتبها كلها كابيتل  هترجع False
//طب احل ديه ازاي

// tolowercase يعني هتحول كل الكابيتل الي داخل  لسمول
//touUpperCase  العكس تماما
// trim ده بيشيل المسافات من المدخلات
// بمعني لو المستخدم حط مسافات بعد الأيميل طبيعي هترجع القيمه False
// علشان المسافه ديه حرف
// نحلها ازاي  .trim()
// وديه بتشيل المسافات من البدايه والنهايه فقط

// console.log(askEmail.toLowerCase().trim() == email);

let name = "            mous tafa               ";

console.log(name.length); //هنا هيعد جميع الأحرف والمسافات وهتبقي 35
console.log(name.trim().length); // هنا هيعد الحروف بس من غير المسافات وعددها 8
// trim لو زودت مسافه في النص هتتحسب في
// لانها مش بتحذف المسافات الي بين الكلام  بتحذف بس من الأول والأخر

//  فهتبقي 36  قبل  trim
// 9 بعد ال trim

//-------------------------------------------//

//  ==  Value
// === DataType + Value
// < >  هترجع true / false
// ! لا تساوي
// && معانها And
// ||  or

let x = 5;
let z = "5";
let y = 10;
let k = 9;

console.log(x == z); //  True علشان نفس القيمه
console.log(x === z); // False علشان بتبص علي نوع البيانات والقيم مع بعض  DataTypes + Values
console.log(y >= k); // هنا رجعها True علشان اخد او حاجه لقاها ومبصش علي التانيه
// بمعني y > k  هنا لما قولتله امبر من او يساوي وقف عند اكبر من وطبعها true
console.log(y != k); // هنا رجع true  علشان فعلا القيمتين لا يساوا بعض

// مثال //

let product = " TV-samsung";
let size = 50;
let price = 10000;

console.log(price < 12000 && size == 50); // هيرجع true
// علشان الشرطين اتحققوا

console.log(price < 12000 && size == 40); // هيرجع false
// علشان &&  لالازم الشرطين فيها يتحققوا

// في الحالتين دول هيرجع True لأن فيه شرط واحد فقط اتحقق

//هنا السعر متحققش بس الحجم صح
console.log(price > 12000 || size == 50);
// وهنا السعر اتحقق بس الحجم غلط
console.log(price < 12000 || size == 40);

//-------------------//

// Condition statement  الجمل الشرطيه//

// تتكون من   اداه شرطيه  و شرط   و نتيجه.

//  IF //

// if (  هنا الشرط   condition   ) {   اي كود ممكن يتكتب هنا   النتيجه}

// let num1 = prompt("num1");
// let num2 = prompt("num2");

// if (num1 < num2) {
//     console.log("Hello");

// }

// لو اتحقق هتطبع Hello
// لو متحققش مش هتطبع حاجه

// --  طب لو عاوز اعمل كذا شرط //
//مثال لو عند موقع وعاوز اعرض صلاحيات المستخدمين
// زي Admin  // Moderator // user

// let role = prompt("What is your role ?");

// if (role == "admin") {
// 	alert("Hello Admin you can create, delete, modify");
// } else if (role == "mod") {
// 	alert("Hello Moderator you can create, mange users , modify");
// } else {
// 	alert("Hello user you can  login ,modify");
// }

// else تكتب فقط لما ميكنش اي شرط من الي فوق ده متحقق

//-- مثال اخر //

// let result = prompt("What is your Result");

// الجافا سكريبت بقترأ الكود من فوق لتحت  يعني لو اول شرط اتحقق الباقي هيتعملهم  skip



// if (result >= 90) {
// 	alert("Exclent");
// } // اول شرط
// else if (result >= 80) {
// 	alert("very Good");
// } // تاني شرط
// else if (result >= 70) {
// 	alert("Good");
// } // تالت شرط
// else if (result >= 60) {
// 	alert("Fair");
// } // رابع شرط
// else if (result >= 50) {
// 	alert("Pass");
// } // خامس شرط
// else {
// 	alert("Fail");
// }
//  else هنا تكتب مره واحده فقط في اخر الكود في حالة لو كل الشروط الي فوق ديه متحققتش


///  طريقه تانيه لكتابه ال IF

// مثال

//   let age = prompt("Enter Your Age ?");
//  age >= 18?  // الشرط
//   alert("Welcome")  // لو اتحقق
//   :alert("too young"); // لو متحققش  يعني  : ديه اكنها else


  // Switch //


  // switch مكان IF 
  // break معناها يوقف
  // case بكتب الحاله
  // default  مكان else

  // لو مكتبتش breake  
  // هيطلع كل الأحتمالات الي بعدها

  // switch بتديك احتمال واحد فقط  ==
  // يعني ميفعش تاخد  >  او >




// let role = prompt("What is your role ?");

// switch(role){

//     case "admin":
//         alert("create,update,delete");
//         break;
          
        
//     case "mod":
//         alert("create,update,mange user");
//         break;
            

//         default:
//             alert("Hello user")
      
// }