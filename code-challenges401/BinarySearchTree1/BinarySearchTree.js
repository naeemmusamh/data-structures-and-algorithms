/* eslint-disable no-constant-condition */
const treeify = require('treeify');

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insertBST(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while(true){
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }else{
                    current = current.left;
                }
            }else if(value > current.value){
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }else{
                    current = current.right;
                }
            }
        }
    }

    insertArray(array){
        if(array.length === 0){
            return null;
        }

        if(array.length === 1){
            return new Node(array[0]);
        }

        let centerArray = Math.floor(array.length / 2);
        let root = new Node(array[centerArray]);

        let leftSubTree = array.slice(0, centerArray);
        root.left = this.insertArray(leftSubTree);

        let rightSubTree = array.slice(centerArray + 1, array.length);
        root.right = this.insertArray(rightSubTree);

        return root;
    }

    maximumValueBST(){
        let current = this.root;
        while(current.right){
            current = current.right;
        }
        return current.value;
    }

    minimumValueBST(){
        let current = this.root;
        while(current.left){
            current = current.left;
        }
        return current.value;
    }

    maximumValueBT(){
        let result = [];
        let traverse = (node)=>{
            if(node.left){
                traverse(node.left);
            }
            if(node.right){
                traverse(node.right);
            }
            result.push(node.value);
        };
        traverse(this.root);
        return Math.max(...result);
    }

    minimumValueBT(){
        let result = [];
        let traverse = (node)=>{
            if(node.left){
                traverse(node.left);
            }
            if(node.right){
                traverse(node.right);
            }
            result.push(node.value);
        };
        traverse(this.root);
        return Math.min(...result);
    }

    searchValueInBS(value){
        let current = this.root;
        while(current){
            if(value === current.value){
                return true;
            }
            if(value < current.value){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return false;
    }

    removeValueFromBT(value){
        this.root = this.removeNode(this.root, value);
    }

    removeNode(node, key){
        if(node === null){
            return null;
        }else if(key < node.value){
            node.left = this.removeNode(node.left, key);
            return node;
        }else if(key > node.value){
            node.right = this.removeNode(node.right, key);
            return node;
        }else{
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }
            if(node.left === null){
                node = node.right;
                return node;
            }
            if(node.right === null){
                node = node.right;
                return node;
            }
        }
    }

    breadthFirst(){
        let result = [];
        let current = this.root;
        let node = [this.root];

        while(node.length){
            current = node.shift();
            result.push(current.value);
            if(current.left){
                node.push(current.left);
            }
            if(current.right){
                node.push(current.right);
            }
        }
        return result;
    }

    //root, left, right
    preOrder(){
        let result = [];
        let traverse = (node)=>{
            result.push(node.value);
            if(node.left){
                traverse(node.left);
            }
            if(node.right){
                traverse(node.right);
            }
        };
        traverse(this.root);
        return result;
    }

    //left, root, right
    inOrder(){
        let result = [];
        let traverse = (node)=>{
            if(node.left){
                traverse(node.left);
            }
            result.push(node.value);
            if(node.right){
                traverse(node.right);
            }
        };
        traverse(this.root);
        return result;
    }

    //left, right , root
    postOrder(){
        let result = [];
        let traverse = (node)=>{
            if(node.left){
                traverse(node.left);
            }
            if(node.right){
                traverse(node.right);
            }
            result.push(node.value);
        };
        traverse(this.root);
        return result;
    }

    totalOfTree(){
        let sum = 0;
        let result = [];
        let traverse = (node)=>{
            if(node.left){
                traverse(node.left);
            }
            if(node.right){
                traverse(node.right);
            }
            result.push(node.value);
        };
        traverse(this.root);
        for(let x =0; x < result.length; x++){
            sum += result[x];
        }
        return sum;
    }

    invertTree(){
        let reverseTree = (node)=>{
            if(!node){
                return;
            }

            reverseTree(node.left);
            reverseTree(node.right);

            let traverse = node.left;
            node.left = node.right;
            node.right = traverse;
        };

        return reverseTree(this.root);
    }

    zigzag(){
        let result = [];
        let traverse = (node, level)=>{
            if(!node){
                return;
            }
            if(result[level]){
                result[level].push(node.value);
            }else{
                result[level] = [node.value];
            }

            traverse(node.left, level + 1);
            traverse(node.right, level + 1);
        };

        traverse(this.root, 0);
        result.map((bucket, index)=>{
            if(index % 2){
                return bucket.reverse();
            }else{
                return bucket;
            }
        });
    }

    maxDepth(){
        let maxTree = (node, sum)=>{
            if(!node){
                return sum;
            }

            return Math.max(maxTree(node.left, sum + 1), maxTree(node.right, sum + 1));
        };
        return maxTree(this.root, 0);
    }

    MinDepth(){
        let current = this.root;
        let queue = [];

        if(current === null){
            return null;
        }

        queue.push(current);
        let depth = 0;

        while(queue.length !== 0){
            let numberNode = queue.length;
            while(numberNode > 0){
                let currentNode = queue.shift();
                if(currentNode.left === null && currentNode.right === null){
                    depth ++;
                    return depth;
                }
                if(currentNode.left !== null){
                    queue.push(currentNode.left);
                }
                if(currentNode.right !== null){
                    queue.push(currentNode.right);
                }
                numberNode++;
            }
            depth++;
        }
    }

    treeBalance(){
        let current = this.root;
        if(current === null){
            return false;
        }

        return this.getHight(current) !== -1;
    }

    getHight(node){
        if(node !== null){
            return 0;
        }

        let left = this.getHight(node.left);
        let right = this.getHight(node.right);

        if(left === -1 || right === -1 || Math.abs(left - right) > 1){
            return -1
        }

        return Math.max(left, right) + 1;
    }

    unique(number){
        if(number <= 0){
            return 0;
        }

        let dp = [1];

        for(let x = 1; x <= number; x++){
            let counter = 0;
            for(let y = 1; y <= x; y++){
                counter += dp[y -1] * dp[x - y];
            }
            dp[x] = counter;
        }
        return dp[number];
    }

    //search in the Tree for value if it find return the length from the tree
    //if not exist find the correct place for it
    SearchForValue(array, target){
        let i = 0;
        let j = array.length - 1;

        while(i <= j){
            let middle = Math.floor((i + j) / 2);

            if(array[middle] === target){
                return middle;
            }else if(array[middle] < target){
                i = middle - 1;
            }else{
                j = middle - 1;
            }
        }
        return j + 1;
    }

}

let list = new BinarySearchTree();

console.log(treeify.asTree(list, true));