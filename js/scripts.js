function pigLatin(words){
  console.log(words);
  words.forEach(function(character){
    var char = character.split("");
    console.log(char);
    var result;
    if (char.includes('a')){
      result = true;
    } else if (char.includes('e')){
      result = true;
    } else if (char.includes('i')){
      result = true;
    } else if (char.includes('o')){
      result = true;
    } else if (char.includes('u')){
      result = true;
    } else {
      result = false;
    }
    console.log(result);
  });
}
$(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    var originalInput = $("#original").val();
    var prepInput = originalInput.split(" ");
    var translatedInput = pigLatin(prepInput);
    console.log(translatedInput);
    console.log(prepInput);
    $(".translated").text(translatedInput);
  });
});
