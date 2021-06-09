$('.qty-input').on('change', function(){
  var prev = $(this).data('val');
  var current = $(this).val();
  setTimeout(function() {
    if (prev !== current){
      console.log("Alloooo");
      $( "#cart_update" ).trigger( "click" );
    }
  }, 500);
});

$('.qty-plus').click(function () {
  const id = $(this).data('qty');
  const input = $(this).parent().siblings('input');
  const qty = parseInt(input.val().replace(/\D/g, ''));
  input.val(qty + 1);
  input.trigger("change");
});
$('.qty-minus').click(function () {
  const id = $(this).data('qty');
  const input = $(this).parent().siblings('input');
  const qty = parseInt(input.val().replace(/\D/g, ''));
  if (qty > 0) {
    input.val(qty - 1);
  }
  input.trigger("change");
});