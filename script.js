const btnAlert = document.querySelector('.btn');


btnAlert.addEventListener('click', function(){
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'block';
    }, 100);

    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);
});


