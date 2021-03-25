
//Of note you must adjust the I counter per photos added :/



        var gal = document.getElementById('photogallery');

        for(var i =1; i <5; i++){


          var fig = document.createElement("figure");
          var pic = document.createElement("img");
          pic.setAttribute('src',"images/photogal/"+i+".jpg");
          fig.appendChild(pic)
          gal.appendChild(fig)
        }
/*
      <figure>
        <img src="images/tuktuk.jpg">
        <figcaption>
          Thailand TukTuk
        </figcaption>
    </figure>
*/
    
