# 第一章 终端打印
在本章将会学习：
* 如何使用Rust语言编写和运行你的第一个程序
* 如何在终端上输出文本和数字
* 如何编写一个小脚本，使编译器输出的内容更易读
* 如何在代码中编写注释
## 1.1 如何开始
1.下载安装rust环境
2.cargo

## 1.2 Hello,world!
```rust
fn main(){
    print!("Hello,world!");
}
```
编译运行，它将输出："Hello,world!"
这3行程序语句是若干语法项（token）组成，大体可以分为：
* 关键字：fn（定义函数）
* 标识符：()（空元组，也称unit）、{...}（代码表达式）、!（宏展开）、(expr)（括号表达式）、"..."（标识字符串常量）;（语句结束符）
* 词条：main（函数名）、Hello,world!（字符串字面量内容）
  关于语法项缀连出的含义即：定义了一个叫main的函数，这个main函数没有参数和返回值，用途是在终端打印 Hello,world! 文本信息。
  fn代表function，Rust在很多地方都体现着类似的简洁。
  main函数是可执行程序的入口，如果Rust程序中没有main函数，则可能为一个库，需要被可执行程序调用使用。
  print!是一个Rust标准库定义的宏（macro），!是宏的标识。print!用于打印到标准输出。
  关于字符串字面量，在Rust中用&str标识，区分于传统字符串类型String，其中&标识引用和String为字节数组在后面详述，这里只要知道字符串字面量为硬编码的字符序列。
  以;结尾，标识一个表达式的结束和下一个表达式的开始，如果一个语句没有;结尾可能是函数体的返回值。


## 1.3 更多打印字面量字符串的组合
### 字符串模板
```rust
println!("{},{},{}!","你好","🌏",521);
let hello_str = "你好";
println!("{hello_str},{},{}!","🌏",500 + 20 + 1);
```
println!等同于print!("...\\n")，即帮助完成自动换行。
字符串字面量中{}为占位符，标识字符串参数要插入的位置。
println!的第一个字符串字面量为模板字符串。
Rust的字符为Unicode类型，字符串编码为UTF-8，支持。
打印宏可接收整数字面量等实现了Debug或Display的类型。
{x}中可直接使用上文定义的变量。
可计算的字面量在编译器直接被计算出结果。
### 关于打印换行
```rust
fn main(){
	println!("{}","These
			are
			three lines");
}
```
会打印出：
```bash
These
			are
			three lines
```
即字符串字面量包含"..."中的所有字符，包括换行符和行前空白样式。
要想打印一行：
```rust
fn main(){
	println!("{}","This \
			is \
			one line");
}
```
打印结果：
```bash
This is one line
```
通过添加\，标识本行没有换行和忽略下一行的行前空白。
如果想要有换行，但是没有行前空白，可以显示标识换行和\\组合：
```rust
fn main(){
	println!("{}","These\n\
			are\n\
			three lines");
}
```
打印结果：
```bash
These
are
three lines
```

隐含的知识
![[Pasted image 20240810085412.png]]
![[Pasted image 20240810085442.png]]
![[Pasted image 20240810085502.png]]





## 1.6 命令行脚本
std::fmt::Display
std::fmt::Debug
std::fmt
## 1.7 注释







