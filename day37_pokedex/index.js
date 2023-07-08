const main = document.querySelector('.main');
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};

async function getPokemon(id) {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  let pokemon = await fetch(url);
  pokemon = await pokemon.json();
  console.log(pokemon);
  return pokemon;
}

function createPokemon(pokemon) {
  let type = pokemon.types[0].type.name;
  let name = pokemon.name;
  let id = pokemon.id.toString().padStart(3, 0);
  let imgUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;
  let card = document.createElement('div');
  card.style.backgroundColor = `${colors[type]}`;
  card.classList.add('card');
  card.innerHTML = `<div class="avatar">
  <img
    src=${imgUrl}
  />
</div>
<div class="poke-id">#${id}</div>
<div class="name">${name}</div>
<div class="type">Type:${type}</div>`;
  main.appendChild(card);
}

function init() {
  for (let index = 1; index < 50; index++) {
    getPokemon(index).then(async (pokemon) => {
      createPokemon(pokemon);
      await delay(1000);
    });
  }
}

init();

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
