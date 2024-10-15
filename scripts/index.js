import { initialCards } from './cards.js';



// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const profilePopup = document.querySelector('.popup_type_edit');

const cardPopup = document.querySelector('.popup_type_new-card');

const imagePopup = document.querySelector('.popup_type_image');
const popupImage = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');

imagePopup.classList.add('popup_is-animated');
cardPopup.classList.add('popup_is-animated');
profilePopup.classList.add('popup_is-animated');


const editProfileButton = document.querySelector('.profile__edit-button');
const closeProfilePopupButton = profilePopup.querySelector('.popup__close');
// @todo: Функция создания карточки
function createCard(name, img='#') {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    const cardTitle = card.querySelector('.card__title');
    const cardImage = card.querySelector('.card__image');
    const cardLikeButton = card.querySelector('.card__like-button');
    const cardDeleteButton = card.querySelector('.card__delete-button');


    cardTitle.textContent = name;
    cardImage.src = img;
    cardImage.alt = name;

    // лайк карточки
    cardLikeButton.addEventListener('click', (evt) => {
        evt.target.classList.toggle('card__like-button_is-active');
    });

    // удаление карточки
    cardDeleteButton.addEventListener('click', (evt) => {
        deleteCard(card);
    });

    cardImage.addEventListener('click', (evt) => {
        popupImage.src = img;
        popupCaption.textContent = name;
        openModal(imagePopup);
    });

    imagePopup.querySelector('.popup__close').addEventListener('click', () => {
        closeModal(imagePopup);
    });

    return card;
}
// @todo: Функция удаления карточки
function deleteCard(card) {
    card.remove();
}


// @todo: Вывести карточки на страницу
initialCards.forEach(card => {
    const cardElement = createCard(card.name, card.link);
    document.querySelector('.places__list').append(cardElement);
});

// открытие модального окна
function openModal(popup) {      
    popup.classList.add('popup_is-opened');
}

// закрытие модального окна
function closeModal(popup) {      
    popup.classList.remove('popup_is-opened');
}

// открытие модального окна для редактирования профиля
editProfileButton.addEventListener('click', () => {
    fillProfilePopupForm();
    openModal(profilePopup);
});

// закрытие модального окна для редактирования профиля
closeProfilePopupButton.addEventListener('click', () => {
    closeModal(profilePopup);
});

// заполнение полей формы для редактирования профиля
function fillProfilePopupForm(){
    const title = document.querySelector('.profile__title');
    const description = document.querySelector('.profile__description');

    const inputName = profilePopup.querySelector('.popup__input_type_name');
    const inputDescription = profilePopup.querySelector('.popup__input_type_description');

    inputName.value = title.textContent;
    inputDescription.value = description.textContent;
}

// форма для редактирования профиля
const profileFormElement = profilePopup.querySelector('.popup__form');

// обработка формы для редактирования профиля
profileFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const nameInput = profilePopup.querySelector('.popup__input_type_name');
    const jobInput = profilePopup.querySelector('.popup__input_type_description');

    document.querySelector('.profile__title').textContent = nameInput.value;
    document.querySelector('.profile__description').textContent = jobInput.value;
    closeModal(profilePopup);
});


const addImgButton = document.querySelector('.profile__add-button');
const closeCardPopupButton = cardPopup.querySelector('.popup__close');
addImgButton.addEventListener('click', () => {
    openModal(cardPopup);
});

closeCardPopupButton.addEventListener('click', () => {
    closeModal(cardPopup);
});

// форма для добавления карточки
const cardFormElement = cardPopup.querySelector('.popup__form');

// обработка формы для добавления карточки
cardFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const nameInput = cardPopup.querySelector('.popup__input_type_card-name');
    const urlInput = cardPopup.querySelector('.popup__input_type_url');

    const cardElement = createCard(nameInput.value, urlInput.value);
    document.querySelector('.places__list').prepend(cardElement);
    closeModal(cardPopup);
});

















// const nameInput = profilePopup.querySelector('.popup__input_type_name');
// const jobInput = profilePopup.querySelector('.popup__input_type_description');
// nameInput.addEventListener('input', (evt) => {
//     inputChangeName(nameInput);
// });

// jobInput.addEventListener('input', (evt) => {
//     inputChangeJob(jobInput);
// });

// function inputChangeName(nameInput){
//     document.querySelector('.profile__title').textContent = nameInput.value;
// }

// function inputChangeJob(jobInput){
//     document.querySelector('.profile__description').textContent = jobInput.value;
// }

