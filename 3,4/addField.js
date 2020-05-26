
 document.addEventListener( 'click', function ( el ) {

		if ( el.target && el.target.classList.contains( 'addBtn' ) ) {//если клик по нужной кнопке

      var fields= document.querySelector( '.myForm' ); //выбираем форму

      var element = document.querySelector( '.phoneN' ).cloneNode( true ); //клонируем образец нового поля

      element.classList.add( 'phone' ); //добаывляем нужный класс

      element.classList.remove( 'phoneN' );//убираем ненужный

      fields.appendChild( element ); //добавляемна страницу

      var button_add = document.querySelector( '.addBtn' ); //убираем кнопку,т.к в блоке гененрируется новая
      button_add.parentNode.removeChild(button_add);
		}
	} );
