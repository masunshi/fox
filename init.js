import game, {handleUserAction} from "./gameState.js";

import {TICK_RATE} from "./constants.js";
import initButtons from "./buttons.js";

async function init(){
  initButtons(handleUserAction);

  let nextTimeToTick = Date.now();

  function nextAnimationFrame(){
    const now = Date.now();

    if(nextTimeToTick <= now){
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }
  requestAnimationFrame(nextAnimationFrame);
}

init();
