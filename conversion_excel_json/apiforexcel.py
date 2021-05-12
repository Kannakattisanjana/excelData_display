from flask import Flask
import xlrd
from collections import OrderedDict
import json
import ast

app = Flask(__name__)
fileName = input("enter the file name")

@app.route("/filedata/")
def datafiles():
	wb = xlrd.open_workbook(fileName)
	sh = wb.sheet_by_index(0)

	data_list = []

	for rownum in range(1, sh.nrows):
		data = OrderedDict()
		row_values = sh.row_values(rownum)
		data['Fund_Name'] = row_values[0]
		data['Ratings'] = row_values[1]
		data['RatingDEA'] = row_values[2]
		data_list.append(data)

	with open("data.json", "w", encoding="utf-8") as writeJsonfile:
		json.dump(data_list, writeJsonfile, indent=4,default=str)
	
	adata = json.dumps(data_list)
	return adata
	
if __name__ == "__main__":
	app.run()

