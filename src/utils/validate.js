export const validateData = (email, password, fullName) => {
    const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordValidate = /^(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);
    if(!fullName && fullName === ''){
        return "Full Name required";
    }

    if(!emailValidate) return "Invalid Email";
    if(!passwordValidate) return "Invalid password";
    
}
