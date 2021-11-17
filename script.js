(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var s in names) {
    var firstLetter =names[s].charAt(0).toLowerCase()
  if (firstLetter=="j") {
    byeSpeaker.speak(names[s])
  } else {
    helloSpeaker.speak(names[s])
  }
}
})();
