import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(CURRENT_TIME_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY) || 0);
