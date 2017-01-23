$(document).ready(function() {
    var verticalOffset= $(window).height() - $(".navbar").outerHeight() - $("footer").outerHeight();
    $('#vertical').flexVerticalCenter('verticalOffset');

    $(window)
        .on("load", function() {
            var verticalOffset= $(window).height() - $("nav.navbar").outerHeight() - $("footer.nav").outerHeight();
            $('#vertical').flexVerticalCenter('verticalOffset');
            $(window);
        })
        .on("resize", function() {
            var verticalOffset= $(window).height() - $("nav.navbar").outerHeight() - $("footer.nav").outerHeight();
            $('#vertical').flexVerticalCenter('verticalOffset');
            $(window);
        });
  });