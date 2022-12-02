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