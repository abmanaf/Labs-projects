export class FontManager {
    constructor() {
        this.fontSelect = document.getElementById('fontSelect');
        this.dropDownFont = document.getElementById('drop-down-font');
    }

    initializeFont() {
        const savedFont = localStorage.getItem('font') || 'sans-serif';
        this.setFont(savedFont);
        this.fontSelect.value = savedFont;

        this.fontSelect.addEventListener('change', () => {
            this.setFont(this.fontSelect.value);
        });
    }
    setFont(fontFamily) {
        document.documentElement.setAttribute('data-font', fontFamily);
        localStorage.setItem('font', fontFamily);
    }
}