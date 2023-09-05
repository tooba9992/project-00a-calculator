// let age : number | "died" | "unknown";
// age = 90;
// age = "died";
// age = "unknown";

// let zia : "zia"
// zia = "zia"
// console.log(age)

// let yourname = Math.random()> 0.6 ? "hira khan" : undefined 
// if(yourname)
// {
//     yourname.toUpperCase();
// }
// yourname?.toUpperCase()


// type rawdata = boolean |null | number | string | undefined;
// let data : rawdata
// type id = number | string 

// data = "airline"
// let val : rawdata;

// type Student = {
//     name : string,
//     age : number
// }


// let student : Student = {
//     name : "tooba",
//     age : 18
// }
// console.log(student)

//interfaces:-
// interface Ball {
//     diameter: number;
// }

// interface Sphere {
//     diameter: number;
// }
  
//   let ball: Ball = { diameter: 10 };
//   let sphere: Sphere = { diameter: 20 };
  
//   sphere = ball;
//   ball = sphere;
  
//   interface Tube {
//     diameter: number;
//     length: number;
//   }
//   let tube : Tube = { diameter : 13 , length : 34};
//   ball = tube


//   //fresh or stale


//   //difference between fresh and stale 

// //nested objects
// type Author = {
//     firstName: string;
//     lastName: string;
// };

// type Book = {
//     author: Author;
//     name: string;
// };
//  let book : Book  = {
//     author : {
//         firstName : "ali",
//         lastName : "khan"
//     },
//     name : "javascript",
//  }






// const myBook : Book = {
//     author: {
//         firstName: "Zia",
//         lastName: "Khan"
//     },
//     name: "My Best Book"
// }


interface Student {
    student_id: number;
    name: string;
  }
    
interface Teacher {
    teacher_Id: number;
    teacher_name: string;
}
interface rollno {
    number : number;
    section : string
}
    
type intersected_type = Student & Teacher & rollno;
    
let obj1: intersected_type = {
    student_id: 3232,
    name: "rita",
    teacher_Id: 7873,
    teacher_name: "seema",
    number : 12,
    section : "A"
};
    
console.log(obj1.teacher_Id);
console.log(obj1.name);










































  















