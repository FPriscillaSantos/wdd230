const range = document.getElementById('r');
const rangevalue = document.getElementById('rangevalue');

range.addEventListener('input', function() {
    rangevalue.textContent = this.value; // Atualiza o valor do range
});

const w1 = document.querySelector("#password1");
const w2 = document.querySelector("#password2");
const fb = document.querySelector("#feedback")

w2.addEventListener('focusout', controlar)

function controlar() {
    //console.log('inside the function')
    if (w1.value !== w2.value) {
        //console.log('no match')
        w1.value=""
        w2.value=""
        w1.focus()
        fb.textContent= "Password values ​​do not match"
    } else {
        //console.log("match!")
        fb.textContent=""
    }
}
