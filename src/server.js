const proffys = [
    {
        name:"Andressa Carolina", 
        avatar: "https://avatars0.githubusercontent.com/u/65856686?s=460&u=5f5ec0973ec01602ab3ef673575c6e83a30d08dd&v=4",
        whatsapp:"62991295908", 
        bio:"Etusiasta das melhores tecnologias avançadas.Apaixonada por programação e por mudar a vida das pessoas através da Tecnologia. Mais de 200.000 pessoas já conheceram as minhas criações.", 
        subject: "Informatica",
        cust:" 20,00", 
        weckday:[
            2
        ], 
        time_from:[
            720
        ], 
        time_to: [
            1220
        ]
    },
    
    {
        name:"Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"6299999999", 
        bio:"Etusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject:"Química", 
        cust:" 20,00", 
        weckday:[
            1
        ], 
        time_from:[
            720
        ], 
        time_to: [
            1220
        ]
    },

    {
        name:"Mayk Brito", 
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp:"6299999999", 
        bio:"Etusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject:"Química", 
        cust:" 20,00", 
        weckday:[
            1
        ], 
        time_from:[
            720
        ], 
        time_to: [
            1220
        ]
    }

]

const subjects = [
"Artes",
"Biologia",
"Ciências",
"Educação física",
"Física",
"Geografia",
"História",
"Matemática",
"Português",
"Química",
]

const weckdays = [
    
"Domingo",
"Segunda-feira",
"Terça-feira",
"Quarta-feira",
"Quinta-feira",
"Sexta-feira",
"Sábado",
    
]
function getSubjects(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}
function pageLading(req, res){
    return res.render("index.html")
}

function study(req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weckdays})
}

function giveClasses(req, res){
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0

    if(isNotEmpty) {
        data.subject = getSubjects(data.subject)
        proffys.push(data)

        return res.redirect("/study")
    }
   
    return res.render("give-classes.html", {subjects, weckdays})
}

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache:true, 
})

server
.use(express.static("Public"))
.get("/", pageLading)
.get("/study", study)
.get("/give-classes", giveClasses)

.listen(5550)