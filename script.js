// Função para converter uma data do calendário Gregoriano para o calendário fixo internacional
// Autor: Victor Hugo Morais Avancini

function converterParaCalendarioDe13Meses(dia, mes, ano) {
    // Calcula se o ano informado no calendário Gregoriano é um ano bissexto
    const isBissexto = (ano % 4 == 0);

    // Dias em cada mês no calendário Gregoriano
    let diasMesGregoriano = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(isBissexto){
        diasMesGregoriano[1] = 29;
    }

    // Nomes dos meses no calendário Gregoriano
    const mesesCalendarioGregoriano = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio','Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    // Nomes dos meses no calendário de 13 meses
    const mesesCalendarioFixoInternacional = [
        'Auroran', 'Borean', 'Coronian', 'Driadan', 'Electran','Faian', 'Gaian', 'Hermetian', 'Irisian', 'Kaosian', 'Lunan', 'Maian', 'Nixian'
    ];

    // Verifica a data de entrada digitada e formata ela para efetuar os calculos necessários

    if(typeof(mes) === 'string'){
        for(let i = 0; i < mesesCalendarioGregoriano.length; i++){
            if(mes.toUpperCase() == mesesCalendarioGregoriano[i].toUpperCase()){
                mes = (i + 1).toFixed();
            }
        }
    }
    if(dia.length == 1){
        dia = '0'+ dia;
    }
    if(dia > 31 || mes > 12){
        alert('Data digitada incorretamente');
        return;
    }
    if(dia == 29 && mes == 2 && !isBissexto){
        alert(`${ano} não é um ano bissexto`);
        return;
    }
    if(mes.length == 1){
        mes = '0' + mes;
    }
    if(dia == 31 && mes == 12){
        alert('Achronian (Dia do ano)');
        return;
    }
    if(dia == 17 && mes == 6 && isBissexto){
        alert('Dia bissexto');
        return;
    }

    // Calcula o enésimo dia do ano no calendário Gregoriano
    let diaGregoriano = parseInt(dia);
    for(let i = 1; i < mes; i++){
        diaGregoriano = diaGregoriano + parseInt(diasMesGregoriano[i-1]);
    }

    // Transforma para data do calendário fixo internacional
    let diaInternacional = diaGregoriano % 28
    if(diaInternacional === 0){
        diaInternacional = '28';
    }
    let mesInternacional = (diaGregoriano) / 28;
    mesInternacional = Math.ceil(mesInternacional);

    // Correção para anos bissextos
    if(isBissexto && diaGregoriano > 17 && mesInternacional >= 7){
        diaInternacional = diaInternacional - 1;
        if(diaInternacional === 0){
            diaInternacional = '28';
            mesInternacional = mesInternacional - 1;
        }
    }

    // Formata os valores para imprimir a data no calendário fixo internacional
    let mesCalendarioFixoInternacional = mesesCalendarioFixoInternacional[mesInternacional - 1];
    if(diaInternacional.toString().length == 1){
        diaInternacional = '0'+ diaInternacional;
    }

    alert(`A data Gregoriana corresponde no calendário fixo internacional ao dia: ${diaInternacional}/${mesCalendarioFixoInternacional}/${ano} ou ${diaInternacional}/${mesInternacional}/${ano}`)
    console.log(`${diaInternacional}/${mesCalendarioFixoInternacional}/${ano} ou ${diaInternacional}/${mesInternacional}/${ano}`);
  }

converterParaCalendarioDe13Meses(prompt('Digite o dia:'),prompt('Digite o mês:'),prompt('Digite o ano'));