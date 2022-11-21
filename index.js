function scuberGreetingForFeet(ride){
  let message
  if (ride <= 400) {
    return "This one is on me!"
  }
  else if (ride > 2000 && ride <= 2500) {
    return "I will gladly take your thirty bucks."
  }
  else if (ride > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(cityName){
  let city = (cityName = "NYC") ? "Ok, sounds good." : "No go.";
  return city;
}

function switchOnCharmFromTip(){
  let charm = "generous"
  let charmMessage;

  switch (charm) {
    case "generous":
      charmMessage = "Thank you so much."
      break;
    case "not as generous":
      charmMessage = "Thank you"
      break;
    case "thanks for everything":
      charmMessage = "Bye"
      break;
  }
}