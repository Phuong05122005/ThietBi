// Đăng nhập qua API, lưu email vào localStorage nếu status == 2

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            if (!email || !password) {
                showMessage('Vui lòng nhập đầy đủ thông tin!', 'error');
                return;
            }
            try {
                const response = await fetch('https://sys.airobotic.edu.vn/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });
                const data = await response.json();
                if (data.status === 2) {
                    localStorage.setItem('loggedInEmail', email);
                    showMessage(data.mes || 'Đăng nhập thành công!', 'success');
                    setTimeout(() => {
                        window.location.href = 'app.html';
                    }, 1000);
                } else {
                    showMessage(data.mes || 'Sai thông tin đăng nhập!', 'error');
                }
            } catch (error) {
                showMessage('Có lỗi xảy ra: ' + error.message, 'error');
            }
        });
    }

    // Hàm hiển thị modal thông báo
    function showMessage(msg, type) {
        const messageModal = document.getElementById('messageModal');
        const messageTitle = document.getElementById('messageTitle');
        const messageText = document.getElementById('messageText');
        messageTitle.textContent = type === 'error' ? 'Lỗi' : 'Thông báo';
        messageText.textContent = msg;
        messageModal.style.display = 'block';
        document.getElementById('messageOkBtn').onclick = () => {
            messageModal.style.display = 'none';
        };
    }
});