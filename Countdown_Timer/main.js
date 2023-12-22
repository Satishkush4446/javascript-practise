const endDate = new Date("22 December 2023 14:12:00");

document.getElementById("end-date").innerText = endDate.toLocaleString();

const inputs = document.querySelectorAll("input");

function clock() {
    const now = new Date();
   
    const diffInSeconds = Math.floor((endDate - now) / 1000);

    if (diffInSeconds < 0) return;

    const days = Math.floor(diffInSeconds / (3600 * 24));
    const hours = Math.floor((diffInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = diffInSeconds % 60;

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;

    // Uncomment the next line if you want to see the countdown in the console
    // console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

}

// Initial call to set the values on page load
clock();

// Set up an interval to update the countdown every second
setInterval(clock, 1000);
