const fetchCat = () => {

    fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(cats => {
            cats.forEach(cat => {
                let result = `<h2>Here your lovely cat</h2>
                    <div>
                        <a href="${cat.url}" target="_blank"><img src="${cat.url}" alt="kitty"></a>
                    </div>`;
                document.getElementById("cat-pic").innerHTML = result;
            });
        })
}