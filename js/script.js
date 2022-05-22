function setPageContent(newContent) {
    document.getElementById("content").textContent = "";
    document.getElementById("content").insertAdjacentHTML("beforeend", newContent);
}
