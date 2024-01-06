function myFunction() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
  const main1 = document.querySelector('.main1');
  const main2 = document.querySelector('.main2');
  const main3 = document.querySelector('.main3')
  function myhello(){
    main1.style.display = "none";
    main2.style.display = "block";
  }

  function home(){
    main1.style.display = "block";
    main2.style.display = "none";
  }
  function product(){
    main1.style.display = "none";
    main2.style.display = "none"; 
    main3.style.display="block"
  }