// importar a dependencia do sqlit3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto de banco de dados 
const db = new sqlite3.Database("./src/database/database.db")

// uitlizar o objeto de banco de dados, para nossas operaçoes 
db.serialize(() => {
    // crair uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)


    // insedir dados na tabela
    const query = `
            INSERT INTO places (
                image,
                name,
                address,
                address2,
                state,
                city,
                items
            ) VALUES (?,?,?,?,?,?,?);
        `
    const values = [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
        "Colectoria",
        "Guilherme Gemballa, Jardin America",
        "Nº 260",
        "Santa Catarina",
        "Rio do Sul",
        "Residuos Eletronicos, Lampadas"
    ]

    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }

      console.log("Cadastrado com sucesso ")
      console.log(this)
    }

    //db.run(query, values, afterInsertData)
        

    // consultar dados da tabela
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros: ")
        console.log(rows)

    })
   



    // deletar dados na tabela
})