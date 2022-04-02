export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Validate an email address
 * @param email - The email address to validate.
 * @returns a boolean value.
 */
export function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
/**
 * Replace all hyphens with spaces, and then capitalize the first letter of each word
 * @param string - The string to remove hyphens and capitalize.
 * @returns The string is being returned with the hyphens removed and the first letter of each word
 * capitalized.
 */
export function removeHyphensAndCapitalize(string) {
    return string.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase())
}
