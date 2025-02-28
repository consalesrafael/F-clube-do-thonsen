function validaFaleConosco(){
    var nome = document.frmfaleconosco.txtnome.value.trim(); 
    var expRegNome = /^[A-Za-zÀ-ü]{3,}(\s[A-Za-zÀ-ü]{2,})+$/;

    if (!expRegNome.test(nome)) {
        alert("Preencha o campo Nome corretamente. Digite pelo menos um nome e sobrenome.");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }
    var fone = document.frmfaleconosco.txtfone.value;
    var expRegNome = new RegExp(/^(\(\d{2}\))\d{4,5}-\d{4}$/);
    if (!expRegNome.test(fone)) {
    alert("Preencha o campo Telefone corretamente.Exemplo (xx)xxxxx-xxxx");
    document.frmfaleconosco.txtfone.focus();
    return false;
}
//validar email
if (document.frmfaleconosco.txtemail.value == "") {
    alert("Prencha o campo Email.");
    document.frmfaleconosco.txtemail.focus();
    return false;
}
//valida escolha de doação
if (document.frmfaleconosco.escolha.value ==""){
    alert("Escolha se deseja doar ou não");
    document.frmfaleconosco.escolha.focus();
    return false
}

//valida valor da doação
if (document.frmfaleconosco.txtvalor.value ==""&& document.frmfaleconosco.escolha.value =="sim"){
    alert("Coloque pelo menos 1 real para doação");
    document.frmfaleconosco.txtvalor.focus();
    return false;
}
//valida comentario
if(document.frmfaleconosco.txtcomentario.value==""){
    alert("Coloque algum comentario, para nos ajudar");
    document.frmfaleconosco.txtcomentario.focus();
    return false;
}
}
//logica de aparecer ou sumir o campo de doaçao
document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("escolha");
    const campoValor = document.getElementById("campo-valor");

    select.addEventListener("change", function () {
        if (select.value === "sim") {
            campoValor.classList.remove("hidden"); 
        } else {
            campoValor.classList.add("hidden");
        }
    });
});
