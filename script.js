const m1l0Facts = [
  "Pugs are not my whole life, but they make my life whole.",
  "A pug will always bring a smile to your face.",
  "Pugs are the perfect combination of wrinkles and cute.",
  "A house is not a home without a pug.",
  "Pugs are not just dogs, they're a lifestyle.",
  "Pugs have a way of stealing your heart and never giving it back.",
  "Pugs are like potato chips, you can't have just one.",
  "Pugs may be small, but their love is big.",
  "Woof-woof! - 🦮.",
  "Pugs are like little rays of sunshine.",
  "Pugs are the ultimate cuddle buddies.",
  "A pug's love is unconditional and forever.",
  "Pugs are proof that good things come in small packages.",
  "Pugs are not just pets, they're family.",
  "Pugs have a way of making everything better.",
  "A pug's eyes are the windows to their soul.",
  "Pugs are the epitome of cute and quirky.",
  "A pug's snorts and snores are music to my ears.",
  "Pugs are the perfect lap warmers on a chilly day.",
  "A pug's personality is as big as their heart.",
  "Pugs have a way of brightening even the darkest of days.",
  "Pugs are the perfect companion for lazy Sunday mornings.",
  "Pugs are like pillows with legs.",
  "A pug's face is the definition of pure joy.",
  "Pugs are the perfect example of small but mighty.",
  "A pug's loyalty knows no bounds.",
  "Pugs are always up for a good snuggle session.",
  "A pug's tail wag is the ultimate sign of happiness.",
  "Pugs are the ultimate stress relievers.",
  "A pug's love is the purest form of love there is.",
  "Pugs are the definition of adorable.",
];

const m1l0Image = document.getElementById("m1l0-image");
const m1l0Text = document.getElementById("m1l0-text");

m1l0Image.addEventListener("click", function () {
  const randomFact = m1l0Facts[Math.floor(Math.random() * m1l0Facts.length)];
  m1l0Text.textContent = randomFact;
});

m1l0Image.addEventListener("click", function () {
  m1l0Image.classList.toggle("spin");
});
