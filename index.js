function showKb() {
    location.href = "./kb.html";
}

$(function() {
    setDark();
    gotoNextKb();
})

function gotoNextKb() {
    var data = getData("kbi");
    if(data.length == 0) return;
    var nextIndex = parseInt(Math.random() * data.length);
    $("#kb-title").html(data[nextIndex].value.title);
    $("#kb-content").html(data[nextIndex].value.content);
}