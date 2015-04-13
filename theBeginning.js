var heavens = god('body',universe).add('<div class="#heaven"></div>');
var earth = god('body',universe).add('<div class="#earth"></div>');
godSays("Let there be light");
earth.light();
godSays("The light is good.");
earth.appendTo(god('body'));
god('#earth').data('tod','light');

