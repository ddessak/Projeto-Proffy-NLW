const database = require('./db')
const createProffy = require('./createProffy')

database.then( async(db) => {

    proffyValue = {
        name: "Mayk Brito",
        avatar: 'https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
        whatsapp:'62999999999',
        bio: 'Instrutor de Educação Fisica'
    }
    classValue = {
        subject: "Informatica",
        cust: "20,00"
    }
    classScheduleValues = [
        {
            weckday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weckday: 0, 
            time_from: 520, 
            time_to: 1220
        }

    ]

    await createProffy(db, {proffyValue, classValue, classScheduleValues})

})