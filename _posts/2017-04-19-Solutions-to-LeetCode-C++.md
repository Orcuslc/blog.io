
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

- (8) String to Integer: F**King test cases

- (11) Container with most water: Assume min(a[i], a[j]) = a[i], then min(a[i], a[k]) <= a[i], for each k;

- (575) Distribute Candies: Min(num_type, length/2); Beat 64.70%;
- (566) Reshape the Matrix: Trivial; Beat 17.84%;

- (14. Longest Common Prefix): simple compare; Beat 39.19%;
- (17. Letter Combinations of a Phone Number): Iterative; Beat 1.65%;
- (21. Merge Two Sorted Lists): Beat 28.66%;
- (24. Swap Nodes in Pairs ): use recursion instead of iterating; Beat 0.36%;
- (46. Permutations ): Use recursion; Beat 84.39%;

- (20. Valid Parentheses ): use stack; Beat 14.13%;
- (22. Generate Parentheses ): recursion; Beat 13.97%;

- (19. Remove Nth Node From End of List ): use two pointers to point to (the end of list) and (the n_th last node of the list); Beat 60.74%;
- (27. Remove Element ): iteration; Beat 74.79%;
- (26. Remove Duplicates from Sorted Array ): iteration; Beat 76.41%;

- (344. Reverse String ): use `swap()`: Beat 19.37%; use `stringstream`: Beat 19.37%; use `reverse`: Beat 30.45%;

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

- (598. Range Addition II ): return min(m)*min(n); Beat 28.57%;
- (389. Find the Difference ): compare count; Beat 68.11%;
- (167. Two Sum II - Input array is sorted ): trivial; Beat 28.78%;
- (128. Longest Consecutive Sequence ):

- (517. Super Washing Machines ): 假设可以进行操作: 对于每一个元素, 起所需要的操作次数为
	1. 将其左边的项移至右边, 或将右边移至左边
	2. 将它自身移至左右两边
	以保持左右两边的平衡; Beat 25.00%;

- (520. Detect Capital ): trivial; Beat 40.08%
- (599. Minimum Index Sum of Two Lists ): 
	1. add a punishing weight(negative) to each value, the weight should be <= sum of size of two lists. Then the single ones should have a larger sum then double ones;
	2. use unordered_map and compare in the last. Beat 42.00%;

- (442. Find All Duplicates in an Array ): Fantastic Solutions!!!
	1. Sort, O(n) time and O(1) space; Beat 6.85%;
	2. 遍历一遍列表, 对于每一个数i \in (1~n), 如果大于0则将列表中第i个数乘以-1. 遍历时检查, 如果第i个数为负数了, 则i为重复的数. Beat 96.01%;
- (448. Find All Numbers Disappeared in an Array ): same as 442; Beat 77.90%;

- (42. Trapping Rain Water ): use a stack to remember left edges, compute each layer with the stack; Beat 63.24%;
- (128. Longest Consecutive Sequence ): dynamic programming; unordered_map存储包含i的最大序列长度. 每次更新时:
	1. 如果i已存在, 则略过
	2. 否则, 更新mp[i]的数据为mp[i-1]+mp[i+1]+1, 更新dp为max(dp, mp[i]);
	3. 更新连续序列端点mp[i-mp[i-1]], mp[i+mp[i+1]]的数据为mp. (中间的无需更新).
	Beat 10.80%;

- (50. Pow(x, n) ): 
	1. Recursive; notice the INT_MIN for n; Beat 93.31%
	2. Iterative; Beat 29.63%;
- (593. Valid Square ): Judge the four triangles are Right-Angle Isosceles triangles or not. Beat 24.46%.
- (121. Best Time to Buy and Sell Stock ): trivial; Beat 16.33%.
- (257. Binary Tree Paths ): DFS; Beat 29.00%.

- (43. Multiply Strings ): trivial; Beat 76.79%;
- (66. Plus One ): trivial; Beat 18.72%;
- (402. Remove K Digits ): Using stack; while(1): remove a latter digit if it is larger than its prodecessor. Beat
- (112. Path Sum ): dfs; Beat 26.51%;
- (111. Minimum Depth of Binary Tree ): dfs; Beat 74.54%;

- (506. Relative Ranks ): sort; Beat 62.42%;
- (9. Palindrome Number ): split a number by half and compare the two parts; notice: negative numbers are not palindrome numbers; Beat 9.97%;
- (617. Merge Two Binary Trees ): recursion; Beat 26.00%;
- (606. Construct String from Binary Tree ): recursion; Beat 58.22%;
- (455. Assign Cookies ): greedy; Beat 37.61%;

- (371. Sum of Two Integers ): bit operation; Beat 34.45%;
- (492. Construct the Rectangle ): trivial; Beat 32.95%;

- (198. House Robber ): DP; Beat 60.18%;
- (70. Climbing Stairs ): using recursion, TLE; using the expression of Fibonacci numbers, Beat 36.28%; using DP, Beat 36.28%;
- (53. Maximum Subarray ): DP; Beat 21.86%;
- (62. Unique Paths ): DP; Beat 2.78%;

- (563. Binary Tree Tilt ): recursive; Beat 46.37%;
- (523. Continuous Subarray Sum ): DP with unordered_set; Beat 52.76%;

- (560. Subarray Sum Equals K ): DP, remember the prefix sum; check the number of prefix sums that equal to the result we need; Beat 85.11%;
- (467. Unique Substrings in Wraparound String ): DP, remember the number of substrings starting with each letter; Beat 

- (357. Count Numbers with Unique Digits ): Math problem, check tables; Beat 35.50%;
- (529. Minesweeper ): DFS, Beat 0.94%;
- (515. Find Largest Value in Each Tree Row ): BFS with queue; Beat 26.16%;
- (513. Find Bottom Left Tree Value ): BFS with queue; Beat 78.50%;

- (576. Out of Boundary Paths ):
	1. DFS, TLE
	2. DP, the number of paths for N moves is the sum of N-1 moves starting from adjacent cells. Boundary conditions: the number of paths starting from cells outside the boundary is 1. Beat 45.67%;
- (491. Increasing Subsequences ): Mid-order DFS with unordered_map to remember duplicate numbers; Beat 76.44%;
- (494. Target Sum ): 
	1. DFS, Beat 35.70%;
	2. DP, 
- (101. Symmetric Tree ):
	1. Iterative: BFS with two queues; Beat 27.79%;
	2. Recursive: Beat 1.63%;
- (102. Binary Tree Level Order Traversal ): BFS with queue; Beat 68.75%;
- (103. Binary Tree Zigzag Level Order Traversal ): BFS with two stacks to simulate the reversal; Beat 29.88%;
- (107. Binary Tree Level Order Traversal II ): 
	1. Same as 102; Beat 21.05%; 
	2. DFS; Beat 76.29%;

- (199. Binary Tree Right Side View ):
	1. BFS, Beat 22.45%;
	2. DFS in Mid-order, Beat 1.54%;
- (200. Number of Islands ): DFS with marking; Beat 31.92%;
- (310. Minimum Height Trees ): 循环删除叶子节点和与叶子节点相连接的边, 直至剩下两个节点; Beat 13.89%;

- (130. Surrounded Regions): 先从四条边上的'O'出发, 把相连的'O'标记为'A'; 然后把所有的'O'标记为'X', 最后把'A'标记为'O'; Beat 29.04%;
- (207. Course Schedule ): Toposort by BFS; Beat 41.65%;
- (210. Course Schedule II ): 
	1. Toposort by BFS, Beat 20.22%;
	2. Toposort by DFS, Beat 46.26%;
- (98. Validate Binary Search Tree ): DFS; Beat 44.28%;

- (547. Friend Circles ): 
	1. DFS for finding connecting blocks; Beat 20.35%;
	2. Unionset.. tbd
- (108. Convert Sorted Array to Binary Search Tree ): recursion; Beat 32.44%;
- (109. Convert Sorted List to Binary Search Tree ): recursion; Beat 50.33%;
- (113. Path Sum II ): dfs; Beat 39.37%;

- (337. House Robber III ): dfs(in fact, dp on a tree); beat 70.26%;
- (473. Matchsticks to Square ): dfs; beat 59.15%;
- (394. Decode String ): recursion; beat 1.58%;

- (279. Perfect Squares ): 
	1. Math problem using four square theorem and thre square theorem; Beat 94.72%;
	2. DP (each m = a^2 + b; then s(m) = s(b) + 1); beat 87.21%;
	3. BFS(consider as a graph and a shortest-road problem)
- (637. Average of Levels in Binary Tree ):
	1. BFS, beat 10.55%;
	2. DFS, beat 34.52%;
- (538. Convert BST to Greater Tree ):
	in-order reversed DFS, and maintain a value to save the sums before; beat 75.10%;
- (453. Minimum Moves to Equal Array Elements ):
	- in fact, add n-1 elements by 1 is eqivlent to minus an element by 1; beat 23.45%;
	- beat 89.18% after an improvement to decrease the iteration;
- (349. Intersection of Two Arrays ): trivial with unordered_set; beat 42.15%;

- (530. Minimum Absolute Difference in BST ): in-order traversal; beat 39.59%;
- (383. Ransom Note ): trivial; beat 21.85%;
- (404. Sum of Left Leaves ):
	1. recursion with dfs; beat 10.12%;
	2. iteration with bfs; beat 10.12%;
- (169. Majority Element ):
	1. Moore's voting theorem: beat 36.91%;
	2. hashtables: beat 60.86%;
	3. sorting and return mid; beat 21.44%;
	4. randomized algorithm.... beat 92.51%;
	5. divide-and-conquer; beat 48.95%;
	6. Bit Manipulation....(tbd)
- (122. Best Time to Buy and Sell Stock II ): total variation; beat 37.27%;
- (387. First Unique Character in a String ): hashtables; beat 3.94%;
- (409. Longest Palindrome ): trivial; beat 30.27%;
- (206. Reverse Linked List ): iteration; beat 22.97%;
- (628. Maximum Product of Three Numbers ): sorting; beat 52.71%;

- (504. Base 7 ): trivial; beat 12.75%;
- (367. Valid Perfect Square ): trivial; beat 10.08%;
- (459. Repeated Substring Pattern ): trivial; beat 89.78%;
- (118. Pascal's Triangle ): trivial; beat 4.67%;
- (350. Intersection of Two Arrays II ): 
	1. hashtables: beat 14.08%;
	2. sort: beat 14.08;

- (232. Implement Queue using Stacks ): using two stacks; beat 60.29%;
- (119. Pascal's Triangle II ): math problem; aware of overflow; beat 61.96%;
- (434. Number of Segments in a String ): 
	1. using stringstream; beat 1.07%;
	2. direct method; beat 1.07%;
- (551. Student Attendance Record I ): trivial; beat 35.98%;
- (343. Integer Break ): math problem; beat 37.58%;
- (456. 132 Pattern ): maintain a stack S to save the candidates of `s2`. Iteration from the right side of the vector, for each element, pop all elements in S that are smaller then it. The last popped is the largest candidate of `s3`. If once an element is smaller then `s3`, then we find `s1`. math proof is trivial; beat 40.90%;
- (31. Next Permutation ): start from the end of the vector, break if a[i-1] < a[i]; At this time `a[i]> a[i+1] >... > a[n]`, then swap a[i-1] with the smallest element in `a[i]> a[i+1] >... > a[n]` which is greater than `a[i-1]`. In order to get the minimum permutation, we sort the new `a[i]> a[i+1] >... > a[n]` in ascending order. beat 43.69%;
- (332. Reconstruct Itinerary ): Euler Path using `unordered_map<string, multiset<string> >` and `unordered_map<string, unordered_map<string, int> >`; beat 12.27%;
- (208. Implement Trie (Prefix Tree) ): trivial; beat 76.80%;

- (35. Search Insert Position ): bisearch; beat 40.15%;
- (1. Two Sum ): hashmap; beat 54.77%;
- (621. Task Scheduler ): trivial; beat 33.31%;
- (565. Array Nesting ): DFS; beat 99.21%;
- (611. Valid Triangle Number ): trivial; beat 90.51%;
- (495. Teemo Attacking ): trivial; beat 74.43%;
- (238. Product of Array Except Self ): forward-backward algorithm; beat 66.17%;
- (216. Combination Sum III ): backtracking; beat 51.16%;
- (153. Find Minimum in Rotated Sorted Array ): bisearch; beat 1.90%;

- (537. Complex Number Multiplication ): trivial; beat 3.87%;
- (419. Battleships in a Board ): count the beginning points; beat 2.01%;
- (643. Maximum Average Subarray I ): trivial; beat 21.10%;
- (605. Can Place Flowers ): extend the border; beat 78.93%;
- (581. Shortest Unsorted Continuous Subarray ): trivial; beat 74.83%;
- (532. K-diff Pairs in an Array ): use hashmap; beat 92.19%;
- (414. Third Maximum Number ): use set; beat 22.79%;
- (268. Missing Number ): sum the numbers; beat 92.08%;
- (219. Contains Duplicate II ): using hashmap; beat 49.40%;
- (189. Rotate Array ): trivial; beat 53.45%;
- (88. Merge Sorted Array ): trivial; beat 12.24%;
- (35. Search Insert Position ): bisearch(in fact, same as consecutive scanning); beat 10.80%;

- (380. Insert Delete GetRandom O(1) ): use unordered_map to store position and vector to store each value; beat 96.59%;
- (381. Insert Delete GetRandom O(1) - Duplicates allowed ): 一开始尝试用`vector<int> nums`和`unordered_map<int, vector<int> > pos`来容纳数据, 但是测试发现remove操作时会出错. 研究结果显示, 错误来源是remove某个值时没有对其他值的位置进行更新. 改为`vector<pair<int, int> > nums`, 其中`pair<int, int>.second`表示pos[i]中的index, 则与上一题完全类似. beat 93.91%;
