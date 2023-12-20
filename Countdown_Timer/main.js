const endDate = "20 March 2022 10:00 PM";

document.getElementById("end-date").innerText = endDate;

// const clock = () =>{

// }

function clock(){
    const end = new Date (endDate);
    const now = new Date();
   
    const diff = end - now;

}
clock()