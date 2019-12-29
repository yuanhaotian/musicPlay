import oriJsonp from 'jsonp'

export default function jsonpFn(url, params) { //请求地址，参数{},回调函数
    return new Promise(function (res, rej) {
        oriJsonp(url, params, function (err, data) {
            if (err) {
                rej(err);
            } else {
                res(data);
            }
        })
    })
}