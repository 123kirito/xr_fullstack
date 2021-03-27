给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
示例 4：

输入：s = "([)]"
输出：false
示例 5：

输入：s = "{[]}"
输出：true
 

提示：

1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成

解题思路：
1. 创建一个HashMap，把括号配对放进去。
2. 创建一个stack(array)，for循环遍历字符串，对于每一个字符，如果map里有这个key，那说明它是个左括号，
    从map里取得相应的右括号，把它push进stack里，否则的话，它就是右括号，需要pop出stack里的第一个字符然后看它是否等于当前字符。如果不相符，则返回false。
3. 循环结束后，如果stack不为空，说明还剩下一些左括号没有闭合，返回false,否则返回true。