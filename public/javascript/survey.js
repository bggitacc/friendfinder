// Event Listener Avatars
$('.chr').on("click", function(res) {
    var linkUrl = $(this).attr('src');

    $('#photo').attr("value", linkUrl);
});
// Slider Update Function
function outputUpdate(res, q) {
    document.querySelector('#slideVal' + q).value = res;
    $('#fader' + q).attr("value", res);
}


// Capture the form inputs
$("#submit").on("click", function() {
    // Form validation
    function validateForm() {
        var isValid = true;
        $('.form-control').each(function() {
            if ($(this).val() === '')
                isValid = false;
        });
        $('.chosen-select').each(function() {
            if ($(this).val() === "")
                isValid = false
        })
        return isValid;
    }
    // If all required fields are filled
    if (validateForm() == true) {
        // Create an object for the user's data
        var userData = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [$("#fader1").val(), $("#fader2").val(), $("#fader3").val(), $("#fader4").val(), $("#fader5").val(), $("#fader6").val(), $("#fader7").val(), $("#fader8").val(), $("#fader9").val(), $("#fader10").val()]
        }
        // Grab the URL of the website
        var currentURL = window.location.origin;
        // AJAX post the data to the friends API.
        $.post(currentURL + "/api/friends", userData, function(data) {
            console.log(data);
            // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            $("#matchName").text(data.name);
            $('#matchImg').attr("src", data.photo);
            // Show the modal with the best match
            $("#resultsModal").modal('toggle');
        });
    } else {
        alert("Please fill out all fields before submitting!");
    }

    return false;
});