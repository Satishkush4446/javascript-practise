const getColor = () => {
    // hex code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    console.log(randomNumber, randomCode);
    document.body.style.backgroundColor = randomCode;

    // Set the background color
    document.getElementById("color-code").innerText = randomCode; // Set the color code
    // Copy the color code to the clipboard
    navigator.clipboard.writeText(randomCode)
        .then(() => {
            console.log('Color code copied to clipboard:', randomCode);
        })
        .catch(err => {
            console.error('Unable to copy color code to clipboard', err);
        });
}

document.getElementById("btn").addEventListener("click", getColor);

// Initial call to set the default color code
getColor();


