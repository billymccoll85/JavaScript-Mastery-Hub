const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

const onInput = (e) => {
  heading.textContent = e.target.value;
};

const onChecked = (e) => {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? 'Checked' : 'Not Checked';
};

const onFocus = () => {
  console.log('Input is focused');
  itemInput.style.outline = '1px solid red';
};

const onBlur = () => {
  console.log('Input is not focused');
  itemInput.style.outline = 'none';
};

// input, change, focus and blur events
itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
