
const form = document.querySelector('#form')
const fname = document.querySelector('#fname')
const lname = document.querySelector('#lname')
    
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(fname.value + " " +lname.value);
})    

    
    
    
    
    
    
    
    
    
    
    
