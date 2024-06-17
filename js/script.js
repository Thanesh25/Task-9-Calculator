var maindiv=document.createElement("div")
maindiv.setAttribute("class","maindiv")
document.body.appendChild(maindiv)

//h1 element
var h1 =document.createElement("h1")
h1.setAttribute("id","title")
h1.innerText="Calculator"
maindiv.appendChild(h1)

//paragraph
var para =document.createElement("p")
para.setAttribute("id","description")
para.innerText="Dom Calculator"
maindiv.appendChild(para)

// container div
var container =document.createElement("div")
container.setAttribute("class","container")
maindiv.appendChild(container)

//calculator
var calculator =document.createElement("div")
calculator.setAttribute("class","cal")
container.appendChild(calculator)

//input element
var maindiv=document.createElement("div")
maindiv.setAttribute("class","maindiv")
maindiv.innerHTML=`<input id="result" placeholder="0" class="input">`
calculator.appendChild(maindiv)

//first row button
var row1=document.createElement("div")
row1.setAttribute("class","row1")
row1.innerHTML=`<button id="clear" onclick="Clear()" class="button">CL</button>
<button id="delete" onclick="del()" class="button">DE</button>
<button id="division" onclick="display('%')" class="button">%</button>
<button id="slash" onclick=display('/') class="button">/</button>`
calculator.appendChild(row1)



//second row
var row2=document.createElement("div")
row2.setAttribute("class","row2")
row2.innerHTML=`<button id="7" onclick="display('7')" class="button">7</button>
<button id="8" onclick="display('8')" class="button">8</button>
<button id="9" onclick="display('9')" class="button">9</button>
<button id="multi" onclick="display('*')"class="button">*</button>`
calculator.appendChild(row2)


//third row  button
var row3=document.createElement("div")
row3.setAttribute("class","row3")
row3.innerHTML=`<button id="4" onclick="display('4')" class="button">4</button>
<button id="5" onclick="display('5')" class="button">5</button>
<button id="6" onclick="display('6')" class="button">6</button>
<button id="subtract" onclick="display('-')" class="button">-</button>`
calculator.appendChild(row3)



//fourth row button
var row4=document.createElement("div")
row4.setAttribute("class","row4")
row4.innerHTML=`<button id="1" onclick="display('1')" class="button">1</button>
<button id="2" onclick="display('2')" class="button">2</button>
<button id="3" onclick="display('3')" class="button">3</button>
<button id="add" onclick="display('+')" class="button" >+</button>`
calculator.appendChild(row4)



// five row button
var row5=document.createElement("div")
row5.setAttribute("class","row5")
row5.innerHTML=`<button id="dot" onclick="display('.')" class="button">.</button>
 <button id="0" onclick="display('0')" class="button">0</button>
<button id="equal" onclick="calculate()" class="button">=</button> `
calculator.appendChild(row5)


// function

const output =document.getElementById("result")

function display(num){
    output.value +=num
}


function calculate(){
    try{
        output.value = eval(output.value)
    }
    catch(err){
        alert('invalid')
    }
}

function Clear(){
   output.value = ""
}

function del(){
    output.value=output.value.slice(0,-1)
}