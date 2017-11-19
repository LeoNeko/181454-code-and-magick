'use strict';


var searchMaxElement = function (arr) {
  var index = {
    max: -1,
    maxIndex: -1
  };

  for (var i = 0; i < arr.length; i++) {
    var time = arr[i];
    if (time > index.max) {
      index.max = time;
      index.maxIndex = i;
    }
  }

  return index;
};

var randomColor = function () {
  var max = 1;
  var min = 7;
  var win = -1;

  var color = ['rgba(220, 20, 60, 1.0)', 'rgba(255, 105, 180, 1.0)', 'rgba(255, 69, 0, 1.0)', 'rgba(0, 139, 139, 1.0)', 'rgba(255, 0, 255, 1.0)', 'rgba(72, 61, 139, 1.0)', 'rgba(112, 128, 144, 1.0)'];
  win = Math.floor(Math.random() * (max - min + 1)) + min;
  return color[win];
};

var fillStatRating = function (arr, names, step, ctx) {
  for (var i = 0; i < arr.length; i++) {
    var barHeigth = 40;
    var indent = 50;
    var initialX = 200;
    var initialY = 250;

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(initialX + indent * i, initialY, barHeigth, -arr[i] * step);
      ctx.fillText(names[i], initialX + indent * i, initialY + 20);
    } else {
      ctx.fillStyle = randomColor();
      ctx.fillRect(initialX + indent * i, initialY, barHeigth, -arr[i] * step);
      ctx.fillText(names[i], initialX + indent * i, initialY + 20);
    }
  }
};

window.renderStatistics = function (ctx, names, times) {

  var index = searchMaxElement(times);
  var histogramWidth = 150;
  var step = histogramWidth / (index.max - 0);

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; // white;
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; // white;
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000'; // black;
  ctx.font = '14px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);

  ctx.fillText('Худшее время: ' + index.max.toFixed(2) + 'мс у игрока ' + names[index.maxIndex], 120, 60);

  fillStatRating(times, names, step, ctx);
  /*
  for (var i = 0; i < times.length; i++) {
    var barHeigth = 40;
    var indent = 50;
    var initialX = 200;
    var initialY = 250;

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(initialX + indent * i, initialY, barHeigth, -times[i] * step);
      ctx.fillText(names[i], initialX + indent * i, initialY + 20);
    } else {
      ctx.fillStyle = randomColor();
      ctx.fillRect(initialX + indent * i, initialY, barHeigth, -times[i] * step);
      ctx.fillText(names[i], initialX + indent * i, initialY + 20);
    }
  }*/
};
