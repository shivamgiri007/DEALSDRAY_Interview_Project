const express = require('express');
   const fs = require('fs');
   const path = require('path');

   const app = express();
   const PORT = 5000;

   app.get('/api/employees', (req, res) => {
     fs.readFile(path.join(__dirname, 'employees.json'), 'utf8', (err, data) => {
       if (err) {
         res.status(500).send('Error reading data');
         return;
       }
       res.json(JSON.parse(data));
     });
   });

   app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);
   });