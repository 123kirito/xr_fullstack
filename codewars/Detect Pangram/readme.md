字符串查找类方法
1、string.charAt(index)

index:字符串的索引值（下标）,如果说不填，默认为0
- 如果超出str.length,或者小于0，那么会返回一个空字符串
var str = "kaikeba";
    console.log(str[1]);
     console.log(str.charAt(str.length+10));
     console.log(str.charAt(-5));
      /*
            通过str[index] 这样的方式取值，是有兼容问题的，IE8以下是无法使用的

2、str.charCodeAt(index)

用于获取当前字符串的unicode编码
- index :字符串的索引值(下标)，如果不给，默认为0
- 如果下标不存在的值，那么会返回给你一个NaN
var china1 = "中";
     var china2 = "文中";
	 console.log(china2.charCodeAt());//20013   25991
     console.log(china2.charCodeAt(-10));
     console.log(str > str2);
        /*
            如果比较字符串，比较的是Unicode编码的大小

3、String.fromCharCode（）
- 将unicode编码转化为字符串

var str="我爱你";
    var arr = []
    for(var i=0;i<str.length;i++){
        // console.log(str.charCodeAt(i));
        arr[i] = str.charCodeAt(i);
    }
    console.log(arr);
    console.log(String.fromCharCode(arr[0], arr[1], arr[2]));

4、str.indexOf(searchValue，[fromIndex])

可以用于查找str中是否有对应的字符串，如果有，返回该字符串第一次出现时候对应的索引值
- -searchValue 当前想要查找的值
**如果说，查找的值，不存在，返回一个-1！！
fromIndex -这个值是一个可选值，不填默认为0
如果输入的值小于0，会当做0进行处理
如果说超出了索引值的范围，这时候会返回-1
var str = "kaikeba";
	console.log(str.indexOf('ke'));
	console.log(str.indexOf('vv'));
	console.log(str.indexOf('k',1));//3
	console.log(str.indexOf('k', -1));
	console.log(str.indexOf('k', 50));

5、str.lastIndexOf(searchValue，[fromIndex])

searchValue
需要查找的字符串
- formIndex
起始搜索的位置（从后往前），如果不给，默认为str.length
如果超过str.length，则为str.length
如果小于0，则默认为0
如果说找不到指定的值，则返回-1；
用于返回查找指定值对应的最后一个索引索引,从后往前搜索
var str= "kaikeba";
   // console.log(str.lastIndexOf("k", str.length));
   // console.log(str.lastIndexOf("k", -50));
   console.log(str.lastIndexOf("vv"));

字符串的截取
1、slice(begin[,end])

可以截取字符，并返回这个新的字符
begin 指的是截取的起始位置(截取的位置包含begin，但是不包含end的索引)
如果遇到了负数，length + （begin） =》 length - begin
7 - 5 = 2
如果说负数超过了一定的值（length），默认就从0开始
end：可选参数，不填默认到该字符串结尾部分
begin 和 end 是一致的，则会返回空字符串
如果说end大于begin，则会返回空字符串
该方法，并不会影响原来的字符串，而是返回一个新的字符串
var str = "kaikeba";
   // console.log(str.slice(1));
   // console.log(str.slice(-5));//ikeba
   
   // console.log(str.slice(-51))
   // console.log(str.slice(4,0));//kaike
   var str2 = str.slice(1,5);
   console.log(str);
   console.log(str2);

2、substr(start[,length])

截取从start位置开始的字符，返回的也是新的字符串，并不会改变原有字符串
参数
start ：截取的起始位置，可以是负数,如果说是负数，则从右到左边length + (start)（如果起始位置的值太大，则默认为0），
length ： 截取字符的个数，如果不填，默认为到该字符串结尾的位置
如果超出了length，则默认为到字符串结尾的位置，如果是一个负数，则返回空字符串
var str = "kaikeba";
   // console.log(str.substr(-5,2));//ik
   // console.log(str.substr(-5, -5));
   var str2 = str.substr(-5, -5);
   console.log(str);
   console.log(str2);

3、substring(begin[,end])

截取两个索引值之间的字符串，并且作为一个新的字符串进行返回（包含begin，但是不包含end）
参数：
- begin 如果说小于0，则会当做0进行处理
- end 可选，默认为到该字符串结尾，如果说这个值，大于length，则会当做length进行处理
begin包含在截取的内容里面，但是end不包含
如果说end大于begin，end就会作为begin，begin就会作为end
如果begin和end是一致的，则会得到一个空字符串
var str = "kaikeba";
    // console.log(str.substring(1,str.length - 1));
    // console.log(str.substring(1, 50));
    // console.log(str.substring(5,2));//ike
    // console.log(str.substring(0, 0));
    var str2 = str.substring(0, 0)
    console.log(str);
    console.log(str2);

字符串常用方法
1、split(separator[，num])

separator 决定分隔的字符,该字符的位置会作为分隔点，并且自己是不在当前数组内的
如果是"",可以把每一个字符都分隔开来
如果分隔的字符处在字符串的首尾，则会有一个空字符串
num 可选，决定分隔的数组中的个数
如果说给的值，超过了length，分隔也只会以当前字符串的最大分隔为标准
var str = "kai-ke-ba";
   // console.log(str.split());
   // console.log(str.split("-"));//["kai", "ke", "ba"]
   // console.log(str.split(""));
   // console.log(str.split("",3));
   // console.log(str.split("", 50));
   // console.log(str.split("k"));

   // var str2 = "ke-ke-ke";
   var str2 ="kkk-vv-nhikask"
   console.log(str2.split("kkk").length - 1);

2、str.concta()

返回的是一个新的字符串，并不会改变原有的字符串
参数可以是多个字符串，以逗号进行间隔
*+= 的性能比用 concat 要更好 *
var str1 = "kai";
    var str2 = "ke";
    var str3 = "ba";
    console.log(str1);
    
    console.log(str1.concat(str2,str3));


3、toLowerCase() - 把字符串转成小写
toUpperCase() - 把字符串转成大写
这两个返回的都是一个新字符串，并不会影响原有的字符串

   var str1 = "A";
   var str2 = "a";

   // console.log(str1.toLowerCase() == str2);
   // console.log(str1 == str2.toUpperCase());

   console.log(str1.toLowerCase());
   console.log(str1);

4、str.trim()
可以将字符串的长度打印出来

var str = " kai keba "; // 9
  var str2 = "kaikeba" // 7
  // console.log(str2.length);

  console.log(str.trim().length);