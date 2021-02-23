(function() {
    const buttons = document.querySelectorAll('.counter-btn');
    let count = 0;

    buttons.forEach(function(button) {
        button.addEventListener('click', function(){
            if (button.classList.contains('btn-lower')){
                count--
            } else if (button.classList.contains('btn-add')){
                count++
            }
        
        const counter = document.querySelector('#counter-result');
        counter.textContent = count

        if (count < 0) {
            counter.style.color = 'red'  
        } else if (count > 0) {
            counter.style.color = 'green'
        } else {
            counter.style.color = 'black'
        }
        })
    })
})()