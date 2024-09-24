// Implement the RandomizedSet class:

// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.

class RandomizedSet {
    constructor() {
        this.data = new Set([]);
    }
    insert(item) {
        if(!this.data.has(item)){
            this.data.add(item);
            return true;
        }
        return false;
    }
    remove(item) {
        if (this.data.has(item)) {
            this.data.delete(item);
            return true;
        }
        return false;
    }
    getRandom(){
        const randomIndex = Math.floor(Math.random()*this.data.size)
        return[...this.data][randomIndex]
    }
};


// class RandomizedSet {
//     constructor() {
//         this.data = []
//     }
//     insert(item) {
//         if (!this.data.includes(item)) {
//             this.data.push(item)
//             return true;
//         }
//         return false;
//     }
//     remove(item) {
//         const index = this.data.indexOf(item)
//         if (index !== -1) {
//             this.data.splice(index,1)
//             return true;
//         }
//         return false;
//     }
//     getRandom(){
//         const randomIndex = Math.floor(Math.random()*this.data.length)
//         return this.data[randomIndex]
//     }
   
// };


