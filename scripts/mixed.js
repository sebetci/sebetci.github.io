$( document ).ready(function() {
  /**
   * @brief Settings to use in Toastr notifications
   */
  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

  /**
   * @brief Procedures to be called when the click event of the "Search" button is fired.
   */
  $('#searchButton').on('click', function (e) {
    $('#snipper').css("display", "block");

    setTimeout(function () {
      $('#snipper').css("display", "none");
      $('#searchButton').popover('hide');
    }, 5000);
  });

  /**
   * @brief Anonymous method used for popover settings.
   */
  $(function () {
    $('[data-toggle="popover"]').popover({ container: 'body' });
  });

  /**
   * @brief Animation to be performed when clicking <a> items in the navigation menu
   */
  $('.nav-link').on('click', function (event) {
    $('#snipper2').css("display", "block");

    setTimeout(function () {
      $('.nav-link').popover('hide');
      $('#snipper2').css("display", "none");
    }, 5000);
  });

  /**
   * @brief Notification to be shown when clicking the "Home" button in the navigayion menu
   */
  $('#home-page').click(function (event) {
    toastr["success"]('You are already on the current page.', "Notifying");
  });

  /**
   * @brief Notifications to be shown when clicking other <a> items in the navigation menu
   */
  $('#project-page, #experience-page, #research-page, #about-page, #blog-page').click(function (event) {
    toastr["error"]('This page is not yet available. Please try again later.', "Warning");
  });

  /**
   * @brief Notification message to be shown when clicking the profile picture
   */
  $('#profile-image').click(function (event) {
    toastr["info"]('Mechatronic Engineer', "Sercan Sebetçi");
  });
});
