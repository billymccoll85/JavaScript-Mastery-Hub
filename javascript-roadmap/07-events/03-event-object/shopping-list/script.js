const logo = document.querySelector('img');

const onClick = (e) => {
  // Event properties
  const { target, currentTarget, type, timeStamp, clientX, clientY, offsetX, offsetY, pageX, pageY, screenX, screenY } = e;
  console.log(target);
  console.log(currentTarget);
  console.log(type);
  console.log(timeStamp);
  console.log(clientX);
  console.log(clientY);
  console.log(offsetX);
  console.log(offsetY);
  console.log(pageX);
  console.log(pageY);
  console.log(screenX);
  console.log(screenY);
};

const onDrag = (e) => {
  document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
};

logo.addEventListener('click', onClick);
logo.addEventListener('drag', onDrag);

document.querySelector('a').addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Link was clicked');
});
