$(function () {
    setDark();
    var key = GetUrlParam("key");
    if (key && key != "") {
        var content = localStorage.getItem(key);
        $("#kbid").val(key);
        $("#kbtitle").val(key.split("#")[1]);
        $("#kbcontent").val(content);
        $("#footerBtn").text("删除");
        $("#footerBtn").css("color", "red");
    }
})

function showKb() {
    location.href = "./kb.html";
}

function operateKb() {
    var kbid = $("#kbid").val();
    if (kbid && kbid != "") {
        localStorage.removeItem(kbid);
        alert("删除成功");
    } else {
        var title = $("#kbtitle").val();
        var content = $("#kbtitle").val();
        if (title.indexOf("#") != -1) {
            alert("不能包含#");
            return;
        }
        var now = new Date();
        localStorage.setItem("kb#" + title + "#" + now.getTime(), content);
        alert("添加成功");
    }
    showKb();
}