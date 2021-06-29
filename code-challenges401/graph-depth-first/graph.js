const airport = 'A B C D E F H G'.split(' ');

const routes = [
    ['A','B'],
    ['A','D'],
    ['B','C'],
    ['B','D'],
    ['C','G'],
    ['D','E'],
    ['D','H'],
    ['D','F'],
    ['F','H'],
];

const adjList = new Map();

function addNode(airport){
    adjList.set(airport, []);
}

function addEdge(origin, destination){
    adjList.get(origin).push(destination);
    adjList.get(destination).push(origin);
}

airport.forEach(addNode);
routes.forEach(route => addEdge(...route));

function print(){
    for (let [key, value] of adjList){
        console.log(key, value);
    }
}

print();

function depthFirst(start, visited = new Set()){
    console.log(start);

    visited.add(start);

    const destinations = adjList.get(start);

    for(const destination of destinations){
        if(!visited.has(destination)){
            depthFirst(destination, visited);
        }
    }
}

depthFirst('A');