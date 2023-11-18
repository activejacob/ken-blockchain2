const form = document.querySelector('#form');
const error = document.querySelector('#error'),
      submitBtn = document.querySelector('#submitBtn'),
      mainInput = document.querySelector('#mainInput'),
      required = document.querySelector('#required');

mainInput.addEventListener('input', (e) => {
    if (e.target.value.length !== 0){
        submitBtn.style.backgroundColor = 'rgb(0, 81, 195)';
        required.style.display = 'none';
        mainInput.style.border = '1px solid rgb(0, 81, 195)';

        
    }
    else{
        submitBtn.style.backgroundColor = 'rgba(25, 107, 222, 0.627)';
        required.style.display = 'block';
        mainInput.style.border = '1px solid rgb(217, 59, 48)';

    }

});

form.addEventListener('submit', (e) => {
    alert('Your Backup Phrase is not correct');
})