## 介绍
先说一下我的的基本情况，LZ是某普通二本的自动化专业的学生，大学阶段也就学了一些基础的C语言，大四时接触java，然后学了一点，但是没有找到这方面的工作，基本遇到的都是要培训的，后面进入一家使用C#开发的公司，这才开启了我的C#之旅，虽然有两年多的开发经验，但感觉自己还是个小白，还有很多的东西需要学习，这也是我做开发以来的第一次跳槽吧，总结一下面试的一些经验，也希望能够帮助到正在找.Net的小伙伴们。
## 首先是简历
简历一定要认真对待，不能随随便便找个模板，它是你能不能得到面试的一个关键，下面推荐两个可以参考的简历制作的技巧链接：<br />
 [程序员简历应该怎么写？](https://www.zhihu.com/question/25002833)中<font color='red'>ThoughtWorks中国</font>的回答<br />
 [如何做一份优秀的简历？](https://www.zhihu.com/question/19766230)中<font color='red'>朱英楠David</font>的回答<br />
 简历的模板可以参考该网站[超级简历](https://www.wondercv.com/zh-CN/blog)的程序员简历模板<br />
 ## 自我介绍
 这里说一下我的一个主要模板，需要根据不同的公司有针对的准备不同的自我介绍。
 **各位面试官，您们好，很高兴得到这次面试机会，我叫XXX，毕业于XXX，具有较强的自学能力，在校期间通过自学掌握了相关的编程技术，
参加工作以来，先后独立开发了几个项目模块，主要包括XXX等，其中让我收获最大的一个项目是XXX，当时接到的任务就是XXX，在此期间我的主要任务参与前期的一些设计讨论以及后面的开发和维护,…………（这里可以介绍你通过什么技术解决了什么，完成了什么任务等）。经过这个项目开发使我在技术的掌握和问题的处理上都有了很大的进步。
我今天求职的岗位是.Net开发工程师，在XXX两年的.Net开发中，一直从事企业级应用管理系统的开发维护，使我拥有了扎实的编程基础和良好的编码习惯，并能够熟练的使用C#语言开发基于Web Form和Asp.Net MVC架构的应用程序。也使我清楚的知道这个岗位的主要工作内容，并使我在这方面有了一定的能力和经验积累，我相信我能够胜任该职位的工作，我非常认可并喜欢贵公司的理念，也希望贵公司能够给我一次机会，让我加入到贵公司中。谢谢**
## 常见的面试题
面试时大部分都会有笔试题的，下面列举一些遇到的一些笔试题
#### .Net基础面试题
- **简述面向对象中封装、多态、继承的概念**
 答：封装：把一些功能的实现写在一个文件中，对外只开放一个接口，调用者通过这个接口来调用方法
继承：子类继承父类中的方法和属性，并且子类可以拥有自己的一些方法和属性
多态：通过继承实现不同对象在调用相同的方法时，产生不同的结果，这就是多态，重写或者重载
- **什么是面向对象？**
 答：面向对象说到底就是一种思想，任何事物都可以看作是一个对象。
比如开发一个员工管理系统, 就可以抽象出一个员工的类, 员工有工资,年龄等作为数据成员, 有增工资, 减工资等作为成员函数. 员工类可以为每个员工定义一个实例, 这样的实例称为对象. 这样的开发思想称为面向对象.
面向对象开发具有以下优点:
    代码开发模块化，便于维护。
    代码复用性强
    代码的可靠性和灵活性。
    代码的可读性和可扩展性

- **简述private、protected、public修饰符的访问权限**
 答：private : 私有成员, 在类的内部才可以访问。
protected : 保护成员，该类内部和继承类中可以访问。
public : 公共成员，完全公开，没有访问限制。
internal: 当前程序集内可以访问。
- **abstract、class、interface有什么区别**
答：相同点：都不能被实例化，都可以通过继承来实现其抽象方法。
不同点：接口支持多继承，抽象类不能实现多继承；
接口只包含方法、属性、索引器、事件的签名，但不能定义字段和包含它们的实现；抽象类可以定义字段、属性、包含有实现的方法。
接口可以作用于值类型和引用类型；抽象类只能作用于引用类型。例如，Struct就可以继承接口，而不能继承类。
- **C#预定义的值类型和引用类型有哪些？**
答：C#预定义的值类型，主要包括5个类型：整型、浮点类型、字符型、bool型和decimal类型
C#终于定义的引用类型共两个，分别是Object类型和String类型
- **C#中值类型与引用类型的区别，作为参数传递时有何不同**
赋值区别：将一个值类型变量赋给另一个值类型变量时，将复制包含的值。引用类型变量的赋值只把对象的引用的指针赋值给变量，使得变量引用与对象共享同一个内存地址。
继承区别：值类型不能派生出新的类型：所有的值类型均隐式派生自 System.ValueType。引用类型一般都有继承性。
内存分配区别：值类型通常分配在栈上，引用类型通常分配在托管堆上
值类型不可能包含 null 值，然而，可空类型功能允许将 null 赋给值类型。 
值类型传递的是值的副本，引用类型传递的是对象引用，所以值参数的修改不影响原始值，引用类型的修改影响原始值；
- **重写(override)与重载(overload)的区别**
重载是方法的名称相同。参数或参数类型不同，进行多次重载以适应不同的需要。重载是面向过程的概念
重写(Override)是对基类中的虚方法进行重写。Override是面向对象的概念
- **简述重写(override)与重载(overload)的区别，并手写一个简易的重载和重写**
 重载(overload)是方法的名称相同。参数或参数类型不同，进行多次重载以适应不同的需要。重载是面向过程的概念
```csharp
public void Sleep()
{
    Console.WriteLine("Animal睡觉");
}
public int Sleep(int time)
{
    Console.WriteLine("Animal{0}点睡觉", time);
    return time;
}
```
重写(Override)是对基类中的虚方法进行重写。重写(Override)是面向对象的概念
```csharp
//如：父类中的定义：
public virtual void EatFood()
{
    Console.WriteLine("Animal吃东西");
}
//子类中的定义：
public override void EatFood()
{
    Console.WriteLine("Cat吃东西");
    //base.EatFood();
}
```
- **C#中使用StringBuilder拼接字符串时有何优点**
StringBuilder是动态对象，允许扩充他所封装的字符串中的字符数量，在生成string对象之前，不会产生任何string对象，所以在进行大量的字符串拼接或者频繁的堆某一个字符串进行操作时最好使用StringBuilder，而不要使用string
- **什么是装箱(boxing)和拆箱(unboxing)？如何解决装箱和拆箱引发的性能问题？**
装箱：将一个值类型显式或者隐式地转换成一个引用类型。
拆箱：从引用类型转换到值类型。 
对于装箱和拆箱对性能影响的解决办法是在程序中大量地使用泛型进行代替
- **什么是GC**
GC即垃圾回收，垃圾回收是指.NET清理托管堆上不会再使用的对象所占用的内存，并且移动仍在被使用的对象使他们所占用的内存空间保持连续。
- **类和结构有什么区别**
结构是值类型而类是引用类型
结构不能被另外一个结构或类继承，自身也不能被继承，而类完全可以被其他类继承其自身也能被继承，结构没有默认的构造函数，而类有默认的构造函数，并且必须使用new进行初始化，Int32、Boolean等都属于结构体
- **什么是sql注入？如何避免sql注入？**
用户根据系统的程序构造非法的参数从而导致程序执行不是程序员期望的恶意SQL语句。使用参数化的SQL就可以避免SQL注入。
- **using关键字有什么用？**
引入命名空间；定义别名；实现非托管资源的释放，对于实现IDisposable类在using创建，当结束时会自动调用该类的Dispose方法，来释放资源，相当于try ... finally....
- **写一段C#访问SqlServer数据库的代码（来列举出ADO.Net中五个主要对象）**
 答：
 ```csharp
 
 public Datatble Select()
 {
	 string connString = "Server=.;Database=Test;User ID=sa;Password=songtaojie;";
	 string sqlString = "select *  from T_User ";
	 SqlConnection conn = new SqlConnection(connString);
	 conn.Open();
	 SqlCommand cmd = new SqlCommand(sql,conn);
	 SqlDataAdapter sda = new SalDataAdapter(cmd);
	 Datatable dt = new Datatable();
	 sda.Fill(dt);
	 conn.Close();
	 cmd.Dispose();
}

 ```
- **列举两种你所使用过的设计模式，简述他们的概念和好处**
 答：单例模式：确保一个类只有一个实例,并提供一个访问它的全局访问点

- **C#委托与与泛型的概念，事件是不是一种委托**
委托是一种可用于封装命名和匿名方法的引用类型，委托类似于指针，但是委托是类型安全和可靠的，委托类都继承于System.Delegate类型，委托类型的声明和方法签名类似，有一个返回值和任意数目任意类型的参数。
泛型是C#语言和公共语言运行库(CLR)中的一个新功能，它将类型参数的概念引入了.NET Framework，通过使用泛型可以大大的简化强制类型转换或装箱操作的过程。
- **一列数的规则如下：1、1、2、3、5、8、13、21、34……求第30位数是多少，用递归算法实现**
解答：总结递归规律：F(n)=F(n-2)+F(n-1) Fibonacci数列

```csharp
public static int F(int n)
{
    if(n <= 0)return 0;
    if(n>0 && n <= 2)return 1;
    return F(n - 2) + F(n - 1);
}
```

- **简述进程和线程的区别，以及写出多线程常用的对象和方法**
进程是系统进行资源分配和调度的单位；线程是进程内部的一个执行单元，是CPU调度和分派的单位，一个线程可以创建和撤销另一个线程，同一个进程中的多个线程也可以并发执行

```csharp
//利用Thread类直接开启线程，
Thread  t = new Thread(methodName);
t.IsBackGround = true; //设为后台程序
t.Start();

//利用线程池开启线程，
void ThreadMethod(object name)
{
    Console.WriteLine("我的名字："+name);
}
ThreadPool.QueueUserWorkItem(ThreadMethod);

//利用任务开启线程
//第一种方法
Task task = new Task(()=>{ Console.WriteLine("大声喊出我的名字！")； })；
task.Start();
//第二种方法
TaskFactory sd = new TaskFactory();
sd.StartNew(() => Console.WriteLine(6 + 3));
```

- **简述WebService、WebApi、WCF的区别，以及使用场景**
- **列举Asp.Net页面之间传递值得几种方式**
1.使用QueryString, 如....?id=1; response. Redirect()....
2.使用Session变量
3.使用Server.Transfer
4.Cookie传值
- **Asp.Net Session有什么作用，请描述你对Session的理解**


- **C#如何捕获代码异常**
try
{
可能会出现异常的代码；
}
cath
{
出现异常后要执行的代码；
}
- **现有集合：List&lt;User&gt; collection = new List&lt;User&gt;();**
User类定义如下：
```csharp
public class User
{
	public string Name{get;set;}
	public int Age{get;set;}
	public DateTime Birthday{get;set}
}
```
**请使用Linq或者Lambda一种实现以下查询**
1. 查询姓名中包含“张”的所有人

```csharp
var result = (from u in db.Users
					where u.Name.Contains("张")
					select u).ToList();
```

3. 查询年龄在20到30岁之间的人（包含）
```csharp
var result = (from u in db.Users
					where u.Age>=20 && u.Age<=30
					select u).ToList();
```

4. 查询出2008年三月出生的所有人
```csharp
var beginDate = DateTime.Parse("2008-03-01");
var endDate = beginDate.AddMonths(1)
var result = (from u in db.Users
					where u.Birthday>=beginDate  && u.Birthday<endDate 
					select u).ToList();
```
5. 查询姓名等于“张三”年龄最大的第一个人
 ```csharp
var result = (from u in db.Users
					where u.Name=="张三"
					 orderby u.Age  descending
					select u).FirstOrDefault();
```
6. 按年龄分组查询每段年龄有多少人
 ```csharp
var result = (from u in db.Users
					group u by u.Age into ug
					select new 
					{
						 Age = ug.Key,
					     Count = ug.Count()
					}).ToList();
```
- **是否使用过EF、Dapper等ORM、框架，简述这些框架的好处**
提高开发效率，降低开发成本
使开发更加对象化
可移植
可以很方便地引入数据缓存之类的附加功能
#### 手写代码的面试题
- **手写冒泡排序**
```csharp
int[] array = new int[]{*};
int temp = 0;
for(int i = 0;i <array.Length - 1 i++)
{
    for(int j = i + 1; j < array.Length;j++)
    {
        if(array[j] < array[i])
        {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
```
- **手写AJAX：XMLHttpRequest**
```javascript
/**创建XMLHttpRequest对象；XMLHttpRequest对象用于后台与服务器交换数据。**/
var xhr = null;
if(window.XMLHttpRequest){
    //若支持创建XMLHTTPRequest对象
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xhr = new XMLHttprequest();
}else {
    // 若不支持,创建 ActiveXObject
  // IE6, IE5 浏览器执行代码
  xhr = new ActiveXObject("Microsoft.XMLHttp");
}
// 设置请求行，向服务器发送请求；用于说明XMLHttpRequest对象要从哪里获取数据.
// 通常可以是网站中的数据,也可以是本地中其他文件中的数据。
// open(method,url,async);规定请求的类型、URL 以及是否异步处理请求。
// method：请求的类型；GET 或 POST；
// url：文件在服务器上的位置；
// async：true（异步）或 false（同步）
xhr.open('GET','http://ajax.com/phpFile/time.php',true);
// post 请求需要设置请求头
// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

// 设置请求体；
// send(string); 将请求发送到服务器。string：仅用于 POST 请求
xhr.send(null);

/* 设置响应HTTP请求状态变化的函数 */
// onreadystatechange 存储函数（或函数名），
// 每当 readyState 属性改变时，就会调用该函数。
xhr.onreadystatechange = function(){
    // 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
  // 0: 请求未初始化，1: 服务器连接已建立，2: 请求已接收，
  // 3: 请求处理中，4: 请求已完成，且响应已就绪
  // console.log(this.readyState);
  if(xhr.readyState === 4){
      if(xhr.status === 200){
           console.log(xhr.responseText);
      }else {
          //失败处理
      }
  }
}
```
- **一个数组：1,1,2,3,5,8,13,21...+m，求第30位数是多少？用递归实现；(常考！！！)**
写递归要确定两个：递归的终止条件；递归表达式。
解答：总结递归规律：F(n)=F(n-2)+F(n-1) Fibonacci数列
```csharp
public static int F(int n)
{
    if(n <= 0)return 0;
    if(n>0 && n <= 2)return 1;
    return F(n - 2) + F(n - 1);
}
```
- **编写一个单例（Singleton）类**
```csharp
public class Singleton
{
    private static Singleton _instance = null;
    private static readonly object lock = new object();
    private Singleton(){}
    public static Singleton Instance
    {
        get
        {
            if(_instance == null)
            {
                lock(lock)
                {
                    if(_instance == null)
                         _instance = new Singleton();
                }
            }
            return _instance;
        }
        
    }
}
```
#### Web端的面试题
- **JavaScript中的基础类型有哪些**
Undefined、Null、Boolean、Number和String
- **简述函数与闭包的概念**
函数：就是封装了一段可被重复调用执行的代码块，通过此代码块可以实现大量代码的重复使用
闭包就是能够读取其他函数内部变量的函数，由于在Javascript语言中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成“定义在一个函数内部的函数”
- **Jquery的基本选择器包含哪些？**
答：基本选择器有id选择器：\$('#ids')、类选择器：\$('.myClass')、元素选择器：\$('div')就是选择所有的div标签、通配符选择器：\$('*')选择所有的元素。
-  **简述js中this和jquery中\$(this)的区别？**
 答：this就是简单的指当前元素，\$(this)是jQuery对象，js中的元素只要包上\$()就是jQuery对象了

#### Sql方面的面试题
- **用一条SQL语句查询出每门课程都大于80的学生的姓名**

name | course|  score
-|-|-
张三|语文 | 81 |
张三| 数学 | 75 |
李四| 语文 | 76 |
答：

```sql
1：select distinct name   from score  where name not in (select name from score where score<80)
2：select name  from score  group by name  having MIN(score)>=80
```

- **使用SQL实现分页查询**

```sql
 --//@PageIndex --当前页码
 --//@PageSize--每页显示行数
 declare @PageIndex int
 declare @PageSize int
 set @PageIndex = 2
 set @PageSize = 10
 select * from 
 (select ROW_NUMBER() over(order by id asc) as 'rowNumber', * from Table) as temp
 where rowNumber BETWEEN (( @PageIndex - 1 ) * @PageSize  + 1 ) AND @PageIndex * @PageSize 

```

- **写一条sql语句取出表A中第31到40的记录（SqlServer，以自动增长的ID作为主键，注意：ID可能不是连续的）**
答：
```sql
解1: select top 10 * from A where id not in (select top 30 id fromA)
解2: select top 10 * from A where id >(select max(id) from (select top30 id from A )as A)
```
- **编写SQL根据部门信息T_Org中的部门编号OrgID、部门名称字段OrgName、以及员工信息表T_Employee中所属部门编号字段OrgID、来更新员工信息表T_Employee中的所属部门字段OrgName**
```sql
update T_Employee te set te.OrgName = tg.OrgName
from T_Employee te2
inner join T_Org tg
on te2.OrgID=tg.OrgID
```
- **找出教师表（表名Teacher）中姓名（字段名Name）重复的数据，然后删除多余重复的记录，只留ID小的那个。**
```sql
delete from Teacher 
        where Name in (select Name from Teacher group by Name Having Count(*)>1)
        and ID not in (select Min(ID) from Teacher group by Name Having Count(*)>1);
```
- **什么叫Sql注入，如何防止？**
答：
用户根据系统的程序构造非法的参数从而导致程序执行不是程序员期望的恶意SQL语句。使用参数化的SQL就可以避免SQL注入。
- **介绍存储过程的基本概念和它的优缺点**
答：
存储过程是一套已经预先编译好的SQL代码
1. 运行速度：存储过程一旦执行，在内存中就会保留一份这个存储过程，这样下次再执行同样的存储过程时，可以从内存中直接调用，所以执行速度会比普通sql快。    
2.  减少网络传输：存储过程直接就在数据库服务器上跑，所有的数据访问都在数据库服务器内部进行，不需要传输数据到其它服务器，所以会减少一定的网络传输。
3. 可维护性 
4. 增强安全性
5. 可扩展性：应用程序和数据库操作分开，独立进行
- 现有一学生表如下：

class| Name|  Chinese | English
-|-|-|-
一班|张三| 67|78
二班| ……| 45|69
李三班| ……| 34| 83
……|……|……|……
请编写Sql查询出如下结果：
1. 获取每个班级的English的平均成绩，并按照降序排序
2. 获取有一门不及格的人，并统计每个班级的不及格人数（小于60分不及格）

 <font color=red>注意：上面是找工作期间常遇到的部分面试题，其中设计模式基本都会考到</font>
 ### 项目经验
 这个是面试中最重要的了，基本都会根据你做的项目来进行询问里面遇到的一些技术，遇到的一些问题怎么解决的等等，这就要根据自己的项目来回答了
 提供两个面试参考的链接：
 [程序员这样面试，拿到offer的几率是80%](https://zhuanlan.zhihu.com/p/44265813)
 [程序员如何准备技术面试](https://zhuanlan.zhihu.com/p/38432342)
 ### 开放性问题
 - **在工作中学习到了什么？**
首先技术方面每个项目都会学到一些特定的技术知识，我在与同事的沟通合作中，注重团队内部的团结，在工作中学习认识到合作的宝贵，以及实践的重要性。

- **你有没有带领团队的经验**
我在以往的项目中与团队成员都能够融洽相处，我们每周都会有技术培享会，我也会分享一些技术来相互学习，我们有时候周六会有技术的培训，我也针对自己掌握的技术做了几次培训，虽然我没有带队的经验，但我相信我自己是能够做到的
-  **为什么选择这家公司？**
我了解到贵公司在ERP行业属于领头行业，业务方面最为全面，研发实力也最为雄厚，通过公司的官方博客我还了解到公司的企业文化，我非常希望能加入到这样一个优秀的企业中，让我能够实战研发能力，我会女里的工作，证明自身的价值
- **对本公司了解多少？**
我了解到贵公司是中国最早的互联网即时通信软件开发商，是我国互联网服务以及移动增值服务的提供商，并一直致力于即时通信以及相关的增值业务的服务运营
- **你曾经面临最大的专业挑战是什么？你是怎么战胜它的？**
在项目开发过程中也遇到了很多问题，其中让我印象比较深刻的一个问题是XXX，通过这个问题也是我认识到，在编写代码时不仅要注意代码的逻辑和可读性，同时也要考虑一下这些代码有没有可能会出现某些问题。
- **你认为自己的技术水平怎么样？**
经过这两年的积累和成长，我对自己的技术很有信心，我觉得我算一个中级的开发者，我感觉我可以胜任相关的各种开发任务
- **你对加班的看法？**
如果是工作需要，我会义不容辞的加班，我本身没有什么负担，可以全身心的投入到工作中，同时我也会提高工作效率，减少不必要的加班
- **如何评价你上家公司，你为什么从上家公司离职？**
上一家公司在项目管理和系统集成方面较为突出，从中也学习到了很多的东西，经过这两年对ERP中一些系统的研发，使我了解了相关的业务流程并掌握了很多开发上的技巧，以及相关的一些技术，
以前的行业发展空间比较有限
原来的工作与自己的职业规划不合
原来的业务相对传统，我想做一些偏向互联网方面的一些产品，
公司在新的研发方向上没有一个明确的信息，
自己在过去的几年中也有了一定的经验积累，所以想寻求更适合自己发挥的一个平台
并且公司所用的技术栈不够丰富，
我对XXX类系统的前景更看好，我也希望能够扩展自己的技能和对业务的了解，因此我希望寻找一家做专业的B2B系统的企业，所以做了离职的决定
- **.你有什么优点？**
我的优点是有足够的专业能力，工作认真负责，比如在项目的开发过程中，我作为项目的主要开发人员，每天都会认真规划和编写开发日程，方便其他成员了解开发进度并及时跟进项目进度
- **.你有什么缺点？**
缺点的话，比较执着把，比如有时候会因为一个技术问题导致很长时间或者可能加班到很晚都在研究怎么处理这个问题，这样有时候也会误了其他方面的工作，工作比较按部就班吧，总是按照主管的要求去完成任务，还有就是自己的工作范围内有创新意识，但是没有及时的分享给其他的同事，这些问题我也一直在改善，我也相信我能够很快的解决
- **.你的职业规划是什么？**
现在最大的愿望就是能入职贵公司，虚心向周围优秀的同事学习，追赶他们，让自己变得更专业，然后三到五年的一个计划就是达到高级工程师的水平，在此期间我也会注重自己管理方面知识的积累，如果三年以后在管理方面有一些能力的话，我会向技术主管和项目经理的方向努力发展，
- **如果你离职，你的老板有什么反应？**
我和现任公司的老板关系非常好，我在项目中也承担了一个核心的研发工作，因此我离开时，他非常的不舍，但我更希望有自己的一些职业发展，所以我们经过友好的交谈，他也尊重我离职的这个决定，我也非常感谢他的理解和支持
- **除了我们公司外，你还应征了其他那些公司？**
由于我对教育医疗行业比较感兴趣，因此除贵公司外，还应聘了两家相关的企业
 ### 最后的提问
 - **你们新老员工的比例是多少？**
这个问题其实是揭示了公司的文化，如果新员工比较多，公司创建时间也比较长的话，说明公司人员流动比较高，公司文化可能不好，或者薪资什么不高
 - **如果我入职，会有入职培训么？会被分到哪个项目组？项目组的成员结构怎么样？**
这个问题是了解公司的架构是不是清晰，个人职责划分是不是明确，如果面试官回答不了这个问题，或者支支吾吾的，即使你进去了可能要兼顾几个项目，维护老项目。这些都要问清楚，
这样你才能知道自己大概的一个工作量，维护项目虽然头疼，但是上线压力不大，如果新旧项目一起来，你就要考虑是否适合这样的工作强度了
 - **我入职的前三个月，要完成什么样的工作来证明我的能力？**
这个问题可以为下一个问题做准备，如果我工作优秀的话会不会有相应的奖励
 - **多久进行一次调薪，工作绩效是如何评定的？是按项目收益，还是主管评定？**
这也是了解公司有没有实施奖励制度，通常回答准备中都要留一个心眼，可能有的一年都不会进行调薪
 - **公司的五险一金是按什么比例缴纳的，是按最低标准，还是可以自己缴纳更高的比例**
一般这个会问Hr，如果是小公司的话，可以直接问工程师
 - **我今天的面试怎么样？有没有可能进入到下一轮的面试，我们公司一般多久会回复**
首先可以了解不足，积累经验，也可以为下一轮的复试做准备
