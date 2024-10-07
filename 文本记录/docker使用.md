进入容器
docker exec -it b226fac3578a /bin/bash
启动nginx容器
https://www.runoob.com/docker/docker-install-nginx.html
docker run --name nginx-test -p 8080:80 -d nginx 
// 将本地主机8080端口映射到容器内部的80端口，访问8080即可访问到容器80端口的服务
运行node容器
docker run -itd --name node-test node

只查看正在运行的容器
docker ps 

查看所有容器列表（包括停止的和启动的）
docker ps -a

重启容器
docker restart 容器名
查询所端口开情况
firewall-cmd --list-ports
查询8081端口开情况
firewall-cmd --query-port=8081/tcp

添加指定端口
firewall-cmd --add-port=8080/tcp --permanent         记得重启防火墙才生效

重启防火墙：开启也可以用这个
service firewalld restart

关闭防火墙
systemctl stop firewalld.service

列出所有进行中的进程[有进程号]
ps -e

终止进程
kill -9 进程号

./configure --prefix=/data/local/nginx/ --with-http_gzip_static_module --with-http_ssl_module
键入exit退出容器 

Nginx的默认安装目录是
Linux系统中Nginx的默认安装目录通常是
/etc/nginx，其中包含了Nginx的配置文件。
二进制文件通常位于 /usr/sbin/nginx 或 /usr/local/sbin/nginx，而日志文件通常位于 /var/log/nginx。

-p :进行端口映射 
-d：设置容器在后台一直运行

创建容器并同步文件目录
docker run --name mynginx -p 443:80 -v /data/nginx/html:/usr/share/nginx/html -d nginx
 

根据容器cef3690ba35d 生成一个新的镜像 名字叫newnode，然后用docker images可以查看到此镜像
docker commit cef3690ba35d newnode


删除镜像
docker rmi d2c94e258dcb

显示当前时间
date "+%Y-%m-%d %H:%M:%S"
进入容器，并且运行date命令
docker exec 78ab8130892e date