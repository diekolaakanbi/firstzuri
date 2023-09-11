
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
const currentDay = daysOfWeek[currentDate.getUTCDay()];
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

const currentUTCTime = `${hours}:${minutes}:${seconds}`
// const currentUTCTime = currentDate.toUTCString();

const gitHubLink = document.querySelector('[data-testid = "githubURL"]');
const today = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentTime = document.querySelector('[data-testid="currentUTCTime"]');

const myGitHubLink = "https://github.com/diekolaakanbi/firstzuri";
gitHubLink.setAttribute("href", myGitHubLink);
today.textContent = `Current Day: ${currentDay}`;
currentTime.textContent = `Current UTC Time: ${currentUTCTime}`;