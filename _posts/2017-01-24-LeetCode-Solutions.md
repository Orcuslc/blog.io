---
layout: post
title: Solutions to LeetCode Problems
description: C++(Mainly) and Python
image: assets/images/IMG_20161203_142432.jpg
---

## 7. Reverse integer
要考虑到Overflow的情形:
if `d = a*b+c` overflows, then `(d-c)/b != a`.
代码如下: (C++ Version)
`class Solution {
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
};`
结果: Beat 9.77%.
