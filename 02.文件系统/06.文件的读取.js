/*
	1.同步文件读取
	2.异步文件读取
	3.简单文件读取
	 fs.readFile(path[, options], callback)
	 fs.readFileSync(path[, options])
	 	- path 要读取的文件的路径
	 	- options 读取的选项
	 	- callback回调函数，通过回调函数将读取到内容返回(err , data)
	 		err 错误对象
	 		data 读取到的数据，会返回一个Buffer

	4.流式文件读取
 */

var fs = require("fs");

//读取一张图片，再写入到另外一个文件中，就是拷贝
fs.readFile("an.jpg", function (err, data) {
    if (!err) {
        //将data写入文件中
        fs.writeFile("/Users/wally/Desktop/Code/Node/atguigu-node/02.文件系统/hello.jpg", data, function (err) {
            if (!err) {
                console.log("文件写入成功");
            }
        });
    }
});
