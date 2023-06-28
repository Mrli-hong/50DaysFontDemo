const btn = document.querySelector('.btn')
const pwd= document.querySelector('.password')
const copyBtn = document.querySelector('.icon-fuzhi')

copyBtn.addEventListener('click',function(e){
    //1. 复制功能老实现
    // let textarea = document.createElement('textarea')
    // document.documentElement.appendChild(textarea)
    // textarea.value = pwd.value
    // textarea.select();
    // document.execCommand('copy')
    // textarea.remove()
    // alert('Password copied to clipboard!')
    let pwdValue = pwd.value
    navigator.clipboard.writeText(pwdValue)
    .then(()=>{
        console.log('复制成功')
    }).catch((error)=>{
        console.log("复制失败")
    })
})

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