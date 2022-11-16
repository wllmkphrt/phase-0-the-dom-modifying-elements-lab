const main = document.getElementById('main');
main.remove();
const newHeader = document.createElement('H1');
newHeader.id = "victory";
newHeader.textContent = "William Kephart is the champion"
document.head.append(newHeader);