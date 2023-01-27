function valiDateForm(){
    let name = document.getElementById('name');
    let nameA = document.getElementById('nameA');
    let email = document.getElementById('email');
    let emailA = document.getElementById('emailA');
    let dob = document.getElementById('dob');
    let dobA = document.getElementById('dobA');
    let age = document.getElementById('age');
    let ageA = document.getElementById('ageA');
    let reason = document.getElementById('reason');
    let reasonA = document.getElementById('reasonA');
    if(name.value.trim().length==0){
        name.focus();
        nameA.style.display='block';
       
    }else{nameA.style.display='none';};

    if(email.value.trim().length==0){
        email.focus();
        emailA.style.display='block';
    }else{emailA.style.display='none';};

    if(dob.value.trim().length==0){
        dob.focus();
        dobA.style.display='block';
    }else{dobA.style.display='none';};

    if(age.value.trim().length==0){
        age.focus();
        ageA.style.display='block';
    }else{ageA.style.display='none';};

    if(reason.value.trim().length==0){
        reason.focus();
        reasonA.style.display='block';
    }else{reasonA.style.display='none';};

    if(age.value<18 || age >50){
        ageA.innerText='Bạn phải từ 18 đến 50 tuổi'
        ageA.style.display='block';
    }
     
}

var btn = document.getElementById('btn');
btn.onclick=valiDateForm;