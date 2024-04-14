//Data Type : Array

let names = [ "ahmed" , "ali" , "mazen" , "omar"]
console.log(names); // طباعه Array بالطريقه العاديه
console.log(names[0],names[1],names[2])// بطبع المصفوفه وتبدأ من 0
console.log(names.length-1); // بنعد زي string
console.log(names[names.length-1]); // هتوصلني للعنصر الي اخد رقم 3 وهو هنا omar علشان اخر عنصر في المصفوفه

// Array  عباره عن 
// object  تقدر تضيف جواها  اي شي 

// هنا dataType المضافه
// Numbers + String + Boolean + undefined + null + مصفوفه جوا المصفوفه

let array1 = [1,2,3,"Ahmed",true,false,undefined,null,[1,2,3],["mazen","ali"]]
console.log(array1);

// كل علامه , بتمثل اندكس لوحده
// مثال

console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);
console.log(array1[4]);
console.log(array1[5]);
console.log(array1[6]);
console.log(array1[7]);
console.log(array1[8]);
console.log(array1[9]);

//--------///
// علشان اوصل لأندكس مصفوفه جوا مصفوفه

console.log(array1[9][1]);
console.log(array1[8][1]);
// المصفوفه الي جوا المصفوفه اسمها
// Nested Array

// مثال علي nested array            3 بالنسبه للرئيسيه       
            // let array2 = [1,2,3,       [4,5,6,           [7,8,9] ] ]
                           //0,1,2         0,1,2             0,1,2

  let array2 = [1,2,3,[4,5,6,[7,8,9]]]
// عاوز اطبع رقم 8
//  يعني هدخل علي اول واحده وبعدين ادخل علي الثانيه وثم الثالثه
console.log(array2[3][3][1]); 

// طيب عاوز اطبع رقم 7

console.log(array2[3][3][0]);

// طيب عاوز اطبع رقم 5
console.log(array2[3][1]);

// التعديل في Array

let names2 = ['mohamed', 'ahmed' , 'ali'];
            //  0            1       2

 console.log(names2 );
//  هنا طبعت المصفوفه عاديه قبل التعديل


// غيرت قيمه اول عنصر 

names2 [0]= 'moustafa';

console.log(names2 );

//  هنا غيرتها كلها 
// طيب انا كنت مغير اول عنصر المفروض ميتأثرش  لا بالعكس هو بيتأثر بس بأخر قيمه اخدها علشان كده شال  moustafa وحط shaker

names2 [0] = 'Shaker';
names2 [1] = 'Yasser';
names2 [2] = 'Abdo';
console.log(names2 );

// اضافه عنصر في المصفوفه


// ملحوظه اقدر اضيف اي عدد  من العناصر باستخدم  ,

// push بيضيف  في نهايه array

names2.push('Salama','Haidy')

console.log(names2);



// Unshift بيضيف في بدايه المصفوفه

names2.unshift('Suzan','Sheren')

console.log(names2);


// حذف عناصر من Array
// Shift بتمسح من البدايه وبتحتفظ بيها


console.log(names2.shift());   
console.log(names2);

// pop  مسح عنصر من نهايه المصفوفه وتحتفظ بيه
console.log(names2.pop());   
console.log(names2);

// حذف من منتصف  Array

// Splice
names2.splice(0, 1)  // اول رقم ده الي بحدد بدايه الحذف
console.log(names2);

// وكمان بتقدر تضيف عناصر من خلالها

names2.splice(0,1,'mahdy','mona') // هنا حذفت اول عنصر وضفت بعده
console.log(names2);

// لو مش عاوز احذف اي حد واضيف بس
// بتشتغل ازاي   
// splice  ( Start , count , add ,add )
// يعني اول قيمه البدايه وبعدين ابدأ أعد واضيف براحتي
names2.splice(0,0,'Fady','Azaa')
console.log(names2);


// slice  (Start , end)
// يعني بتاخد قطعه ليها بدايه ونهايه

names2.slice(0,3) // هنا قطع من اول المصفوفه لحد رقم 2

// يعني هقطع 0 1 2
// رقم 2 not include


console.log(names2);
// مش هتلاقي نتيجه  ليه ؟؟ علشان مش بتأثر علي المصفوفه اصلا 
// دي بتاخده زي نسخه منها 

// نجرب نطبعها هي بس ونشوف
console.log(names2.slice(0,3)); 
// وفعلا هنا قطعت اول 3 عناصر من المصفوفه



//----------------//

// البحث في المصفوفه //

// indexOf

console.log(names2.indexOf('moustafa')); //  -1 ليه علشان الأسم ده مش موجود
console.log(names2.indexOf('Fady')); // موجود وطلع رقم الأندكس 
console.log(names2.indexOf('mona'));// موجود وطلع رقم الأندكس 
console.log(names2.indexOf('Fady',1)); // هبحث من بدايه الرقم الي انا محدده  هيطلع  بالسالب لآن الأسم ده  اندكس 0 وهو بداُ من واحد

//lastIndexOf
//بتبحث من الأخر المصفوفه زي وضعها في الأسترنج
console.log(names2.lastIndexOf('Azaa',-1));  // -1 معناه اخر عنصر في المصفوفه

// includes
// بتدور وترجع true / flase

console.log(names2.includes('mona'));  // هنا لاقيتها وطلعت True
console.log(names2.includes('moustafa')); // هنا ملقتش حاجه وطلعت False

// طريقه عرض Array
// reverse  بتعرض المصفوفه معكوسه

let names3 = [ 'moustafa', 'Hadi' ,'lobna', 'saber','gaber']
console.log(names3);
console.log(names3.reverse());
// عرض المصفوفه بالترتيب الأبجدي
console.log(names3.sort());
// وكذلك الأرقام 
let numbers1= [7,8,6,3,9]
console.log(numbers1);

console.log(numbers1.sort());
// عرض المصفوفه بالترتيب
console.log(numbers1.reverse());


// دمج المصفوفات

let z= ['said', 'mohsen' , 'mahmoud']
let y = ['fakhery', 'boraei' , 'talal']

// this  
// z = z + y;
// console.log(z);
// or

// z += y;

//  بس هنا للأسف هيطلع الناتج String مش Array
// console.log(z);
// console.log(typeof z);

// الدمج الصح بقي

console.log(z.concat(y));

// طيب ينفع اضيف اي شي  كلمه او حرف او رقم 
// ايوه ينفع
console.log(z.concat(y,'moustafa',1));

// لتحويل array 
// الي  string
// join استخدم
console.log(typeof z); // هنا قبل التحويل object
console.log(typeof z.join()); // وهنا حولها string

// واقدر اغير شكل الكوما
console.log(z.join());

//بعد التعديل
console.log(z.join('-'));
console.log(z.join('#'));
console.log(z.join('_'));
