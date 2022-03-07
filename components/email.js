import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import {config} from "../ENV";

const Email = () => {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success m-2', cancelButton: 'btn btn-danger m-2',
        }, buttonsStyling: false,
    })
    const sendEmail = (name, user, message) => {
        emailjs.send(config[0], config[1],
            {
                name: name,
                user_email: user,
                message: message
            },
            config[2]
        ).then(
            () => {
                console.log("message sent!")
            }
        )
    }

    swalWithBootstrapButtons.fire({
        title: '<div class="p-2"><h1 class="">Contact Domingo Funez</h1>',
        html: `<input type="text" id="name" class="form-control" placeholder="Your name">
  <input type="email" id="email" class="form-control" placeholder="eg: yourEmail@gmail.com"><hr>
  <textarea class="form-control" id="message" placeholder="your message"/></textarea></div>`,
        showCancelButton: true,
        confirmButtonText: 'send message',
        cancelButtonText: 'cancel',
        reverseButtons: true,
        focusConfirm: false,
        preConfirm: () => {
            const name = Swal.getPopup().querySelector('#name').value
            const email = Swal.getPopup().querySelector('#email').value
            const message = Swal.getPopup().querySelector('#message').value
            if (!name || !email || !message) {
                Swal.showValidationMessage(`fill the required fields`)
            }
            return {name: name, email: email, message: message}
        }
    }).then((result) => {
        if (result.isConfirmed) {
            sendEmail(result.value.name, result.value.email, result.value.message)
            swalWithBootstrapButtons.fire(
                'Message sent!', 'Your email was sent successfully',
                'success')
        }
    })
}

export default Email
