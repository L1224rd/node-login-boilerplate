$('document').ready(() => {
  $('#no-password').click(() => {
    $('#pass2').css('display', 'block'); // input pass2 shows up
    $('input[value=Login]').attr('value', 'Salvar'); // changes the value from the submit button
    $('#login').attr('action', 'http://localhost:3000/users/set-password'); // changes the action of the post to receive the new password
  });

  $('#login').submit((e) => {
    // on submit, if passwords don't match, show error message
    if ($('input[name=password]').val() !== $('input[name=password2]').val()) {
      e.preventDefault();
      $('#error').css('display', 'block');
    }
  });
});
