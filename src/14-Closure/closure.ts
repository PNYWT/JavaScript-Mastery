function makeAdder(value: number) {
    let total = 0;
    return function() {
        total += value;
        return total;
    };
}

const addFive = makeAdder(5);
console.log(addFive()); // 5
console.log(addFive()); // 10


function createCounter() {
    let count = 0;
    
    function increment() {
        count++;
    }
    
    function decrement() {
        count--;
    }
    
    function reset() {
        count = 0;
    }

    function getConut() {
        return count;
    }
    
    return {
        increment,
        decrement,
        reset,
        getConut
    };
}

const counter = createCounter();
counter.increment();
console.log(counter.getConut());
counter.increment();
console.log(counter.getConut());