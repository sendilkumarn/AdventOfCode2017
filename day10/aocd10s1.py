out = "70,66,255,2,48,0,54,48,80,141,244,254,160,108,1,41"

shiftLen = out.split(",")

current = skip = 0
inputList = list(range(256))
size = len(inputList)
for shift in shiftLen:
    l = int(shift)
    for i in range(l // 2):
        start = (current + i) % size
        end = (current + l - 1 - i) % size
        inputList[start], inputList[end] = inputList[end], inputList[start]
    current += l + skip
    skip += 1
print(inputList[0]* inputList[1])
