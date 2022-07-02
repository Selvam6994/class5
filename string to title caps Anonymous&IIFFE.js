//Anonymus Function
let titleCase=(function (str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
});
console.log(titleCase("guvi geek"));


//new
let titleCaps=("zen portal");
titleCaps=(function(){
    
    titleCaps = titleCaps.toLowerCase().split(' ');
  for (var i = 0; i < titleCaps.length; i++) {
    titleCaps[i] = titleCaps[i].charAt(0).toUpperCase() + titleCaps[i].slice(1); 
  }console.log(titleCaps)

return titleCaps}
)()
