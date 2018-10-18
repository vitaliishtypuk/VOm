$(function(){
   $('#contact-form button[type=submit]').click(sendForm); 
});

function sendForm(ev) {
    const form  = document.getElementsByTagName('form')[0];
    if (form.checkValidity()) {
        ev.preventDefault();
        $.ajax({
            url: "https://formcarry.com/s/vPyn2Udn8Mo", 
            method: "POST",
            data: {
                name: $('#name').val(),
                phone:$('#phone').val(),
                email: $('#email').val(),
                message: $('#message').val()
            },
            dataType: "json"
        })
         .done( () => $('#sendmessage').addClass("show") )
         .fail( () => $('#errormessage').addClass("show") ); 
    }
}
