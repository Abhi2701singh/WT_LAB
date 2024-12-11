// Function to print multiplication table
function printTable(number, range = 10) {
    console.log(`Multiplication Table for ${number}:`);
    console.log('------------------------');
    
    for(let i = 1; i <= range; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Example usage
printTable(5);  // Will print table of 5 