export default function (Vue, opt) {
    Vue.prototype.$ajax = {
        post: function (url, data) {
            function argUrl(obj) {
                var result = [];
                function argFormat(obj, name) {
                    if (typeof obj === "object") {
                        for (let i in obj) {
                            if (typeof obj[i] === "object") {
                                name ? argFormat(obj[i], name + '[' + i + ']') : argFormat(obj[i], i);
                            } else {
                                if (name) {
                                    result.push(name + "[" + i + "]" + '=' + encodeURIComponent(obj[i]));
                                } else {
                                    result.push(i + '=' + encodeURIComponent(obj[i]));
                                }
                            }
                        }
                        return result.join('&');
                    } else {
                        result += obj;
                        return result;
                    };

                }

                return argFormat(obj);

            };

            return new Promise(function (resolve, reject) {
                var xmlhttp;
                if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
                    xmlhttp = new XMLHttpRequest();
                } else { // code for IE6, IE5
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                };
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        let as = JSON.parse(xmlhttp.responseText)
                        if (as.state == 2) {
                            sessionStorage.setItem("wgctokens", '');
                            sessionStorage.setItem("wgc_admin_username", '');
                            location.reload();
                        }
                        resolve(JSON.parse(xmlhttp.responseText));
                    }
                };

                var urldata = argUrl(data);

                xmlhttp.open("POST", url, true);
                //xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                xmlhttp.setRequestHeader("Accept", "*/*");
                // xmlhttp.setRequestHeader("Accept-Language", "zh-CN,zh;q=0.8");
                xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //设置请求头信息
                xmlhttp.send(urldata);

            })
        },
        get: function (url) {
            return new Promise(function (resolve, reject) {
                var xmlhttp;
                if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
                    xmlhttp = new XMLHttpRequest();
                } else { // code for IE6, IE5
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        resolve(JSON.parse(xmlhttp.responseText));
                    }
                }
                xmlhttp.open("GET", url, true);
                xmlhttp.send();
            })
        },




    }


}