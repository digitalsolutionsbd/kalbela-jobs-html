document.addEventListener('DOMContentLoaded', function () {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('cvUpload');
    const defaultState = document.getElementById('defaultState');
    const fileSelectedState = document.getElementById('fileSelectedState');
    const errorMessage = document.getElementById('errorMessage');

    if (!fileInput) return; // ✅ now it's valid inside function

    // File input change
    fileInput.addEventListener('change', handleFileSelect);

    // Drag and drop
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('border-blue-500', 'bg-blue-50');
    });

    uploadArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('border-blue-500', 'bg-blue-50');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('border-blue-500', 'bg-blue-50');

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    });

    // Remove file
    document.getElementById('removeFile').addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.value = '';
        showDefaultState();
        hideError();
    });

    function handleFileSelect(e) {
        const file = e.target.files[0];
        if (file) {
            handleFile(file);
        }
    }

    function handleFile(file) {
        if (validateFile(file)) {
            displayFile(file);
        }
    }

    function validateFile(file) {
        const maxSize = 5 * 1024 * 1024; // 5MB
        const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];

        if (file.size > maxSize) {
            showError('File size must be less than 5MB');
            return false;
        }

        if (!allowedTypes.includes(file.type)) {
            showError('Please upload a PDF or DOC file');
            return false;
        }

        hideError();
        return true;
    }

    function displayFile(file) {
        const fileName = document.getElementById('fileName');
        const fileSize = document.getElementById('fileSize');
        const fileIcon = document.getElementById('fileIcon');

        fileName.textContent = file.name;
        fileSize.textContent = formatFileSize(file.size);

        // Set icon based on file type
        if (file.type === 'application/pdf') {
            fileIcon.className = 'fas fa-file-pdf text-2xl text-red-500';
        } else {
            fileIcon.className = 'fas fa-file-word text-2xl text-blue-500';
        }

        showFileSelectedState();
    }

    function showDefaultState() {
        defaultState.classList.remove('hidden');
        fileSelectedState.classList.add('hidden');
    }

    function showFileSelectedState() {
        defaultState.classList.add('hidden');
        fileSelectedState.classList.remove('hidden');
    }

    function showError(message) {
        document.getElementById('errorText').textContent = message;
        errorMessage.classList.remove('hidden');
    }

    function hideError() {
        errorMessage.classList.add('hidden');
    }

    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    }
});
