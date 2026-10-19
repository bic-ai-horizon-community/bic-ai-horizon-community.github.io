document.addEventListener("DOMContentLoaded", function () {
    var dateElement = document.getElementById("current-date");

    if (!dateElement) {
        return;
    }

    dateElement.textContent = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
});
