import re

# Using readlines()
file1 = open("decisiontree-1.js", "r")
Lines = file1.readlines()

final_string = "chart_config = [config,"
count = 0
mylist = []
# Strips the newline character
for line in Lines:
    count += 1
    if re.match("\S+\s= {", line):
        # print(line)
        # print(line.replace(" = {", ","))
        mylist.append(line.replace(" = {", ""))
    # print("Line{}: {}".format(count, line.strip()))
# print("Line{}: {}".format(count, line.strip()))
final_string += ",".join(mylist)
final_string += "]"
print(final_string)
