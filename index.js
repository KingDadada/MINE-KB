function showKb() {
    location.href = "./kb.html";
}

$(function() {
    setDark();
    gotoNextKb();
})

function gotoNextKb() {
    var data = getData("kb");
    var nextIndex = parseInt(Math.random() * data.length);
    $("#kb-title").html(data[nextIndex].key.split("#")[1]);
    $("#kb-content").html(data[nextIndex].value);
}