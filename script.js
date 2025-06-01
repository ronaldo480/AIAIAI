// DOM Elements
const uploadButton = document.getElementById('upload-button');
const fileInput = document.getElementById('file-input');
const clothingGrid = document.getElementById('clothing-items');
const coordinateArea = document.getElementById('coordinate-area');
const downloadButton = document.getElementById('download-button');

// Local Storage Keys
const STORAGE_KEY = 'fashionCloset';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    loadClothingItems();
    setupEventListeners();
});

// Set up event listeners
function setupEventListeners() {
    uploadButton.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileUpload);
    downloadButton.addEventListener('click', downloadCoordinate);
}

// Handle file upload
function handleFileUpload(event) {
    const files = event.target.files;

    for (const file of files) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const imageData = e.target.result;
                saveClothingItem(imageData);
                createClothingItemElement(imageData);
            };

            reader.readAsDataURL(file);
        }
    }

    // Reset file input
    event.target.value = '';
}

// Save clothing item to localStorage
function saveClothingItem(imageData) {
    let items = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    items.push({
        id: Date.now(),
        image: imageData,
        date: new Date().toISOString()
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

// Load clothing items from localStorage
function loadClothingItems() {
    const items = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    items.forEach(item => createClothingItemElement(item.image, item.id));
}

// Create clothing item element
function createClothingItemElement(imageData, id = Date.now()) {
    const item = document.createElement('div');
    item.className = 'clothing-item';
    item.draggable = true;
    item.dataset.id = id;

    const img = document.createElement('img');
    img.src = imageData;
    img.alt = 'Clothing item';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '×';
    deleteBtn.onclick = (e) => {
        e.stopPropagation();
        deleteClothingItem(id);
        item.remove();
    };

    item.appendChild(img);
    item.appendChild(deleteBtn);

    // Drag and drop functionality
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);

    clothingGrid.appendChild(item);
}

// Delete clothing item
function deleteClothingItem(id) {
    let items = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    items = items.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

// Drag and Drop functionality
function handleDragStart(e) {
    e.target.classList.add('dragging');
    e.dataTransfer.setData('text/plain', e.target.dataset.id);
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

// Coordinate area drag and drop
coordinateArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
});

coordinateArea.addEventListener('drop', (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const item = document.querySelector(`[data-id="${id}"]`);
    const img = item.querySelector('img');

    const coordinateItem = document.createElement('div');
    coordinateItem.className = 'coordinate-item';
    coordinateItem.innerHTML = `<img src="${img.src}" alt="Coordinate item">`;

    coordinateArea.appendChild(coordinateItem);
});

// Download coordinate image
function downloadCoordinate() {
    html2canvas(coordinateArea).then(canvas => {
        const link = document.createElement('a');
        link.download = 'my-coordinate.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

// Add html2canvas library for image download functionality
const script = document.createElement('script');
script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
document.head.appendChild(script); 