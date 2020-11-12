$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
        {
          firstName: {
              required: true
          },
            grade: {
              required: true,
                min: 5,
                max: 8,
                digits: true
            }
        };

    // Object containing the error messages
    var myMessages =
        {
            firstName: {
                required: "Enter a Name"
            },
            grade: {
                required: "Enter A Grade",
                min: "Must be at least 5th Grade",
                max: "May not be higher than 8th Grade",
                digits: "must be a whole number"
            }
        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: myRules,
            messages: myMessages
        }
    );

    function runMyProgram() {
        var grade = $("#grade").val()
        var name = $("#firstName").val()
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.
        $("p").text(`You have registered ${name} for grade ${grade} camp!`)

    }



});