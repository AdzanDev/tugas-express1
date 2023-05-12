import Express from "express";
var app = Express()

app.get('/biodata', (req, res) => {
   const name = req.query.name;
   const placeOfBirth = req.query.place;
   const dateOfBirth = req.query.date;
   const addres = req.query.addres;

   res.send({
      'Nama : ': name,
      'Tempat Lahir : ': placeOfBirth,
      'Tanggal Lahir : ': dateOfBirth,
      'Alamat : ': addres
   });
})

var server = app.listen(8000, (req, res) => {
   console.log("Server running in port 8000")
})