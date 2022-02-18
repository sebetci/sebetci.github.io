(function() {
    const searchButton = document.getElementById("searchButton");
    const mybutton = document.getElementById("btn-back-to-top");

    searchButton.addEventListener("click", function(e) {
        $('#snipper').css("display", "block");

        setTimeout(function() {
            $('#snipper').css("display", "none");
            $('#searchButton').popover('hide');
        }, 5000);
    });

    $(function () {
      $('[data-toggle="popover"]').popover({ container: 'body' });
    });
})();

