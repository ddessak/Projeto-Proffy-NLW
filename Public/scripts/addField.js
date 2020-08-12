document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField(){
    const newFieldConteiner  = document.querySelector(".schendule-item").cloneNode(true)
    const fields = newFieldConteiner.querySelectorAll("input")

    fields.forEach(function(fields){

        fields.value=""
    }
    )

    document.querySelector("#schendule-item")
    .appendChild(newFieldConteiner )
}