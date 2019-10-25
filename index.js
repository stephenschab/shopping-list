'use strict';

$(function() {

  $('form').submit(event => {

    event.preventDefault();

    let newItem = $(event.currentTarget).find('input[name = "shopping-list-entry"]').val();

    $('ul').prepend(`<li>
    <span class="shopping-item">${newItem}</span>
    <div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span>
    </button><button class="shopping-item-delete"><span class="button-label">delete</span></button>
    </div>
    </li>`);

    $('input[name="shopping-list-entry"]').val("");

  });

  $('ul').on('click', '.shopping-item-toggle', event => {

    $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

  });

  $('ul').on('click', '.shopping-item-delete', event => {

    $(event.currentTarget).closest('li').remove();

  });
  
});