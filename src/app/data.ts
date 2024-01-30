export const projects = [
    {
        id: 0,
        title: 'Reveal',
        type: 'Group Project',
        description: 'The status quo of inaccessible information, misleading claims, and corporate virtue signaling largely prevents consumers from easily using their purchasing power to make change. Reveal equips users with the knowledge and tools to amplify their impact by incentivizing direct engagement with companies, legislators, and communities of like-minded individuals.',
        build: [
            { tool: 'React.js' },
            { tool: 'JavaScript' },
            { tool: 'Node.js' },
            { tool: 'PostgeSQL' },
            { tool: 'MUI' },
            { tool: 'HTML' },
            { tool: 'CSS' },
            { tool: 'Redux' },
            { tool: 'Passport' },
            { tool: 'Heroku' },
        ],
        video: 'https://www.youtube.com/embed/qa510qXZOV8',
    },
    {
        id: 1,
        title: 'Unicorn Rancher',
        type: 'Solo Project',
        description: 'Do you wish that life was more simple? Do you feel like you should be rewarded answering easy questions? Wouldnt life be a little better with some sparkle? Unicorn Rancher is simple, fun, and adds some sparkle to your life! All you have to do is answer some simple unicorn questions to recieve an amazing badge. Be the best Unicorn Rancher by collecting all the badges!',
        build: [
            { tool: 'React.js' },
            { tool: 'JavaScript' },
            { tool: 'Node.js' },
            { tool: 'PostgreSQL' },
            { tool: 'HTML' },
            { tool: 'CSS' },
            { tool: 'Redux' },
            { tool: 'Passport' },
            { tool: 'Heroku' },
        ],
        video: 'https://www.youtube.com/embed/fbwvg-eIHxE',
    },
    {
        id: 2,
        title: 'Resume',
        type: 'Solo Project',
        description: 'This resume before refacturing for GH-pages compatibility. I encourage you to look around this site and send me an email if you would like to connect.  This application has responsive design! Also dont forget easter eggs (>.<)',
        build: [
            { tool: 'React.js' },
            { tool: 'TypeScript' },
            { tool: 'Bootstrap' },
            { tool: 'HTML' },
            { tool: 'CSS' },
            { tool: 'SMTP.js' },
        ],
        video: 'https://www.youtube.com/embed/2tyB4twG0u4',
    },
];

export const skills = {
    languages: [
        'javaScript',
        'typeScript',
        'CSS',
        'HTML',
        'SQL',
        'C++',
    ],
    tools: [
        'Git',
        'VS Code',
        'GitHub',
        'BitBucket',
        'Vim',
        'Android Studio',
        'Xcode',
        'MUI',
        'bootstrap',
        'flexbox',
        'AJAX',
    ],
    libraries: [
        'react.js',
        'socket.io',
        'ionic react',
        'jQuery',
        'Axios',
    ],
    TCPs: [
        'SMTP.js',
        'MQTT',
    ],
    frameWorks: [
        'react-native',
        'redux',
        'saga',
        'expressJS',
    ],
    ect: [
        'node.js',
        'Postman',
        'Postico',
        'Heroku',
        'body-parser',
        'pgAdmin',
    ],
};

export const experience = [
    {
        id: 1,
        name: 'Ergotron',
        date: '7/2023-9/2023',
        title: 'software engineer',
        location: 'Eagan MN',
        description: [
            { bullet: 'Collaborated with other software engineering teams, mechanical engineers, and electrical engineers to build an Ionic React Typescript app to be implemented in new medical carts.' },
            { bullet: 'Created Java websocket server to confirm connection with Socket.io websockets.' },
            { bullet: 'Implemented SMTP with attached data and added MQTT access for a future broker.' },
            { bullet: 'Researched Appium BrowserStack alternatives for custom applications.' },
        ],
        note: 'contracted through Manpower',
    },
    {
        id: 2,
        name: 'Kyros',
        date: '4/2022-3/2023',
        title: 'associate software engineer',
        location: 'Minneapolis MN',
        description: [
            { bullet: 'Collaborated with Product Managers, UX, medical experts, and other developers to build a backend, React Native mobile app, and React web app that connects individuals recovering from SUD with specialists.' },
            { bullet: 'Developed skills in React-Native, React, CSS, MUI, responsive design, and api calls.' },
            { bullet: 'Implemented End-to-End and intergration testing.' },
            { bullet: 'Tested responsive designs in Android Studio, Xcode, and internet browsers.' },
        ],
        note: '',
    },
    {
        id: 3,
        name: 'Prime Digital Academy',
        date: '10/2021-3/2022',
        title: 'fullstack software engineer student',
        location: 'Minneapolis MN',
        description: [
            { bullet: 'Collaborated with peers on several projects in React, JavaScript, Express, PG, and PostgreSQL.' },
            { bullet: 'Designed, developed, and curated a personal project and presented in front of peers.' },
            { bullet: 'Contributed in a team for an actual client, conducted standups, used agile structure, and delivered the final app to the client.' },
            { bullet: 'Developed professional speaking skills and DEI.' },
        ],
        note: '',
    },
];

export const education = [
    {
        id: 1,
        name: 'Prime Digital Academy',
        date: '10/2021-3/2022',
        degree: 'certificate',
        title: 'fullstack software engineer',
        location: 'Minneapolis MN',
    },
    {
        id: 2,
        name: 'Minnesota State University',
        date: '9/2006-5/2011',
        degree: 'BS',
        title: 'Spanish',
        location: 'Mankato MN',
    },
];

export const theme = {
    dark: {
        white: '#ffffff',
        offWhite: '#d3d3d3',
        darkWhite: '#939393',
        black: '#000000',
        charcoal: '#161c20',
        purple: '#8a2be2' || 'blueviolet',
        lightPurple: '#9370dc'
    },
    light: {},
};

export const game = [
    {
        id: 1,
        question: 'Desiree has experience with React-Native.',
        options: [
            'true',
            'false',
        ],
        answer: 'true',
    },
    {
        id: 2,
        question: 'Desiree has worked at Ergotron, Kyros, and Minnesota State University.',
        options: [
            'true',
            'false',
        ],
        answer: 'false',
    },
    {
        id: 3,
        question: 'Desiree has 2 dogs',
        options: [
            'true',
            'false',
        ],
        answer: 'true',
    },
    {
        id: 4,
        question: 'I have already visited Desiree`s LinkedIn.',
        options: [
            'true',
            'false',
        ],
        answer: 'true',
    },
    {
        id: 5,
        question: 'I have already found the easter egg on this site!',
        options: [
            'true',
            'false',
        ],
        answer: 'true',
    },
    {
        id: 6,
        question: 'This webpage uses Redux.',
        options: [
            'true',
            'false',
        ],
        answer: 'true',
    },
    {
        id: 7,
        question: 'One of the projects on this page uses C++.',
        options: [
            'true',
            'false',
        ],
        answer: 'false',
    },
    {
        id: 8,
        question: 'Reveal was a solo project.',
        options: [
            'true',
            'false',
        ],
        answer: 'false',
    },
    {
        id: 9,
        question: 'Desiree has worked with MQTT.',
        options: [
            'true',
            'false',
        ],
        answer: 'true',
    },
    {
        id: 10,
        question: 'This website is not responsive.',
        options: [
            'true',
            'false',
        ],
        answer: 'false',
    },
];

// export const result = {};