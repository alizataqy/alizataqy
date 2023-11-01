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