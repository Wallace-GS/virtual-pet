import gameState from "./gameState";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

function init() {
  console.log("starting game");
  initButtons(gameState.handleUserAction);

  let nextTimeToTick = Date.now();

  // using closure to encapsulate nextTimeToTick.
  // this allows us to keep track of the state of nextTimeToTick
  // since it's constantly advancing.
  function nextAnimationFrame() {
    const now = Date.now();

    // if nextTimeToTick was inside this scope it would get reset
    // every time this function was called.
    if (nextTimeToTick <= now) {
      gameState.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame);
}

init();
