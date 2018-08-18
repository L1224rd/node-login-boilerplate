$('document').ready(() => {
  $('#no-password').click(() => {
    $('#pass2').css('display', 'block'); // input pass2 shows up
    $('#button-login').attr('value', 'Salvar'); // changes the value from the submit button
    $('#login').attr('action', 'http://localhost:3000/users/set-password'); // changes the action of the post to receive the new password
  });

  $('#login').submit((e) => {
    e.preventDefault();
    // on submit, if passwords don't match, show error message
    if (
      $('input[name=password]').val() !== $('input[name=password2]').val() &&
      $('#button-login').attr('value') === 'Salvar'
    ) {
      $('#error').css('display', 'block');
    } else {
      $.post(
        'http://localhost:3000/users/login',
        {
          email: $('input[name=email]').val(),
          password: $('input[name=password]').val(),
        },
        (data) => {
          if (data === 'ok') {
            console.log('yay');
          } else {
            console.log('nooo');
          }
        },
      );
    }
  });
});
