var game = {
    // level: 0, // Current level
    level: parseInt(localStorage.level, 10) || 0,
    answers: (localStorage.answers && JSON.parse(localStorage.answers)) || {},
    solved: (localStorage.solved && JSON.parse(localStorage.solved)) || [],
    user: localStorage.user || '',

    start: function() {
        // this.loadLevel(this.levels[this.level]);
        if (!localStorage.user) {
            game.user = '' + (new Date()).getTime() + Math.random().toString(36).slice(1);
            localStorage.setItem('user', game.user);
        }

        $('#level-display').text("1");
        // var level = levels[game.level];
        // var instructions = level.instructions;
        // $('#instructions').html(instructions);
        // game.loadDocs();
        this.levels = levels;
        this.setHandlers();
        // this.loadMenu();
        game.loadLevel(levels[game.level]);

    },

    setHandlers: function(){

        $('#next').on('click', function(){
            
            game.next();
        })

        $('#prev').on('click', function(){
            
            game.prev();
        })

        /*$("#viewAnswer").on('click', function(){
            window.alert(game.levels[game.level].answer);
            game.viewAnswer();
        })*/

        $('#verify').on('click', function() {
            $('#code').focus();
            
                game.tryagain();
            return;

            setTimeout(function() {
            if(game.level >= levels.length - 1){
                game.win();
            } else {
                game.next();
            }
        },2000);
        });
        $('.dropdown-content').on('click', (e) => {
            // Prevent the default action of the link
            e.preventDefault();
        
            // Get the text of the selected question
            var selectedQuestion = $(e.target).text().trim();
            game.loadLevel(game.levels[game.level])
            $('#level-display').text(game.level)
        
        });
        
        
        
    },

    //level loading

    loadLevel: function(level){
        //$('#level-display').text(this.level + 1);
        // $('#prev').text(level.before);
        // $('#next').text(level.after);

        var instructions = level.instructions;
        $('#instruction').html(instructions);

        var answer = level.answer;
        $('#code').val(answer).focus();

        //this.loadDocs();

        //add code to dynamically create game board

        // game.check();
    },
    
    saveAnswer: function() {
        var level = levels[this.level];
        game.answers[level.name] = $('#code').val();
    },

    tryagain: function() {
        $('editor').addClass('animated shake');
    },

    check: function(){
        game.saveAnswer();

        var level = levels[game.level];
        var buildings = {};
        var cars = {};
        var correct = true;

        $('.car').each(function() {
            var position = $(this).position();
            position.top = Math.floor(position.top);
            position.left = Math.floor(position.left);

            var key = JSON.stringify(position);
            var val = $(this).data('color');
            cars[key] = val;
        })

        $('.building').each(function() {
            var position = $(this).position();
            position.top = Math.floor(position.top);
            position.left = Math.floor(position.left);

            var key = JSON.stringify(position);
            var val = $(this).data('color');

            if(!(key in cars) || cars[key] != val){
                correct = false;
            }
        });

        //if correct mark as solved and move to the next one
    },

    next: function() {
        if (this.level < this.levels.length - 1) {
            this.level++;
            this.loadLevel(this.levels[this.level]);
            $('#level-display').text(this.level + 1)
        }
    },

    prev: function() {
        if (this.level > 0) {
            this.level--;
            this.loadLevel(this.levels[this.level]);
            $('#level-display').text(this.level+1)
        }
    }
};



// Function to handle hint button click
function hint() {
    // Provide a hint to the user
    // Example: Display a hint message or highlight part of the code
}

// Function to handle view answer button click
function viewAnswer() {
     // Show the correct solution in the modal popup
    var correctAnswer = game.levels[game.level].answer;
    document.getElementById("correctCode").textContent = correctAnswer;
    document.getElementById("myModal").style.display = "block";
}

// Close the modal when the user clicks on the close button (×)
document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("myModal").style.display = "none";
};

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
if (event.target == document.getElementById("myModal")) {
document.getElementById("myModal").style.display = "none";
}
}
function copy() {
    // Select the text inside the code element
    var codeElement = document.getElementById("correctCode");
    var range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Deselect the text
    window.getSelection().removeAllRanges();

    // Provide feedback to the user (optional)
    // alert("Code copied to clipboard!");
    $('#copy').text('Copied!')
    setTimeout(function() {
        $('#copy').text('Copy Code');
    }, 2000);
    

}
// Initialize the game
game.start();