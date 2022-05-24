function setPageContent(contentName) {
    var content = document.getElementsByClassName("content");
    for (var i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    document.getElementById(contentName).style.display = "inherit";
}
