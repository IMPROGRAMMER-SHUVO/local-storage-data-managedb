// use local srorage db
const addtodb=id=>{
 let shoppingcart;
 //get shopping cart
 const storedcart=localStorage.getItem('shopping-cart')
if(storedcart){
shoppingcart=JSON.parse(storedcart)
}
else{
shoppingcart={}
}

 //add quantity
const quantity=shoppingcart[id]
  if(quantity){
   
    const newQuantity=quantity+1;
    shoppingcart[id]=newQuantity
    //localStorage.setItem(id,newQuantity)
}
else{
    shoppingcart[id]=1
    //localStorage.setItem(id,1)
}
localStorage.setItem('shopping-cart',JSON.stringify(shoppingcart));
}

const removbd=id=>{
const storedcart=localStorage.getItem('shopping-cart')
if(storedcart){
    const shoppingcart=JSON.parse(storedcart)
    if(id in shoppingcart){
        delete shoppingcart[id];
        localStorage.setItem('shopping-cart',JSON.stringify(shoppingcart));
    }
}


}
const alldelet=()=>{
    localStorage.removeItem('shoppingcart')
}

export {
    addtodb,
    removbd,
    alldelet
}