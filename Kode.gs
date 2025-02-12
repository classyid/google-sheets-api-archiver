function doGet(e) {
 const apiKey = "YOUR_API_KEY_HERE";
 
 if (!e.parameter.key || e.parameter.key !== apiKey) {
   return ContentService.createTextOutput(JSON.stringify({
     error: "Invalid API key"
   })).setMimeType(ContentService.MimeType.JSON);
 }

 const ss = SpreadsheetApp.openById("<ID-SPREADSHEET>");
 const sheet = ss.getSheetByName("Archives");
 const data = sheet.getDataRange().getValues();
 const headers = data[0];
 
 let jsonData = data.slice(1).map(row => {
   const item = {};
   headers.forEach((header, index) => {
     item[header] = row[index];
   });
   return item;
 });

 // Fungsi pencarian
 if (e.parameter.search) {
   const searchTerm = e.parameter.search.toLowerCase();
   jsonData = jsonData.filter(item => {
     return Object.values(item).some(value => 
       String(value).toLowerCase().includes(searchTerm)
     );
   });
 }

 return ContentService.createTextOutput(JSON.stringify({
   status: "success",
   data: jsonData
 })).setMimeType(ContentService.MimeType.JSON);
}
