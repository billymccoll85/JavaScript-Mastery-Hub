
document.getElementById('generateButton').addEventListener('click', generateMonochromaticScheme);

function generateMonochromaticScheme() {
    const baseColor = getRandomColor();
    const scheme = generateMonochromaticColors(baseColor, 6);
    displayColors(scheme);
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

function generateMonochromaticColors(hex, count) {
    const hsl = hexToHSL(hex);
    let colors = [hex]; // Include the base color

    for (let i = 1; i < count; i++) {
        let lightness = (hsl.l + (i * 10)) % 100; // Adjust lightness
        let colorHSL = `hsl(${hsl.h}, ${hsl.s}%, ${lightness}%)`;
        colors.push(hslToHex(colorHSL));
    }

    return colors;
}

function hexToHSL(hex) {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }
    r /= 255;
    g /= 255;
    b /= 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function hslToHex(hsl) {
    const [h, s, l] = hsl.match(/\d+/g).map(Number);
    let c = (1 - Math.abs(2 * l / 100 - 1)) * s / 100;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l / 100 - c / 2;
    let [r, g, b] = h < 60 ? [c, x, 0] :
                    h < 120 ? [x, c, 0] :
                    h < 180 ? [0, c, x] :
                    h < 240 ? [0, x, c] :
                    h < 300 ? [x, 0, c] : [c, 0, x];
    [r, g, b] = [r, g, b].map(n => Math.round((n + m) * 255));
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function displayColors(colors) {
    const colorSchemeDiv = document.getElementById('colorScheme');
    colorSchemeDiv.innerHTML = '';

    colors.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;

        const colorText = document.createElement('span');
        colorText.className = 'color-box-text';
        colorText.innerText = color;
        colorBox.appendChild(colorText);

        colorBox.addEventListener('click', () => {
            copyToClipboard(color);
            alert(`Copied ${color} to clipboard`);
        });

        colorSchemeDiv.appendChild(colorBox);
    });
}

function copyToClipboard(text) {
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
}
