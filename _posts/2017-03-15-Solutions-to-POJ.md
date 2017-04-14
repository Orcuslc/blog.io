---
title: Solutions to POJ
category: solutions
tag: [algorithm]
---

## Code for each problem: [GitHub](https://github.com/Orcuslc/Learning/tree/master/POJ)  

## The followings are summaries to each problem.  

-  1000: trivial  
-  1001: Not submitted yet  
-  1002: Used a large array; Going to replace with a hash table  
-  1003: Math problem, with a binary search  
-  1004: Math problem with formatted output  
-  1005: Simple math problem  
-  1006: A number theory problem  
-  1007: Merge sort to count reversed pairs; insertion sort for output  
-  1008: Math Problem; used <map> to create hash tables;(Checked discussion to correct the wrong answer)
-  1009: Checked http://leons.im/posts/poj-1009-edge-detection-report/. We can know that, changing points in the output image are all located in the neighbourhood of changing points in the input image; use STL map and vector.
-  1011: DFS; Used a jumping skill to shorten the search time.
-  1010: DFS; (注意! 题目里说邮票种数不超过25, 但是judge时是会超过25的! 我说怎么总是WA....)
-  1013: 1. If one line is even, then all coins in this line is TRUE.
		2. Scan through the three lines, jump over the TRUE coins;
		2'. for those in the up side, their count --; for the down side, count++. (To distinguish between the up and down cases)
		3. The coin with the largest count(under abs) is the fake one.
		4. Notes: when using {switch, case}, remember to add BREAK!;
-  1014: DFS;
-  1017: Trivial; Handle from large to small;
-  1012: Simulation with mathematial optimization;
-  1028: Use stack(in fact use linked-table is ok.);
-  1029: Simple Math problem; use long instead of int;
-  1088: dynamic programming;
-  1016: Used stringstream;
-  1001: DEBUGGING.....; PS: 0^0 = 1?????? WTF?????
-  1035: 本来想用快排+二分搜索/HashTable的,但是题目要求按照输入字典顺序排序,只能顺序查找了...开始用G++编译结果TLE了,后来换成C++就AC了...
-  1032: Math problem; trivial;
-  1046: Trivial Problem, 但是碰到Presentation Error了>..<检查后才发现输出时多了五个空格>.<
-  1050: DP; 把二维数组踩扁为一维来处理;(踩扁也为一个DP过程)
-  1080: DP;
-  1029: Same as 1013 (slightly different)