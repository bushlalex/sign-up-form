






function checkPasswords () {
    let x = document.querySelector('#password').value;
    let y = document.querySelector('#confirmpassword').value;
    if (x == y) {   
     return true;    
    }
    else if (x != y) {
        alert("Passwords do not match!");
        return false;         
}}