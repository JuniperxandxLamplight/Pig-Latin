function pigLatin(words){
  console.log(words);
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  var currentWord;
  var wordIndex;
  var result;
  var newWord;
  var reorder = function(word){
    console.log(words);
    var wordIndexNumber = words.indexOf(wordIndex);
    console.log(words.indexOf('f'));
    console.log(wordIndexNumber);
    newWord =  words.slice(wordIndexNumber);
    console.log(newWord);
  }
  words.forEach(function(character){
    var char = character.split("");
    console.log(char);
    for (var i = 0; i < vowels.length; i++){
      console.log(vowels[i]);
        if (char.includes(vowels[i])){
          wordIndex = vowels[i];
          console.log(wordIndex);
          result = true;
          reorder(words);
          console.log(newWord);
      };
    };
  });
};
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
