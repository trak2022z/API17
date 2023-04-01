$(document).ready(function() {
        $("#myForm").validate({
          rules: {
            name: {
              required: true
            },
            email: {
              required: true,
              email: true
            },
            password: {
              required: true,
              minlength: 8
            }
          },
          messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            password: {
              required: "Please enter a password",
              minlength: "Your password must be at least 8 characters long"
            }
          }
        });
      });




// Initialize Parsley.js on the form element
      var form = $('#myForm2').parsley();
      
      // Optional: customize the error messages
      form.options.errorClass = 'is-invalid';
      form.options.successClass = 'is-valid';
      form.options.errorsWrapper = '<ul class="parsley-errors-list"></ul>';
      form.options.errorTemplate = '<li class="parsley-required">{{errorMessage}}</li>';
      
      // Optional: add a custom validator for the password field
      window.Parsley.addValidator('strongPassword', {
        validateString: function(value) {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
        },
        messages: {
          en: 'Your password must contain at least 8 characters including one uppercase letter, one lowercase letter, one number, and one special character'
        }
      });
      
      // Optional: use a custom validation trigger
      form.options.trigger = 'blur';
      
      // Optional: prevent form submission if validation fails
      form.on('form:submit', function() {
        // Your form submission code goes here
        console.log('Form submitted successfully!');
        return false; // Prevent default form submission
      });
      
      // Optional: listen to validation events
      form.on('field:validated', function() {
        console.log('Validation event triggered');
      });
      
      // Optional: customize the error message placement
      form.on('field:error', function() {
        console.log('Error message displayed');
      });