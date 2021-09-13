const mainContainer = document.querySelector('.main-container');
const timeframes = document.querySelectorAll('.timeframe > div');
const profileCard = mainContainer.innerHTML;
let profileData = null;

fetch('./data.json')
  .then((response) => response.json())
  .then((stats) => {
    profileData = stats;
    updateThings();
  });

function addEvents() {
  document.querySelectorAll('.timeframe > div').forEach((item, i) => {
    item.addEventListener('click', () => {
      console.log("Clicked: " + item.id);
      if (item.id !== document.querySelector('.selected').id)
        updateThings(item.id);
    });
  });
}

function updateThings(frame = 'weekly') {
  console.log("Rendering the Data for " + frame);
  // Update the Content
  mainContainer.innerHTML = profileCard;
  profileData.forEach(
    (item, i) =>
    (mainContainer.innerHTML += generateCard(
      item.title,
      item.timeframes[frame].current,
      item.timeframes[frame].previous
    ))
  );
  // Update the Selection
  document.querySelectorAll('.timeframe > div').forEach((item, i) => {
    item.classList.remove('selected');
  });
  document.querySelector('#' + frame).classList.add('selected');
  // Add Event Listener
  addEvents();
}

function generateCard(title, curTime, prevTime) {
  return `<div class="card ${title.toLowerCase().replace(' ', '-')}">
      <div class="data">
        <div class="title">
          <h2>${title}</h2>
          <img src="./images/icon-ellipsis.svg" alt="ellipsis-img">
        </div>
        <div class="time">
          <h1 class="cur-time">${curTime}hrs</h1>
          <p class="prev-time">Last Week - ${prevTime}hrs</p>
        </div>
      </div>
    </div>`;
}
