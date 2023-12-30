const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
return  cats.push(name);
}
function destructivelyPrependCat(name){
    return  cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    return  cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    return  cats.shift(name);
}

function appendCat(name){
    const copyofCats = [...cats, name];
    return copyofCats
} 
function prependCat(name){
    const copyofCats1 = [name, ...cats];
    return copyofCats1
}
function removeLastCat(){
    const copyofCats2 = cats.slice(0,2);
    return copyofCats2
}
function removeFirstCat(){
    const copyofCats3 = cats.slice(1,3)
    return copyofCats3
}