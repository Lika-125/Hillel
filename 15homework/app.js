const mas = [1, 2, 3, 4, 5, 6, 7];

function removeValue(value, index, arr) {
    
    if (value === 5) {
    
        arr.splice(index, 1);
        return true;
    }
    return false;
}


const x = mas.filter(removeValue);

console.log(`Масив: ${mas}`);
console.log(`Забране число: ${x}`);