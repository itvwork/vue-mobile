export default function(Vue, opt) {
  Vue.prototype.$tool = {
    formatDate: function(arg) {
      var now = new Date(parseInt(arg) * 1000)
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      month = month >= 10
        ? month
        : '0' + month;
      var date = now.getDate();
      date = date >= 10
        ? date
        : '0' + date;
      var hour = now.getHours();
      hour = hour >= 10
        ? hour
        : '0' + hour;
      var minute = now.getMinutes();
      minute = minute >= 10
        ? minute
        : '0' + minute;
      var second = now.getSeconds();
      second = second >= 10
        ? second
        : '0' + second;
      return year + "-" + month + "-" + date + "   " + hour + ":" + minute + ":" + second;

    },
    base64: function(width, file, isshow) {
      var i = 0;
      var len = file.length;
      var arr = [];
      return new Promise(function(resolve, reject) {
        for (var a = 0; a < len; a++) {
          let imgname = file[a].name;
          let index1 = imgname.lastIndexOf(".");
          let index2 = imgname.length;
          imgname = imgname.substring(index1 + 1, index2); //后缀名
          let type = "";

          switch (imgname) {
            case 'gif':
              type = 'image/gif'
              break;
            case 'png':
              type = 'image/png';
              break;
            case 'jps':
              type = 'image/jps';
              break;
            default:
              type = 'image/jpeg';
          }

          lrz(file[a], {
            width: width,
            quality: 0.8,
            type: type
          }).then(function(rst) {
            i++;
            let base64Data = rst.base64.replace(/^data:image\/\w+;base64,/, "");
            if (isshow) {
              arr.push({type: imgname, data: base64Data, url: rst.base64})

            } else {
              arr.push({type: imgname, data: base64Data})
            }

            if (i >= len) {
              resolve(arr);
            } else {
              reject(error);
            }
          });
        }
      })
    },
    getImgurl: function(str) {
      let regx = /imgurl=['"]([^'"]+)/gi;
      let arr = [];
      str.replace(regx, function(value) {
        arr.push(value);
        return value;
      });
      for (let i = 0, len = arr.length; i < len; i++) {
        arr[i] = arr[i].replace('imgurl="', '').replace('"', '');
      }

      return arr;
    },

    array_remove_repeat: function(a) { // 去重
      var r = [];
      for (var i = 0; i < a.length; i++) {
        var flag = true;
        var temp = a[i];
        for (var j = 0; j < r.length; j++) {
          if (temp === r[j]) {
            flag = false;
            break;
          }
        }
        if (flag) {
          r.push(temp);
        }
      }
      return r;
    },
    array_intersection: function(a, b) { // 交集
      var result = [];
      for (var i = 0; i < b.length; i++) {
        var temp = b[i];
        for (var j = 0; j < a.length; j++) {
          if (temp === a[j]) {
            result.push(temp);
            break;
          }
        }
      }
      return this.array_remove_repeat(result);
    },

    array_union: function(a, b) { // 并集
      return this.array_remove_repeat(a.concat(b));
    },

    array_difference: function(arr1, arr2) {
      var diff = [];
      var tmp = arr2;

      arr1.forEach(function(val1, i) {
        if (arr2.indexOf(val1) < 0) {
          diff.push(val1);
        } else {
          tmp.splice(tmp.indexOf(val1), 1);
        }
      });
      return this.array_remove_repeat(diff.concat(tmp));

    }
  }
}
