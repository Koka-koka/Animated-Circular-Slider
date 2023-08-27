const imgBoxes = document.querySelectorAll('.slider__item');
const profiles = document.querySelectorAll('.content__box');

imgBoxes.forEach(function(box) {

    box.addEventListener('mousemove', function() {
        imgBoxes.forEach(function(box) {
            box.classList.remove("active");
        })

        this.classList.add('active');
        profiles.forEach(function(profile) {
            profile.classList.remove("active")
        })

        let contentId = this.dataset.id;
        let profile = document.getElementById(contentId);
        profile.classList.add('active');
    })
})