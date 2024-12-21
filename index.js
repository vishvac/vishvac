const funFacts = [
    "Dogs have a sense of smell that's 40 times stronger than humans.",
    "Cats spend 70% of their lives sleeping.",
    "Some parrots can live over 80 years!",
    "Goldfish have a memory span of at least three months.",
    "Rabbits' teeth never stop growing.",
  ];
  
  
  function showFunFact() {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById("fact").textContent = randomFact;
  }
