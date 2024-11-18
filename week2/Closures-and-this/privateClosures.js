function createCounter(){
    let count = 0;
    return {
        count,
        increment(){
            this.count++
            console.log(this.count)
        },
        getCount() {
            return this.count;
        } 
    }
}
const counter = createCounter();

counter.increment();
console.log(counter.getCount());