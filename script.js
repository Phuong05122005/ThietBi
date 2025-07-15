// Khởi tạo ứng dụng
class ComponentManager {
    constructor() {
        this.components = JSON.parse(localStorage.getItem('components')) || [];
        this.categories = JSON.parse(localStorage.getItem('categories')) || [
            'Điện tử', 'Cơ khí', 'Máy tính', 'Điện thoại', 'Khác'
        ];
        this.currentEditId = null;
        this.currentDeleteId = null;
        this.currentStatusTab = 'pending'; // Tab hiện tại: pending, checked, all
        this.init();
    }

    init() {
        // Đã xóa checkAuth để bỏ kiểm tra đăng nhập
        this.setupEventListeners();
        this.updateCategoryDropdowns();
        this.renderComponents();
        this.updateStats();
        this.updateUserDisplay();
        this.loadSampleData();
        this.checkUserRoles();
        document.getElementById('componentsGrid').style.display = 'none';
    }

    // ... (keep all other methods the same, just remove any Apps Script specific code)
    // The rest of the file remains unchanged as it doesn't contain Apps Script code
}

// Khởi tạo ứng dụng khi trang web được tải
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new ComponentManager();

    // Hiện modal thêm linh kiện khi bấm nút
    const addComponentBtn = document.getElementById('addComponentBtn');
    const componentModal = document.getElementById('componentModal');
    if (addComponentBtn && componentModal) {
        addComponentBtn.addEventListener('click', function() {
            componentModal.style.display = 'block';
        });
        // Đóng modal khi bấm dấu X hoặc nút Hủy
        componentModal.querySelectorAll('.close, #cancelBtn').forEach(function(el) {
            el.addEventListener('click', function() {
                componentModal.style.display = 'none';
            });
        });
    }

    // Hiện modal thêm nhanh linh kiện khi bấm nút
    const quickAddBtn = document.getElementById('quickAddBtn');
    const quickAddModal = document.getElementById('quickAddModal');
    if (quickAddBtn && quickAddModal) {
        quickAddBtn.addEventListener('click', function() {
            quickAddModal.style.display = 'block';
        });
        // Đóng modal khi bấm dấu X hoặc nút Hủy
        quickAddModal.querySelectorAll('.close, #cancelQuickBtn').forEach(function(el) {
            el.addEventListener('click', function() {
                quickAddModal.style.display = 'none';
            });
        });
    }

    // Hiện modal quản lý chủ đề khi bấm nút
    const manageCategoriesBtn = document.getElementById('manageCategoriesBtn');
    const categoryManagementModal = document.getElementById('categoryManagementModal');
    if (manageCategoriesBtn && categoryManagementModal) {
        manageCategoriesBtn.addEventListener('click', function() {
            categoryManagementModal.style.display = 'block';
        });
        // Đóng modal khi bấm dấu X hoặc nút Hủy
        categoryManagementModal.querySelectorAll('.close, #cancelCategoryFilter, #addCategoryBtn').forEach(function(el) {
            el.addEventListener('click', function() {
                categoryManagementModal.style.display = 'none';
            });
        });
    }
});