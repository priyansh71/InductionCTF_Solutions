from pwn import xor
from Crypto.Util.number import long_to_bytes

P = 16787
G = 2
hexstring = "6026763c613b64141507121c1130495c5b1c7d18111d1130521d115815167d18115b4912"

# a and b are private keys of Alice and Bob
for a in range(10):
    for b in range(10):
        x = pow(G,a,P)
        keyInt = int(pow(x,b,P))
        hexstringInBytes = bytearray.fromhex(hexstring)
        key = long_to_bytes(keyInt)
        try: 
            flag = xor(key,hexstringInBytes).decode()
            ifFlag = flag[:8] == "BITSCTF{"
            if ifFlag :
                print(flag)
                break
        except:
            continue