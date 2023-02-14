document.getElementById('kitkat-buy-btn').addEventListener('click',function () {
    
    const total=getquentity('kitkat-quantity',200)
    
     setTk('chocolate',total)

     totalAmount();
    
    
})
document.getElementById('rose-buy-btn').addEventListener('click',function (){
   
    const total=getquentity('rose-quantity',100)
    
    setTk('rose',total)
    totalAmount();
    
})
document.getElementById('diary-buy-btn').addEventListener('click',function (){
   
    const total=getquentity('diary-quantity',100)
    
     setTk('diary',total)
     totalAmount();
    
})
document.getElementById('btn-promo-code').addEventListener('click',function (params) {
    
    
    const promo=document.getElementById('promo-code').value;
    const promoCode=parseFloat( promo)
    // console.log(typeof promoCode);
    
    if(promoCode == 101){
        const total=document.getElementById('total').innerText
        const discount=total*0.1;
        
        const totalAmount=total-discount        
        // console.log(totalAmount);
        const totalcost=document.getElementById('all-total')
        totalcost.innerText=totalAmount;
        
        // !finde
    }
    
})