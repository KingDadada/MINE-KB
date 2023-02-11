function setDark() {
    document.documentElement.setAttribute('theme', 'dark');
    document.documentElement.setAttribute('theme-color', '#45494f');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#45494f');
}

function getData(dataType) {
    let length = localStorage.length;
    let typeListData = [];
    for (let i = 0; i < length; i++) {
        let key = localStorage.key(i);
        if (key.indexOf(dataType + "#") !== -1) {
            let data = localStorage.getItem(key);
            data = JSON.parse(data);
            typeListData.push({ key: key, value: data });
        }
    }
    return typeListData;
}

function GetUrlParam(paraName) {
    var url = document.location.toString();
    var arrObj = url.split("?");

    if (arrObj.length > 1) {
        var arrPara = arrObj[1].split("&");
        var arr;

        for (var i = 0; i < arrPara.length; i++) {
            arr = arrPara[i].split("=");

            if (arr != null && arr[0] == paraName) {
                return arr[1];
            }
        }
        return "";
    }
    else {
        return "";
    }
}