document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    const resultElement = document.getElementById("result");

    calculateButton.addEventListener("click", function() {
        const L = parseFloat(document.getElementById("L").value);
        const T = parseFloat(document.getElementById("T").value);
        const P = parseFloat(document.getElementById("P").value);
        const S = parseFloat(document.getElementById("S").value);

        let numerator = L * 1 + T * 0.5 + P * 0.5 + S * 0.25;
        let denominator = (L > 0 ? 1 : 0) + (T > 0 ? 0.5 : 0) + (P > 0 ? 0.5 : 0) + (S > 0 ? 0.25 : 0);

        if (denominator === 0) {
            resultElement.textContent = "Cannot calculate attendance. All fields are zero.";
        } else {
            const attendance = numerator / denominator;
            resultElement.textContent = "Attendance: "+attendance.toFixed(2);
        }
    });
});
