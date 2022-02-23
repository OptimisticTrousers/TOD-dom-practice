let container = document.querySelector('#container');

let redParagraph = document.createElement('p');

let title = document.createElement('h3');

let content = document.createElement('div');

let innerTitle = document.createElement('h1');

let innerParagraph = document.createElement('p');

redParagraph.textContent = 'Hey I\'m red';

redParagraph.style.cssText = 'color: red;';

container.appendChild(redParagraph);

title.textContent = "I'm a blue h3!"

title.style.cssText = 'color: blue;';

container.appendChild(title);

content.style.border = '1px solid black';

content.style.backgroundColor = 'pink';

innerTitle.textContent = "I'm in a div";

innerParagraph.textContent = "ME TOO!";

content.appendChild(innerParagraph);

content.appendChild(innerTitle);

container.appendChild(content);


