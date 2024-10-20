const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle('ri-close-large-line')
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle('ri-close-large-line')
    })
})


// web3 forms

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});
form.addEventListener('submit', function (e) {

    const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

    if (!hCaptcha) {
        e.preventDefault();
        alert("Please fill out captcha field")
        return
    }
});

window.onload = function () {
    // Reset the form fields when the page loads
    document.getElementById("form").reset();
};

// window.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
//   });

//   // Disable Ctrl+Shift+R, Ctrl+R, and Ctrl+Shift+I
//   window.addEventListener('keydown', function (e) {
//     if ((e.ctrlKey && e.shiftKey && e.key === 'R') || // Ctrl+Shift+R
//         (e.ctrlKey && e.key === 'r') || // Ctrl+R
//         (e.ctrlKey && e.shiftKey && e.key === 'I')) { // Ctrl+Shift+I
//       e.preventDefault();
//     }
//   })
