const words=new Array(50)
for(let i=0;i<words.length;i++){
 words[i]=`word${i}`
}
// console.log(words)

const wordsCount={
  nuberOfWords:6,
  lengthOfWords:5,
  maximumTurn:6
}

const inputContainer=document.getElementById('inputBoard')
const clickButtons=document.querySelectorAll(".buttons")
let inputArrayBoard=[]

clickButtons.forEach((element =>element.addEventListener('click',handleClick)))
function inputValueBoard(){
  for(let i=0;i<wordsCount.nuberOfWords;i++){
    const subDiv=document.createElement('div')
    subDiv.id=`container${i}`
    for(let j=0;j<wordsCount.lengthOfWords;j++){
      
    const inputValue=document.createElement('input')
      inputValue.className=`inputLetters`
      inputValue.id=`value${i}${j}`
      inputValue.maxLength='1'
    
      // console.log(inputValue)
  
      subDiv.appendChild(inputValue)
  
      inputArrayBoard.push(`value${i}${j}`)
    
      
    }
    inputContainer.appendChild(subDiv)

  }
  
  // console.log(inputArrayBoard)
}

inputValueBoard()
function handleClick(evt){
  console.log("clicked")
}