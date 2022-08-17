function BinaryTreeLCA(strArr) { 

  // code goes here  


 let clearArray = strArr[0]
 clearArray =clearArray.match(/\d+|#/g) 

let first = parseInt(strArr[1])
let second = parseInt(strArr[2])


////////////////////////////////////////////////////

let root;
      
    class Node
    {
        constructor(data) {
           this.left = null;
           this.right = null;
           this.data = data;
        }
    }
      
    // Function to insert nodes in level order
    function insertLevelOrder(arr, i)
    {
        let root = null;
        // Base case for recursion
        if (i < arr.length) {
            root = new Node(arr[i]);
    
            // insert left child
            root.left = insertLevelOrder(arr, 2 * i + 1);
    
            // insert right child
            root.right = insertLevelOrder(arr, 2 * i + 2);
        }
        return root;
    }
    
    // Function to print tree nodes in InOrder fashion
    function inOrder(root)
    {
        if (root != null) {
            inOrder(root.left);
           
            inOrder(root.right);
        }
    }
      
    let arr = clearArray
    root = insertLevelOrder(arr, 0);
    inOrder(root);


// https://www.geeksforgeeks.org/construct-complete-binary-tree-given-array/
   

///////////////////

const findLCA= (tree,value1,value2)=>{
  let result = null     
      const lookWhereLCA =  (node) =>{

        if( node == null) return false

        let left = lookWhereLCA(node.left)
        let right = lookWhereLCA(node.right)
        let cur  = node.data ==value1 || node.data ==value2
        // console.log(node.value)
  
        if (left + right+ cur >= 2) result = node;
       

    
      return left || right ||cur
      

      }

      lookWhereLCA(tree)
    return result.data

}

return  findLCA(root,first,second)

}
   


 BinaryTreeLCA( ["[12, 5, 9, 6, 2, 0, 8, #, #, 7, 4, #, #, #, #]", "7", "6"])


