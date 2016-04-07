(function ($, undefined) {
  var roleList = ["food", "medicine", "materials", ""]

  function rollRole() {
    roleList.push(roleList.shift())

    $('#role').fadeOut(function () {
      $(this).text(roleList[0]).fadeIn()
    })
  }

  // Rotate title, etc.
  setInterval(rollRole, 5000);
})(jQuery);