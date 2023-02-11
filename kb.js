function showKbView() {
    location.href = "./index.html";
}
function showKbAdd() {
    location.href = "./kbAdd.html";
}
$(function () {
    setDark();
    var data = getData("kbi");
    for (index in data) {
        var item =
            '<div class="kb-item" onclick="goDetail(\'' + data[index].key + '\')">' +
            '   <span class="kb-title">' + data[index].value.title + '</span>' +
            '   <span class="kb-content">' + data[index].value.content.substring(0,20) + '</span>' +
            '</div>';
        $("#kb-list").append(item);
    }
})

function goDetail(key) {
    location.href = "./kbAdd.html?key=" + key;
}