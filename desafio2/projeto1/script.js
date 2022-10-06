window.onload = function(){
    
    const CEP = document.querySelector('#cep')
    const rua = document.querySelector('#logradouro')
    const bairro = document.querySelector('#bairro')
    const cidade = document.querySelector('#localidade')
    const estado = document.querySelector('#uf')
    const btn = document.querySelector('#search')

    console.log(CEP.value)

    let json = async function(cep){

        let url = `https://viacep.com.br/ws/${cep}/json/`
        
        let dadosCep = await fetch(url);
        let dadosJson = await dadosCep.json();
        console.log(url)
        console.log(dadosJson)
        try{
        CEP.value = dadosJson['cep']
        rua.value = dadosJson['logradouro']
        bairro.value = dadosJson['bairro']
        cidade.value = dadosJson['localidade']
        estado.value = dadosJson['uf'] 
        }
        catch(error){
            alert('Houve um erro, tente novamente'+' :'+error)
        }
    }

    btn.addEventListener('click', function(){
        json(CEP.value)
    })
}
// window.onload = function(){

//     function resultadoCep(dadosCep){
//         for(let campo in dadosCep){
//             if(document.querySelector(`#${campo}`)){
//                 document.querySelector(`#${campo}`).value = dadosCep[campo];
//             }
//         }
//     }

//     let dadosCep = async function(cep){

//         let url = `http://viacep.com.br/ws/${cep}/json/`
//         try{
//             let dadosFetch = await fetch(url);
//             let dadosJson = await dadosFetch.json();
//             resultadoCep(dadosJson);
//         }catch(error){
//             alert(error);
//         }
        
//     }

//     const btnBuscar = document.querySelector("#buscarCep");
//     const CEP = document.querySelector("#NumeroCep");

//     btnBuscar.addEventListener('click', function(){
//         dadosCep(CEP.value);
//     })
// }