console.log("Multiplication Table Generator");
console.log("Enter a number between 1 and 10 to generate its multiplication table.");

let number;
        let isValidNumber = false;
        // while loop for the user to enter a valid number
        while (!isValidNumber) {
            number = parseInt(prompt("Enter a number between 1 and 10 to generate its multiplication table:"));

            // Check if the number is within the valid range and is a real number
            if (number >= 1 && number <= 10) {
                isValidNumber = true;
                let tableOutput = `Multiplication Table for ${number} \n`;
                // for loop to generate the multiplication table
                for (let i = 1; i <= 10; i++) {
                    tableOutput += `${number} x ${i} = ${number * i}\n`;
                }

                console.log(tableOutput);
            } else {
                console.log("Please enter a valid number between 1 and 10.");
            }
        }