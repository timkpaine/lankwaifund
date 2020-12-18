module.exports = () => {
  global.crypto = {getRandomValues: undefined};
  // global.window = {};
  // global.window.alert = (msg) => { console.log(msg); };
  // global.window.matchMedia = () => ({});
  // global.window.scrollTo = () => { };
};
