/* Redirects users to a "Thank you" page after submitting an application form */

/* Gets the form elements */
const form = document.querySelector('#application-form')
const submitBtn = document.querySelector('#submit')
const scriptURL = 'https://script.google.com/macros/s/AKfycbzkVFnTcJPMs68CxC3SXvIYcUOIg_B-EDQV-5f-zKhe26z6A9pYBPRoGb_bg9Y-GA5y/exec'

form.addEventListener('submit', e => {
    e.preventDefault()  /* Prevents the default form submission behavior */
    let requestBody = new FormData(form) /* Collects the form data */
    submitBtn.disabled = true

    fetch(scriptURL, { method: 'POST', body: requestBody}) /* Sends form data to google sheet */
        .then(_response => {
            /* Redirects user to a thank you page after a successful submission */
            window.location.href='thanks.html'
            submitBtn.disabled = false
            })
            
        .catch(error => {
            /* Displays an error message to the user */
            alert('Error!', error.message)
            submitBtn.disabled = false    
            })
})