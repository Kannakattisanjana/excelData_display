# excelData_display


* To Add or modify excel data

1. move to conversion_excel_json directory 

    cd conversion_excel_json

2. Then run the code

    python apiforexcel.py

3. Enter the file name

    Example [testing_data.xlsx]

4. You will get data in the browser so copy paste the address dispalyed 

    Example [http://0.0.0.1:2/]

5. After pasting the address in the search bar add /filedata in the last
   
   Example [http://0.0.0.1:2/filedata]

6. you can see the Json data displayed on the web page.



* To run the react application which displays the table content on the web page.

1. Install the application.

    npm install

2. Then move to src/App.js file to edit the address of the json file.

    vi src/App.js

3. In the line 14 replace that with your above address 
    
    Example "[http://0.0.0.1:2/filedata]"

4. Then save the data.

5. Reload the page you will see the required result.
