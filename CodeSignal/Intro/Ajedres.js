let tablero = [
    ["T", "C", "A", "D", "R", "A", "C", "T"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["t", "c", "a", "d", "r", "a", "c", "t"],
  ];
  
  //console.log(tablero.join("\n") + "\n\n");
  
  // Adelantar dos posiciones el peón de rey
  //negras
  tablero[3][5] = tablero[1][5];
  tablero[1][5]=" ";
  
  //blancas
  tablero[4][5] = tablero[6][5];
  tablero[6][5] = " ";
  console.log(tablero.join("\n"));