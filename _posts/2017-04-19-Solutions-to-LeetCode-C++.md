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

<!-- more -->


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
- (209. Minimum Size Subarray Sum ): maintain a window expending to the right, when the sum in the window is over then s, expend the left border to right. beat 65.47%;
- (162. Find Peak Element ): WTF??? What a strange problem! beat 13.28%;
- (152. Maximum Product Subarray ): dp; beat 11.88%;
- (41. First Missing Positive ): 一开始尝试用加法去计算剩下的数, 但是因为此数会重复和跳跃导致无法成功. 根据discussion中的做法, swap i with nums[i], 第一个不在正确位置上的数+1即为missing positive. beat 13.52%;
- (45. Jump Game II ): since one can always reach the end, we solve it with greedy; beat 44.61%;
- (228. Summary Ranges ): trivial; beat 35.29%;
- (120. Triangle ): dp; beat 29.39%;
- (90. Subsets II ): backtracking; beat 78.93%;
- (81. Search in Rotated Sorted Array II ): bisearch; beat 28.42%;

- (57. Insert Interval ): trivial; beat 62.38%;
- (648. Replace Words ): Trie Tree with modifying; runtime: 69ms;
- (645. Set Mismatch ): hashmap; runtime: 69ms;
- (74. Search a 2D Matrix ): bisearch on both sides; O(log(m)log(n)) time; beat 31.08%;
- (75. Sort Colors ): sounds like the `partition` function in quicksort. beat 20.67%;
- (78. Subsets ): backtracking; beat 21.59%;
- (541. Reverse String II ): trivial; beat 17.92%;
- (583. Delete Operation for Two Strings ): longest common substring; DP; beat 20.68%;

- (64. Minimum Path Sum ): dp; beat 22.02%;
- (63. Unique Paths II ): dp; beat 18.31%;
- (73. Set Matrix Zeroes ): use the first row to save zero status; beat 52.43%;
- (59. Spiral Matrix II ): four steps; beat 31.86%;
- (34. Search for a Range ): bisearch; beat 42.22%;
- (39. Combination Sum ): backtracking; beat 20.42%;
- (40. Combination Sum II ): backtracking; beat 50.38%;

- (636. Exclusive Time of Functions ): using stack; beat 45.23%;
- (572. Subtree of Another Tree ): recursion; beat 46.93%;
- (543. Diameter of Binary Tree ): recursion(tree depth); beat 2.12%;
- (437. Path Sum III ): dfs; beat 35.44%;
- (623. Add One Row to Tree ): bfs; beat 10.35%;
- (235. Lowest Common Ancestor of a Binary Search Tree ): recursion; beat 12.84%;
- (508. Most Frequent Subtree Sum ): traversal; beat 85.73%;
- (154. Find Minimum in Rotated Sorted Array II ): bisearch; beat 26.79%;
- (79. Word Search ): backtracking; beat 74.33%;

- (16. 3Sum Closest ): search by both sides; beat 17.32%;
- (33. Search in Rotated Sorted Array ): bisearch; beat 42.82%;
- (80. Remove Duplicates from Sorted Array II ): trivial; beat 14.84%;
- (56. Merge Intervals ): trivial; beat 50.08%;
- (55. Jump Game ): DP; beat 62.57%;
- (54. Spiral Matrix ): trivial; beat 1.58%;
- (48. Rotate Image ): reverse the image and then swap the symmetric elements; beat 51.39%;
- (229. Majority Element II ): vote theorem; beat 43.71%;
- (131. Palindrome Partitioning ): backtracking; beat 69.75%;

- (450. Delete Node in a BST ): recursion; beat 73.82%;
- (173. Binary Search Tree Iterator ): using stack; beat 5.74%;

- (260. Single Number III ): 
	1. sort; beat 6.45%;
	2. since only two elements appear once, and all others appear twice, if we XOR all the elements in the array, we get the value of `x^y`, in which `x, y` are the elements appearing once. Since the two elements are not the same, those positions where `x^y = 1` means `x` and `y` has a different bitset here. tbd...
- (451. Sort Characters By Frequency ): unordered_map and a vector for saving frequency strings; beat 34.60%;
- (462. Minimum Moves to Equal Array Elements II ): It is easy to proof that it reach a minimum move if we move all the values to the median of the array; beat 53.10%;
- (347. Top K Frequent Elements ): Bucket Sort; beat 64.75%;
- (384. Shuffle an Array ): trivial; beat 37.88%;
- (382. Linked List Random Node ): Accept-Refuse sampling; beat 84.36%;
- (94. Binary Tree Inorder Traversal ): using stack; beat 73.49%;
- (498. Diagonal Traverse ): trivial; beat 55.88%;
- (374. Guess Number Higher or Lower ): bisearch(avoiding overflow); beat 0.39%;

- (144. Binary Tree Preorder Traversal ): same as 94; beat 1.05%;
- (647. Palindromic Substrings ): dp; `dp[i][j] = (s[i] == s[j]) && (j - i <= 2 || dp[i+1][j-1])`; beat 66.16%;

- (133. Clone Graph ): 
	1. dfs; beat 49.19%;
	2. bfs, tbd;

- (125. Valid Palindrome ): trivial; beat 28.64%;
- (151. Reverse Words in a String ): reverse the whole string, then reverse each word; beat 13.27%;
- (165. Compare Version Numbers ): trivial; beat 51.16%;
- (227. Basic Calculator II ): trivial, add '+' on both sides; beat 24.42%;
- (345. Reverse Vowels of a String ): using `find_first_of` and `find_last_of`; beat 43.62%;

- (72. Edit Distance ): DP; beat 45.55%;
- (539. Minimum Time Difference ): sorting; beat 41.99%;
- (609. Find Duplicate File in System ): using `unordered_map`; beat 70.25%;
- (553. Optimal Division ): trivial; beat 5.17%;
- (67. Add Binary ): trivial; beat 25.01%;
- (58. Length of Last Word ): reverse; beat 37.07%;
- (38. Count and Say ): trivial; beat 28.395;
- (28. Implement strStr() ): KMP; tbd...
- (556. Next Greater Element III ): change to a string problem; beat 1.09%;
- (468. Validate IP Address ): f**king test cases!!!!!! beat 13.57%;
- (49. Group Anagrams ): using prime factor decomposition as hash maps; beat 99.79%;
- (15. 3Sum ): a quick method from both sides to the middle; beat 42.87%;

- (18. 4Sum ): same as 3Sum; beat 24.74%;
- (60. Permutation Sequence ): recursively construct the result; beat 55.93%;
- (61. Rotate List ): two pointers; beat 40.44%;
- (93. Restore IP Addresses ): DFS; beat 87.78%;
- (231. Power of Two ): 
	1. iterative: beat 31.25%;
	2. recursive: beat 31.25%;
	3. bit operation: beat 
- (263. Ugly Number ): trivial; beat 4.00%;
- (83. Remove Duplicates from Sorted List ): trivial; beat 10.84%;
- (594. Longest Harmonious Subsequence ): hashmap; beat 49.59%;
- (202. Happy Number ): trivial; beat 12.04%;

- (501. Find Mode in Binary Search Tree ): in-order traversal; beat 15.08%;
- (482. License Key Formatting ): trivial; beat 31.53%;
- (650. 2 Keys Keyboard ): DP;(wondering how to use static member values;) beat 31.15%;
- (507. Perfect Number ): trivial(waring of TLE); beat 48.08%;
- (438. Find All Anagrams in a String ): sliding window; beat 83.29%;
- (205. Isomorphic Strings ): using two `unordered_map` to simulate a one-to-one function; beat 9.80%;
- (172. Factorial Trailing Zeroes ): trivial, count the 5-factors; beat 13.09%;
- (141. Linked List Cycle ): two pointers; beat 39.74%;
- (96. Unique Binary Search Trees ): dp; 考虑由i为顶点的BST, 其数量为(1~i-1)构造的树的数量*(i+1~n)构造的树的数量. beat 26.93%;
- (435. Non-overlapping Intervals ): greedy; beat 31.46%;
- (386. Lexicographical Numbers ): trivial; beat 99.79%;

- (640. Solve the Equation ): trivial; beat 77.25%;
- (416. Partition Equal Subset Sum ):
	1. DFS; TLE...
	2. DP, tbd..
- (526. Beautiful Arrangement ): backtracking; beat 49.94%;
- (211. Add and Search Word - Data structure design ): backtracking with Trie Tree; beat 45.73%;
- (140. Word Break II ):
	1. backtracking with Trie tree; TLE...
	2. with check, still TLE.....
	3. DFS with memorization (in fact it is just DP); beat 52.30%;

- (77. Combinations ): DP, using C_n^k = C_{n-1}^{k-1}+C_{n-1}^k;, tbd...
- (655. Print Binary Tree ): preorder traversal; beat 0.00%;
- (436. Find Right Interval ): using `map.lower_bound`; beat 72.90%;
- (334. Increasing Triplet Subsequence ): trivial; beat 22.67%;
- (390. Elimination Game ): trivial; beat 9.21%;

- (646. Maximum Length of Pair Chain ): greedy; beat 16.76%;
- (540. Single Element in a Sorted Array ): bisearch; beat 23.73%;
- (338. Counting Bits ): dp; beat 56.79%;
- (398. Random Pick Index ): random sampling(for infinity stream); beat 52.82%;
- (524. Longest Word in Dictionary through Deleting ): substrings; beat 69.12%;
- (516. Longest Palindromic Subsequence ): dp; beat 90.84%;
- (319. Bulb Switcher ): a bulb would be ioen if and only if it can be divided by odd number of factors, which means it is a complete-square number; beat 3.11%;
- (240. Search a 2D Matrix II ): same as two-pointers; beat 64.79%;

- (424. Longest Repeating Character Replacement ): sliding window; beat 57.32%;
- (525. Contiguous Array ): hashmap for presum; beat 2.92%;
- (155. Min Stack ): in `push()`: if pushing a new val would change the Min, push the old Min; in `pop()`: if popping the `Min`, then Min should be the oldest min before `Min`; pop again to get that; beat 76.87%;
- (303. Range Sum Query - Immutable ): using presum; beat 34.85%;

- (290. Word Pattern ): two hashmaps; beat 48.81%;
- (225. Implement Stack using Queues ): trivial using one queue; beat 0.86%;
- (203. Remove Linked List Elements ): trivial; beat 35.03%;
- (368. Largest Divisible Subset ): memorized DP(with backtracking for result); beat 83.19%;

- (416. Partition Equal Subset Sum ):
	1. dfs; TLE..
	2. DP; beat 72.72%;
- (474. Ones and Zeroes ): DP; (NOTICE: initializing of arrays in C++ !!!) beat 59.62%;
- (300. Longest Increasing Subsequence ): dp; beat 29.19%;
- (397. Integer Replacement ): 
	1. DP; Runtime Error when Input is `10000000`;
	2. recursion; beat 16.89%;
- (139. Word Break ):
	1. DFS; TLE
	2. DP; beat 72.93%;
- (82. Remove Duplicates from Sorted List II ):
	1. recursive: beat 6.05%;
	2. iterative: beat 

- (486. Predict the Winner ): DP(notice that the max solution of a subgame[i, j] is the element on one side plus the min solution of the rest subgame); beat 31.92%;

- (376. Wiggle Subsequence ): DP(two cases); beat 
- (322. Coin Change ):
	1. DP( Why Init with memset will lead to a fault of visiting wrong RAM address?); beat 54.00%;
	2. memorized DFS; TBD
- (309. Best Time to Buy and Sell Stock with Cooldown ): DP(three status); beat 35.60%;

- (304. Range Sum Query 2D - Immutable ): similar to presum; beat 88.65%;
- (264. Ugly Number II ): dp(three cases); beat 41.01%;
- (221. Maximal Square ): dp(dp[i][j] represents max length of square with its right-down vertex on [i][j]); beat 18.88%;
- (213. House Robber II ): dp(four cases); beat 56.92%;
- (289. Game of Life ): use two bits to represent status of (future, now); beat 87.27%;
- (84. Largest Rectangle in Histogram ):
	1. DP(dp[i][j] represents max height of rectangles between i and j), O(n^2) time; Runtime Error;
	2. using a stack to memorize heights and compute the largest area of height x; beat 81.43%;
- (123. Best Time to Buy and Sell Stock III ): dp; beat 39.92%;

- (168. Excel Sheet Column Title ):
	1. recursive: beat 0.41%;
	2. iterative: beat 22.73%;
- (278. First Bad Version ): bisearch; beat 28.15%;
- (654. Maximum Binary Tree ): according to discussion(using a stack to build the tree in linear time); beat 64.97%;
- (454. 4Sum II ): using a map; beat 48.05%;
- (36. Valid Sudoku ): trivial; beat 36.70%;
- (447. Number of Boomerangs ): use hashmap; beat 94.85%;
- (187. Repeated DNA Sequences ): use hashmap; beat 92.60%;

- (166. Fraction to Recurring Decimal ): use hashmap to memorize the start position of loops; beat 3.49%;
- (138. Copy List with Random Pointer ): use two hashmaps to implement this function: (Node->label --> Node->label --> Node in the copy); beat 24.18%;
- (204. Count Primes ): Sieve...; beat 67.40%;
- (274. H-Index ): bucket sort; beat 18.97%;
- (554. Brick Wall ): hashmaps; beat 51.52%;
- (76. Minimum Window Substring ): sliding window; (why i < s.size() will cause fault when i < (int)s.size() is correct?????) beat 64.79%;
- (324. Wiggle Sort II ): (how to do this in-place?) beat 16.77%;
- (179. Largest Number ): sort; beat 39.90%;

- (147. Insertion Sort List ): add a null node as beginning; beat 83.70%;
- (148. Sort List ): merge sort; beat 48.69%;
- (328. Odd Even Linked List ): two pointers; beat 38.58%;
- (142. Linked List Cycle II ): two pointers; Assume dist(head, entry) = l1, dist(circle) = c, dist(entry, slow) = l2(when slow and fast meet), then l1+l2+n*c = 2(l1+l2), which means l1 == (c-l2) (mod c); then let head and slow going through, until they meet. beat 40.87%;
- (633. Sum of Square Numbers ): two pointers; beat 77.60%;

- (160. Intersection of Two Linked Lists ): look at annotation; beat 78.22%;
- (143. Reorder List ):
	1. reverse each sublist(1~n, 2~n, ...), TLE... O(n^2) algorithm...
	2. reverse the last half, then merge; beat 23.10%;
- (86. Partition List ): beat 22.85%;
- (326. Power of Three ):
	1. using max power of 3 (in range of int) to divide n; if can be divided, then ok; beat 22.01%;
	2. 
- (400. Nth Digit ): trivial; beat 8.20%;
- (423. Reconstruct Original Digits from English ): really interesting; beat 35.31%;
- (396. Rotate Function ): trivial; beat 42.25%;
- (372. Super Pow ): Euler's theorem + quick pow; beat 94.87%;
- (365. Water and Jug Problem ): look at notes; beat 39.76%;
- (313. Super Ugly Number ): pointers; beat 81.98%;

- (657. Judge Route Circle ): trivial; beat 40.89%;

- (299. Bulls and Cows ): hashmap; beat 70.02%;
- (503. Next Greater Element II ): DP; beat 46.10%;
- (385. Mini Parser ): using stack; beat 45.21%;
- (331. Verify Preorder Serialization of a Binary Tree ): using stack; beat 69.25%;
- (150. Evaluate Reverse Polish Notation ): using stack; beat 23.51%;
- (71. Simplify Path ): using `getline()` to simplify code; beat 31.82%;
- (567. Permutation in String ): sliding window; beat 55.54%;
- (592. Fraction Addition and Subtraction ): using streamstring too simplify; beat 20.00%;
- (452. Minimum Number of Arrows to Burst Balloons ): greedy; beat 34.06%;

- (392. Is Subsequence ): two-pointers; beat 19.96%;
- (399. Evaluate Division ): dfs with memorization; beat 76.52%;
- (129. Sum Root to Leaf Numbers ): dfs; beat 1.66%;

- (475. Heaters ): two-pointers; beat 5.58%;
- (405. Convert a Number to Hexadecimal ): trivial; beat 5.10%;

- (649. Dota2 Senate ): greedy; beat 39.04%;
- ()
- (660. Remove 9 ): just change a decimal number to its base-9 representation; beat 
- (273. Integer to English Words ): trivial; beat 3.47%;
- (312. Burst Balloons ): dp; beat 87.78%;
- (664. Strange Printer ): dp; beat 40.00%;
- (354. Russian Doll Envelopes ): dp; beat 52.03%;

- (552. Student Attendance Record II ): dp(why does `long a[n+1] = {0}` will case runtime error??); beat 75.20%;

- (514. Freedom Trail ): dp; beat 21.31%

- (28. Implement strStr() ): brute-force; beat 91.22%;
- (306. Additive Number ): trivial; beat 45.82%;
- (222. Count Complete Tree Nodes ):
	1. BFS; TLE...
	2. DFS; TLE...
	3. O((log n)^2), beat 96.48%;
- (190. Reverse Bits ): bit mask; beat 34.44%;
- (236. Lowest Common Ancestor of a Binary Tree ): recursion; beat 60.55%;
- (134. Gas Station ): see comments in the code; beat 26.88%;

- (275. H-Index II ): bisearch; beat 65.01%;
- (239. Sliding Window Maximum ): use deque to store index; beat 54.69%;

- (223. Rectangle Area ): de Morgan's theorem; beat 2.12%;

- (91. Decode Ways ): DP; beat 12.83%;
- (639. Decode Ways II ): DP(only with more side-conditions); beat 11.98%;
- (47. Permutations II ): backtracking; beat 28.92%;

- (600. Non-negative Integers without Consecutive Ones ): dp; beat 87.58%;
- (342. Power of Four ):
	1. log2; beat 29.59%;
	2. use pow of 2, and do some rid; beat 1.94%;

- (212. Word Search II ):
	1. DFS; TLE(&& WA, since Input words may duplicate)
	2. DFS with Trie; beat 79.98%;

- (673. Number of Longest Increasing Subsequence ): DP with two vector storing maxLen and maxCount; beat 90.15%;

- (124. Binary Tree Maximum Path Sum ): DP; beat 62.06%;
- (220. Contains Duplicate III ): Sliding window; beat 88.36%;

- ( 676. Implement Magic Dictionary ): Trie Tree + DFS; beat 18.19%;

- ( 336. Palindrome Pairs ): Map and split the words into two parts; beat 86.88%;
- ( 393. UTF-8 Validation ): DFS; beat 26.52%;

- ( 25. Reverse Nodes in k-Group ): recursion; beat 85.67%;
- ( 77. Combinations ): 
	1. generate ALL subsets; beat 4.11%;
	2. backtracking; beat 67.35%;
- (682. Baseball Game): using a stack; beat 12.90%;

- (30. Substring with Concatenation of All Words): using two unordered_map to store count; beat 45.63%;
- ( 87. Scramble String ): simple recursion; beat 68.83%;
- ( 671. Second Minimum Node In a Binary Tree ): dfs; beat 64.46%;

- ( 318. Maximum Product of Word Lengths ): using bitmap to save the existence of each letter; (1 << (c-'a')); Notice: `&` < `==` in computing; beat 89.63%;

- ( 665. Non-decreasing Array ): kind of greedy; beat 22.23%;
- ( 373. Find K Pairs with Smallest Sums ): FAILED; NEED TO REVIEW PRIORITY-QUEUE/HEAP; using priority_queue; beat 83.44%;

- ( 287. Find the Duplicate Number ): regrad it as a graph with circle; find out the entrance of the circle; beat 57.31%;

- ( 377. Combination Sum IV ): dfs failed since permutations matter; dp, beat 60.88%;
- ( 230. Kth Smallest Element in a BST ): in-order traversal; beat 14.87%;

- ( 464. Can I Win ): memorized dfs; use a hash function to hash `vector<int>` to `int`; beat 40.80%;
- ( 329. Longest Increasing Path in a Matrix ): memorized dfs; beat 34.92%;
- ( 403. Frog Jump ): failed to use `pair<int, int>` as a key of `unordered_map`; memorized dfs; beat 14.91%;

- ( 692. Top K Frequent Words ): bucket sort; beat 82.45%;

- ( 679. 24 Game ): backtracking; beat 48.48%;

- ( 410. Split Array Largest Sum ): A binary search in the solution space; beat 35.65%;
- ( 116. Populating Next Right Pointers in Each Node ): recursion; beat 30.55%;

- ( 677. Map Sum Pairs ): Trie; beat 25.00%;
- ( 297. Serialize and Deserialize Binary Tree ): pre-order traversal; beat 
- ( 335. Self Crossing ): Interesting! x[i] can only cross x[i-3], x[i-4], x[i-5]. beat 35.64%;

- ( 406. Queue Reconstruction by Height ): sort and then insert; beat 50.93%;
- ( 658. Find K Closest Elements ):
	1. two sorts; beat 16.74%;
	2. bisearch; beat 98.77%;
- ( 89. Gray Code ): induction; beat 44.10%;

- ( 674. Longest Continuous Increasing Subsequence ): trivial; beat 22.43%;
- ( 330. Patching Array ):
	1. Direct greedy method; beat 33.56%;
	2. DP; beat 33.56%;
- ( 92. Reverse Linked List II ): New a ListNode before head in case to avoid Runtime Error; beat 0.62%;
- ( 201. Bitwise AND of Numbers Range ): bit op; beat 85.17%;

- ( 174. Dungeon Game ): DP; beat 31.13%;

- ( 295. Find Median from Data Stream ): two heaps, small: Max Heap; large: Min Heap(use negative values to pretend the min heap); beat 62.67%;
- ( 127. Word Ladder ): bfs; beat 20.80%;
- ( 191. Number of 1 Bits ): 
	1. just a bitwise and; beat 26.03%;
	2. 

- ( 115. Distinct Subsequences ):
	1. DFS; TLE;
	2. DP; beat 26.50%;

- ( 669. Trim a Binary Search Tree ): recursion; beat 42.63%;
- (690. Employee Importance): 
	1. bfs; beat 9.23%;
	2. dfs; beat 10.17%;

- ( 684. Redundant Connection ): Union Set; beat 27.39%;
- ( 685. Redundant Connection II ): Union Set; beat 26.48%;

- (68. Text Justification ): trivial; beat 51.03%;
- (661. Image Smoother ): trivial; beat 79.52%;

- ( 460. LFU Cache ): unordered_map + linked list; beat 52.40%;
- ( 670. Maximum Swap ): dp; beat 13.84%;

- ( 363. Max Sum of Rectangle No Larger Than K ): similar with POJ 1050; beat 81.25%;

- ( 321. Create Maximum Number ): kind of merge sort; beat 41.99%;

- ( 678. Valid Parenthesis String ): use the range; beat 85.45%;

- ( 375. Guess Number Higher or Lower II ): dp; beat 51.30%;

- ( 23. Merge k Sorted Lists ): 
	1. brute-force: O(nk); beat 23.41%
	2. 