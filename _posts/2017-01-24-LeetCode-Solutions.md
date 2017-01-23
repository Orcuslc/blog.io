---
layout: post
title: Solutions to LeetCode Problems
description: C++(Mainly) and Python
image: assets/images/IMG_20161203_142432.jpg
---

## 7. Reverse integer  
We need to consider the Overflowing cases:  
if `d = a*b+c` overflows, then `(d-c)/b != a`.  
Code: (C++ Version)  

{%highlight C++%}
    class Solution {  
    public:  
        int reverse(int x) {  
            if(x > -10 && x < 10) {  
                return(x);  
            }  
            int rev = 0;  
            do {  
                rev = rev*10 + x%10;  
                x /= 10;  
            }while(x/10);  
            int rev_result = rev*10 + x;  
            if(rev != (rev_result - x)/10) { // Overflow  
                rev_result = 0;  
            }  
            return(rev_result);  
        }  
    };
{%endhighlight%} 
Result: Beat 9.77%.  

## 110. Balanced Binary Tree
Using recursion;
Code:  
```Python
    # Definition for a binary tree node.
    # class TreeNode(object):
    #     def __init__(self, x):
    #         self.val = x
    #         self.left = None
    #         self.right = None
  
    class Solution(object):
        def isBalanced(self, root):
            """
            :type root: TreeNode
            :rtype: bool
            """
            if root == None:
                return True
            if abs(self.height(root.left)-self.height(root.right))<=1:
                return self.isBalanced(root.left) and self.isBalanced(root.right)
            else:
                return False
       
        def height(self, root):
            if root == None:
                return 0
            return max(self.height(root.left), self.height(root.right))+1
```
Result: Beat 38.34%.