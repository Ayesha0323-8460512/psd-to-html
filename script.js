
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
 
 var firstTabEl = document.querySelector('#myTab li:last-child a')
  var firstTab = new bootstrap.Tab(firstTabEl)

  firstTab.show()
 	function chatsection(){
  newWindow = window.open("https://tawk.to/e3crgchat/", toolbar=0, statusbar=0, locationbar=0);         
                setTimeout(function() {autoUnload();},60000);
            }   
            function autoUnload()
            {
                newWindow.close();
            }
 