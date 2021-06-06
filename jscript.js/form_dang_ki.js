
// let email1 =document.getElementById('inputPassword1').value;
function kTEmail(){
    let email1 = document.forms['myForm']['email'].value;
    let pass = document.forms['myForm']['pass'].value;
    // let pass01 = pass.split('');
    if(email1=='' ){
        // if(email1)
        // alert('Emai không được bỏ trống');
        document.getElementById('checkEmail').innerHTML='* Vui lòng nhập Email';
        document.getElementById('checkPass').innerHTML='* Enter Email';
        return false;
    }
    
    if(pass == '' ){
        document.getElementById('checkEmail').innerHTML='* Vui lòng nhập Mật Khẩu';
        document.getElementById('checkPass').innerHTML='* Enter PassWord';
     return false;
    }
    
   
}