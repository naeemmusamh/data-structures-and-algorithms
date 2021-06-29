const airport = 'Pandora Arendelle Monstropolis Naboo Narnia Metroville'.split(' ');

const routes = [
    ['Pandora','Arendelle'],
    ['Arendelle','Metroville'],
    ['Arendelle','Monstropolis'],
    ['Metroville','Narnia'],
    ['Metroville','Naboo'],
    ['Monstropolis','Naboo'],
    ['Naboo','Narnia'],
    ['Monstropolis','Metroville'],
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

function breadthFirst(start){
    const visited = new Set();

    const queue = [start];

    while(queue.length){
        const airport = queue.shift();

        let destinations = adjList.get(airport);

        for (let destination of destinations){

            if(!visited.has(destination)){
                visited.add(destination);
                queue.push(destination);
            }
        }
    }
    console.log(visited);
}

breadthFirst('Pandora');