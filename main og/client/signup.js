let submit = async() => {


    const fname = document.querySelector("#fname").value;

    const email = document.querySelector("#email").value;

    const dept = document.querySelector("#class").value;

    const pass = document.querySelector("#pass").value;





    let url = `http://localhost:3000/adduser?fname=${fname}&email=${email}&dept=${dept}&pass=${pass}`;

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.onload = () => {

        const res = xhr.responseText;
        console.log(res);
    };
    xhr.send();

    // const res = await fetch(url);
    // console.log(res);




};