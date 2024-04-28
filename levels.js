var levels = [
    {
        name:'up-down',
        instructions: "<p>Welcome! This game is designed to enhance your CSS animation skills. On the VIT map, there's a red circle. He's Dot! Your task is to guide Dot from the gate to AB1. He's running late for his first class!</p>",
        board: 'g',
        answer: `/* CSS code */
.circle {
    position: absolute;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    background-color: red;
    animation: move 5s forwards;
    bottom:0px;
}

@keyframes move {
    0% {
        bottom: 0;
    }
    100% {
        bottom: calc(100% - 100px);
    }
}`
    },
    {
        name:'left-right',
        instructions: "<p>Uh oh! Dot is been called to the PAT office. Your task is to guide him from AB1 to AB2. Let's hope everything is alright and he's not in trouble!</p>",
        board: 'g',

        answer: `/* CSS code */
.circle {
    position: absolute;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    background-color: red;
    animation: move 5s forwards;
}

@keyframes move {
    0% {
        left: 0;
    }
    100% {
        left: calc(100% - 100px);
    }
}`
    },{
        name:'left and right',
        instructions: "<p>He has to go back and forth between his class at AB1 and PAT office (in AB2). Modify the code to help him",
        board: 'g',

        answer: `/* CSS code */
.circle {
    position: absolute;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    background-color: red;
    animation: move 5s infinite alternate;
    top: 0px;
}

@keyframes move {
    0% {
        left: 0;
    }
    100% {
        left: calc(100% - 100px);
    }
}`
    },
    {
        name:'change colour',
        instructions: "<p>It's been a long day for Dot. Oh dear! His energy level is dropping. Demonstrate this by slowly transitioning his colour from red to white",
        board: 'g',

        answer: `/* CSS code */
.circle {
    position: absolute;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    background-color: red;
    animation: move 5s forwards;
    top: 0px;
}

@keyframes move {
    0% {
        background-color:red;
    }
    100% {
        background-color:white;
    }
}`
    },
    {
        name:'change colour and move',
        instructions: "<p>Dot is feeling better now. As he moves to his next class to AB3 from AB1, transition him back from white to red",
        board: 'g',

        answer: `/* CSS code */
.circle {
    position: absolute;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    background-color: red;
    animation: moveAndColor 5s forwards;
    top: 0px;
}
@keyframes moveAndColor {
    0% {
        background-color: white; /* Start with white background */
        top: 0;
        left: 0;
    }
    100% {
        background-color: red; /* Remain red till the end */
        top: 80%;
        left: 80%;
    }

}`
    },
    {
        name:'change colour and move up',
        instructions: "<p>Dot is delighted. He has only has one more class left! As he moves from AB3 to AB2, his colour transitions from red to yellow, reflecting his cheerful mood.",
        board: 'g',

        answer: `/* CSS code */
.circle {
    position: absolute;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    background-color: red;
    animation: moveAndColor 5s forwards;
    right: 0px;
}
@keyframes moveAndColor {
    0% {
        background-color: red;
        bottom: 0px;
    }
    100% {
        background-color: yellow; 
        bottom: calc(100% - 100px)
    }

}`
    },
    {
        name:'expand',
        instructions: "<p>Yay! He's done with all his classes. He is so happy he just grew double in size!",
        board: 'g',

        answer: `/* CSS code */
.circle {
    position: absolute;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    background-color: red;
    animation: expand 5s forwards;
}

@keyframes expand {
    0% {
        height:100px;
        width: 100px;
    }
    100% {
        height:200px;
        width: 200px;
    }
}`
    },
    {
        name:'expand',
        instructions: "<p>Dot's finally going home. Help him go the gate from AB1, while returning to his orginal size (height: 100px and width: 100px) ",
        board: 'g',

        answer: `/* CSS code */
.circle {
    position: absolute;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    background-color: red;
    animation: moveAndShrink 5s forwards;
}

@keyframes moveAndShrink {
    0% {
        height:200px;
        width: 200px;
        top:0px;
    }
    100% {
        height:100px;
        width: 100px;
        top: calc(100% - 100px)
    }
}`
    }
]