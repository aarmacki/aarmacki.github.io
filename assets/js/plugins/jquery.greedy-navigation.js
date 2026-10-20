
/*
 * All-or-nothing navigation
 *
 * Always keep the site title visible.
 * Show all five page links if they fit.
 * Otherwise, place all five in the dropdown.
 */

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

function updateNav() {

  // Restore all page links to their original positions.
  // The first item is the clickable site title.
  $hlinks.children().appendTo($vlinks);

  // Reset the dropdown before measuring available space.
  $btn.addClass('hidden').removeClass('close');
  $hlinks.addClass('hidden');

  // Measure the space needed for the complete navigation.
  var availableSpace = $nav.width();
  var requiredSpace = $vlinks.width();

  if (requiredSpace > availableSpace) {

    // Preserve the first item (site title).
    // Move all five page links into the dropdown.
    $vlinks.children().not(':first').appendTo($hlinks);

    // Display the dropdown button.
    $btn.removeClass('hidden');
  }

  // Update the dropdown counter.
  $btn.attr('count', $hlinks.children().length);
}

// Recalculate when the browser window changes width.
$(window).on('resize', function() {
  updateNav();
});

// Toggle the dropdown.
$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

// Initialize navigation.
updateNav();
