const mapEvtHandlers = (handlers, func) => {
  const newHandlers = {};
  const events = Object.keys(handlers);
  for (const evt of events) {
    const handlerOrArray = handlers[evt];
    if (Array.isArray(handlerOrArray)) {
      newHandlers[evt] = [];
      for (const handler of handlerOrArray) {
        newHandlers.push(func(handler));
      }
    } else if (handlerOrArray) {
      newHandlers[evt] = func(handlerOrArray);
    }
  }

  return newHandlers;
};

const forEachEvtHandler = (handlers, func) => {
  const events = Object.keys(handlers);
  for (const evt of events) {
    const handlerOrArray = handlers[evt];
    if (Array.isArray(handlerOrArray)) {
      for (const handler of handlerOrArray) {
        func(evt, handler);
      }
    } else if (handlerOrArray) {
      func(evt, handlerOrArray);
    }
  }
};

const registerHandlerWithWrapper = (emitter, event, handler) => {
  emitter.on(event, function() {
    handler(emitter, ...arguments);
  });
};

const clearAllHandlers = (emitters, handlers) => {
  const clearAll = (evt, handler) => emtr => emtr.off(evt, handler);
  forEachEvtHandler(handlers, (evt, handler) => {
    if (Array.isArray(emitters)) emitters.forEach(clearAll(evt, handler));
    else clearAll(evt, handler)(emitters);
  });
};

const registerAllHandlers = (emitter, handlers) => {
  forEachEvtHandler(handlers, (evt, handler) =>
    registerHandlerWithWrapper(emitter, evt, handler)
  );
};

const registerHandleToAll = (emitters, event, handler) => {
  emitters.forEach(emtr => {
    registerHandlerWithWrapper(emtr, event, handler);
  });
};

module.exports = {
  mapEvtHandlers,
  forEachEvtHandler,
  registerHandlerWithWrapper,
  clearAllHandlers,
  registerAllHandlers,
  registerHandleToAll
};
