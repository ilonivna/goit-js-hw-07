const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    const email = event.currentTarget.elements.email.value.trim();
    const password = event.currentTarget.elements.password.value.trim();
    if (email === "" || password === "") {
        alert("All form fields must be filled in")
    } else {
        const info = {
            email,
            password,
        }
        console.log(info);
        event.currentTarget.reset()
    }
    
    
}







