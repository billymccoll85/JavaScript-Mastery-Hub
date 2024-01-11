const addDots = (element, number) => {
    for(let i=0; i<number; i++){
      const dot = document.createElement('div');
      dot.setAttribute('class', 'dot');
      element.appendChild(dot);
    }
  }
  
  const addColumns = (array, element) => {
    array.forEach(item => {
      const column = document.createElement('div');
      column.setAttribute('class', 'dot-column');
      addDots(column, item);
      element.appendChild(column);
    });
  }
  
  const generateDice = (number) => {
    const face = document.getElementById('dice-face');
    const dotWrapper = document.createElement('div');
    dotWrapper.setAttribute('class', 'dot-wrapper');
    
    switch(number){
      case 1: 
        addDots(face, 1);
      break;
      case 2:
         addDots(dotWrapper, 2);
         dotWrapper.childNodes[1].setAttribute("style", "align-self:flex-end;");
        break;
      case 3:
         addDots(dotWrapper, 3);
         dotWrapper.childNodes[0].setAttribute("style", "align-self:flex-end;");
        dotWrapper.childNodes[1].setAttribute("style", "align-self:center;");  
        break;
      case 4:
         addColumns([2,2], dotWrapper);
        break;
        case 6:
        addColumns([3,3], dotWrapper);
        break;
      case 5: 
        addColumns([2,1,2], dotWrapper);
        dotWrapper.childNodes[1].setAttribute("style", "justify-content:center;");
        break;
    }
    if(number!==1)
      face.appendChild(dotWrapper);
  }
  
  const rollDice = () => {
    const dice = document.getElementById('dice-face');
    dice.className = 'dice-face rolling';
    let value = Math.floor(Math.random() * 6) + 1;
    
     setTimeout(() => {
         dice.className = 'dice-face';
         if(dice.childNodes && dice.childNodes[0])
            dice.childNodes[0].remove();
         generateDice(value);
        }, 500);
  }
  
  rollDice();
  document.getElementById('rollDice').addEventListener('click', rollDice);  