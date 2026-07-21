function updateShift() {
    const now = new Date();
    const hour = now.getHours(); // 0-23

    let shift = "";

    if (hour >= 0 && hour < 12) {
        shift = "Shift A";
    } else if (hour >= 12 && hour < 18) {
        shift = "Shift B";
    } else {
        shift = "Shift C";
    }

    document.getElementById("shiftText").textContent = shift;
}

// Run when page loads
updateShift();