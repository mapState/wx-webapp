
//下载APP
export function toApp() {
    location.href =
        "http://a.app.qq.com/o/simple.jsp?pkgname=com.yunti.kdtk#opened";
}
//保存cookie
export function SetCookie(name, value, min) {
    let expires;
    if (min) {
        let date = new Date();
        date.setTime(date.getTime() + (min * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    } else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
// 读取cookie
export function GetCookie(name) {
    let nameEQ = name + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
export function deepClone(source) {
    if (!source && typeof source !== 'object') {
        throw new Error('error arguments', 'deepClone')
    }
    const targetObj = source.constructor === Array ? [] : {}
    Object.keys(source).forEach(keys => {
        if (source[keys] && typeof source[keys] === 'object') {
            targetObj[keys] = deepClone(source[keys])
        } else {
            targetObj[keys] = source[keys]
        }
    })
    return targetObj
}
/**
 * Merges two objects, giving the last one precedence
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 */
export function objectMerge(target, source) {
    if (typeof target !== 'object') {
        target = {}
    }
    if (Array.isArray(source)) {
        return source.slice()
    }
    Object.keys(source).forEach(property => {
        const sourceProperty = source[property]
        if (typeof sourceProperty === 'object') {
            target[property] = objectMerge(target[property], sourceProperty)
        } else {
            target[property] = sourceProperty
        }
    })
    return target
}
// 删除cookie
export function RemoveCookie(name) {
    SetCookie(name, "", -1);
}

// 手机号验证
export function testMobile(val) {
    // return /^1[3|4|5|7|8|9][0-9]{9}$/.test(val);
    return /^1[0-9][0-9]{9}$/.test(val);
}
// 清空对象
export function clearObj(obj) {
    for (var i in obj) {
        obj[i] = ''
    }
    return obj;
}
// 苹果焦点修复
export function inputScroll(val) {
    // window.scrollTo(0, 0);
    // document.body.scrollTop = 0;
    setTimeout(() => {
        window.scrollTo(0, document.body.scrollTop + 1);
        document.body.scrollTop >= 1 && window.scrollTo(0, document.body.scrollTop - 1);
    }, 10)

}
// 设备判断
export function device() {
    let ua = navigator.userAgent;
    return {
        trident: ua.indexOf('Trident') > -1,
        presto: ua.indexOf('Presto') > -1,
        webKit: ua.indexOf('AppleWebKit') > -1,
        gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1,
        mobile: !!ua.match(/AppleWebKit.*Mobile.*/),
        ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        android: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1,
        iPhone: ua.indexOf('iPhone') > -1,
        iPad: ua.indexOf('iPad') > -1,
        webApp: ua.indexOf('Safari') === -1,
        weChat: !!ua.toLowerCase().match(/micromessenger/i),
        kdtk: ua.indexOf('kdtk') !== -1
    }
}
export function isAndroid() {
    /* istanbul ignore next */
    return _.isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}

export function isIOS() {
    /* istanbul ignore next */
    return _.isServer ? false : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}
// 对象转字符串
export function objectToStr(obj, arr = []) {
    return Object.keys(obj).map(key => (`${key}=${obj[key]}`)).join('&')
}

// 一键复制
export function coby(val, that) {
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
    const input = document.createElement("input");
    input.id = "copy-input";
    input.readOnly = "readOnly";        // 防止ios聚焦触发键盘事件
    input.style.position = "absolute";
    input.style.left = "-1000px";
    input.style.zIndex = "-1000";
    document.body.appendChild(input);
    input.setAttribute("value", val);
    // input.select();
    selectText(input, 0, val.length);
    function selectText(textbox, startIndex, stopIndex) {
        if (textbox.createTextRange) {
            //ie
            var range = textbox.createTextRange();
            range.collapse(true);
            range.moveStart("character", startIndex); //起始光标
            range.moveEnd("character", stopIndex - startIndex); //结束光标
            range.select(); //不兼容苹果
        } else {
            //firefox/chrome
            textbox.setSelectionRange(startIndex, stopIndex);
            textbox.focus();
        }
    }

    if (document.execCommand("copy")) {
        document.execCommand("copy");

        that.$toast({
            message: "复制成功"
        });
    }
    if (device().kdtk) {
        if (device().ios) {
            window.location.href = 'weixin://'
        }
    } else {
        window.location.href = 'weixin://'
    }
    window.location.href = 'weixin://'
    document.body.removeChild(input);
    document.body.scrollTop = scrollTop;
    window.scrollTo(scrollTop, scrollTop);

}

// 时间格式化
export function formatDate(shijianchuo, type) {
    function add0(m) {
        return m < 10 ? "0" + m : m;
    }
    var time = new Date(shijianchuo);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    if (type == 1) {
        return y + "." + add0(m) + "." + add0(d);
    } else if (type == 2) {
        return y + "/" + add0(m) + "/" + add0(d);
    } else {
        return y + "年" + add0(m) + "月" + add0(d) + "日";
    }
}

export function formatUrl(url) {
    const dev = "http://embed.koudaitiku.net";
    const pro = "http://embed.koudaitiku.com";
    const pre = "http://preembed.koudaitiku.net";
    const proFlag = location.href.match("koudaitiku.com");
    const preFlag = location.href.match("preembed");
    let host = "";
    if (proFlag) {
        host = pro;
    } else if (preFlag) {
        host = pre;
    } else {
        host = dev;
    }
    return host + '#' + url
}