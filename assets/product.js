$(document).ready(function() {
  // Makes highlightes products into slider
  /*navbar_height = document.querySelector('.navbar').offsetHeight;
  document.body.style.paddingTop = navbar_height + 'px';*/
  $('.product-image-slider').slick({
    arrows: false,
    slidesToShow: 1,
    fade: true,
    dots: true
  });
  if (individualVariantImages) {
    const id = $('#productSelect').find(':selected').data('title');
    if (id !== undefined) {
      $('.product-image-slider').slick('slickUnfilter').slick('slickFilter','.'+ id);
    }
  }
  //$('.product-image-slider').fadeTo("slow", 1);
  gsap.to(".product-image-slider", {opacity: "1", duration: 1});

  $('#previous-slide').click(function(e) {
    $('.product-image-slider').slick('slickPrev');
  });

  $('#next-slide').click(function(e) {
    $('.product-image-slider').slick('slickNext');
  });

  $('.slider-navigation-image').click(function(e) {
    e.preventDefault();
    const parent = $(this).parent();
    slideno = $(parent).index();
    $('.product-image-slider').slick('slickGoTo', slideno);
  });

  $('#AddToCart').click(function(e) {
    const productId = $('#productSelect').find(':selected').val();
    const qty = $('#Quantity').val();
    let formData = {
      'items': [{
        'id': productId,
        'quantity': qty,
        'properties': {}
      }]
    };

    $('.additional-sale-checkbox:checkbox:checked').each(function () {
      const id = $(this).val();
      const service = $(this).data('service');
      if (service) {
        const textInput = $(this).data('text-input');
        if (textInput) {
          formData['items'][0]['properties'][service] = textInput + " : " + $(this).data('price');
        } else {
          formData['items'][0]['properties'][service] = $(this).data('price');
        }
      }
      formData['items'].push({'id': id, 'quantity': 1});
    });

    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        window.location.href = '/cart';
        return response.json();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });

  $('.additional-sale-variant').on('change', function(){
    const id = $(this).val();
    $(this).parent().siblings('.additional-sale-checkbox').val(id);
  });

  $('.additional-sale-textInput').on('change', function(){
    const text = $(this).val();
    $(this).parent().siblings('.additional-sale-checkbox').attr("data-text-Input", text);
  });
});
$('.dropdown-btn').click(function () {
  $('i', this).toggleClass('bi-chevron-down').toggleClass('bi-chevron-up');
});
$('.floating-buy-btn a').click(function () {
  $(this).hide();
});