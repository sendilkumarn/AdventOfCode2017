out = "70,66,255,2,48,0,54,48,80,141,244,254,160,108,1,41"

shiftLen = [ord(x) for x in out] + [17, 31, 73, 47, 23]

current = skip = 0
inputList = list(range(256))
size = len(inputList)
for _ in range(64):
    for shift in shiftLen:
        l = int(shift)
        for i in range(l // 2):
            start = (current + i) % size
            end = (current + l - 1 - i) % size
            inputList[start], inputList[end] = inputList[end], inputList[start]
        current += l + skip
        skip += 1

hashstr = ""
for i in range(len(inputList) // 16):
    num = 0
    for j in range(16):
        num ^= inputList[i * 16 + j]
    hashstr += hex(num)[2:].zfill(2)

print(hashstr)
