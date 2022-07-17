/* global $ */
appPlugin.consumes = ["app", "plugins", "state"];
appPlugin.provides = ["calculator"];

function appPlugin(options, imports, register) {

  var Plugin = imports.plugins.Plugin;
  var app = imports.app;
  var state = imports.state;


  var calculator = new Plugin();

  calculator.init = function () {
    state.$hash.on("/calculator", function (args, currentState, lastState, onDestroy) {
      //https://www.geeksforgeeks.org/html-calculator/
      require(["text!./calculator.html"],function(calculator_html){
        $("#main-container").html(calculator_html)


        $("#main-container").find("input[value='c']").on("click", clr)
        var disA = [
          "1","2","3",
          "4","5","6",
          "7","8","9", 
          "0","/","-",
          "+",".","*"
        ];
        for (var i in disA) {
          ((i) => {
            $("#main-container").find("input[value='" + disA[i] + "']").on("click", function () {
              dis(disA[i])
            })
          })(i);
        }
        $("#main-container").find("input[value='=']").on("click", function () {
          solve()
        })
        //function that display value
        function dis(val) {
          $("#result").val( $("#result").val() + val )
        }

        //function that evaluates the digit and return result
        function solve() {
          let x = $("#result").val()
          let y = eval(x)
          $("#result").val(y)
        }

        //function that clear the display
        function clr() {
          $("#result").val("")
        }
        
      });
    });
    
    state.home = "/calculator";
  };

  register(null, {
    calculator: calculator
  });

}

export default appPlugin;
