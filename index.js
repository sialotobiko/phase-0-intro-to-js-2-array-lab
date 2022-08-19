// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyAppendCat(name){
    cats.push('Ralph');
  }

  function destructivelyPrependCat(name){
    cats.unshift('Bob');
  }

  function destructivelyRemoveLastCat(){
    cats.pop();
  }

  function destructivelyRemoveFirstCat(){
    cats.shift();
  }

  function appendCat(name){
    const someCats = cats.slice();
    someCats.push(name);
    return someCats;
  }

  function prependCat(name){
    const otherCats = cats.slice();
    otherCats.unshift(name);
    return otherCats;
  }

  function removeLastCat(){
    const stillOtherCats = cats.slice();
    stillOtherCats.pop();
    return stillOtherCats;
  }

  function removeFirstCat(){
    const stillSomeCats = cats.slice();
    stillSomeCats.shift();
    return stillSomeCats;
  }