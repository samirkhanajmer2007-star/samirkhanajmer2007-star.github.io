// 3D PHOTO MOVEMENT

const photoCard = document.querySelector(".photo-card");

document.addEventListener("mousemove", function(event) {

    if (!photoCard) return;

    const x = (window.innerWidth / 2 - event.clientX) / 40;
    const y = (window.innerHeight / 2 - event.clientY) / 40;

    photoCard.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});


// PROJECT BUTTON

function showMessage() {

    alert(
        "Project section coming soon.\n\n" +
        "More engineering projects will be added here."
    );

}