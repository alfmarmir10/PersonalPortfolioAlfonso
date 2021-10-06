function scrollNavBar(){
    window.onscroll = function(){
        if(this.scrollY > 0){
            document.getElementsByTagName('header')[0].classList.add('sticky');
            document.querySelector('header ul').classList.add('sticky');
        } else {
            document.getElementsByTagName('header')[0].classList.remove('sticky');
            document.querySelector('header ul').classList.remove('sticky');
        }
    }
}