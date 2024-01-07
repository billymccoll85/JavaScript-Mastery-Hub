document.getElementById('converter').addEventListener('submit', (event) => {
    event.preventDefault();

    let amount = document.getElementById('amount').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;

    fetch(`https://v6.exchangerate-api.com/v6/c6fda8d466a5b740af083d11/latest/${from}`)
      .then(response => response.json())
      .then(data => {
        if (data && data.conversion_rates) {
          let rate = data.conversion_rates[to];
          if (rate) {
            let result = amount * rate;
            document.getElementById('result').innerHTML = `Result: ${result}`;
            document.getElementById('rate').innerHTML = `Exchange rate: 1 ${from} = ${rate} ${to}`;
          } else {
            console.error('Rate not found for the selected currency');
          }
        } else {
          console.error('Conversion rates not found in the response data');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
});