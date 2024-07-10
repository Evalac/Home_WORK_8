import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(throttle);
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', _.throttle(onPlay, 100));

function onPlay(evt) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(evt.seconds));
}
const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

player
  .setCurrentTime(currentTime)
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
