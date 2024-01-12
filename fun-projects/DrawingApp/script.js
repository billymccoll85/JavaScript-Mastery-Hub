let canvas,
    context,
    dragging = false,
    dragStartLocation,
    snapshot;

function getCanvasCoordinates(event) {
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;
    return {x, y};
}

function takeSnapShot() {
    snapshot = context.getImageData(0, 0, canvas.width, canvas.height);
}

function restoreSnapShot() {
    context.putImageData(snapshot, 0, 0);
}

function drawLine(position) {
    context.beginPath();
    context.moveTo(dragStartLocation.x, dragStartLocation.y);
    context.lineTo(position.x, position.y);
    context.stroke();
}

function drawCircle(position) {
    const radius = Math.sqrt(Math.pow((dragStartLocation.x - position.x), 2) + Math.pow((dragStartLocation.y - position.y), 2));
    context.beginPath();
    context.arc(dragStartLocation.x, dragStartLocation.y, radius, 0, 2 * Math.PI);
    context.stroke();
}

function drawEllipse(position) {
    const w = position.x - dragStartLocation.x;
    const h = position.y - dragStartLocation.y;
    context.beginPath();
    context.ellipse(dragStartLocation.x, dragStartLocation.y, Math.abs(w), Math.abs(h), 0, 2 * Math.PI, false);
    context.stroke();
}

function drawRect(position) {
    const w = position.x - dragStartLocation.x;
    const h = position.y - dragStartLocation.y;
    context.beginPath();
    context.rect(dragStartLocation.x, dragStartLocation.y, w, h);
    context.stroke();
}

function drawPolygon(position, sides, angle) {
    const coordinates = [];
    const radius = Math.sqrt(Math.pow((dragStartLocation.x - position.x), 2) + Math.pow((dragStartLocation.y - position.y), 2));
    let index = 0;

    for (index; index < sides; index++) {
        coordinates.push({
            x: dragStartLocation.x + radius * Math.cos(angle),
            y: dragStartLocation.y - radius * Math.sin(angle)
        });
        angle += (2 * Math.PI) / sides;
    }

    context.beginPath();
    context.moveTo(coordinates[0].x, coordinates[0].y);

    for (index = 1; index < sides; index++) {
        context.lineTo(coordinates[index].x, coordinates[index].y);
    }

    context.closePath();
    context.stroke();
}

function draw(position) {
    const fillBox = document.getElementById("fillBox");
    const shape = document.querySelector('input[type="radio"][name="shape"]:checked').value;
    const polygonSides = document.getElementById('polygonSides').value;
    const polygonAngle = calculateAngle(dragStartLocation, position);
    const lineCap = document.querySelector('input[type="radio"][name="lineCap"]:checked').value;
    const xor = document.getElementById('xor');

    context.lineCap = lineCap;

    if (shape === "circle") {
        drawCircle(position);
    }
    if (shape === "square") {
        drawPolygon(position, 4, Math.PI / 4);
    }
    if (shape === "line") {
        drawLine(position);
    }
    if (shape === "ellipse") {
        drawEllipse(position);
    }
    if (shape === "rect") {
        drawRect(position);
    }
    if (shape === "polygon") {
        drawPolygon(position, polygonSides, polygonAngle * (Math.PI / 180));
    }
    if (xor.checked) {
        context.globalCompositeOperation = "xor";
    } else {
        context.globalCompositeOperation = "source-over";
    }
    if (fillBox.checked) {
        context.fill();
    } else {
        context.stroke();
    }
}

function dragStart(event) {
    dragging = true;
    dragStartLocation = getCanvasCoordinates(event);
    takeSnapShot();
}

function calculateAngle(start, current) {
    const angle = 360 - Math.atan2(current.y - start.y, current.x - start.x) * 180 / Math.PI;
    return angle;
}

function drag(event) {
    let position;
    if (dragging === true) {
        restoreSnapShot();
        position = getCanvasCoordinates(event);
        draw(position);
    }
}

function dragStop(event) {
    dragging = false;
    restoreSnapShot();
    const position = getCanvasCoordinates(event);
    draw(position);
}

function changeLineWidth() {
    context.lineWidth = this.value;
    event.stopPropagation();
}

function changeFillStyle() {
    context.fillStyle = this.value;
    event.stopPropagation();
}

function changeStrokeStyle() {
    context.strokeStyle = this.value;
    event.stopPropagation();
}

function changeBackgroundColor() {
    context.fillStyle = document.getElementById('backgroundColor').value;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function eraseCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function writeCanvas() {
    context.font = '55px Impact';
    context.fillText(document.getElementById('textInput').value, 25, 175);
}

function init() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    const lineWidth = document.getElementById('lineWidth');
    const fillColor = document.getElementById('fillColor');
    const strokeColor = document.getElementById('strokeColor');
    const canvasColor = document.getElementById('backgroundColor');
    const clearCanvas = document.getElementById('clearCanvas');
    const textInput = document.getElementById('textInput');

    context.lineWidth = lineWidth.value;
    context.fillStyle = fillColor.value;

    canvas.addEventListener('mousedown', dragStart, false);
    canvas.addEventListener('mousemove', drag, false);
    canvas.addEventListener('mouseup', dragStop, false);
    lineWidth.addEventListener('input', changeLineWidth, false);
    fillColor.addEventListener('input', changeFillStyle, false);
    strokeColor.addEventListener('input', changeStrokeStyle, false);
    canvasColor.addEventListener('input', changeBackgroundColor, false);
    clearCanvas.addEventListener('click', eraseCanvas, false);
    textInput.addEventListener('input', writeCanvas, false);
}

window.addEventListener('load', init, false);
