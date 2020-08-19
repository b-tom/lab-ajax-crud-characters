const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    
    charactersAPI
      .getFullList()
      .then(responseFromApi => {
        let charactersContainer = document.querySelector('.characters-container');
        charactersContainer.innerHTML = '';

        responseFromApi.data.forEach( ele => {
          const {id, name, occupation, cartoon, weapon } = ele;
          charactersContainer.innerHTML += `<div class="character-info">
                                            <div class="name">ID: ${id}</div>
                                            <div class='name'>Name: ${name}</div>
                                            <div class='occupation'>Occupation: ${occupation}</div>
                                            <div class='cartoon'>Cartoon: ${cartoon}</div>
                                            <div class='weapon'>Weapon: ${weapon}</div>
                                            </div>`;
        })
      })
      .catch(err => console.log(err));
    
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const charID = document.querySelector('input[name=character-id]').value;
    
    charactersAPI
      .getOneRegister(charID)
      .then(responseFromApi =>{

        const { id, name, occupation, cartoon, weapon } = responseFromApi.data;

        let characterContainer = document.querySelector('.characters-container');
        characterContainer.innerHTML =+ '';

        characterContainer.innerHTML = `<div class="character-info">
                                        <div class="name">ID: ${id}</div>
                                        <div class='name'>Name: ${name}</div>
                                        <div class='occupation'>Occupation: ${occupation}</div>
                                        <div class='cartoon'>Cartoon: ${cartoon}</div>
                                        <div class='weapon'>Weapon: ${weapon}</div>
                                        </div>`;
      })
      .catch(err => console.log(err));
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    
    const charID = document.querySelector('input[name=character-id]').value;

    charactersAPI.deleteOneRegister(charID)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const characterId = document.getElementById('idEdit').value;
    const characterName = document.getElementById('nameEdit').value;
    const characterOccupation = document.getElementById('occupationEdit').value;
    const characterWeapon = document.getElementById('weaponEdit').value;
    const characterCartoon = document.getElementById('cartoonEdit').value;
  
    editedCharacter = {
      characterId,
      characterName,
      characterOccupation,
      characterWeapon,
      characterCartoon
    }

    charactersAPI.updateOneRegister(editedCharacter);

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('nameInput').value;
    const occupation = document.getElementById('occupationInput').value;
    const weapon = document.getElementById('weaponInput').value;
    const cartoon = document.getElementById('cartoonInput').value;

    const newCharacter = {
      name,
      occupation,
      weapon,
      cartoon
    };

    charactersAPI.createOneRegister(newCharacter);
  });
});
