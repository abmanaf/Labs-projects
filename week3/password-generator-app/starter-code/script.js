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

    let passwordStrength = 0;

    if (password.length >= 8) passwordStrength++;
    if (/[A-Z]/.test(password)) passwordStrength++;
    if (/[a-z]/.test(password)) passwordStrength++;
    if (/[0-9]/.test(password)) passwordStrength++;
    if (/[^A-Za-z0-9]/.test(password)) passwordStrength++;

    const strengthClasses = {
    1: ['too-weak'],
    2: ['too-weak', 'weak'],
    3: ['too-weak', 'weak', 'medium'],
    4: ['too-weak', 'weak', 'medium', 'strong']
};

if (passwordStrength < 1 || passwordStrength > 4 || isNaN(passwordStrength)) {
    strengthText.textContent = 'Invalid Strength';
} else {
    const classesToAdd = strengthClasses[passwordStrength] || [];
    strengthText.textContent = passwordStrength === 1 ? 'Too Weak' :
                              passwordStrength === 2 ? 'Weak' :
                              passwordStrength === 3 ? 'Medium' : 'Strong';
    
    [tooWeak, weak, medium, strong].forEach((element, index) => {
        const className = classesToAdd[index];
        if (className && !element.classList.contains(className)) {
            element.classList.add(className);
        }
    });
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