
function getPokemonId() {
  var id = $("#idPokemon")[0].value;
  console.log(id);
  if (id !== "") {
    obtenerPokemonPorIdApi(id);
  } else {
    alert('El id está indefinido');
  }
}
function obtenerPokemonPorIdApi(id) {
  $.get('https://pokeapi.co/api/v2/pokemon/' + id, data => {
    console.log(data);
    $('#nombrePokemon')[0].innerHTML = data.name.toUpperCase();
    if (data.types.length > 1) {
      $('#types').html('');
      $('#types').append('<p id="tipoPokemon">'+data.types[0].type.name.toUpperCase()+'</p>')
      $('#types').append('<p id="tipoPokemon2">'+data.types[1].type.name.toUpperCase()+'</p>')
    }
    else{
      $('#types').html('');
      $('#types').append('<p id="tipoPokemon">'+data.types[0].type.name.toUpperCase()+'</p>')
    }
    $('#pokeImg')[0].src = data.sprites.front_default;
    $('#pokeImg').show();
    graficar(data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.stats[2].base_stat, data.stats[1].base_stat, data.stats[0].base_stat )
  });
}

function aleatorio(a,b) {

  return Math.round(Math.random()*(b-a)+parseInt(a));

}

function getPokemonId2() {
    var minimo = 0;
    var maximo = 800;
    var resultado = aleatorio(minimo,maximo)
    var id = resultado;
  console.log(id);
  if (id !== "") {
    obtenerPokemonPorIdApi(id);
  } else {
    alert('El id está indefinido');
  }
}
function obtenerPokemonPorIdApi(id) {
  $.get('https://pokeapi.co/api/v2/pokemon/' + id, data => {
    console.log(data);
    $('#nombrePokemon')[0].innerHTML = data.name.toUpperCase();
    if (data.types.length > 1) {
      $('#types').html('');
      $('#types').append('<p id="tipoPokemon">'+data.types[0].type.name.toUpperCase()+'</p>')
      $('#types').append('<p id="tipoPokemon2">'+data.types[1].type.name.toUpperCase()+'</p>')
    }
    else{
      $('#types').html('');
      $('#types').append('<p id="tipoPokemon">'+data.types[0].type.name.toUpperCase()+'</p>')
    }
    $('#pokeImg')[0].src = data.sprites.front_default;
    $('#pokeImg').show();
    graficar(data.stats[5].base_stat, data.stats[4].base_stat, data.stats[3].base_stat, data.stats[2].base_stat, data.stats[1].base_stat, data.stats[0].base_stat )
  });
}

function graficar(hp, atk, def, atksp, defsp, speed) {
  var chart = new CanvasJS.Chart("grafica", {
    animationEnabled: true,
    title: {
      text: "Stats"
    },
    axisX: {
      interval: 1
    },
    axisY: {
      title: "Stats",
      scaleBreaks: {
        type: "wavy",
        customBreaks: [{
          startValue: 150,
          endValue: 210
          },
          {
            startValue: 230,
            endValue: 600
          }
      ]}
    },
    data: [{
      type: "bar",
      toolTipContent: "{y} 'Points'",
      dataPoints: [
        { label: "HP", y: hp , url: "" },
        { label: "Atk", y: atk, url: "" },
        { label: "Def", y: def, url: ""},
        { label: "Atk Special", y: atksp, url: "" },
        { label: "Def Special", y: defsp, url: "" },
        { label: "Speed", y: speed, url: "" },
      ]
    }]
  });
  chart.render();
  
  }