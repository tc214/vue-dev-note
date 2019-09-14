### benchmarks-----------存放一些测试类的demo
### dist-----------------打包构建产出目录
### examples-------------一些vue的小demo和示例
### flow-----------------静态类型声明
### package.json----------项目信息以及依赖等等
### test------------------测试用例
### packages--------------vue编译后生成的npm包
### src-------------------源码目录
  - compiler------------编译器代码的目录，将template编译为render函数
  -   codegen----------存放从抽象语法树（AST）生成render函数的代码
	- directives-------生成render函数前需要处理的指令
	- parser-----------模板解析
  - core
     - components-------
     - global-api-------
     - instance---------包含vue构造函数设计相关的代码
     - observer---------反应系统，包含数据观测的核心代码
     - util-------------
	  - vdom-------------包含虚拟DOM创建和打补丁的代码
  - platforms----------平台划分
    - web---------------web端
	 - weex--------------weex
  - server------------服务端渲染相关
  - sfc--------------------
  - shared-----------------
  
  
## 配置使用sourcemap调试vue源码 
   环境:
   
   Google Chrome  V72.0.3626.109
   
   vue-dev V 2.6.10  
### 1. 在vue-dev的package.json文件如下位置加 --sourcemap， 用于生成.map文件  

```$xslt
 "scripts": {
    "dev": "rollup -w -c scripts/config.js --environment TARGET:web-full-dev --sourcemap",
```   
执行npm install, 下载依赖包  

### 2. 执行npm run dev, 这一步 将在dist目录下生成vue.js和vue.js.map两个文件
      
### 3. 将dist目录和src目录拷贝到引用vue.js的网页的位置， 比如下例中index.html即是要访问的文件（如果index.html访问的是vue.min.js，记得改为vue.js）

### 4. 双击访问examples/commits/index.html, 如 ：
```  
file:///D:/source/vue-dev/examples/commits/index.html 
```  
    
### 5. 浏览器按F12，打开调试工具，发现src文件夹，即可设置断点调试vue-dev源码
    
