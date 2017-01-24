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
{%highlight Python%}
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
{%endhighlight%}
Result: Beat 38.34%.

## 415. Add strings
Code:(C++ Version)  
{%highlight C++%}
class Solution {
public:
    string addStrings(string num1, string num2) {
        int len1 = num1.size(), len2 = num2.size();
        if(len1 < len2) {
            return(_addStrings(num2, num1, len2, len1));
        }
        else {
            return(_addStrings(num1, num2, len1, len2));
        }
    }
    
    string _addStrings(string long_string, string short_string, int long_len, int short_len) {
        int carry = 0, i = long_len - 1, j = short_len - 1;
        string res = "";
        while(i >= 0 || carry) {
            int sum = 0;
            if(i >= 0) {
                sum += long_string[i] - '0';
                i--;
            }
            if(j >= 0) {
                sum += short_string[j] - '0';
                j--;
            }
            sum += carry;
            carry = sum / 10;
            sum = sum % 10;
            res = res + to_string(sum);
        }
        reverse(res.begin(), res.end());
        return(res);
    }   
};
{%endhighlight%}
Result: Beat 12.18%.