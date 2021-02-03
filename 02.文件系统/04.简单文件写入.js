/*
	简单文件写入
	 fs.writeFile(file, data[, options], callback)
	 fs.writeFileSync(file, data[, options])
		- file 要操作的文件的路径
		- data 要写入的数据
		- options 选项，可以对写入进行一些设置
		- callback 当写入完成以后执行的函数

		- flag
			r 只读
			w 可写
			a 追加
 */

//引入fs模块
var fs = require("fs");

//一般第三个参数不传，需要传一个对象，一般对象中有一个flag参数，flag的值：
//r，只读，如果文件不存在，则抛异常
//r+，读和写，如果如果文件不存在，则抛异常
//w则为写，文件不存在则创建文件，会清除所有内容，再写（不是追加写）
//a则为追加写

//相对路径
// fs.writeFile("hello3.txt", "这时通过writeFile写入的内容", {flag: "r+"}, function (err) {
//     if (!err) {
//         console.log("写入成功~~~");
//     } else {
//         console.log(err);
//     }
// });

//绝对路径
fs.writeFile("/Users/wally/Desktop/Code/Node/atguigu-node/02.文件系统/hello3.txt", "这时通过writeFile写入的内容", {flag: "w"}, function (err) {
    if (!err) {
        console.log("写入成功~~~");
    } else {
        console.log(err);
    }
});
