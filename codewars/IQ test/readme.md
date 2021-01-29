1. split() 方法用于把一个字符串分割成字符串数组。

    语法
    stringObject.split(separator,howmany)
    实例
    例子 1
    在本例中，我们将按照不同的方式来分割字符串：
    ```
    <script type="text/javascript">

    var str="How are you doing today?"

    document.write(str.split(" ") + "<br />")
    document.write(str.split("") + "<br />")
    document.write(str.split(" ",3))

    </script>
    ```
    输出：

    How,are,you,doing,today?
    H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,?
    How,are,you

2. number & 1
    “&”是一个按位操作。

    尽管如此，理论上的想法是，有一些int，它可以用一系列的1s和0来表示。例如：

    ...10110110
    在二进制中，因为它是基2，所以当数字的按位形式以0结尾时，它是偶数，当它以1结尾时是奇数。

    因此，按位使用1进行上述操作如下：

    ...10110110 & ...00000001
    当然，这是0，所以您可以说原始输入是偶数。

    或者，考虑一个奇数。例如，将1加到上面。然后

    ...10110111 & ...00000001
    等于1，因此不等于零。
3.  push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
4. 一个等号是赋值操作，==先转换类型再比较，===先判断类型，如果不是同一类型直接为false。

    alert(1 == “1”); // true

    alert(1 === “1”); // false