//template_dkzbf94
//service_ze8t8xc
//_7HGzknxcdjwVcVj8



contrastToggle = false;
function toggleContrast() {
    contrastToggle =!contrastToggle;
    if(contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
    document.body.classList.remove("dark-theme")
}
}

function contact(event) {
  event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_ze8t8xc',
            'template_dkzbf94',
        event.target, 
        '_7HGzknxcdjwVcVj8'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible"
            console.log('itwork')
        }) .catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is down sorry. Please contact me directly at durland.david@gmail.com"
            );
        })
    }

    //Modal call when button click
    let isModalOpen = false;
    function toggleModal() {
        if(isModalOpen) {
            isModalOpen = false;
            return document.body.classList.remove("modal--open");
        }
        isModalOpen = true;
        document.body.classList += " modal--open"
    }