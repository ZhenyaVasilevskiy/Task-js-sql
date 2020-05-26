1.
function Sortir(arr, sorttype){     //принимает 2аргумента, тип сортировки
    if(sorttype==="increase"){   //передаем в формате строки. Сортировка обычным позурьком.
      for (var i = 0; i < arr.length-1; i++)
       {for (var j = 0; j < arr.length-i; j++)
          { if (arr[j+1] < arr[j])
             { var t = arr[j+1];
               arr[j+1] = arr[j];
               arr[j] = t;
             }
          }
       }
      return arr;
      }
    else if(sorttype==="decrease"){
       for (var i = 0; i < arr.length-1; i++)
        {for (var j = 0; j < arr.length-i; j++)
           { if (arr[j+1] > arr[j])
              { var t = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = t;
              }
           }
        }
      return arr;
      }
     else return -1 //возврат ошибки если тип указан неверно.

}
//можно реализовать тоже самое оиспользуя метод .sort и компаратор

function compareSort(arr, sorttype){
    if(sorttype==="increase"){
        arr.sort(function(a,b){ return a - b})
        return arr
      }
    else if(sorttype==="decrease"){
       arr.sort(function(a,b){ return b - a})
       return arr
     }
    else return -1 //возврат ошибки если тип указан неверно.
}
