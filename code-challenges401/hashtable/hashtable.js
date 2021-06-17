class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.root = null;
    }
    
    add(value){
        const node = new Node(value);
        if(!this.root){
            this.root = node;
        }else{
            const current = this.root;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
    }

    getValue(){
        let current = this.root;
        const output = [];
        while(current){
            output.push(current.value);
            current = current.next
        }
        return output;
    }

}

class Hashtable{
    constructor(size){
        this.size = size;
        this.table = new Array(size);
    }

    hash(key){
        const sum = key.split('').reduce((acc,v)=> acc + v.charCodeAt(0),0)
        console.log('sum:',sum);
        return (sum * 19)% this.size;
    }

    add(key,value){
        const hashed = this.hash(key);
        if(!this.table[hashed]){
            this.table[hashed] = new LinkedList();
        }
        this.table[hashed].add({[key] :value});
    }

    get(key){
        const hashed = this.hash(key);
        return this.table[hashed];
    }
}

const myhashtable = new Hashtable(1024);
myhashtable.add('firstname','naeem');
myhashtable.add('lastname','musamh');
myhashtable.get('name');

console.log('myhashedtable----',myhashtable.hashed);
console.log(myhashtable);
console.log(myhashtable.get('name'));

myhashtable.table.forEach(location=>{
    if(location){
        console.log('location ------',location.getValue());
    }
});

module.exports = Hashtable;