var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(Ralph){
  kittens.push(Ralph);
  return kittens;
}

function destructivelyPrependKitten(Bob){
 kittens.unshift(Bob);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten() {
kittens.shift();
return kittens; 
} 

function appendKitten(name) {
  return [...kittens, ]
}