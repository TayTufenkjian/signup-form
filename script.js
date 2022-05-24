document.addEventListener('DOMContentLoaded', () => {
    // Get password elements
    let passwordWidget = document.getElementById('passwordWidget');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');

    // Create password span to show the error message
    let passwordHook = document.createElement('span');
    passwordHook.id = 'password-hook';

    // Listen for a change to the confirm-password input
    confirmPassword.addEventListener('input', () => {
        if (matchingInputs(password, confirmPassword)) {
            password.classList.remove('error');
            confirmPassword.classList.remove('error');
            passwordHook.remove();
        } else {
            password.classList.add('error');
            confirmPassword.classList.add('error');
            passwordWidget.append(passwordHook);
        }
    });
});


function matchingInputs(inputA, inputB) {
    return inputA.value === inputB.value;
}