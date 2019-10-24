'use strict';

$(function() {

  $('form').on(submit, event => {

    event.preventDefault();

    let input = $(event.currentTarget()).find('input[name = "shopping-list-entry"]');

    $('.shopping-list').append(`<li><span class="shopping-item">${input}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);

  });
  
});