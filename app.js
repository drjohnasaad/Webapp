async function sendMessage() {
    try {
        const response = await fetch('/send-message'); // Assumes your server handles this route
        const data = await response.json();
        document.getElementById('response').innerText = data.message;
    } catch (error) {
        console.error('Error:', error);
    }
}
