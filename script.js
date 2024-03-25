let a = 0;
let o = null;
let b = 0;
let r = 0;
var result = document.querySelector("#result")
function cal(inp){
    if(inp==='='){
        if(typeof b == 'number' && typeof a == 'number' && typeof o == 'string'){
            result.innerHTML = calulate(a,o,b)
            a=result.innerHTML 
            b=null
            o=null
        }
    }
    else if (typeof inp=="number") {
        if(typeof o == 'string'){
            b= b*10 +inp
            result.innerHTML = a + o + b
        }else{
            a = a*10 + inp
            result.innerHTML = a
        }
        
    }
    else if(typeof inp == "string" ){
        o = inp
        result.innerHTML = a + o

    }
}
function calulate(a,o,b){
    if(o=='+'){
        return a+b
    }else if(o=='-'){
        return a-b
    }else if(o=='*'){
        return a*b
    }else if(o=='/'){
        return a/b
    }
}
function reset(){
    result.innerHTML = 0
    a=0
    o=null
    b=0
}