$('document').ready(() => {
  let loginFlag = 0;

  $('#no-password').click(() => {
    if (!loginFlag) {
      loginFlag = 1;
      $('#pass2').css('display', 'block'); // input pass2 shows up
      $('#button-login').attr('value', 'Salvar'); // changes the value from the submit button
      $('#login').attr('action', 'http://localhost:3000/users/set-password'); // changes the action of the post to receive the new password
      $('#no-password').text('Já tenho senha!'); // toogle the text based on the loginFlag
    } else {
      loginFlag = 0;
      $('#pass2').css('display', 'none'); // hide input pass2
      $('#button-login').attr('value', 'Login'); // changes the value from the submit button
      $('#login').attr('action', 'http://localhost:3000/users/login'); // changes the action of the post
      $('#no-password').text('Primeira vez?'); // toogle the text based on the loginFlag
    }
  });

  $('#login').submit((e) => {
    e.preventDefault(); // prevent form from submitting
    // on submit, if passwords don't match, show error message
    if (
      // if passwords match
      $('input[name=password]').val() !== $('input[name=password2]').val() &&
      loginFlag
    ) {
      $('#error').css('display', 'block'); // passwords don't match
    } else {
      $.post(
        'http://localhost:3000/users/login',
        { // send the post body using ajax
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
