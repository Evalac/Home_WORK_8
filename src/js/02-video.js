import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(throttle);
console.log(Player);

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('play', throttle(onPlay, 1000));

const currenTime = JSON.parse(localStorage.getItem('TimePlayed'));

function onPlay(evt) {
  console.log(currenTime);
  localStorage.setItem('TimePlayed', JSON.stringify(evt.seconds));
}

player
  .setCurrentTime(currenTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
