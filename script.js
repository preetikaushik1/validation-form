


function form(){
    let fullname = document.querySelector('#name').value
    let fullname_size = fullname.length


    let email = document.querySelector('#mail').value
    let email_size = email.length

    let password = document.querySelector('.password').value
    let password_size = password.length



    if(fullname_size < 3){


         document.querySelector('.error').innerText = "Please type your full name?"

    }else if(email_size < 6){
        document.querySelector('.error').innerText = "This is not correct Email"
    }else if(password_size !==10){

        document.querySelector('.error').innerText = 'This password should be 10 digit'

    }else{
        document.querySelector('.error').innerText = ""
        document.querySelector('.success').innerText = 'Your account is created'
    }
}

  








