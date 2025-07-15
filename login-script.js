// Đăng nhập qua API, lưu email vào localStorage nếu status == 2

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            if (!email || !password) {
                alert('Vui lòng nhập đầy đủ thông tin!');
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
                    window.location.href = 'app.html';
                } else {
                    alert(data.mes || 'Sai thông tin đăng nhập!');
                }
            } catch (error) {
                alert('Có lỗi xảy ra: ' + error.message);
            }
        });
    }
});