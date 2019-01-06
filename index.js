var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(Ralph){
  kittens.push(Ralph);
  return kittens;
}

function destructivelyPrependKitten(Bob){
 kittens.unshift(Bob);
  return kittens;
}

function destructivelyRemoveLastKitten(Garfield) {
  kittens.pop(Garfield)
  return kittens
}