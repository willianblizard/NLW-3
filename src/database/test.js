const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat:"-27.2207249",
        lng:"-49.6463052",
        name: "Lar de crianças",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp : "9898459897",
        images: [
            "https://images.unsplash.com/photo-1585338927000-1c787b17eb5e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 12h até 20h",
        open_on_weekends: "0"
    })
    //consultar dados da tabela
    //const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    //console.log(selectedOrphanages)

    //consultar somente 1 orfanato, pelo ID
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    //console.log(orphanage)
    
    //remover dados da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id ='3'")) 

})