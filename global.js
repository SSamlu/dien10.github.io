$(document).ready(function(){
    console.log("dien");
    $('.submit').on('click',function(e){
        e.preventDefault();
        console.log("dien");
        var formdata={
            name : $('#fullname').val(),
            phone : $('#phone').val(),
            photo : $('#photo').val(),
            email : $('#email').val(),
          };
            console.log(formdata);
            $.ajax({
              url: 'https://freemind-test.netlify.app/.netlify/functions/test',
              type: "POST",
              data: JSON.stringify(formdata),
              Headers:{'content-Type':'application/json'},
              // encode:true,
              success: function (result){
                // $('#hienthi').html('result');
                alert(result);
            }
            })
    })
})
// var xhr = new XMLHttpRequest();
// console.log(xhr);
// xhr.open("post","https://freemind-test.netlify.app/.netlify/functions/test",true);
// xhr.setRequestHeader("content-Type","application/json;charset=UTF-8")
// xhr.onload = function(){
//     if(this.status==200){
//         var response = xhr.response;
//         var parsedData = JSON.parse(response);
//         console.log(typeof response);
//     }
//     if(this.status == 502){
//         console.log("notFound")
//     }
// }
// xhr.send();