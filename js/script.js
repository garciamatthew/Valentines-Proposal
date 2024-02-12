function confirmProposal() {
    var response = confirm("Will you be my Valentine?");
    
    if (response) {

        var gifContainer = document.createElement('div');
        gifContainer.classList.add('gif-container');

        var gif = document.createElement('img');
        gif.src = 'js/image/kiss.gif'; 
        gif.alt = 'Happy Valentine';

        gifContainer.appendChild(gif);

        document.body.appendChild(gifContainer);


        alert("Congratulations! You said Yes! Happy Valentine's Day!");

       
    } else {
        alert("It's okay. Thank you for considering. Happy Valentine's Day!");
    }
}
