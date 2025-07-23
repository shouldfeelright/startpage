document.getElementById('greetBtn').addEventListener('click', function() {
    document.getElementById('greetMsg').textContent = 'Have a great day!';
});

// Matrix rain effect
function startMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチッヂヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 14; // smaller font size for higher density
    const columns = Math.floor(canvas.width / fontSize);
    // Randomize initial drop positions for each column
    const drops = Array.from({length: columns}, () => Math.floor(Math.random() * canvas.height / fontSize));

    function draw() {
        ctx.fillStyle = 'rgba(15, 15, 15, 0.6)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = fontSize + 'px Courier New';
        ctx.fillStyle = '#00ff41';
        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    setInterval(draw, 40); // faster interval for more characters per second
}

window.addEventListener('load', startMatrixRain);
window.addEventListener('resize', () => {
    const canvas = document.getElementById('matrix-canvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});
