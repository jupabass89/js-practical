console.log("Start"); // this line is stacked in the CallStack and executed  inmediately

setTimeout(
  // this timer is proccesed in the web api
  () => {
    // when the timer ends, this callback is queued in the Callback queue (micro task)
    console.log("timeOut finished!"); // when the Callstack is empty, the event loop move this code to the callstack
  },
  2000
);

fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(
  // this promise is proccesed in the web api
  () =>
    // when the request is complete ends, this callback is queued in the Callback queue (macrotask)

    console.log("fetch complete!") // when the Callstack is empty, the event loop move this code to the callstack
);

console.log("End"); // this line is stacked in the CallStack and executed  inmediately, before the async code above
