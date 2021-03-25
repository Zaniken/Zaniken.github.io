//  <li class="active"><a href="index.html">Home</a></li>
//window.onload = function ()
//    {
var header = document.getElementById('mainHeader');
//    var footer = document.getElementById('footer');
var string = `
<div class="navbar">
  <ul class>
    <li><a href="index.html">Home/Bio</a></li>
  
    <li><a href="portfolio.html">Portfolio</a></li>
    <li><a href="photogallery.html">PhotoGallery</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="contact.html">Contact</a></li>
  <li><a href="guitarAbstraction.html">GuitarProject</a></li>
  </ul>
</div>`;
console.log(string)
header.innerHTML = string
    //  footer.innerHTML = "<small>This code is in the public domain</small>";
    //    }


/*

  <script src="scripts/headerfooter.js"></script>




    <div class="header">
      <h1>Zaniken Gurule</h1>
      <p></p>
    </div>
    <div id = "mainHeader">
    <div class="navbar">
    <script src="scripts/headerfooter.js"></script></div>
  </div>

    */