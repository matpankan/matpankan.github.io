function borgir() { //variabelen som sendes når man trykker på knappen
    let x = document.getElementById("burgermenu"); //henter informasjon fra id-en burgermeny, definerer den som x
    let s = document.getElementById("slogan");  //henter informasjon fra id-en slogan, definerer den som s
    if (x.style.display === "flex") { // hvis burgermeny sitt display er flex, altså at det er en flexboks, altså at den er synelig
      x.style.display = "none";//gjør x usynelig
      s.style.display = "flex";//og s synlig
      s.style.justifyContent = "center";//denne og de to under; justerer all tekst til å stå på midten, ettersom det ble nullstilt tidligere, av en eller annen grunn
      s.style.alignItems = "center";
      s.style.textAlign = "center";
    } else {//hvis x!=flex, altså hvis x er usynlig
      x.style.display = "flex";//gjør x synlig
      x.style.justifyContent = "center";//denne og de to under; justerer all tekst til å stå på midten, ettersom det ble nullstilt tidligere, av en eller annen grunn
      x.style.alignItems = "center";
      x.style.textAlign = "center";
      s.style.display = "none";//gjør s usynlig
    }
  }


  function ben(){
    let a = document.getElementById("tekst1");
    let b = document.getElementById("tekst2");
    let c = document.getElementById("tekst3");
    let d = document.getElementById("tekst4");
  
    if (a.style.display === "flex") {
      a.style.display = "none";//gjør x usynelig
    }
    else {
        a.style.display = "flex";//gjør x synlig
        a.style.justifyContent = "center";//denne og de to under; justerer all tekst til å stå på midten, ettersom det ble nullstilt tidligere, av en eller annen grunn
        a.style.alignItems = "center";
        a.style.textAlign = "center";
        a.style.textAlign = "center";
        b.style.display = "none";//gjør s usynlig
        c.style.display = "none";//gjør s usynlig
        d.style.display = "none";//gjør s usynlig
    }
  }
  
  function bto(){
    let a = document.getElementById("tekst1");
    let b = document.getElementById("tekst2");
    let c = document.getElementById("tekst3");
    let d = document.getElementById("tekst4");
  
    if (b.style.display === "flex") {
      b.style.display = "none";//gjør x usynelig
    }
    else {
        b.style.display = "flex";//gjør x synlig
        b.style.justifyContent = "center";//denne og de to under; justerer all tekst til å stå på midten, ettersom det ble nullstilt tidligere, av en eller annen grunn
        b.style.alignItems = "center";
        b.style.textAlign = "center";
        b.style.textAlign = "center";
        a.style.display = "none";//gjør s usynlig
        c.style.display = "none";//gjør s usynlig
        d.style.display = "none";//gjør s usynlig
    }
  }
  
  function btre(){
    let a = document.getElementById("tekst1");
    let b = document.getElementById("tekst2");
    let c = document.getElementById("tekst3");
    let d = document.getElementById("tekst4");
  
    if (c.style.display === "flex") {
      c.style.display = "none";//gjør x usynelig
    }
    else {
        c.style.display = "flex";//gjør x synlig
        c.style.justifyContent = "center";//denne og de to under; justerer all tekst til å stå på midten, ettersom det ble nullstilt tidligere, av en eller annen grunn
        c.style.alignItems = "center";
        c.style.textAlign = "center";
        c.style.textAlign = "center";
        b.style.display = "none";//gjør s usynlig
        a.style.display = "none";//gjør s usynlig
        d.style.display = "none";//gjør s usynlig
    }
  }
  
  function bfire(){
    let a = document.getElementById("tekst1");
    let b = document.getElementById("tekst2");
    let c = document.getElementById("tekst3");
    let d = document.getElementById("tekst4");
  
    if (d.style.display === "flex") {
      d.style.display = "none";//gjør x usynelig
    }
    else {
        d.style.display = "flex";//gjør x synlig
        d.style.justifyContent = "center";//denne og de to under; justerer all tekst til å stå på midten, ettersom det ble nullstilt tidligere, av en eller annen grunn
        d.style.alignItems = "center";
        d.style.textAlign = "center";
        d.style.textAlign = "center";
        b.style.display = "none";//gjør s usynlig
        c.style.display = "none";//gjør s usynlig
        a.style.display = "none";//gjør s usynlig
    }
  }
