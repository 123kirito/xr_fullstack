给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

 

示例 1：


输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：


输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 

提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100

解题思路：
1. 如果数组为空，返回空数组
2. 定义四个边界以及当前方向
3. 当左边界小于等于右边界，且上边界小于等于下边界时，执行while循环：按照右、下、左、上的顺序，依次将路径上的字符添加到结果里
4. while循环结束后，返回结果