export default (fn) => {
  if (!!window.localStorage) {
    try {
      fn();
    } catch (e) {
      console.error(e);
    }
  }
}