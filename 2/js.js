
function createMatrixArray (rows,columns){ //динамически создаем матрицу.
  var arr = new Array();
  for(var i=0; i<rows; i++){
    arr[i] = new Array();
    for(var j=0; j<columns; j++){
          arr[i][j] = "";
    }
  }
  return arr;
}
function drawWhite (arr,className) { // отрисовка всей матрицы
  var out=" ";
  for (var i = 0; i< arr.length;i++){
    for (var j =0 ; j< arr[0].length;j++){
      out+=arr[i][j]+"O";
    }
  out+='<br>';
  }
document.querySelector('.white').innerHTML = out; //тут нужно было подставлять селектор класса,
}                                                //тогда можно было вызвать функцию 3 раза и передать
                                                //имя нужного класса,а не писать 3 функции
function drawBlue (arr) {
  var out=" ";
  for (var i = 0; i< arr.length;i++){
    for (var j =0 ; j< arr[0].length;j++){
      out+=arr[i][j]+"O";
    }
  out+='<br>';
  }
document.querySelector('.blue').innerHTML = out;
}

function drawRed (arr) {
  var out=" ";
  for (var i = 0; i< arr.length;i++){
    for (var j =0 ; j< arr[0].length;j++){
      out+=arr[i][j]+"O";
    }
  out+='<br>';
  }
document.querySelector('.red').innerHTML = out;
}

drawWhite(createMatrixArray(20,80))
drawBlue(createMatrixArray(20,80))
drawRed(createMatrixArray(20,80))
