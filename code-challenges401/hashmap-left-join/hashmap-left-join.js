function LeftJoin(table1, table2){

    const collection = new Map();
    for(const key in table1){
        if(table2[key]){
            collection.set(key, [table1[key], table2[key]]);
        }else{
            collection.set(key, [table2], 'null');
        }
    }

    console.log('collection', collection);
    return collection;
}

module.exports = LeftJoin;

const table1 = {
    fond: 'enamored',
    wrath: 'anger',
    diligent: 'employed',
    outfit: 'garb',
    guide: 'usher',
};

const table2 = {
    fond: 'averse',
    wrath: 'delight',
    diligent: 'idle',
    outfit: 'follow',
    guide: 'jam',
};

const mapA = new Map();
for(const key in table1){
    mapA.set(key, table1[key]);
}

const mapB = new Map();
for(const key in table2){
    mapB.set(key, table2[key]);
}

LeftJoin(table1, table2);