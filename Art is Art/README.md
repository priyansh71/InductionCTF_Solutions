## Art is Art  
  
* Well not much to see here except these dull colored squares  
* We quickly fire up the Developer tool to inspect the page and get our first fake flag "BITSCTF{Not_so_easy}", cuz seriously its not that easy.
* Next scrolling a bit down we find what seems to be weird div names which look like the flag?
* The divs have peculiar class names, and they can only come from one other place, the css file!
* So go to the sources tab in the developer tools to find the CSS file named colors.css
* And sure enough you can see the suspicious css selectors containing the colors of the boxes
* But now what? The class selectors put together dont really give the correct flag
* Well the whole challenge screams colors, So with our focus still on colors, theres really only one thing left to check, the Color Hex Codes !
* Combine those color hex code and convert the hex string to ascii to uh, of course, get the flag
