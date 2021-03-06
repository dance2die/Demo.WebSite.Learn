$(function () {
    var themes = [
        'classic',
        'warhol',
    ];

    var textures = {
        'classic': [
            'dark-bg black-texture-1',
            'dark-bg black-texture-2',
            'dark-bg black-texture-3',
            'light-bg white-texture-1',
            'light-bg white-texture-2',
            'light-bg white-texture-3'
        ],
        'warhol': [
            'dark-bg solid-blue',
            'dark-bg solid-red',
            'dark-bg solid-yellow',
            'dark-bg solid-pink',
            'dark-bg solid-green'
        ]
    };

    var blocks = [];
    for (var i = 0; i < 12; i++) {
        blocks.push({
            title: 'Project Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            url: 'http://christinecha.github.io/gridfolio/',
            tags: ['html', 'css', 'javascript']
            // classname: textures[theme] ? textures[theme][i % textures[theme].length] : ''
        });
    }

    var gridfolio = new Gridfolio({

        // This is the selector string of the DOM element you want to dump
        // Gridfolio into. You can also just use 'body'.
        container: '#gridfolio--container',

        // Here are all your configurable options
        options: {

            // Fancy! Adds an 'is-animated' class to blocks as they come into view.
            // I've given you a basic fade/slide-in effect, but this is set up so
            // you can add whatever CSS craziness you want.
            animateIntoView: true,

            // Breakpoints are mobile first.
            breakpoints: [
                // That means the grid is 1 block wide when the broswer's width
                // ranges from 0px wide to 500px wide
                {minWidth: 0, gridWidth: 1},
                // 3 blocks wide from 500px to 900px browser width
                {minWidth: 500, gridWidth: 2},
                // and so on
                {minWidth: 900, gridWidth: 3},
                // and so forth.
                {minWidth: 1300, gridWidth: 4}
            ],

            // Want the font sizes to scale with the browser? Yeah, we fabulous.
            scaleFonts: true,

            // Pop in a theme! All this does is add [data-themee='warhol'] to
            // your .gridfolio element, so it WON'T HAVE AN EFFECT unless you also
            // include the corresponding CSS file. See the 'Special Features' section.
            theme: 'warhol'
        },

        // Okay, this is where your actual data lives. All fields are optional.
        blocks: blocks
    });
});