let students = [
    {
        name: "vamshi",
        age: "22",
        country: "canada",
        hobbies: ['singing','dancing','bowling']
    },
    {
        name: "krishna",
        age: "23",
        country: "india",
        hobbies: ['drawing','painting','cycling']
    },
    {
        name: "janavi",
        age: "20",
        country: "australia",
        hobbies:['eating','dancing','reading books']
    },
    {
        name: "ramya",
        age: "34",
        country: "italy",
        hobbies:['reading novels','playing games ','singing']
    }
];

function displayAge(students){
    console.log("people with age less than 30");
    console.log("_______________________________________________");
   students.forEach(Element =>{
       if(Element.age<30)
       {
           console.log(Element);

       }
   });
}
function displayCountry(students){
    console.log("people with country as India");
    console.log("__________________________________________________");
   students.forEach(Element =>{
       if(Element.country =="India"){
           console.log(Element);

       }
   }); 
}
displayAge(students);
displayCountry(students);