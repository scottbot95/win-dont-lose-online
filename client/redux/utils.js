import store from './store';

const emptyFunc = () => {};

const logging = false;

/**
 * Wrap a thunk creator so that it will only run at most every `timeout` ms
 */
export const throttleAndQueueThunk = (thunkCreator, timeout = 0) => {
  let lastRun = new Date(0);
  const queue = [];
  let task = null;

  const wrapper = genWrapper();
  const wrapperNoQueue = genWrapper(false);

  // wrapper function
  function genWrapper(addToQueue = true) {
    return function() {
      // calcuate remaining time difference
      const now = new Date();
      const diff = now - lastRun;

      // eventual return value, default to an empty function
      let result = emptyFunc;

      // if time is up, run it and move on with out lives
      if (diff > timeout) {
        lastRun = now;
        result = thunkCreator(...arguments);
      } else if (addToQueue) {
        // trying to run too quick, add to queue
        queue.push(arguments);
        logging && console.log(`pushing ${[...arguments]} to queue`);
      }

      // if runner isn't scheduled, start one
      if (queue.length && !task) {
        const toRun = lastRun.getTime() - now.getTime() + timeout;
        logging &&
          console.log(`%cWaiting for ${toRun} more ms`, 'color: yellow');
        task = setTimeout(() => {
          logging && console.log('%ctimeout running', 'color:green');
          // clear runner since we're running
          task = null;
          if (queue.length === 0)
            return logging && console.warn('Runner has no tasks');

          // peek the first element out of queue
          const top = queue[0];

          // dispatch the action (and possibly reschedule timeout)
          const action = wrapperNoQueue(...top);
          if (action !== emptyFunc) {
            store.dispatch(action);
            queue.shift();
          } else {
            logging && console.log("%cdidn't wait long enough", 'color:red');
          }
        }, toRun);
      }

      return result;
    };
  }

  return wrapper;
};
