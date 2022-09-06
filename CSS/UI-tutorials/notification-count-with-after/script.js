let count = 0;
function addNotification() {
    count = count + 1;
    updateValue();
}
function resetNotification() {
    count = 0;
    updateValue();
}
function removeNotification() {
    if (count > 0) {
        count = count - 1;
        updateValue();
    }
}
function updateValue() {
    document.getElementById("notification-display")
    .setAttribute("notificationCount", count);
}



