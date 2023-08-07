document.addEventListener('submit', (event) => {
    event.preventDefault();

    const loginForm = event.target;

    const { email, password } = loginForm.elements;

    if (email.value === '' || password.value === '') {
        alert('Всі поля повинні бути заповнені');
    } else {
        const formData = {
            email: email.value,
            password: password.value,
        };

        console.log(formData);
        loginForm.reset();
    }
});
