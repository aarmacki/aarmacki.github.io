
/*
 * All-or-nothing navigation.
 *
 * Show all navigation links if they fit.
 * Otherwise, move all links into the dropdown.
 */

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

function updateNav() {

  // Restore all links to the visible list.
  $hlinks.children().appendTo($vlinks);

  // Hide the dropdown while measuring.
  $btn.addClass('hidden').removeClass('close');
  $hlinks.addClass('hidden');

  // Determine whether all links fit.
  var availableSpace = $nav.width();
  var requiredSpace = $vlinks.width();

  if (requiredSpace > availableSpace) {

    // Move all five links into the dropdown.
    $vlinks.children().appendTo($hlinks);

    // Show the dropdown button.
    $btn.removeClass('hidden');
  }

  $btn.attr('count', $hlinks.children().length);
}

$(window).on('resize', function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();