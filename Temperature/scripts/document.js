 //   document.write(`
  //      <p> 2 x 0 = 0</p>
 //       <p> 2 x 1 = 2</p>
 //       <p> 2 x 2 = 4</p>
 //       <p> 2 x 3 = 6</p>
  //      <p> 2 x 4 = 8</p>
  //      <p> 2 x 5 = 10</p>
  //      <p> 2 x 6 = 12</p>
  //      <p> 2 x 7 = 14</p>
   // `);

  //  for(i=0;i<11;i++) {
  //      document.write(`<p>2 x ${i} = ${i*2} </p>`);
   // }

   function multiTable(){
    let num = prompt ("Enter the table number");
    let result = 0;

    document.write(`<h1> table of ${num} ,/h1.`); //template string
    // document.write("<h1> Table of " + num + "</h1>");//contatenation   -  these both create the same result.
   
   }

multiTable()
//arrays
let students = ["Vonde","Derrick","Christian","Nick","Tom","Brandon","Christopher","Anthony","Eduardo"];
let ages = [32,33,45,23,20,30,40,28,22];

//display on the console
// console.table(students);
// console.table(ages);
//change info

//students[5]="Brandon Merle";
for(let i=0;i<9;i++){
    document.getElementById("students").innerHTML+=`<li> ${ [i+1]} - ${students[i]} - ${ages [i]}</li>`;
}

ages[8]=20;
// console.table(ages);