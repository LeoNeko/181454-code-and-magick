// var Field = ('setup');
'use strict';

var WIZARD_COUNT = 4;
var wizards = [];

// Функция вывода случайного индекса массива.
// Принимает длинну массива
function randomNumber(length) {
  var min = 1;
  var max = length;

  return Math.floor((min + Math.random() * (max + 1 - min)) - 1);
}

// Функция отрисовки одного волшебника
// Принимает объект
function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}

// Заполненение массива объектами
function fillArrWizards(length) {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_FAMILES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

  for (var i = 0; i < length; i++) {
    wizards.push({
      name: WIZARD_NAMES[randomNumber(WIZARD_NAMES.length)] + WIZARD_FAMILES[randomNumber(WIZARD_FAMILES.length)],
      coatColor: WIZARD_COAT_COLOR[randomNumber(WIZARD_COAT_COLOR.length)],
      eyesColor: WIZARD_EYES_COLOR[randomNumber(WIZARD_EYES_COLOR.length)]
    });
  }

  return wizards;
}

// Находим элемент на странице
var userDialog = document.querySelector('.setup');
// Показываем элемент
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

fillArrWizards(WIZARD_COUNT);

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
