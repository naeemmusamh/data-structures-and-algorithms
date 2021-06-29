/* eslint-disable no-unused-vars */
class Edge {
    constructor(vertex, weight){
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Vertex {
    constructor(value){
        this.value;
    }
}

class Graph{
    constructor(){
        this.AdjList = new Map();
    }

    addVertex(vertex){
        if(!this.AdjList.has(vertex)){
            this.AdjList.set(vertex, []);
        }else{
            throw 'Already Exist!!!!';
        }
    }

    addEdge(vertex, node){
        if(this.AdjList.has(vertex)){
            if(this.AdjList.has(node)){
                let array = this.AdjList.get(vertex);
                if(!array.includes(node)){
                    array.push(node);
                }
            }else{
                throw `can't add non-existing to vertex ${node}`;
            }
        }else{
            throw `you should add ${vertex} first`;
        }
    }

    getNeighbors(vertex){
        if(!this.AdjList.has(vertex)){
            throw `vertex doesn't exist`;
        }else{
            return this.AdjList.get(vertex);
        }
    }

    print(){
        for (let [key, value] of this.AdjList){
            console.log(key, value);
        }
    }
}

const myGraph = new Graph();
let array = [0,1,2,3,4,5];

for(let x =0; x < array.length; x++){
    myGraph.addVertex(array[x]);
}

myGraph.addEdge(0,1);
myGraph.addEdge(0,3);
myGraph.addEdge(0,4);
myGraph.addEdge(1,2);
myGraph.addEdge(3,4);
myGraph.addEdge(4,5);
myGraph.addEdge(4,3);
myGraph.addEdge(3,5);
myGraph.addEdge(2,5);
myGraph.print();