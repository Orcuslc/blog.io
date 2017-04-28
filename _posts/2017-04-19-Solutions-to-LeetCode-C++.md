---
title: Solutions to LeetCode with C++
category: solutions
tag: [algorithm]
---
## Code for each problem: [GitHub](https://github.com/Orcuslc/Learning/tree/master/LeetCode)  

- (1) Two sum: Quicksort+Binary Search, Beat 100% cpp submissions;
- (542) 01 Matrix: BFS using queue; Beat 60.72% cpp submissions;
- (2) Add two numbers: save the result in the long linked list; Beat 78.48% cpp submissions;
- (413) Arithmetic Slices: Dynamic Programming; Beat 15.54% cpp submissions;
- (445) Use stacks to simulate the reversing of linked lists; Beat 20.60% cpp submissions;(测试了vector的表现, Beat 17.08% cpp submissions).


- (561) 用反证法即可知, 只需升序排序后将每组的第一个数相加即可
- (461) 位运算233333
- (557) use `stringstream` class to handle i/o. (in fact it is okay to use stack/vector)
- (500) Keyboard Row: use `unordered_set`, Beat 2.79%; use `map`, Beat 71.72%;
- (3) Longest substring without repeating: DP with a hashmap saving the location info; Beat 79.09%;
- (4) Median of two sorted arrays: 维护两个长度相等的部分, 每次搜索时把一个数从一个部分移至另一个部分, 再进行二分查找. 这两个部分满足: 左边部分的最大值小于等于右边部分的最小值


- (8) String to Integer: F**King test cases