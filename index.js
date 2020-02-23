
var prod_list = [];

/*************************************/


function add_product() {
	var prod_item = $('#product').val();
	var item = prod_item.toLowerCase();
	var bin = ' <button class="delete_button" title="delete" data-item="'+ item+'"><i class="fas fa-trash-alt"></i></button>';

	if ($.inArray(item, prod_list) == -1) {
		prod_list.push(item);
		var category_item = $('#product_category').val();
		switch (category_item)
		{
			case 'fridge':
			$('#fridge_list').append($('<li>').append(item).append(bin));
			break;

			case 'condiments':
			$('#cond_list').append($('<li>').append(item).append(bin));
			break;

			case 'vegetables':
			$('#veg_list').append($('<li>').append(item).append(bin));
			break;

			case 'other':
			$('#other_list').append($('<li>').append(item).append(bin));
			break;

			default:
			$('#other_list').append($('<li>').append(item).append(bin));
		}
	}
	else {window.prompt('This item is already in the list')};

}

function clear_list() {
	prod_list = [];
	$('#list_item article ul').empty();
}

function delete_item() {
	var self = $(this);
	self.parent('ul li').remove();
	var product = self.attr('data-item');
	var index = $.inArray(product, prod_list);
	prod_list.splice(index,1);
}



/********************************************************************/

$(function() {
	$('#valid_product').on('click', add_product);
	$('#clear_list').on('click', clear_list);
});

$(document).on('click', '.delete_button', delete_item);