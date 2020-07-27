const TICK_RATE = 3000;

function tick() {
  console.log("tick", Date.now());
}

function init() {
  console.log("starting game");

  let nextTimeToTick = Date.now();

  // using closure to encapsulate nextTimeToTick.
  // this allows us to keep track of the state of nextTimeToTick
  // since it's constantly advancing.
  function nextAnimationFrame() {
    const now = Date.now();

    // if nextTimeToTick was inside this scope it would get reset
    // every time this function was called.
    if (nextTimeToTick <= now) {
      tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame);
}

init();
