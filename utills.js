function getquentity(itemName,TK) {
    const getQuen=document.getElementById(itemName);
    const getQuenValue=getQuen.value;
    getQuen.value=''
    const totalAmount=getQuenValue*TK;
    return parseInt(totalAmount);
    
}

function setTk(tkPlace,wherSet) {
    const settk=document.getElementById(tkPlace);
    settk.innerText=wherSet
}
function totalAmount() {
    const coko=document.getElementById('chocolate').innerText
    const fol=document.getElementById('rose').innerText
    const dia=document.getElementById('diary').innerText
    const alltotal=parseInt(coko)+parseInt(fol)+parseInt(dia)
    setTk('total',alltotal)

    
}
