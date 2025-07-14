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
        this.checkAuth();
        this.setupEventListeners();
        this.updateCategoryDropdowns();
        this.renderComponents();
        this.updateStats();
        this.updateUserDisplay();
        this.loadSampleData();
        this.checkUserRoles();
        
        document.getElementById('componentsGrid').style.display = 'none';
    }

    checkAuth() {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            window.location.href = 'login.html';
            return;
        }
    }

    // ... (keep all other methods the same, just remove any Apps Script specific code)
    // The rest of the file remains unchanged as it doesn't contain Apps Script code
}

// Khởi tạo ứng dụng khi trang web được tải
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new ComponentManager();
});