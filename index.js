// const colleagues = [
//     ["Jack","Yonela","Nthabi", "Khosatho"," Mbali"], 
//     [20,24,27,29,25],
//     ["bmw"," mercedes","polo","jeep", "mercedes"],
//     ["Soweto","Brixton","Randburg","Mamelodi"," Evander"]
    
// ];

// console.log(colleagues);

// const details  = [ {   
    
//     names:"Mbali",
//     surname: "Nyalungu",
//     age: 24,
//     isMale: "NO"},


//     {

//     names:"life",
//     surname: "Nkosi",
//     age: 24,
//     isMale: "NO",


// },

// {  names:"lolo",
// surname: "Zulu",
// age: 24,
// isMale: "NO",


// },


// ]

//  const products = [
  
//     { productName : "mac",
//         serialNumber: 998,
//         yearModel: 2022,
//         model: 2,

        
//     },

//  {
//     productName : "hauwei",
//         serialNumber: 875,
//         yearModel: 20,
//         model: 2,
//     },

//         {

//         productName : "hisense",
//         serialNumber: 665,
//         yearModel: 2014,
//         model: 2,
//         }],



//     const fruit = [

//     { name: "mango",
//        sugarlevel: "high",
//     calories: "1 gram",
//     season: "summer",
// },



//     { name: "orange",
//        sugarlevel: "low",
//     calories: "1 gram",
//     season: "winter",
// },

// { name: "pear",
// sugarlevel: "low",
// calories: "1 gram",
// season: "summer",
// },
//     ]


const beauty =  [  person1  = { name: "Zozibini",
                    surname: "Tunzi",
                    age:  30,
                    location: "Eastern Cape",

                    greet: () => {
                        console.log( "Good day my name is " + person1.name +  " " + person1.surname);
                    },

                
                    personAge: () => {

                    console.log ("I am " + person1.age  + " years old "  );
                },

                personLocation: () => {

                    console.log ("I am from " +  person1.location  );


                }
            },



                


               

      person2 = {      name: "Shudufhadzo",
                    surname: "Musida",
                    age:  29,
                   location: "Limpopo",
            

            greet: ()  => {
                console.log( "Good day my name is " + person2.name +  " " + person2.surname);
            },
            
            personAge: () => {

            console.log("I am " + person2.age  + " years old ")
        },

        personLocation: () => {

            console.log ("I am from "  +  person2.location  )


        }
       },





           person3 = { name: "Ndavhi",
                    surname: "Nokeri",
                    age:  25,
                    location: "Limpopo",

                    greet: () => {
                        console.log( "Good day my name is " + person3.name +  " " + person3.surname);
                    },
                    
                    personAge: () =>{
        
                    console.log ("I am " + person3.age  + " years old "  )
                },
        
                personLocation: ()=>{
        
                    console.log ("I am from " +  person3.location  )
        
        
                }
            },
            
           person4 = { name: "Natashia",
                    surname: "Joubert",
                    age:  27,
                    location: "Cape Town",
                    greet: () =>{
                  
                        console.log( "Good day my name is " + person4.name +  "" + person4.surname);
                    },
                    
                    personAge: () => { 
        
                    console.log ("I am " + person4.age  + " years old "  )
                },
        
                personLocation:() => {
        
                    console.log ("I am from " +  person4.location  )
        
        
                }
            },

            

           person5 = { name: "Lalela",
                    surname: "Mswana",
                    age:  27,
                    location: "Kwazulu-Natal",

                    greet: ()=> {
                        console.log( "Good day my name is " + person5.name +  " " + person5.surname)
                    },

                    personAge: () => {
                        console.log ("I am " + person5.age  + " years old "  )
                    }
                    ,
        
                personLocation: () => {
        
                    console.log ("I am from " +  person5.location  )
        
        
                }
                    }

            
        ];
 console.log(person1.greet())
console.log(person1.personAge())
console.log(person1.personLocation())
console.log(person2.greet())
console.log(person2.personAge())
console.log(person2.personLocation())
console.log(person3.greet())
console.log(person3.personAge())
console.log(person3.personLocation())
console.log(person4.greet())
console.log(person4.personAge())
console.log(person4.personLocation())
console.log(person5.greet())
console.log(person5.personAge())
console.log(person5.personLocation());




        
//        const cars = [ car1 = {  yearModel: 2017,
//                     type: "mini cooper",
//                     price: 22000,
//                     isHybrid: "true",
//                     origin:  "brtish",
//                     kilometre: 5000,

                    

//                     myCar: ()=> {
//                         console.log("my car is " + car1.type  + "the price is " + car1.price);
//                     },


                    
//                    iCan:  ()=>{
//                     if(car1.kilometre >= 10000 ){
//                         console.log( "you can't buy" );
//                     }
        
//                     else{
//                         console.log ("you can buy")
                        
//                     }
//                 },

//                 isCar: ()=>{
//                     console.log(" Is car hybrid " + car1.hybrid + " and the origin of the car is " + car1.origin) ;
//                 },

                    



//                 },

            

       

//       car2 = {  yearModel: 2018,
//         type: "bmw",
//         price: 15000,
//         isHybrid: "false",
//         origin:  "England",
//         kilometre: 9000,


//         myCar: ()=> {
//             console.log("my car is " + car2.type  + "the price is " + car2.price);
//         },


        
//        iCan: ()=>{
//         if(car2.kilometre >= 10000 ){
//             console.log( "you can't buy" );
//         }

//         else{
//             console.log ("you can buy");
            
//         }
//     },

//     isCar: () =>{
//         console.log(" Is car hybrid " + car2.hybrid + " and the origin of the car is " + car2.origin) ;
//     },

// },



    

        
        


// car3 = {  yearModel: 2018,
//     type: "Mercedes",
//     price: 50000,
//     isHybrid: "true",
//     origin:  "USA",
//     kilometre: 20000,

                    

//                     myCar: ()=> {
//                         console.log("my car is " + car3.type  + "the price is " + car3.price);
//                     },


                    
//                    iCan:  ()=> {
//                     if(car3.kilometre >= 10000 ){
//                         console.log( "you can't buy" );
//                     }
        
//                     else{
//                         console.log ("you can buy")
                        
//                     }
//                 },

//                 isCar: ()=> {
//                     console.log(" Is car hybrid " + car3.hybrid + " and the origin of the car is " + car3.origin) ;
//                 },


//             },
          

    





// ];
// console.log(car1.myCar()),
// console.log(car1.isCar()),
// console.log(car1.iCan());
// console.log(car2.myCar()),
// console.log(car2.isCar()),
// console.log(car2.iCan());
// console.log(car3.myCar()),
// console.log(car3.isCar()),
// console.log(car3.iCan());


