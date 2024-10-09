console.log("BASICS JS");

// !Declear variable

 // decleration by using :-   let , const , var 
// variable can be number , alphabet , $ , _
let age = 10;
console.log(age);

age = "ten";
console.log(age);

let firstChildAge = 15;
let second_child_age = 20;
console.log(firstChildAge);
console.log(second_child_age);
//-------------------------->

// let
let marks;
marks = 75;
console.log(marks);

// _______________________________________>
// const
const pi = 3.14
console.log(pi) ;

// _____________________________________________>

// var 
var myName = "ABCD"
myName = "Akash"
console.log(myName);



//===============================================================>>

//! Data Types

//  ****** 1. Primitive DataTypes   **********

//  number
 let num = 12;
 console.log(typeof num);

// string
const firstName = "Mukesh"
const lastName = 'Kumar'
const nickName = `Raj` ;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof nickName);

// Boolean
let bool = false;

// Undefined
let a ;
console.log(typeof a)
console.log(a)

// Null
let b = null;
console.log(b)
console.log(typeof b);

// symbol

// BigInt(ES2020)
let num1 = 10n
console.log(typeof num1);




// ---------------------------------------//
// ** Interesting Things **

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

console.log(Number.MAX_VALUE*10) ;

let num3 = Infinity

console.log(12/0);
console.log(0*Infinity);
console.log(Infinity/Infinity);


//==================================================================>

//    ! OPERATORS  :---

// 1. Arithematic Operator
// **** (+ , - , *, /, % , **, ++, --)  ****
  let x = 10
   x++;
   console.log(x)
   x--;
   console.log(x)

   //power
   console.log(2**3)

// 2. Assingnment 
// **** (= , += , -=, *=, /=, %=, **=)

let a1 = 2;
let b1 = 5;
 b1 += 2;
console.log(b1);

// 3. Comparision
//*** ( <, > ,<=, >= , ==, !=, ===, !==) */

console.log(5>3)
console.log(5<3)
console.log(10 == 10)
console.log(10 != 10)

console.log(5 == '5')
console.log(5 === '5')
console.log(10 !== '10');

// 4. Logical 
// ** ( && , || , !)

 console.log(true && 1);
 console.log( 0 || 7 || " " || null);
 console.log(!1);

 // 5. Bitwise 
 //**  (>>, <<, & , | , ^ , ~) */


//  =============================================================.

//  ! Types  Coercion

console.log(5+5)

let n1 = '5' + 5
console.log(typeof n1);

let fullName = "Mukesh" +" " +"kumar"
console.log(fullName)

let sub = '55' - 10
console.log(sub);

console.log('4'*2);

// =====================================================>>

// ! Types Conversion

// ***Converting to string ***** */
//Srting()
console.log(String(100));
console.log(200)
console.log(String(true));
console.log(String(null));
console.log(String(undefined));

// toString
console.log((123).toString());
console.log(true.toString());

// *** Convert to number

// Number 
console.log('**number**');
console.log(Number('25'));
console.log(Number("value"));
console.log(Number(true));
console.log(Number(false));

// Unary + operator
let m = '123abc'
console.log(+a) ;

// parseFloat
console.log(parseInt('12345f'))
console.log(parseInt('f12345'))
console.log(parseFloat('12345f'))

// parseInt
console.log(parseInt('123.45f'))

// Boolean
 console.log(Boolean(100))
 console.log(Boolean(null))
 console.log(Boolean(undefined))

 //=======================================================....

 // ! if else

 let num2 = 30
 if( num2 < 10){
    console.log(' Number is less then 10')
 }
 else{
    console.log('number is greater')
 }

 /// !Email validation
 //Input an email
 // length > 11
 // after. only 2 or 3 ch allowed
 // min 3 ch b/w @ and .
/*
 const email = prompt("Enter email");
  const emailLen = email.length;

  const dotIndex = email.lastIndexOf('.');

  const atIndex = email.lastIndexOf('@');

  const lastIndex = emailLen - 1;

  if(emailLen < 11 || lastIndex - dotIndex <2
   || lastIndex - dotIndex >3 || dotIndex - atIndex <3)
 {
    console.log('Invalid Email');
 }

*/
//=========================================================

//  ! Switch
/*
const fruits = prompt("enter name")
switch(fruits){
    case 'apple':
       console.log(" this is apple") 
        break;
   case 'kiwi':
    console.log("this is kiwi")
        break;
 case'mango':
    console.log("this is mango")
        break;
      default:  
      console.log("this is not valid")
}
console.log("outside switch");
*/
// =================================================================

// ! Ternary operator

// condition ? (true) expression : (false) expression

let num4 = 5;
num4 % 2 === 0 ? 
console.log('even')
: console.log('odd') ;
