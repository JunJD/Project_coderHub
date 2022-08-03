# 目录结构划分
## 功能模块
## 业务模块
<!-- dotenv 解析读取env文件 -->

### 用户注册接口
#### 用户注册接口编写流程
1. 注册用户路由router编写
2. 处理函数的控制器controller编写
3. 操作数据库的service编写

#### 数据库连接操作:mysql2
1. 创建数据库连接
2. 测试数据库连接是否成功

#### 注册用户校验
1. 用户名密码不能为空
2. 用户名没有被注册过

>说明1:请在根目录下新建.env文件，并配置一下信息
>>>APP_PORT = 本地启动服务的端口
MYSQL_HOST = 数据库服务的地址
MYSQL_PORT = 数据库服务的端口
MYSQL_DATABASE = 数据库名
MYSQL_USER = 数据库用户名一般为root
MYSQL_PASSWORD = 数据库密码

>说明2:yarn start | npm start 启动服务

