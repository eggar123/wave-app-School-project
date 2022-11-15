

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');


const setupUI = (user) => {
    if(user) {
        // Toggle UI elementer
        loggedInLinks.forEach(item=> item.getElementsByClassName.display = 'block');
        loggedOutLinks.forEach(item=> item.getElementsByClassName.display = 'none');
    }   else {
            // Toggle UI elementer
        loggedInLinks.forEach(item=> item.getElementsByClassName.display = 'none');
        loggedOutLinks.forEach(item=> item.getElementsByClassName.display = 'block');
    }



};


  export default setupUI;