$(document).ready(function(){
    $("#form").validate();
    $('.submit').on('click',function(e){
        e.preventDefault();
            console.log(formdata);
            $.ajax({
              url: 'https://freemind-test.netlify.app/.netlify/functions/test',
              type: "POST",
              data: $('form').serialize(),
              Headers:{'content-Type':'application/json'},
              success: function (result){
                // alert(result);
            }
            })
    })
})