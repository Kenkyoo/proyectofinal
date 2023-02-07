const buttonGroup = document.getElementById("button-group");

const buttonGroupPressed = (e) => {
  const isButton = e.target.nodeName === 'BUTTON';
  if(!isButton) {
     return
   }
  document.body.style.backgroundColor = e.target.value;
  e.target.style.backgroundColor =  e.target.value;
  
}

buttonGroup.addEventListener('click', buttonGroupPressed);