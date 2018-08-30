// All of the following examples select the first P element in the HTML.
// These are all valid ways to access the element.
// Note that querySelector() is the newer way to do this, it's a multi functional function.

document.getElementById('first');

document.getElementsByTagName('p')[0];

document.getElementsByClassName('special')[0];

document.getElementsByName('bob')[0];

document.querySelector('#first');

document.querySelector('.special');

document.querySelector('body p');

document.querySelector('p');

document.querySelector('h1 + p');