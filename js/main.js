function consultaCep() {
    $(".barra-progresso").show();

    var cep  = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            console.log(response);

            var estado = response.uf;

            switch(estado){
                case 'AC':
                    estado = "Acre";
                break;
                case 'AL':
                    estado = "Alagoas";
                break;
                case 'AP':
                    estado = "Amapá";
                break;
                case 'AM':
                    estado = "Amazonas";
                break;
                case 'BA':
                    estado = "Bahia";
                break;
                case 'CE':
                    estado = "Ceará";
                break;
                case 'DF':
                    estado = "Distrito Federal";
                break;
                case 'ES':
                    estado = "Espirito Santo";
                break;
                case 'GO':
                    estado = "Goiás";
                break;
                case 'MA':
                    estado = "Maranhão";
                break;
                case 'MT':
                    estado = "Mato Grosso";
                break;
                case 'MS':
                    estado = "Mato Grosso do Sul";
                break;
                case 'MG':
                    estado = "Minas Gerais";
                break;
                case 'PA':
                    estado = "Pará";
                break;
                case 'PB':
                    estado = "Paraíba";
                break;
                case 'PR':
                    estado = "Paraná";
                break;
                case 'PE':
                    estado = "Pernambuco";
                break;
                case 'PI':
                    estado = "Piauí";
                break;
                case 'RJ':
                    estado = "Rio de Janeiro";
                break;
                case 'RN':
                    estado = "Rio Grande do Norte";
                break;
                case 'RS':
                    estado = "Rio Grande do Sul";
                break;
                case 'RO':
                    estado = "Rondônia";
                break;
                case 'RR':
                    estado = "Roraima";
                break;
                case 'SC':
                    estado = "Santa Catarina";
                break;
                case 'SP':
                    estado = "São Paulo";
                break;
                case 'SE':
                    estado = "Sergipe";
                break;
                case 'TO':
                    estado = "Tocantins";
                break;
            }

            setTimeout(function(){ 
                $(".cep").show();
                $(".barra-progresso").hide();
            }, 500);

            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#estado").html(estado);
            $("#titulo_cep").html("Dados da consulta do CEP: " + response.cep);

            // $("#logradouro").html(response.logradouro);
            // document.getElementById("logradouro").innerHTML = response.logradouro;
            // document.getElementById("bairro").innerHTML = response.bairro;
            // document.getElementById("localidade").innerHTML = response.localidade;
            // document.getElementById("estado").innerHTML = estado;
            
            
        }
    })
}