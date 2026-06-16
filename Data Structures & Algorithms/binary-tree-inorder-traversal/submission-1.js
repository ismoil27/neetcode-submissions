/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    inorderTraversal(root) {
        const res = [];
        function traverse(node){
            if (!node) return;
            if(node.left) traverse(node.left);
            res.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(root);
        return res;
        // const res = [];
        // const stack = [];
        // let curr = root;
        // while (curr || stack.length) {
        //     // go left as far as possible
        //     while(curr) {
        //         stack.push(curr);
        //         curr = curr.left;
        //     }
        //     // visit node
        //     curr = stack.pop();
        //     res.push(curr.val);
            
        //     // then go right
        //     curr = curr.right
        // }
        // return res;
    }
}
