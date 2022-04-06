let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){

    evento.preventDefault()

    let estrato=document.getElementById("estrato").value
    

    let deuda=document.getElementById("deuda").value
    let total=deuda
    let descuento=0
    alert(estrato)
    switch(estrato){

        case '1':
            descuento=0.4
            total=deuda-(deuda*0.4)
            alert("Valor total del pago es"+total)
            break

        case "2":
            descuento=0.3
            total=deuda-(deuda*0.3)
            alert("Valor total del pago es"+total)
            break

        case '3':
            descuento=0.2
            total=deuda-(deuda*0.2)
            alert("Valor total del pago es"+total)
            break

        case '4':
            descuento=0
            total=deuda
            alert("Valor total del pago es"+total)
            break
            
        case '5':
            descuento=0
            total=deuda
            alert("Valor total del pago es"+total)
            break
            
        case '6':
            descuento=0
            total=deuda
            alert("Valor total del pago es"+total)
            break
        default:
            alert("no sabe no contesta")


    }




})