let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');


btns.forEach(btn => { 
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;    //will give class of all the buttons

        //change the counter value by using class
        if (styles.contains('increase')){
            count++;
        }else if (styles.contains('decrease')){
            count--;
        }else{
            count = 0;
        }
 
        //Used to change the color 
        if (count < 0){
            value.style.color = "red";
        }
        if (count > 0){
            value.style.color = "green";
        }
        if (count === 0){
            value.style.color = "#222";
        }
        value.textContent = count;
    });
    // console.log(btn);
});
