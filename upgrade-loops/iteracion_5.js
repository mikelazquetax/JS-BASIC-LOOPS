const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

var i = 0;
for(value of placesToTravel){
    
 if(value.id == 11 || value.id == 40){
     placesToTravel.splice(placesToTravel.indexOf(value),1)
     i = 0
 }else{
    i = i + 1
    continue
 }

}
console.log(placesToTravel)

