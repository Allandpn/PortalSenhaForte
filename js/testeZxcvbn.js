var password = "MySuperSecurePassword123";
var result = zxcvbn(password);

console.log(result.score);          // Password strength score (0-4)
console.log(result.guesses);        // Estimated number of guesses needed to crack the password
console.log(result.feedback.warning);   // Warning message about the password
console.log(result.feedback.suggestions); 