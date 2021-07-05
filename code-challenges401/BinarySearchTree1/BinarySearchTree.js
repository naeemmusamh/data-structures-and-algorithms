/* eslint-disable no-undef */
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

    //insert the Binary Search Tree
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

    //insert Binary Tree
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

    //found the max value in Binary Search Tree
    maximumValueBST(){
        let current = this.root;
        while(current.right){
            current = current.right;
        }
        return current.value;
    }

    //Fond the min value in Binary Search Tree
    minimumValueBST(){
        let current = this.root;
        while(current.left){
            current = current.left;
        }
        return current.value;
    }

    //find the max value in Binary Tree
    maxValue(){
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

    //find the second max in tree
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
        result.sort((a,b)=>a-b);
        return result[result.length -2];
    }

    //find the min value in tree
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

    //check if the value in the tree or not
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

    //remove some value from the tree if it parent it will
    //remove the children with it
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

    //remove parent node without the children
    deleteNode(value){
        this.root = this.deleteNodeHelp(this.root, value);
    }

    deleteNodeHelp(node = this.root, key){
        if(node === null){
            return null;
        }
        if(key < node.value){
            node.left = this.deleteNodeHelp(node.left, key);
            return node;
        }else if(key > node.value){
            node.right = this.deleteNodeHelp(node.right, key);
            return node;
        }else{
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }
            if(node.left === null){
                node = node.left;
                return node;
            }
            if(node.right === null){
                node = node.left;
                return node;
            }

            let currentNode = node.right;
            while(currentNode.left !== null){
                currentNode = currentNode.left;
            }
            node.value = currentNode.value;

            node.right = this.deleteNodeHelp(node.right, currentNode.value);
            return node;
        }
    }

    //return the tree value root, parent, children
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

    //return the sum of tree
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

    //invert tree from the left to right
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
        let array = [];
        let queue = [];

        if(!this.root){
            return [];
        }

        queue.push([this.root,0,true]);

        while(queue.length){
            let [node,index,shift] = queue.shift();
            if(array.length <= index){
                array.push([]);
            }

            if(!shift){
                array[index].unshift(node.value);
            }else{
                array[index].push(node.value);
            }
            if(node.left){
                queue.push([node.left,index + 1, !shift]);
            }
            if(node.right){
                queue.push([node.right, index + 1, !shift]);
            }
        }
        return array;
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

        if(left === - 1 || right === - 1 || Math.abs(left - right) > 1){
            return - 1 ;
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

    //print the longest path from the root to leaf
    longestPath(node = this.root){

        if (node === null){
            return [];
        }

        let right = this.longestPath(node.right);


        let left = this.longestPath(node.left);

        if (right.length < left.length){
            left.push(node.value);
        }else{
            right.push(node.value);
        }

        let result = ()=>{
            if(left.length > right.length){
                return left;
            }else{
                return right;
            }
        };

        return result();
    }

    //find the max path in the tree
    maxPathSum(node = this.root){
        let max = {value: -Infinity};

        this.maxChild(node, max);
        return max.value;
    }

    maxChild(node, max){
        let branchMax = 0;

        if(!node){
            branchMax = 0;
        }else{
            branchMax = node.value;
        }

        let left = 0;

        if(node.left){
            left = Math.max(this.maxChild(node.left, max), 0);
        }

        let right = 0;

        if(node.right){
            right = Math.max(this.maxChild(node.right, max), 0);
        }

        max.value = Math.max(left+branchMax, left+branchMax+right, max.value);

        branchMax = Math.max(left+branchMax, right+branchMax);

        return branchMax;
    }

    //print the leaf in the binary tree
    leafTree(node = this.root){
        let result = [];

        if(node === null){
            return;
        }

        if(node.left === null && node.right === null){
            //console.log('the leaf node in the tree is', node.value + '');
            result.push(node.value);
            console.log('the leaf in the tree is', result);
            return result;
        }

        if(node.left !== null){
            this.leafTree(node.left);
        }

        if(node.right !== null){
            this.leafTree(node.right);
        }

        return result;
    }

    //check if the binary search tree is valid or not
    validTree(){
        let data = [];

        let traverse = (node)=>{
            if(node.left){
                traverse(node.value);
            }

            data.push(node.value);

            if(node.right){
                traverse(node.right);
            }
    };

        traverse(this.root);

        let isValid = true;
        for(let x = 1; x < data.length; x++){
            if(data[x - 1] >= data[x]){
                isValid = false;
                break;
            }
        }

        return isValid;

    }

}

let list = new BinarySearchTree();

list.insertBST(15);
list.insertBST(10);
list.insertBST(20);
list.insertBST(8);
list.insertBST(12);
list.insertBST(5);
list.insertBST(18);
list.insertBST(30);

//console.log('zigzag method', list.zigzag());

//console.log('the', list.SearchForValue([15,20,10,8,18,30,5], 9));

//console.log('print the longest path', list.longestPath());

//console.log('the sum of maximum path', list.maxPathSum());

//console.log('is the binary tree valid', list.validTree());

//console.log('the second max number in tree', list.maximumValueBT());

//list.removeValueFromBT(15);

console.log(list.SearchForValue([15,10,20,8,12,18,30], 18));

//list.deleteNode(20);

//list.leafTree();

console.log(treeify.asTree(list, true));
