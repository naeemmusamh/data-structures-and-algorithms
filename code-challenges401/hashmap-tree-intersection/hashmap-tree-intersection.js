function intersectionTree(a,b){
    const map = new Map();

    const output = [];

    const traverse = (root, callback)=>{
        if(!root){
            return null;
        }

        traverse(root.left, callback);
        traverse(root.right, callback);
        callback(root.value);
    };

    const createMap = (value)=>{
        if(!map.get(value)){
            return map.set(value, true);
        }
    };

    const checkValue = (value)=>{
        if(map.get(value)){
            return output.push(value);
        }
    };

    traverse(a.root, createMap);
    traverse(b.root, checkValue);
    return output;
}

module.exports = intersectionTree;