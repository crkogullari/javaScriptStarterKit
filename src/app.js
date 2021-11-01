console.log("Merhaba Kodlama.io")

//javascript typesafe değildir. hatalı yazımda uyarmaz.
//değişken yazarken var kullanılır.
//tanımlanmayan değişkeni istediğimizde undifined hatası verir.
//değişken yazıp herhangi bir değere eşitlemediğimizde yine undifined hatası verir.
//değişken tanımlanırken var dan ziyade let ile tanımlanır. let keywordu bloklarla çalışmamıza olanak sağlar.
//const değişkeni sabit değer vermemizi sağlar. 
//birden fazla değişkeni aynı yerde tutmak için arraylerden yararlanırız.
//değişken tanımlamalarında camelCasing kullanılır.

let dolarBugun = 9.30
let dolarDun = 9.20
{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun =11.20
console.log(euroDun)

let konutKredileri = ["KONUT KREDİSİ","EMLAK KONUT KREDİSİ","KAMU KONUT KREDİSİ","YILDIRAY KREDİSİ"]
console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>");
}
console.log("</ul>")