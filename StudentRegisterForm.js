var form=document.querySelector("#user");
const userData=[];

const resetForm=function(){
    form.classList.remove('validated');
    const name=document.getElementById('name');
    name.value="";
    
    const email=document.getElementById('email');
    email.value="";
    
    const website=document.getElementById('website');
    website.value="";
    
    const image=document.getElementById('image');
    image.value="";
    
    const gender=document.querySelectorAll('input[name="gender"]');
    for(const rb of gender){
        rb.checked=false;
    }

    const skill=document.querySelectorAll('input[name="skill"]');
    for(const rb of skill){
        rb.checked=false;
    }
};

const getData=function(){
    const name="Name : "+document.getElementById('name').value;
    const email="Email : "+document.getElementById('email').value;
    const website="Website : "+document.getElementById('website').value;
    const image=document.getElementById('image').value;
    let gender;
    let skills=[];

    const genderEl=document.querySelectorAll('input[name="gender"]');
    for(const rb of genderEl){
        if(rb.checked){
            gender="Gender : "+rb.value;
            break;
        }
    }
    
    const skillEl=document.querySelectorAll('input[name="skill"]');
    skills.push("Skills : ");
    for(const rb of skillEl){
        if(rb.checked){
            skills.push(rb.value);
        }
    }
    return {name,email,website,image,gender,skills};
};

form.addEventListener("submit",function(event){
    event.preventDefault();
    if(form.checkValidity()){
        const data=getData();
        userData.push(data);
        printData(data);
        resetForm();
    }else{
        form.classList.add('validated');
    }
});

function printData(data){
    const resultEl=document.getElementById('enrolled-students');
    let sectionHeading=null;
    if(userData.length==1){
        sectionHeading=document.createElement('div');
        const description=document.createElement('p');
        description.innerHTML="Description";
        description.className="description";

        const image=document.createElement('p');
        image.innerHTML="Image";
        image.className="Image";

        sectionHeading.className="sectionHeading";
        sectionHeading.append(description,image);
    }

    const wrapper=document.createElement('div');
    wrapper.className="wrapper";
    wrapper.addEventListener('click',function(e){
        console.log(e.target.className);
        if(e.target.className.includes('userDeleteBtn')){
            e.currentTarget.remove();
        }
    });

    const deleteBtn=document.createElement('button');
    deleteBtn.innerHTML="X";
    deleteBtn.className="userDeleteBtn";

    const textInfoContainer=document.createElement('div');
    textInfoContainer.className="textInfoContainer";
    
    const imageContainer=document.createElement('div');
    imageContainer.className="imageContainer";

    const imageLink=document.createElement('a');
    imageLink.href=data.image;
    imageLink.target="_blank";

    let name=document.createElement('p');
    name.className="infoText name";
    name.innerHTML=data.name;
    
    let email=document.createElement('p');
    email.className="infoText email";
    email.innerHTML=data.email;
    
    let gender=document.createElement('p');
    gender.className="infoText gender";
    gender.innerHTML=data.gender;
   
    let website=document.createElement('p');
    website.className="infoText website";
    website.innerHTML=data.website;
    website.href=data.website;
    website.target="_blank";

    let skills=document.createElement('p');
    skills.className="infoText skills";
    skills.innerText=data.skills.join(', ');

    let image=document.createElement('img');
    image.className="image";
    image.src=data.image;

    textInfoContainer.append(name,gender,email,website,skills);
    imageLink.appendChild(image);
    imageContainer.appendChild(imageLink);

    wrapper.append(textInfoContainer,imageContainer,deleteBtn);
    if(sectionHeading==null){
        resultEl.append(wrapper);
    }else{
        resultEl.append(sectionHeading,wrapper);
    }
};