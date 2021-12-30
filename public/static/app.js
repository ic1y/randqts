import { quotes } from './quotes.js';
const qt = document.getElementsByClassName('qt')[0];
const au = document.getElementsByClassName('au')[0];
function getQt() {
  const quote = quotes[Math.round(Math.random() * quotes.length)]
  qt.innerText = `"${quote.text}"`;
  if(quote.author != null) {au.innerText = `- ${quote.author}`;}
  else {au.innerText = `- Unknown`;}
}
try {
  getQt();
  setInterval(() => {
    if(document.visibilityState != 'hidden') getQt();
  }, 5000);
} catch(err) {
  console.error(err);
}