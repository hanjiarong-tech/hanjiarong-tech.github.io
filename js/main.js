window.onload = function() {
    galleryPhotoControl();
    //music();
}

function navSetting() {
    var nav = document.getElementsByClassName("nav")[0];
    var container = document.getElementsByClassName("container")[0];
    if(window.scrollY >= container.offsetTop){

        nav.style.backgroundColor = "rgba(255,255,255,0.4)";
        var btns = $(nav).find('a');
        btns.map(function(a){
            console.log($(a).text());
           $(a).css("color","#000");
        });

    }else{
        nav.style.backgroundColor = "";
    }
}

function emoji(){
    var heads = ["👋", "🍉", "🐝", "💥", "🌵", "🎈", "🐧", "👓", "💎", "🐞", "🐬", "🐈", "🌳", "👻", "🍟", "🍅", "🍐", "⚓", "️🏡", "🚷"];
    $(".emoji").text(heads[Math.floor(Math.random() * heads.length)]);
}


function galleryPhotoControl(){
    // console.log($("title").text().contains("Gallery"));
    if ($("title").text().indexOf("Gallery") === -1)
        return false;

    // var photos = _.sample(allPhotos, allPhotos.length);
    var photos = allPhotos.reverse();

    for ( var i = 0; i < photos.length; i++){

        var photoPath = "url(../images/photo/"+photos[i].name+".jpg)";
        var imgPath = "../images/photo/"+photos[i].name+".jpg";

        var photoBorder = document.createElement("a");
        photoBorder.setAttribute("href", imgPath);
        photoBorder.setAttribute("target", "_blank");
        if ( i % 3 === 2 ){
            photoBorder.className = "wrapper-square shadow no-mr";
        } else {
            photoBorder.className = "wrapper-square shadow";
        }

        var photo = document.createElement("div");


            //if ( imgs[i].height > imgs[i].width) {
            //    $(photo).addClass("photo photo-height");
            //
            //} else {
            //    $(photo).addClass("photo photo-width");
            //}

        photo.className = "photo";
        photo.style.backgroundImage = photoPath;
        photoBorder.appendChild(photo);

        var gallery = document.getElementsByClassName("gallery")[0];
        gallery.appendChild(photoBorder);
    }
}

function music(){
    var ttlogo = document.getElementsByClassName("bg logo")[0];
    $(ttlogo).hide();
}