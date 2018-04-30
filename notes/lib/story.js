"<h2>There once was a [adjective] programmer who wanted to use Javascript to [verb] the [noun].</h2>"

var adjective = prompt('please type an adjective');
var sentence = "<h2>There once was a " + adjective +' ';
var verb = prompt('please type verb');
var noun = prompt('pease type noun');
alert('all done');
sentence += 'programer who wanted to use JavaSrcipt to ' + verb;
sentence += ' the ' + noun + '.</h2>';
document.write(sentence);
