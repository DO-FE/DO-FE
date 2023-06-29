/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function redirectToURL(url) {
    window.location.href = url;
};
function copyToClipboard(value) {
    const tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    showNotification();
};

function showNotification() {
    const overlay = document.getElementById("notificationOverlay");
    overlay.style.display = "flex";
};

function closeNotification() {
    const overlay = document.getElementById("notificationOverlay");
    overlay.style.display = "none";
};