let submitButton = document.getElementById('submit-button');
let name = document.getElementById('name');
let email = document.getElementById('email');

submitButton.addEventListener('click', (event) => {

    if (name.value.length > 5 && email.value.length > 5) {

        alert('Thanks for signing up for our newsletter! You 15% off code is "BEGREEN"')
    } else {
        alert("Please fill out the form completely, you're so close to getting your discount!")
    }

})

