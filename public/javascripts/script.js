
    let menuDisplay = document.querySelector('.menu-display');
    let pickTwoDisplay = document.querySelector('.pick-two-display');

    console.log(menuDisplay);
    console.log(pickTwoDisplay);


    pickTwoDisplay.addEventListener('click', addToOrder);
    menuDisplay.addEventListener('click', addToOrder);

    function addToOrder(e){
        if(e.target.classList.contains('add')) {
            let target = event.target;
            console.log(target);
            // to check if ObjectId is attatched... which it is NOT
            // console.log(req.params.id);

            let menuItem = target.parentNode;
            console.log(menuItem);

            var clone = menuItem.cloneNode(true);
            console.log(clone);
            
            console.log(menuItem.children);
        }
    }