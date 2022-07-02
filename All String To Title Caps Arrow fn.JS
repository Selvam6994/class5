let title_caps = str=> 
console.log(str.split(" ").map(words=>words[0].toUpperCase()+words.substr(1).toLowerCase()).join(" "));
title_caps("welcome to guvi");
