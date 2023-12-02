function openNav() {
    document.getElementById("mySidenav-1").style.width = "200px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav-1").style.width = "0";
  }
  
  function toggleNav() {
    var x = document.getElementById("mySidenav-1");
    if (x.style.width <= "884px") {
      x.style.width = "0";
    }
  }

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwljDk7u-wwt6xS0EeV5HLOUrdQsEfdIiZCazWZPcXfYnqIlaQWNF2cUa_08i5M7cGC/exec'
                    const form = document.forms['google-sheet']
                    form.addEventListener('submit', e => {
                    e.preventDefault()
                    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                        .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                        .catch(error => console.error('Error!', error.message))
                    })