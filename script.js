window.addEventListener('DOMContentLoaded', function() {

    // Matrix rain effect
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();

    const letters = 'アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチッヂヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 18;
    let columns = Math.floor(canvas.width / fontSize);
    // Randomize initial drop positions for each column
    let drops = Array.from({length: columns}, () => Math.floor(Math.random() * canvas.height / fontSize));

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = fontSize + 'px Courier New';
        ctx.fillStyle = 'rgba(0, 255, 65, .25)'; // 1 is fully opaque, lower values are more transparent
        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    let intervalId = setInterval(draw, 50);

    window.addEventListener('resize', function() {
        clearInterval(intervalId);
        resizeCanvas();
        columns = Math.floor(canvas.width / fontSize);
        // Randomize initial drop positions for each column on resize
        drops = Array.from({length: columns}, () => Math.floor(Math.random() * canvas.height / fontSize));
        intervalId = setInterval(draw, 50);
    });
});