1. HTTP 协议
    HCP/IP HTTP是上层 
    Web Server Restful

    JSON 资源， 喜欢的运动员，HTTP提供一下服务？
    url http://137.0.0.1/players.json
    动作 GET 
    liver-server 静态资源
    json-server

    url -> 资源 resources 
    跨域 域名不一样 协议不一样 http->https 3000->8080
    json-server 自带跨域能力
    js 是不允许跨域的 https://www.runoob.com/try/ajax/jsonp.php
    不支持 ？ 解决方案是 JSONP JSON with padding

    我们用了DOM 编程，script = document.createElement("script")
    
    script.src="https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=callbackFunction"
    document.body.appendChild(script)