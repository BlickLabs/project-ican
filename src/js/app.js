$('form[name="ican-form-es"]').validate({
  // required fields
  name: 'required',
  email: 'required',
  messages: {
   name: "Por favor, introduce tu Nombre.",
   email: "Por favor, introduce un Correo Electrónico.",
  },
  submitHandler: function(form) {
   var data = $('form[name="ican-form-es"]').serialize();
   console.log(data);
   $.ajax({
     url: 'http://integrations.blick.mx/ican/join/es/',
     method: 'POST',
     data: data
   }).done(function(data) {
     if (parseInt(data) === 1) {
       alertify.logPosition("bottom right");
       alertify.success("Gracias por contactarte con nosotros.");
       $('form[name="ican-form-es"]')[0].reset();
     }
   });
  },
  invalidHandler: function(event, validator) {
   var errors = validator.numberOfInvalids();
   alertify.logPosition("bottom right");
   alertify.error("Verifica tu información tienes " + errors + " errores.");
  }
});

$('form[name="ican-form-en"]').validate({
  // required fields
  name: 'required',
  email: 'required',
  messages: {
   name: "Please, enter your Name.",
   email: "Please, enter yout Email.",
  },
  submitHandler: function(form) {
   var data = $('form[name="ican-form-en"]').serialize();
   console.log(data);
   $.ajax({
     url: 'http://integrations.blick.mx/ican/join/en/',
     method: 'POST',
     data: data
   }).done(function(data) {
     if (parseInt(data) === 1) {
       alertify.logPosition("bottom right");
       alertify.success("Thank you for contacting us.");
       $('form[name="ican-form-en"]')[0].reset();
     }
   });
  },
  invalidHandler: function(event, validator) {
   var errors = validator.numberOfInvalids();
   alertify.logPosition("bottom right");
   alertify.error("Verify your information do you have " + errors + " errors.");
  }
});
