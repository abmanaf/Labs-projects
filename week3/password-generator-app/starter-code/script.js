const generatePassword = () => {
    const charLength = parseInt(document.getElementById('char-length').value);
    const includeUppercase = document.getElementById('upper-case').checked;
    const includeLowercase = document.getElementById('lower-case').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const numberCharacters = '0123456789';
    const symbolCharacters = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let charSet = '';
    let generatedPassword = '';

    if (includeUppercase) charSet += uppercaseCharacters;
    if (includeLowercase) charSet += lowercaseCharacters;
    if (includeNumbers) charSet += numberCharacters;
    if (includeSymbols) charSet += symbolCharacters;

    if (charSet.length === 0 || charLength === 0) {
        alert(`Please select at least one character type and set a valid character length.`);
        return;
    }
    for (let i = 0; i < charLength; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        generatedPassword += charSet[randomIndex];
    }

    document.getElementById('generated-password').textContent = generatedPassword;
    evaluatePasswordStrength(generatedPassword);
}

const charLengthValue = document.getElementById('char-length-value');
const charLengthSlider = document.getElementById('char-length');
charLengthSlider.addEventListener('input', () => {
    charLengthValue.textContent = charLengthSlider.value;
    const value = (charLengthSlider.value - charLengthSlider.min) / (charLengthSlider.max - charLengthSlider.min) * 100;
    charLengthSlider.style.background = `linear-gradient(to right, var(--light-green) ${value}%, var(--black) ${value}%)`;
});

const generatePasswordButton = document.getElementById('generate-password-btn');
generatePasswordButton.addEventListener('click', generatePassword);

const evaluatePasswordStrength = password => {
    const strengthText = document.getElementById('strength-level-text');
    const tooWeak = document.getElementById('too-weak');
    const weak = document.getElementById('weak');
    const medium = document.getElementById('medium');
    const strong = document.getElementById('strong');

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength === 1) {
        strengthText.textContent = 'Too Weak';
        tooWeak.classList.add('too-weak');
    } else if (strength === 2) {
        strengthText.textContent = 'Weak';
        tooWeak.classList.add('weak');
        weak.classList.add('weak');
    } else if (strength === 3) {
        strengthText.textContent = 'Medium';
        tooWeak.classList.add('medium');
        weak.classList.add('medium');
        medium.classList.add('medium');
    } else if (strength >= 4) {
        strengthText.textContent = 'Strong';
        tooWeak.classList.add('strong');
        weak.classList.add('strong');
        medium.classList.add('strong');
        strong.classList.add('strong');
    }
}

window.addEventListener('load', () => {
    document.getElementById('too-weak').classList.remove('too-weak');
    document.getElementById('weak').classList.remove('weak');
    document.getElementById('medium').classList.remove('medium');
    document.getElementById('strong').classList.remove('strong');
});

const copyToClipboard = () => {
    const generatedPassword = document.getElementById('generated-password').textContent;
    if (generatedPassword) {
        navigator.clipboard.writeText(generatedPassword).then(() => {
            const copiedText = document.getElementById('copied-text');
            copiedText.style.display = 'block';
            setTimeout(() => {
                copiedText.style.display = 'none';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
}
const copyImage = document.getElementById('img-copy');
copyImage.addEventListener('click', copyToClipboard);