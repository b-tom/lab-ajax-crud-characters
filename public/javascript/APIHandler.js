class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios
      .get( `${this.BASE_URL}/characters`)
      .catch(err => console.log(err));
  }

  getOneRegister (id) {
    return axios
      .get( `${this.BASE_URL}/characters/${id}`)
      .catch(err => console.log(err));
  }

  createOneRegister (character) {
    axios
      .post(`${this.BASE_URL}/characters`,character)
      .then(() => {
        this.getFullList();
      })
      .catch(err => console.log(err));
  }

  updateOneRegister (updatedCharacter) {
    axios
      .put(`${this.BASE_URL}/characters/${updatedCharacter.id}`, updatedCharacter)
      .then(editedCharacter => {
        this.getOneRegister(editedCharacter.id);
      })
      .catch(err => console.log(err));
  }

  deleteOneRegister (id) {
   axios
    .delete(`${this.BASE_URL}/characters/${id}`)
    .then(() => {
      alert('character deleted');
      this.getFullList();
    })
    .catch((err) => console.log(err))
  };
}
