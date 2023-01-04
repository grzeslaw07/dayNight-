let isDark = false;

const switchModes = document.querySelector('.section__button--js')

switchModes.addEventListener('click',() => {
    if (isDark){
        document.documentElement.style.setProperty('--background-color','#ffff00');
        document.documentElement.style.setProperty('--text-color','#000');
        isDark = false;
    } else{
        document.documentElement.style.setProperty('--background-color','#000');
        document.documentElement.style.setProperty('--text-color','#ffff00');
        isDark = true;
    }
})