$(document).ready(function() {
    // Form Animation
    $('.form-group input').focus(function() {
        $(this).siblings('label').addClass('active');
    });

    $('.form-group input').blur(function() {
        if ($(this).val() === '') {
            $(this).siblings('label').removeClass('active');
        }
    });

    // Form Submission
    $('#registrationForm').submit(function(e) {
        e.preventDefault();
        alert('Registration successful!');
    });
});

$(function() {
    $( "#button" ).click(function() {
      $( "#button" ).addClass( "onclic", 250, validate);
    });
  
    function validate() {
      setTimeout(function() {
        $( "#button" ).removeClass( "onclic" );
        $( "#button" ).addClass( "validate", 450, callback );
      }, 2250 );
    }
      function callback() {
        setTimeout(function() {
          $( "#button" ).removeClass( "validate" );
        }, 1250 );
      }
    });

    const circle = document.querySelector('.circle');

window.addEventListener('mousemove', handleCursor);

function handleCursor(e) {
  circle.style.translate = `${e.x - (circle.offsetWidth/ 2)}px ${e.y - (circle.offsetHeight / 2)}px` 
}