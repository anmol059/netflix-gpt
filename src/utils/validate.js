export const checkValidData = (email, password) => {
    const isEmailValid = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password);

    if (!isEmailValid) {
        return "Email is not Valid";
    } else if (!isPasswordValid) {
        return "Password is not Valid";
    }
    return null;
} 