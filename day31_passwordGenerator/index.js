const btn = document.querySelector('.btn')
const pwd= document.querySelector('.password')

btn.addEventListener('click',function(e){
    e.preventDefault()
    let password=''
    let {len,typeObj} = loadValue()    
    let typesCount = Object.keys(typeObj).length
    let typesArr = Object.entries(typeObj).filter(([key,value])=>
        value===true
    ).map(([key,value])=>key)
    for(let i = 0; i<len;i+=typesCount)
    {
        typesArr.forEach(item=>{
            password+=getRandom[item]()
        })
    }
    pwd.value = password.slice(0,len)
})

function loadValue(){
    return {
        len:number.value,
        typeObj:{ 
            upper:hasUpper.checked,
            lower:hasLower.checked,
            num:hasNum.checked,
            symbol:hasSymol.checked
        }       
    }
}

const getRandom = {
    upper:getRandomString,
    num:getRandomNumber,
    lower:getRandomLower,
    symbol:getRandomSymbol
}

function getRandomString(){
    return String.fromCodePoint(Math.floor(Math.random()*26+65))
}

function getRandomNumber(){
    return String.fromCodePoint(Math.floor(Math.random()*10+48))
}

function getRandomLower(){
    return String.fromCodePoint(Math.floor(Math.random()*26+97))
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}