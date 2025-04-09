# Hex Color Background Changer

A simple web application that allows users to change the background color using hexa-alphanumeric color code. The application provides preview functionality, permanent application with localStorage persistence, and reset capabilities. Now includes scroll-driven animations for a visually engaging experience.

## Features

- **Hex Code Validation**: Ensures input is a 6-digit alphanumeric hexadecimal value (0-9, a-f).
- **Color Preview**: Temporarily preview background color without saving.
- **Persistent Color**: Save selected color to localStorage for persistence between sessions.
- **Reset Functionality**: Clear input and reset to default background.
- **Visual Feedback**: 
  - Error messages with shake animation
  - Success/status messages
  - Current hex code display
  - Input field animations
- **🎞️ Scroll-Driven Animations:**
  - All main elements (heading, input, buttons) animate based on scroll progress
  - Enhances visual interaction using `@keyframes` and `animation-timeline: scroll()`
## How to Use

1. **Enter Hex Code**:
   - Type a 6-digit alphanumeric value (e.g., `21a3f0` for background color)
   - Do not include the `#` symbol

2. **Preview Color**:
   - Click "Preview" to temporarily see the color
   - Preview will timeout after 3 seconds
   - Does not save to `localStorage`
   - Shows success message

3. **Apply Color**:
   - Click "Apply" to permanently set the color
   - Saves to `localStorage` (persists after page reload)
   - Shows success message

4. **Reset**:
   - Click "Reset" to clear input and remove background color
   - Also clears `localStorage`
   - Shows success message

5. **Error States**
   - Red border + shake animation for invalid input
   - Automatic filtering of non-hex characters
   - Dynamic placeholder guidance

## Technologies Used

- HTML
- CSS (with animations)
- JavaScript 
- Web Storage API (localStorage)

## Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/suresh-chelani/hex-bgcolor-changer.git

# Open index.html in any modern browser

## License

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

:) [Suresh Chelani](https://github.com/suresh-chelani)