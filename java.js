
document.addEventListener('DOMContentLoaded', function() {


    function reveal() {

        const reveals = document.querySelectorAll('.card, footer h2, footer div, footer p');

        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
   
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150; 

     
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }

 
    document.querySelectorAll('.card').forEach(card => {
        card.classList.add('reveal');
    });

    window.addEventListener('scroll', reveal);

  
    reveal();

});
