
let message
function checkForSpam(message) {
    const blacklistedWord1 = "spam";
    const blacklistedWord2 = "sale";
    const messageLowerCase = message.toLowerCase()
    return (messageLowerCase.includes(blacklistedWord1) || messageLowerCase.includes(blacklistedWord2))
    // const result = messageLowerCase.includes(blacklistedWord1) || messageLowerCase.includes(blacklistedWord2)
    // return result
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true