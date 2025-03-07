// your function here

function changeTheme(nameofTheme) {
    const container = document.querySelector('body');
    let isDark = false;
    let name = nameofTheme;
    if (isDark) {
        name = "default";
    } 
    container.className = name;
 }

 const el = document.querySelector('.panel');
 if (el.style.background == 'hotpink') {
     document.querySelector('.panel').style.background = 'white';
 } else if (el.style.background !== 'hotpink'){
     document.querySelector('.panel').style.background = 'hotpink';
 }