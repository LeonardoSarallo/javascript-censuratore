// CENSURATORE
//  - Il software riceve in input un lungo testo e una serie di parole
// da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un "badword index" calcolato come il numero di
// parole censurate su il numero di parole totali
var text = 'Nove saranno i membri della Compagnia dell\'Anello, e i Nove Viandanti si opporranno ai Nove Cavalieri che sono malvagi. Con te e con il tuo fido servo verrà Gandalf; questo sarà infatti il suo grande incarico, e forse la fine dei suoi travagli. Gli altri rappresenteranno i rimanenti popoli liberi della Terra: Elfi, Nani e Uomini.'

var censored = ['Gandalf', 'incarico', 'malvagi'];
var censoredword = 'xxx';

for (var i = 0; i < censored.length; i++)
{
  if (text.includes(censored[i]))
  text.replace(censored[i], censoredword)
}
console.log(text);
