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


- (4) Median of two sorted arrays: 维护两个长度相等的部分, 每次搜索时把一个数从一个部分移至另一个部分, 再进行二分查找. 这两个部分满足: 左边部分的最大值小于等于右边部分的最小值. Beat 79.80%;
- (5) DP; 记录以第i个元素为中心的长度. 记得处理连续的重复值. Beat 77.37%;

- (13. Roman to Integer): 从右向左处理. Beat 66.28%.
- (12. Integer to Roman): 写出10进制的Roman Number即可. Beat 72.06%;

- (476. Number Complement ): Bit operation; Beat 35.46%;
- (412. Fizz Buzz ): Iteration; Beat 10.67%;
- (496. Next Greater Element I ): 先对nums2找其每个元素的Next greater element, 方法为维护一个stack和一个unordered_map:
	1. 顺序遍历nums2, 对每个数, 循环: 如果它比当前栈顶元素大, 则pop栈顶
	2. unordered_map[栈顶] = 当前遍历元素.
Beat 63.33%;
- (463. Island Perimeter ): iteration; Beat 32.64%;
- (485. Max Consecutive Ones ): dp; Beat 15.80%;
- (136. Single Number ): XOR, a^b^a = b; Beat 36.16%;

- (521. Longest Uncommon Subsequence I ): trivial; Beat 3.19%;
