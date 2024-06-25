console.log('Welcome to Password Validator');
console.log('Please set your password and confirm password to match it.');

let password;
        let confirmPassword;
        let passwordMatch = false;
        // do-while loop to prompt the user and confirm the password
        do {
            password = prompt("Please set your password:");
            confirmPassword = prompt("Please enter your password again to confirm:");
            // Check if the passwords match
            if (password === confirmPassword) {
                console.log("Password confirmed successfully!");
                passwordMatch = true;
            } else {
                console.log("Passwords do not match. Please try again.");
            }
        } while (!passwordMatch); // Repeat the loop until the passwords match