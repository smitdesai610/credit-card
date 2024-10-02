// document.getElementById('confirm-btn').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent form submission

//     let isValid = true; // Form validation status
//     const nameInput = document.getElementById('cardholder-name');
//     const cardNumberInput = document.getElementById('credit-card-input');
//     const expMonthInput = document.getElementById('exp-month');
//     const expYearInput = document.getElementById('exp-year');
//     const cvvInput = document.getElementById('cvv-number');

//     // Reset all error messages
//     document.querySelectorAll('.error-message, .formate-error').forEach(function(span) {
//         span.textContent = '';
//     });

//     // Validation for "Can't be blank"
//     if (nameInput.value.trim() === '') {
//         document.querySelector('.user-name .error-message').textContent = "Can't be blank";
//         isValid = false;
//     }
//     if (cardNumberInput.value.trim() === '') {
//         document.querySelector('.card-number .error-message').textContent = "Can't be blank";
//         isValid = false;
//     }
//     if (expMonthInput.value.trim() === '') {
//         document.querySelector('.dates .error-message').textContent = "Can't be blank";
//         isValid = false;
//     }
//     if (expYearInput.value.trim() === '') {
//         document.querySelector('.dates .error-message').textContent = "Can't be blank";
//         isValid = false;
//     }
//     if (cvvInput.value.trim() === '') {
//         document.querySelector('.cvv .error-message').textContent = "Can't be blank";
//         isValid = false;
//     }

//     // Validation for text only in Cardholder Name
//     const nameValue = nameInput.value.trim();
//     if (/[^a-zA-Z\s]/.test(nameValue)) {
//         document.querySelector('.user-name .formate-error').textContent = "Wrong format, text only";
//         isValid = false;
//     }

//     // Validation for numbers only in Card Number (digits and spaces only)
//     const cardNumberValue = cardNumberInput.value.trim().replace(/\s+/g, ''); // Remove spaces for validation
//     if (/[^0-9]/.test(cardNumberValue) || cardNumberValue.length !== 16) {
//         document.querySelector('.card-number .formate-error').textContent = "Wrong format, numbers only (16 digits)";
//         isValid = false;
//     }

//     // If all fields are valid, form can be submitted
//     if (isValid) {
//         console.log('Form is valid');
//         // Form hide kari dyo
//         document.querySelector('.form').classList.add('hidden');

//         // "Thank You" message show karavo
//         document.querySelector('.thank-you').classList.remove('hidden');
//     } else {
//         console.log('Form is invalid');
//     }
// });

// document.getElementById('confirm-btn').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent form submission

//     let isValid = true; // Form validation status
//     const nameInput = document.getElementById('cardholder-name');
//     const cardNumberInput = document.getElementById('credit-card-input');
//     const expMonthInput = document.getElementById('exp-month');
//     const expYearInput = document.getElementById('exp-year');
//     const cvvInput = document.getElementById('cvv-number');

//     // Reset all error messages
//     document.querySelectorAll('.error-message, .formate-error').forEach(function(span) {
//         span.textContent = '';
//     });

//     // Validation for "Can't be blank"
//     if (nameInput.value.trim() === '') {
//         document.querySelector('.user-name .error-message').textContent = "Can't be blank";
//         isValid = false;
//     } else {
//         // Validation for text only in Cardholder Name
//         const nameValue = nameInput.value.trim();
//         if (/[^a-zA-Z\s]/.test(nameValue)) {
//             document.querySelector('.user-name .formate-error').textContent = "Wrong format, text only";
//             isValid = false;
//         }
//     }

//     // Validation for "Can't be blank" in Card Number
//     if (cardNumberInput.value.trim() === '') {
//         document.querySelector('.card-number .error-message').textContent = "Can't be blank";
//         isValid = false;
//     } else {
//         // Validation for numbers only in Card Number (digits and spaces only)
//         const cardNumberValue = cardNumberInput.value.trim().replace(/\s+/g, ''); // Remove spaces for validation
//         if (/[^0-9]/.test(cardNumberValue) || cardNumberValue.length !== 16) {
//             document.querySelector('.card-number .formate-error').textContent = "Wrong format, numbers only (16 digits)";
//             isValid = false;
//         }
//     }

//     // Validation for "Can't be blank" in Expiration Month and Year
//     if (expMonthInput.value.trim() === '') {
//         document.querySelector('.dates .error-message').textContent = "Can't be blank";
//         isValid = false;
//     }
//     if (expYearInput.value.trim() === '') {
//         document.querySelector('.dates .error-message').textContent = "Can't be blank";
//         isValid = false;
//     }

//     // Validation for "Can't be blank" in CVV
//     if (cvvInput.value.trim() === '') {
//         document.querySelector('.cvv .error-message').textContent = "Can't be blank";
//         isValid = false;
//     }

//     // If all fields are valid, form can be submitted
//     if (isValid) {
//         // Form hide kari dyo
//         document.querySelector('.form').classList.add('hidden');

//         // "Thank You" message show karavo
//         document.querySelector('.thank-you').classList.remove('hidden');
//     }
// });

// // Continue button click to reset and show form again
// document.querySelector('.continue-btn').addEventListener('click', function() {
//     // "Thank You" message hide kari dyo
//     document.querySelector('.thank-you').classList.add('hidden');

//     // Form ne feri thi show kari dyo
//     document.querySelector('.form').classList.remove('hidden');
// });

// // Function to format card number input with spaces every 4 digits
// document.getElementById('credit-card-input').addEventListener('input', function(event) {
//     let input = event.target.value.replace(/\s+/g, ''); // Remove all spaces
//     if (input.length > 16) {
//         input = input.slice(0, 16); // Limit to 16 digits
//     }

//     // Re-insert space every 4 digits
//     event.target.value = input.replace(/(.{4})/g, '$1 ').trim();
// });

// // Function to limit month input to 1-12
// function limitMonthInput(element) {
//     let value = parseInt(element.value);
//     if (value > 12) {
//         element.value = "12";
//     } else if (value < 1 && element.value !== "") {
//         element.value = "01";
//     } else if (value >= 1 && value <= 9 && element.value.length < 2) {
//         element.value = "0" + value;
//     }
// }

// // Function to limit year input to 01-99
// function limitYearInput(element) {
//     let value = parseInt(element.value);
//     if (value > 99) {
//         element.value = "99";
//     }
//     if (value < 1 && element.value !== "") {
//         element.value = 1;
//     }
// }

// // Function to limit CVV input to 1-999
// function limitCvvInput(element) {
//     let value = parseInt(element.value);
//     if (value > 999) {
//         element.value = 999;
//     }
//     if (value < 1 && element.value !== "") {
//         element.value = 1;
//     }
// }

document
  .getElementById("confirm-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true; // Form validation status
    const nameInput = document.getElementById("cardholder-name");
    const cardNumberInput = document.getElementById("credit-card-input");
    const expMonthInput = document.getElementById("exp-month");
    const expYearInput = document.getElementById("exp-year");
    const cvvInput = document.getElementById("cvv-number");

    // Reset all error messages
    document
      .querySelectorAll(".error-message, .formate-error")
      .forEach(function (span) {
        span.textContent = "";
      });

    // Validation for "Can't be blank"
    if (nameInput.value.trim() === "") {
      document.querySelector(".user-name .error-message").textContent =
        "Can't be blank";
      isValid = false;
    } else {
      // Validation for text only in Cardholder Name
      const nameValue = nameInput.value.trim();
      if (/[^a-zA-Z\s]/.test(nameValue)) {
        document.querySelector(".user-name .formate-error").textContent =
          "Wrong format, text only";
        isValid = false;
      }
    }

    // Validation for "Can't be blank" in Card Number
    if (cardNumberInput.value.trim() === "") {
      document.querySelector(".card-number .error-message").textContent =
        "Can't be blank";
      isValid = false;
    } else {
      // Validation for numbers only in Card Number (digits and spaces only)
      const cardNumberValue = cardNumberInput.value.trim().replace(/\s+/g, ""); // Remove spaces for validation
      if (/[^0-9]/.test(cardNumberValue) || cardNumberValue.length !== 16) {
        document.querySelector(".card-number .formate-error").textContent =
          "Wrong format, numbers only (16 digits)";
        isValid = false;
      }
    }

    // Validation for "Can't be blank" in Expiration Month and Year
    if (expMonthInput.value.trim() === "") {
      document.querySelector(".dates .error-message").textContent =
        "Can't be blank";
      isValid = false;
    }
    if (expYearInput.value.trim() === "") {
      document.querySelector(".dates .error-message").textContent =
        "Can't be blank";
      isValid = false;
    }

    // Validation for "Can't be blank" in CVV
    if (cvvInput.value.trim() === "") {
      document.querySelector(".cvv .error-message").textContent =
        "Can't be blank";
      isValid = false;
    }

    // If all fields are valid, form can be submitted
    if (isValid) {
      // Display values on card
      document.querySelector(".show-card-holder-name").textContent =
        nameInput.value;
      document.querySelector(".show-card-number").textContent =
        cardNumberInput.value;
      document.querySelector(".show-cvv-number").textContent = cvvInput.value;
      document.querySelector(
        ".show-card-exp-date"
      ).textContent = `${expMonthInput.value}/${expYearInput.value}`;

      // Form hide kari dyo
      document.querySelector(".form").classList.add("hidden");

      // "Thank You" message show karavo
      document.querySelector(".thank-you").classList.remove("hidden");
    }
  });

// Continue button click to reset and show form again
document.querySelector(".continue-btn").addEventListener("click", function () {
  // "Thank You" message hide kari dyo
  document.querySelector(".thank-you").classList.add("hidden");

  // Form ne feri thi show kari dyo
  document.querySelector(".form").classList.remove("hidden");

  // Reset form values
  document.getElementById("cardholder-name").value = "";
  document.getElementById("credit-card-input").value = "";
  document.getElementById("exp-month").value = "";
  document.getElementById("exp-year").value = "";
  document.getElementById("cvv-number").value = "";

  // Reset card display values
  document.querySelector(".show-card-holder-name").textContent =
    "Jane Appleseed";
  document.querySelector(".show-card-number").textContent =
    "0000 0000 0000 0000";
  document.querySelector(".show-cvv-number").textContent = "000";
  document.querySelector(".show-card-exp-date").textContent = "00/00";
});

// Function to format card number input with spaces every 4 digits
document
  .getElementById("credit-card-input")
  .addEventListener("input", function (event) {
    let input = event.target.value.replace(/\s+/g, ""); // Remove all spaces
    if (input.length > 16) {
      input = input.slice(0, 16); // Limit to 16 digits
    }

    // Re-insert space every 4 digits
    event.target.value = input.replace(/(.{4})/g, "$1 ").trim();
  });

// Function to limit month input to 1-12
function limitMonthInput(element) {
  let value = parseInt(element.value);
  if (value > 12) {
    element.value = "12";
  } else if (value < 1 && element.value !== "") {
    element.value = "01";
  } else if (value >= 1 && value <= 9 && element.value.length < 2) {
    element.value = "0" + value;
  }
}

// Function to limit year input to 01-99
function limitYearInput(element) {
  let value = parseInt(element.value);
  if (value > 99) {
    element.value = "99";
  }
  if (value < 1 && element.value !== "") {
    element.value = 1;
  }
}

// Function to limit CVV input to 1-999

function limitCvvInput(element) {
  let value = parseInt(element.value);
  if (value > 999) {
    element.value = 999;
  }
  if (value < 1 && element.value !== "") {
    element.value = 1;
  }
}
