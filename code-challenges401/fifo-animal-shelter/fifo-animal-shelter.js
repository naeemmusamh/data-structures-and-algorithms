'use strict';

class Animals {
    constructor(type) {
        this.type = type;
        this.animalShelter = [];
    }

    enqueue(value) {
        this.animalShelter.push(new Animals(value));
    }

    dequeue(preference) {
        if (!this.animalShelter.length) {
            return null;
        } else {
            if (preference) {
                for (let i = 0; i < this.animalShelter.length; i++) {
                    if (preference === this.animalShelter[i].type) {
                        return this.animalShelter.splice(i, 1);
                    } else {
                        return this.animalShelter.shift();
                    }
                }
            }
        }
    }

}

const list = new Animals();

list.enqueue('cat');
list.enqueue('dog');
list.dequeue(); //it will no remove anything
list.dequeue('cat'); //it will remove the cat
list.dequeue('dog'); //it will remove the dog

console.log(list);