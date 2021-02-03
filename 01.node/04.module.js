//局部变量，在全局中不可见
var a = 10;

//不加var关键字，就是全局变量，是global对象的一个属性
a = 10;

/*
	在node中有一个全局对象 global，它的作用和网页中window类似
		在全局中创建的变量都会作为global的属性保存
		在全局中创建的函数都会作为global的方法保存

	当node在执行模块中的代码时，它会首先在代码的最顶部，添加如下代码
 			function (exports, require, module, __filename, __dirname) {

 	在代码的最底部，添加如下代码
 			}

 	实际上模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递进了5个实参
		 exports
		 	- 该对象用来将变量或函数暴露到外部

		 require
		 	- 函数，用来引入外部的模块

		 module
		 	- module代表的是当前模块本身
		 	- exports就是module的属性
		 	- 既可以使用 exports 导出，也可以使用module.exports导出

		 __filename
 			C:\Users\lilichao\WebstormProjects\class0705\01.node\04.module.js
 			- 当前模块的完整路径

	  	 __dirname
 			C:\Users\lilichao\WebstormProjects\class0705\01.node
 			- 当前模块所在文件夹的完整路径
* */

console.log(global.a);

//arguments对象有值，这就说明每个js文件都是作为一个单独的方法来运行的
//console.log(arguments);

/**
 * arguments.callee
 *  - 这个属性保存的就是当前执行的函数对象
 */
//function (exports, require, module, __filename, __dirname) {}
console.log(arguments.callee + "");

//5，证明函数传入了5个参数，分别是exports, require, module, __filename, __dirname
console.log(arguments.length);

console.log(exports);
console.log(module.exports);
//true，证明exports对象是module的属性
console.log(module.exports == exports);

//当前模块的完成路径
//输出：/Users/wally/Desktop/Code/Node/atguigu-node/01.node/04.module.js
console.log(__filename);

//当前模块，所在文件夹的路径
//输出：/Users/wally/Desktop/Code/Node/atguigu-node/01.node
console.log(__dirname);
