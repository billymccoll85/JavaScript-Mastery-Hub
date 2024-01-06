document.getElementById('text').addEventListener('input', function() {
    const text = this.value;
    const words = text.split(/\s+/).filter(word => word.length > 0);
    document.getElementById('wordCount').textContent = `Word Count: ${words.length}`;
});