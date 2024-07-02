function getCurrentDayAndTimeUTC() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    
    // Get current day of the week
    const currentDay = daysOfWeek[now.getUTCDay()];
    
    // Get current time in UTC
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    
    return {
        currentDay,
        currentTime
    };
}

function updateDateTime() {
    const { currentDay, currentTime } = getCurrentDayAndTimeUTC();
    document.getElementById('dateUTC').textContent = `Current day of the week: ${currentDay}`;
    document.getElementById('timeUTC').textContent = `Current time in UTC: ${currentTime}`;
}


setInterval(updateDateTime, 1000);


updateDateTime();


//   document.addEventListener("DOMContentLoaded", function() {
//     const hamburger = document.querySelector('.hamburger');
//     const navMenu = document.querySelector('navs.');

//     hamburger.addEventListener('click', function() {
//       navMenu.classList.toggle('active');
//       hamburger.classList.toggle('active');
//     });
//   });


