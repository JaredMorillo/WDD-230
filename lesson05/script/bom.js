const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const chapterList = []; // Array to store entered chapters

button.addEventListener('click', () => {
  const chapter = input.value.trim(); // Remove leading and trailing whitespace

  if (chapter !== '' && !chapterList.includes(chapter)) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = chapter;
    deleteButton.textContent = '❌';

    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
      chapterList.splice(chapterList.indexOf(chapter), 1); // Remove chapter from the list
      input.focus();
    });

    li.appendChild(deleteButton);
    list.appendChild(li);

    chapterList.push(chapter); // Add chapter to the list
    input.value = '';
    input.focus();
  } else if (chapter === '') {
    alert('Please enter a chapter.');
  } else {
    alert('Chapter already exists.');
  }
});