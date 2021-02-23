(function(){
    const services = [{
        value: 1,
        title: "great - 20%"
    },{
        value: 2,
        title: "good - 10%"
    },{
        value: 3,
        title: "bad - 2%"
    }]

    const validteInput  = function(billAmount, numUsers, selectedService){
        
        let isFeedback = false;
        const feedback = document.querySelector('.feedback');
        feedback.innerHTML = '';

        if (billAmount === '' || billAmount <= '0') {
            feedback.classList.add('showItem');
            feedback.innerHTML += `<p>Bill amount cannot be blank</p>`;
            isFeedback = true;
        }

        if (numUsers <= '0') {
            feedback.classList.add('showItem');
            feedback.innerHTML += `<p>Number of users must be greater than zero</p>`;
            isFeedback = true
        }

        if (selectedService === '0') {
            feedback.classList.add('showItem');
            feedback.innerHTML += `<p>You must select a Service</p>`;
            isFeedback = true;
        }

        setTimeout(function(){
            feedback.classList.remove('showItem');
        }, 10000);

        return isFeedback;
    };

    const calculateTip  = function(billAmount, numUsers, selectedService) {
        let percentTip = '';
        if (selectedService === 1) {
            percentTip = 0.2;
        } else if (selectedService === 2) {
            percentTip = 0.1;
        } else {
            percentTip = 0.02;
        }

        const tipAmount = Number(billAmount) * percentTip;
        const totalAmount = Number(billAmount) + Number(tipAmount);
        const eachPerson =  Number(totalAmount) / Number(numUsers);
        
        return [tipAmount, totalAmount, eachPerson];
    };

    services.forEach(function(service) {
        const option = document.createElement('option');
        option.textContent = service.title;
        option.value = service.value;

        const select = document.querySelector('#input-value');
        select.appendChild(option);
    })

        const inputForm = document.querySelector('form');
        inputForm.addEventListener('submit', function(e) {
            
            e.preventDefault();
            
            const inputBiil = document.querySelector('#input-bill');
            const inputUsers = document.querySelector('#input-users');
            const serviceValue  = document.querySelector('#input-value');

            let billAmount = inputBiil.value;
            let numUsers = inputUsers.value;
            let selectedService = serviceValue.value;

            const isFeedback = validteInput(billAmount, numUsers, selectedService);

            if (!isFeedback) {
                const loader = document.querySelector('.loader');
                const resultsDOM = document.querySelector('.results');
                const tipResultsDOM = document.querySelector('#tip-amount');
                const totalAmountDOM = document.querySelector('#total-amount');
                const eachPersonDOM = document.querySelector('#person-amount');
            

                const results = calculateTip(billAmount, numUsers, selectedService);

                loader.classList.add('showItem');

                setTimeout(function() {
                    loader.classList.remove('showItem');
                    tipResultsDOM.textContent = `${results[0].toFixed(2)}`
                    totalAmountDOM.textContent= `${results[1].toFixed(2)}`
                    eachPersonDOM.textContent= `${results[2].toFixed(2)}`
                    resultsDOM.classList.add('showItem');
                },2000)

                setTimeout(function() {
                    inputBiil.value = '';
                    inputUsers.value = '';
                    serviceValue.value = 0;
                    resultsDOM.classList.remove('showItem');
                }, 10000)
            }
        })    
})();