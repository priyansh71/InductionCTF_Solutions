# Bug Heist

**Challenge Statement:** Even after robbing the Bank of Spain and being OVERflowed with the money Professor is not enjoying his time. So he is planning a heist again and he wants your help to compromise the security system of the target facility. Fortunately, Rio installed a backdoor into the system earlier but that backdoor is encrypted with this binary file. Open this backdoor for him!

- The challenge was based on bufferoverflow. Hint was in the challenge statement.
- On running the .exe it asks for an input and if the input is incorrect it shows the time left after which the backdoor will be destroyed.
- So entering a large amount of input will break the .exe and it will create a file named "open_the_door.js". 
- This file contains various paranthesis and if you try to run the file with nodejs it will give the flag.
- This language is JSFUCK, we can also use <http://www.jsfuck.com/> to decode it. 


Checkout [this playlist](https://www.youtube.com/playlist?list=PLhixgUqwRTjxglIswKp9mpkfPNfHkzyeN) if you want to learn more about binary exploitation. 