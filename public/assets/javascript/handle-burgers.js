document.getElementById("burger-form").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("burger-box").value;

  let data = {
    burger_name: name
  };

  fetch("/api/burger", {
    method: 'POST',
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
});

{/* <button class="devour-btn" data-burger_id="{{this.id}}">Devour it!</button> */}

document.getElementById('devourable-burgers').addEventListener("click", function(e) {
  if (event.target.tagName.toLowerCase() === 'button') {
      let id = event.target.getAttribute("data-burger_id");

      let data = {
        id: id
      };
    
      fetch("/api/burger", {
        method: 'PUT',
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(res => {})
      .catch(error => console.error('Error:', error))
  }
});