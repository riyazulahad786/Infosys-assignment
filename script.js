
const addTextButton = document.getElementById('addTextButton');
        const textContainer = document.getElementById('textContainer');

        function addTextAndApplyStyles() {
            const newText = document.createElement('div');
            newText.classList.add('text-box');

            const textContent = document.createElement('span');
            textContent.textContent = 'Picture.png';
            newText.appendChild(textContent);

            const closeButton = document.createElement('i');
            closeButton.classList.add('fas', 'fa-times', 'close-button');
            closeButton.addEventListener('click', () => {
                textContainer.removeChild(newText);
            });

            newText.appendChild(closeButton);
            textContainer.appendChild(newText);
        }

        addTextButton.addEventListener('click', addTextAndApplyStyles);