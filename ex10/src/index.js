function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      artist: "Sako Polumenta",
      title: "Dodji da me ljubis",
      release_year: 1823,
      id: 2,
      formats: {
        1: "DDC",
        2: "DVD",
        3: "SBC399",
      },
      gold: false,
    },
  };
  return myMusic;
}

myFunction()[2];
module.exports = myFunction;
