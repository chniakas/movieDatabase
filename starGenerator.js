function getStars(rateStars) {
    var stars = Math.round(rateStars);
    stars = stars / 2;
    var ratingStars = document.getElementsByTagName("span");
    for (let i=0; i<stars; i++){

        ratingStars[i].classList.remove('fa' ,'fa-star');
        ratingStars[i].classList.add('fa' ,'fa-star' ,'checked');
    }
}