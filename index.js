const win = document.getElementById('projects-drag-id');
const header = win.querySelector('.window-header');
const resizer = win.querySelector('.resizer');

let isDragging = false, offsetX, offsetY;
let isResizing = false;

// Save original size & position
const originalState = {
    top: win.offsetTop,
    left: win.offsetLeft,
    width: win.offsetWidth,
    height: win.offsetHeight
};

// DRAG
header.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        win.style.left = `${e.clientX - offsetX}px`;
        win.style.top = `${e.clientY - offsetY}px`;
    } else if (isResizing) {
        win.style.width = `${e.clientX - win.offsetLeft}px`;
        win.style.height = `${e.clientY - win.offsetTop}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    isResizing = false;
});

// RESIZE
resizer.addEventListener('mousedown', () => {
    isResizing = true;
});

// MINIMIZE
document.getElementById('minimize-btn').addEventListener('click', () => {
    win.style.display = 'none';
    document.getElementById('restore-projects').style.display = 'inline-block';
});

// MAXIMIZE
document.getElementById('maximize-btn').addEventListener('click', () => {
    win.style.top = '100px';
    win.style.left = 'calc(50% - 300px)'; // Centered horizontally
    win.style.width = '950px';
    win.style.height = '450px';
});

// CLOSE
document.getElementById('close-btn').addEventListener('click', () => {
    win.style.top = `${originalState.top}px`;
    win.style.left = `${originalState.left}px`;
    win.style.width = `${originalState.width}px`;
    win.style.height = `${originalState.height}px`;
    win.style.display = 'block';
    document.getElementById('restore-projects').style.display = 'none';
});

// RESTORE
document.getElementById('restore-projects').addEventListener('click', () => {
    win.style.display = 'block';
    document.getElementById('restore-projects').style.display = 'none';
});

