var text = (function() {
    const textbox     = document.querySelector('.textbox'),
          displayText = document.querySelector('h1'),
          button      = document.querySelector('button'),
          select      = document.querySelector('select');

          const error = function () {
              var index = select.selectedIndex,
              inputText = select.children[index].innerHTML.trim();
              displayText.style.color = "red";
              if( inputText === "PI" ) {
                  if (textbox.value > 20) {
                      displayText.innerHTML = "error: please enter a number less than or equal to 20";
                  } else if (!isNumber(textbox.value)) {
                      displayText.innerHTML = "error: please enter numbers only";
                  }
              }
              if(textbox.value.length < 1) {
                  displayText.innerHTML = "error: please enter one or more characters";
              }
          };

          const isNumber = (n) => {
              return n == Number(n);
          };

          const resetTxtBox = () => {
            $(textbox).val('');
          };

          const resetTxtColor = () => {
             displayText.style.color = "#fff";
          };

          const PInthNumber = function() {
              resetTxtColor();
              const decimal = textbox.value;
              if(isNumber(decimal) === true && decimal <= 20 ) {
                  displayText.innerHTML = Math.PI.toFixed(decimal);
              } else {
                  error();
              }
              resetTxtBox();
          };

          var buttonClick = function(fn) {
              button.addEventListener('click', fn);
          };

            select.onchange = function() {
                resetTxtColor();
                var index = this.selectedIndex;
                var inputText = this.children[index].innerHTML.trim();
                displayText.innerHTML = inputText;
                resetTxtBox();
            };

            buttonClick(() => {
                var index = select.selectedIndex,
                    inputText = select.children[index].innerHTML.trim();
                switch(inputText) {
                    case "PI": PInthNumber();
                    break;
                    default: text.error();
                };
            });
}());
