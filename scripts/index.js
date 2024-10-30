// @todo: Темплейт карточки
const placesList = document.querySelector('.places__list')
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card')
// @todo: DOM узлы
function createCard(cardData, handleDelete) {
    const cardElement = cardTemplate.cloneNode(true)
    const cardImage = cardElement.querySelector('.card__image')
    const cardTitle = cardElement.querySelector('.card__title')
    const deleteButton = cardElement.querySelector('.card__delete-button')
  
    cardImage.src = cardData.link
    cardImage.alt = cardData.name
    cardTitle.textContent = cardData.name
  
    deleteButton.addEventListener('click', () => handleDelete(cardElement))
  
    return cardElement
  }
// @todo: Функция создания карточки
function handleDelete(cardElement) {
    cardElement.remove()
  }
// @todo: Функция удаления карточки
function renderCards(cards) {
    cards.forEach((cardData) => {
      const cardElement = createCard(cardData, handleDelete)
      placesList.append(cardElement)
    })
  }
  
  renderCards(initialCards)
// @todo: Вывести карточки на страницу
