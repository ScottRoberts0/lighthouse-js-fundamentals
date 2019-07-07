const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var x = 0;
while(x < ingredients.length){
  console.log(ingredients[x]);
  x ++;
}
console.log("\n");
// Write a for loop that prints out the contents of ingredients:
for(var i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\n");
for(var j = ingredients.length -1; j >=0; j--){
  console.log(ingredients[j]);
}