let friends = document.getElementById('friends');
let love = document.getElementById('love');
let money = document.getElementById('money');
let valMoney =()=>{
    if(money.checked){
        love.checked = false;
    }
}
let valLove =()=>{
    if(money.checked && love.checked)
    friends.checked = false;
}
let valFriends = () =>{
    if(friends.checked && love.checked)
    money.checked = false;
}
money.onclick = function(){
    valMoney();
};
love.onclick = function(){
    valLove();
}
friends.onclick = function(){
    valFriends();
}

