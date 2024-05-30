// enter "vanilla,vanilla,vanilla,strawberry,coffee,coffee" in prompt
let flavors = prompt("Enter your froyo flavors.", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
flavors = flavors.split(',');

console.log('An Array of your flavors:', flavors)

//array into object
let froyo = {}
for (let i = 0; i < flavors.length; i++) {
  let flavor = flavors[i].trim()
  if (!froyo[flavor]){
    froyo[flavor] = 1
  } else {
    froyo[flavor] += 1
  }
}

console.table(froyo)