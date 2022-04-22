const arrey = [1,2,3,4,5,6,7];

console.log(arrey);

function add(arrey, i){
    return i ===0 ? arrey[i] : arrey[i] + add(arrey, --i);
}
console.log(add(arrey,5))