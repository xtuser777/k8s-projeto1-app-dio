$("#button-blue").on("click", () => {
    
    const txt_nome = $("#name").val();
    const txt_email = $("#email").val();
    const txt_comentario = $("#comment").val();

    $.ajax({
        url: "http://10.97.165.33",
        
        type: "post",
        data: {nome: txt_nome, comentario: txt_comentario, email: txt_email},
        beforeSend: () => {
        
            console.log("Tentando enviar os dados....");

        }
    }).done((e) => {
        alert("Dados Salvos");
    })

});