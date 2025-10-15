 const btnside=document.querySelector('.berger-menu');
 const sidebar=document.querySelector('.sidebar');
 const containermen=document.querySelector('.container-menu2');

 btnside.addEventListener('click',function(){
    sidebar.classList.toggle('show');
    containermen.classList.toggle('showul');
 })