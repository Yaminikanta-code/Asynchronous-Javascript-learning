const randomcolor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  }; //generate a random color
  let intervalId;
  const startchangingcolor = function () {
    const changebgc = function () {
      document.body.style.backgroundColor = randomcolor();
    };
    if (!intervalId) {
      intervalId = setInterval(changebgc, 1000);
    } //!intervalId is same as intervalId==null
  };
  const stopchangingcolor = function () {
    clearInterval(intervalId);
    intervalId = null; //flush out intervalId
  };
  document.querySelector('#start').addEventListener('click', startchangingcolor);
  document.querySelector('#stop').addEventListener('click', stopchangingcolor);
  