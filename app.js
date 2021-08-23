const { MongoClient, ObjectID } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const dbName = "wpu";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect((error, client) => {
  if (error) {
    return console.log("Koneksi gagal!");
  }

  // Pilih Database
  const db = client.db(dbName);

  // Menambahkan 1 Data ke Collection Mahasiswa
  // db.collection("mahasiswa").insertOne(
  //   {
  //     nama: "Ade Pranaya",
  //     email: "adepranaya@gmail.com"
  //   },
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Gagal menambahkan data!");
  //     }
  //     console.log(result);
  //   }
  // );

  // Menambahkan lebih dari 1 Data
  // db.collection("mahasiswa").insertMany(
  //   [
  //     {
  //       nama: "Ade Pranaya",
  //       email: "depran7@gmail.com"
  //     },
  //     {
  //       nama: "Hazar Hamzah",
  //       email: "hazar@gmail.com"
  //     }
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Data gagal ditambahkan!");
  //     }
  //     console.log(result);
  //   }
  // );

  // Menampilkan Semua data yang ada di collection mahasiswa
  // db.collection("mahasiswa")
  //   .find()
  //   .toArray((error, result) => {
  //     console.log(result);
  //   });

  // Menampilkan data berdasarkan kriteria yang ada di collection mahasiswa
  // db.collection("mahasiswa")
  //   .find({nama: 'Ade '})
  //   .toArray((error, result) => {
  //     console.log(result);
  //   });

  // Mengubah 1 data
  // const updatePromise = db.collection("mahasiswa").updateOne(
  //   {
  //     _id: ObjectID("6123b02cc18dc32374a9a9ab")
  //   },
  //   {
  //     $set: {
  //       nama: "Depran"
  //     }
  //   }
  // );

  // updatePromise
  //   .then(result => {
  //     console.log(result);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });

  // Mengubah Data lebih dari 1, berdasarkan kriteria
  // db.collection("mahasiswa").updateMany(
  //   {
  //     nama: "Depran"
  //   },
  //   {
  //     $set: {
  //       nama: "Ade Pranaya"
  //     }
  //   }
  // );

  // Menghapus 1 data
  // db.collection("mahasiswa")
  //   .deleteOne({
  //     _id: ObjectID("6123b02cc18dc32374a9a9ab")
  //   })
  //   .then(result => {
  //     console.log(result);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // Menghapus lebih dari 1 data
  db.collection("mahasiswa")
    .deleteMany({
      nama: 'uhuy'
    })
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
});
