// require(./index2.js) // 1.以路径开头,并且路径中带有后缀名称，会根据路径去找这个文件，如果找到就加载成功，否则就是失败。
// require(./index2) // 2.以路径开头,但是没有后缀，
// 先会查找 index2.js 这个文件，有加载成功，没有继续找，
// 找index2.json文件，没有的话
// 找index2.node文件，没有的话
// 找index2的文件夹 -> package.json文件找到main指定的这个入口文件。如果有就加载成功，没有的话
// 找index2下的index.js文件，如果没有
// 找index2下的index.json文件，如果没有
// 找index2下的index.node文件，如果都没有，--》加载失败。
// --- 所有后缀还是要写

// 如果参数不是个路径,直接是个模块名称
// require(http)
// 1.先在核心模块中查找，看是否有和指定名字一样的模块，有就加载成功，如果没有的话
// 2.就会被认为是一个第三方模块（node_modules），在当前文件目录下的node_modules文件夹里面去找，一层一层往上找，直到磁盘根目录下。


// 1.如果是路径带后缀开头直接找对应文件。
// 2.如果没后缀，会自动拼接后缀去找，顺序：.js/.json/.node，
// 都找不到就会被认为是个文件夹，查找顺序：package.json(main指定的文件)/index.js/index.json/index.node/都找不到就会失败。

var mod = require('./require试验.js')
console.log(mod)
mod.add()
console.log(mod.getCount());