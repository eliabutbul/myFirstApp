$(document).ready(function () {
            var count = 5;
            var counter = setInterval(timer, 1000);

            function timer() {
                count = count - 1;
                if (count <= 0) {
                    clearInterval(counter);
                    $("#screen1").css("display", "none");
                    $("#screen2").css("display", "block";
                        return;
                    }
                }
            }); // end of ready