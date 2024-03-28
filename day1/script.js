document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault()
    const value = e.target.dataset.value
    console.log(value)
    const resp = document.querySelector('#answer')
    resp.textContent = 'My response is: ' + (value === 'yes' ? 'Yes' : 'Enthusiastic Yes')
  })
})