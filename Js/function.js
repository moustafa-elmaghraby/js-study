// functions //

// بكتب الكود مره واحده واقدر انادي عليه عدد لانهائي

// مثال

// طريقه كتابه Function

 // function    //إسمها  //parameter
function         hello     (   ){

    console.log("Hello World " );

    // هنا بقدر اكتب اي شيء 
    // if or for or anything
}


hello(); // بنادي عليها 


// مثال 

// عاوز احسب العمر

function calcAge (age) {
    
    let result = age * 365;
    console.log(result);
}

// احتساب العمر بالأايام


calcAge(38);




//  مثال احتساب اسعار المنتجات

// عاوز اعمل برنامج يسحب سعر المنتجات
// عملت function 
// اسمها pro
// جوا البارميتر كتبت السعر والضريبه والأعلانات
// جوا الfunction
// كتبت  ان المنتج يساوي السعر + الضريبه 
// وعملت متغير تاني النتيجه الأخير  
// ان السعر النهائي = سعر المنتج مضاف اليه الأعلانات
// وقلتله يطبعلي النتيجه

function pro (price,taxes,ads) {


    let product = price + taxes ;
    let result = product + ads ;
    console.log(result);

}
// جيت هنا بعد ما خلصت ناديت علي البرنامج 
  // بالترتيب الي حطيته فوق
 //price   Taxes       ads   
pro(200,    2.5,        10); // ده منتج 

pro(400,    2.5,        40); // وده منتج تاني

// ملحوظه انا عملت مسافات علشان الشرح بس اما في الطبيعي مفيش مسافات

 

// الفرق بيت المتغيرات

// Global  
// اقدر استخدمه في اي مكان وبيتكب برا function
// local
// بيتكب جوا function 
// ومقدرش استخدمه براها


// طيب لو عاوز استخدم متغير جوا function 
// واحطه جوا متغير تاني براها هعمل ايه

// هستخدم return


function pro (price,taxes,ads) {


    let product = price + taxes ;   // كل دول LOCAL
    let result = product + ads ;
    //هنا كل الي عملته حطيت return 
    // علي المتغير النهاىي
     return result;   // كده اتحولوا Global
       // return بيبقي اخر سطر جوا function
}
// جيت هنا عطيت متغير جديد  
// وعطيته قيمة البرنامج
let totalPrice = pro(100,3.5,50);
console.log(totalPrice);

//مثال عاوز احسب العمر بالساعات 

// عملت فانكشن عاديه بتحسب العمر بالأيام

function days (age){

    let result = age *365;
    return result;
}
// وقلتلها ترجعلي النتيجه وحفظتها في متغير 

let day = days(36);
// عملت فانكشن تاني تحسب العمر بالساعات
function calcAgeByHours(age){

  let result = age * 24 ;
  return result;
}
// وعملتها متغير  جديد
// قيمته الفانشكن الأخير مضروبه في المتغير الي راجع من الفانكشن الأولي 
let hourAgeByHours = calcAgeByHours(day);

// وهنا طبعته
console.log(hourAgeByHours);


// hoisting

// الجافا سكربت ازاي بتقرا الكود بتاعك

// مثال


console.log(x);
var x =10;

// الجافا قريته ازاي

var y;

console.log(y);

y = 10;

// في الحالتين هتطلع undefined

// طيب الفرق بين 
// var -  let

// هنجرب نفس الي فوق بس هنحط let

// console.log(z);
// let z =10;

// عملت error  
// علشان let مش بيتعملها hoisting
// يعني انت زي ما انت كاتب الكود الجافا سكريبت هتشوفه



// Function hoisting


// مثال

// النوع ده اسمه 
// Decleration function
console.log(hello());
function hello () {
    
    return 1;

}

// يعني ممكن اطبع الفانكشن في سطر قبلها
// الجافا بترفع الفانكشن 


// حل للموضوع ده ازاي


// expertion function

let bye = function(){

    return 1;
}

bye();
console.log(bye());  // هتطلع نفس النتيجه 1
// بس لو جرب اطبعها قبلها
// هتعمل error 
// علشان النوع ده مش بيتعمله Hoisting


// scope and invoked //


// ازاي اخلي الفانكشن تكول نفسها

(function  () {
    console.log('hello world');
}) ();

// شيلت اسمها وحطيتها بين اقواس 
// ();  وده الكول بتاعها

// مثال


console.log(      m()        );
function m ()
{


    function y(){return 1}
    return y();
    function y(){return 0}

}

//ليه هتطلع صفر مش واحد

//  علشان الجافا سكريبت بشتوف الكود كده
// هنا الي حصل انها عملت هويستنج لآخر فانكشن 
// فاصبحت لغت الفانكشن الي قيمتها 1 
// علشان الأتنين نفس الأسم اتعمل over write 
// فاصبحت رقم 1 ملغيه

console.log(      m()        );
function m ()
{


    function y(){return 1}
    function y(){return 0}
    return y();
    

}


// arguments //
// ازاي اغير القيمه الأفتراضيه للبراميتر

function byeBye(name ){

    console.log(`Hello ${name}`);
}
byeBye();

// هنا لو محطتش قيمه هيطلع القيمه الأفتراضيه للباراميتر 
// وهي undefind

function byeBye1(name ='Ahmed' ){

    console.log(`Hello ${name}`);
}
byeBye1();

// هعملتلها قيمه  وطلعت مكان undenfind

function byeBye2(name ='Ahmed' ){

    console.log(`Hello ${name}`);
}
byeBye('Moustafa');

// الي بين الأقواس وانا بنادي ع البرنامج اسمه
// argument //

// هنا حددت في قيمه وانا بنادي علي البرنامج

// طيب لو عامل فانكشن فيها ارقام 

function calcAge (age) {

  console.log(age * 365); 
    
}

calcAge()
// ليه طلعت NaN
// علشان القيمه الأفتراضيه age  
// undefind
//  undefind * اي رقم 
//NaN =

//طب اعمل ايه 
// زي الي فوق بالظبط اعمل قيمه افتراضيه  بس برقم

function calcAge1 (age=0) {

    console.log(age * 365); 
      
  }
  
  calcAge1()

  // عملت القيمه الأفتراضيه لل age =0


  // طيب لما انا مش عارف عدد الباراميترس الي مكتوبه في الفانكشن 

  //  هكتب مكان البارميتر  مصفوفه
  // Array
        // Array بتتكتب هنا بالشكل ده
        // بحط 3 نقط 
  function calco(...numbers){
    console.log(numbers); 
    // واطبعها باسمها من غير النقط
  }

  calco(1,3,5,6,6,3,5,1,4,7)

  // وديه طريقة عمل function 
  // تستقبل عدد لانهائي من القيم

  // ازاي اجمع كل الأرقام الي في المصفوفه 

function total (...numbers) {
       let result = 0;
    for( i= 0; i<numbers.length; i++){
          result += numbers[i];
    }
    console.log(result);
}
total(5,2);

//Arrow function //
// الداله السهميه


//  ديه الطريقه العاديه لل أكسربشن 

let p = function (){
    return 1;
}

console.log(p());


// ازاي اعملها أرووو فانكشن
// بشيل كلمه فانكشن  واكتب بعد الأقواس =>
// بالطريقه ديه
let q =  () => {
    return 1;
}

console.log(q());

// كمان لو عندك سطر كود واحد تقدر تكتبه كده
// فقط لو فيه سطرر وااااحد فقط
// الي بعد السهم هو return
let oneLineCode = ()=> 1;
console.log(oneLineCode());

// ولو عندك بارميتر واحد فقط تقدر تشيل الأقواس

let oneParameter = num => num * 2;
console.log(oneParameter(2));