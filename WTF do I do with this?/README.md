## WTF do I do with this?

- An image of brain is given in a Forensics question.
- There's no way we don't run steghide on this.
```
steghide extract -sf brain.jpg
```
- We get a file hint.txt with a lot of sign-symbol things.
- In a crisis what this could be? Look through the hints.
- Ah well, maybe use a cipher identifier?
- Using [this](https://www.dcode.fr/cipher-identifier) gives us an idea about it being **Brainfuck**
- Decrypt it using any online brainfuck decoder.