const scriptURL = 'https://script.google.com/macros/s/AKfycbxp5Glg7ASL4HEX9JOZVi1ZS_vHe4UMnXDJXOpEj1p4K56tVfk6JD0mLopswF8L0uJa/exec'
      const form = document.forms['order-form']
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => console.log('Success!', response))
          .catch(error => console.error('Error!', error.message))
      })

      document.getElementById('submit').addEventListener('click', function() {
        // Check if all required fields are filled
        var requiredInputs = document.querySelectorAll('[required]');
        var isEmptyField = false;

        requiredInputs.forEach(function(input) {
          if (input.value.trim() === '') {
            isEmptyField = true;
            input.classList.add('is-invalid'); // Add a class to highlight empty fields
          } else {
            input.classList.remove('is-invalid');
          }
        });

        if (isEmptyField) {
          // If at least one required field is empty, display an alert
          alert('Please fill out all required fields.');
        } else {
          // If all required fields are filled, show the success modal
          const myModal = new bootstrap.Modal(document.getElementById('modalId'));
          myModal.show();
          
          setTimeout(function() {
            location.reload();
        }, 3000);
        }

        
      });