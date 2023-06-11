const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/api/getall", (req, res) => {
    res.json({ message: "Api isteği yapıldı" });
});

app.listen(5000, () => console.log("Api uygulaması 5000 portunda çalışıyor"));


//npm i express
// npm i cors 
// node script.js

// cors :Web tarayıcıları, varsayılan olarak, bir kaynağın sadece aynı kökten (origin) gelen isteklere izin verir.
//  Başka bir kökten gelen istekler, tarayıcı tarafından engellenir.
//  Bu güvenlik önlemi, istemci tarafında çalışan JavaScript koduyla sunucu tarafındaki kaynaklar arasında etkileşimi sınırlar.

