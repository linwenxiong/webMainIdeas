环境变量的配置




npm包管理依赖的历史以及对于依赖树层级嵌套问题的解决思路。然后结合yarn和pnpm对于这些问题的解决方案。

# 原理
npm 脚本的原理非常简单。每当执行npm run，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。

比较特别的是，npm run新建的这个 Shell，会将当前目录的node_modules/.bin子目录加入PATH变量，执行结束后，再将PATH变量恢复原样。

这意味着，当前目录的node_modules/.bin子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。比如，当前项目的依赖里面有 Mocha，只要直接写mocha test就可以了。




# 先要知道如何获取package.json中的值

# package.json 文件
package.json 文件是 Node.js 项目中的一个核心配置文件，用于记录项目的元数据和依赖关系。

# 简单配置下脚本

``` json
{
  "name": "lin",
  "scripts": {
    "dev": "node ./dev.js"
  },
}

```
## 新建一个dev.js文件查看获取到的环境变量

``` js
// dev.js
console.log(process.argv.slice(2), '拿到script传递的参数')
console.log(process.env.npm_package_name, '通过环境变量拿到package.json的name属性')
```

# 开始配置环境变量
1. 创建一个.env文件，里面配置环境变量，格式为：

``` json
{

  "scripts": {
    "dev": "node ./dev.js"
  },
}

```


# 下载cross-env
npm install cross-env --save-dev
cross-env 是一个 Node.js 包，用于在不同操作系统上设置环境变量，特别是在运行 JavaScript 脚本时。不同操作系统使用不同的命令来设置环境变量，这可能导致开发人员需要编写不同的脚本来适应不同的平台。cross-env 的目的是解决这个问题，使设置环境变量变得更加便捷和可移植。

安装了cross-env之后，就可以再在package.json中配置脚本了。

``` json
{

  "scripts": {
    "test": "cross-env MODE=deploy node ./dev.js"
  },
}
// 注意这个cross-env命令要写在前面
```
配置完了之后，当运行npm run test命令时，就会自动设置环境变量MODE为deploy，然后执行node ./dev.js命令。
在dev.js文件，可以通过 process.env.MODE 来获取这个环境变量的值。

比如：
``` js
// dev.js
console.log(process.env.MODE)// 打印出deploy
```


# 接下来开始配置vite的环境变量
## 在package.json中配置vite脚本
``` json
"scripts": {
      "dev": "cross-env WEBMODE=deploy vite --mode=dev",
      "test": "cross-env WEBMODE=deploy vite",
      "build": "vite build"
    }
```
## 下载vite
```
npm install vite --save-dev
```

## 创建vite.config.js文件
 ``` js
import { defineConfig } from 'vite';
export default defineConfig(({ mode }) => {
  console.log(mode) //这个mode是命令行中传入的参数，可以查看package.json中的dev脚本，如果没有配置，默认是development，生产环境是production
  return {
  }
})
```

 ``` js
import { defineConfig } from 'vite';
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '') // 寻找环境变量为 VITE_ 开头的变量
    console.log( '当前的mode是'+ mode, '我去加载.env.'+ mode,'这个文件', '拿到环境变量了'+env.VITE_API_HOST)
  return {
    __API_HOST__: env.VITE_API_HOST
  }
})
```
注意： 这个loadEnv方法会加载指定的mode值的环境变量文件，如：mode的值是xxx, 那么它会加载.env.xxx文件。默认会加载.env.development或者.env.production文件，如果找不到，会默认加载.env文件。

