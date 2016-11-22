## Webpack + Typescript + react

- [React & ReactDOM](http://facebook.github.io/react/)
- [Redux](https://github.com/rackt/redux)
- [TypeScript](http://www.typescriptlang.org/)

开始：

- 使用npm管理所有包
- 使用webpack对前端项目进行预编译
- 使用js的超集Typescript，需要全局安装typescript和typings，关于typings相关，
可以查看 [Visual Studio Code使用typings拓展自动补全功能](http://blog.csdn.net/liyijun4114/article/details/51658087)

**note:** typings主要是用于vscode的只能提示，代替tsd,
在全局安装typings之后可以使用命令在项目中安装typings，
然后会多出typings文件夹，之后在每个文件的头部加上引用，
或者在tsconfig.json文件中加入配置。

```
typings install

/// <reference path='../typings/index.d.ts'/>

"filesGlob":[
    "typings/index.d.ts"
  ],
```

**note:** 首次安装typings的时候带上 --save 会自动生成 typings.json ，
然后利用 _npm hooks_ ，在package.json中加入 _"postinstall": "typings install"_ 
之后每次执行 _npm install_ 都会自动执行 _typings install_

```
typings install debug --save
```

### 关于webpack

- [webpack.optimize.DedupePlugin](https://zhuanlan.zhihu.com/p/20914387?refer=jscss) 
_[去重]_ 如果你使用了一些有着很酷的依赖树的库，
那么它可能存在一些文件是重复的。webpack可以找到这些文件并去重。
这保证了重复的代码不被大包到bundle文件里面去，
取而代之的是运行时请求一个封装的函数。

- [html-webpack-plugin](http://www.cnblogs.com/haogj/p/5160821.html)
这个插件用来简化创建服务于 webpack bundle 的 HTML 文件，
尤其是对于在文件名中包含了 hash 值，
而这个值在每次编译的时候都发生变化的情况。
你既可以让这个插件来帮助你自动生成 HTML 文件，
也可以使用 lodash 模板加载生成的 bundles，或者自己加载这些 bundles。


