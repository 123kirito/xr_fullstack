给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false

解题思路：
1. 用正则表达式去掉非数字和字母
2. 如果字符串小于2，返回true
3. 如果两个指针，一个在字符串开头，一个在字符串结尾
4. 建立一个while循环，当left小于right的时候执行循环，如果在任意地点s[left]!==s[right],return false,否则left++,right--,继续执行循环
5. 当循环完成后都没有出现return false,则返回return false