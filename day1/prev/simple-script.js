document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      console.log(e.target.dataset.value)
      document.querySelector('#resp').textContent = 'Response: ' + e.target.dataset.value;
      await fetch('http://localhost:3000/answer', {
        method: 'PUT',
        body: JSON.stringify(e.target.dataset.value)
      })
    })
})