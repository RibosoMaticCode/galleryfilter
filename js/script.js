
showAll = function(){
    document.querySelectorAll(".image").forEach(image => {
        image.classList.add("show");
    });
}

showPhotos = function( action ){
    
    if( action == "all"){
        showAll();
    }else{
        document.querySelectorAll(".image").forEach(image => {
            image.classList.remove("show");

            if( image.getAttribute('data-type') == action){
                image.classList.add("show");
            }
        });
    }

}

document.querySelectorAll(".action").forEach(item => {
    item.addEventListener("click", event => {
        action = item.getAttribute('data-action');
        showPhotos( action );
    });
});