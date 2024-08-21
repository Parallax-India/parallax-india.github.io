    function showCategory(category, element) {
       
        var contents = document.getElementsByClassName('category-content');
        for (var i = 0; i < contents.length; i++) {
            contents[i].style.display = 'none'; 
        }

        document.getElementById(category).style.display = 'flex';

        var buttons = document.getElementsByClassName('category-btn');
        for (var j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove('active');
        }

        element.classList.add('active');
    }


