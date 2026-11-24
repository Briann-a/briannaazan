/* holds all interactive png assets, link to items */
import { asset } from '../assets';

/* array of desk items to be opened */
export const DESK_ITEMS = [
    {
        id: 'monitor',
        label: 'computer monitor',
        src: asset('monitor.png'),
        layer: 20,
        hitbox: {top: '33.33%', left: '36.48%', width: '43.88%', height: '44.16%'},
        /* page popup when clicked */
        pageData: {
            title: 'selected projects',
            items: [
                {
                    image: asset('photobooth.png'),
                    name: 'photobooth',
                    tag: 'product design + development',
                    description: 'a universal modern photobooth-style desktop app allowing users to express themselves through custom frames (100+ users)',
                    link: 'https://github.com/Briann-a/mobilePhotobooth',
                },
                {
                    image: asset('mrgoose.png'),
                    name: 'mr. goose @JAMHacks',
                    tag: 'frontend development',
                    description: 'a coding companion built directly into VSCode. Experience a more engaging developer environment alongside our animated goose coach. Navigate the technical learning curve with generated questions, real-time error correction, and project-specific chatbot',
                    link: 'https://github.com/Briann-a/jamhacks-2025',
                },
                {
                    image: asset('agrowtech.mp4'),
                    name: 'agrowtech @Samsung Challenge',
                    tag: 'product design + design sprint',
                    description: 'smart-farming system connecting irrigation sensors to mobile apps. Won Samsung challenge regional finalist, YRDSB Applause award, and featured in 3 articles',
                    link: 'https://www2.yrdsb.ca/students-unionville-hs-recognized-development-innovative-agricultural-tech-company',
                },
                {
                    image: asset('amojistudios.mp4'),
                    name: 'products @amojistudios',
                    tag: 'entrepreneurship + product design',
                    description: 'a global design company built by youth for all, offering custom stickers, prints, and more ($3000 sold)',
                    link: 'https://www.etsy.com/shop/AmojiStudios',
                },
                {
                    image: asset('growyourflow.mp4'),
                    name: 'grow your flow @deltahacks',
                    tag: 'design sprint',
                    description: 'automated virtual exercise programs and planning, allowing seniors and youth without access to classes to stay active anywhere',
                    link: 'https://devpost.com/software/grow-your-flow',
                },
            ],
        },
    },

    {
        id: 'laptop',
        label: 'laptop',
        src: asset('laptop.png'),
        layer: 30,
        hitbox: {top: '61.37%', left: '24.36%', width: '16.58%', height: '17.88%'},
        pageData: {
            title: 'design minis - coming soon!',
        }
    },

    {
        id: 'sticky',
        label: 'sticky',
        src: asset('about.png'),
        layer: 40,
        hitbox: {top: '27.57%', left: '30.27%', width: '10.06%', height: '6.55%'},
        pageData: {
            title: 'nice to meet you!',
            subtitle: 'im always looking for new projects to make and learn from, things that bring something new to what we never thought could change. I study computer engineering at queens university, love to run, read, play volleyball, and work in all sorts of cafes on the side',
            items: [
                {
                    name: 'currently:',
                    bullets: [
                        'researching grip haptic force designs for prosethetics @Queens Biomedical Innovation Team (QBIT)',
                        'experimenting with electron apps',
                        'developing a fully automated hydroponic system',
                        '1 of 25 chancellors scholar @queens university!',
                        'training for a marathon'
                    ]
                },
                {
                    name: 'previously:',
                    bullets: [
                        'designed products, content, and websites @aihealth, @deca, @medicine4youth'
                    ]
                },
                {
                    name: 'lets link!',
                    description: 'im always excited to meet new people, learn about their careers, passions, and down to get together and explore something new!',
                    gallery: [
                        {src: asset('brianna.jpg'), alt: 'brianna', rotate: '-rotate-3'},
                        {src: asset('miffy.png'), alt: 'miffy', rotate: 'rotate-2'},
                        {src: asset('matcha.png'), alt: 'matcha', rotate: 'rotate-3'},
                    ],
                },
            ],
        },
    },

    {
        id: 'poster',
        label: 'poster',
        src: asset('poster.png'),
        layer: 10,
        hitbox: {top: '40.2%', left: '24.61%', width: '13%', height: '18.55%'},
        pageData: {
            title: 'side quests',
            items: [
                {
                    name: 'community',
                    galleryLayout: 'row',
                    gallery: [
                        {src: asset('deca.mp4'), alt: 'deca'},
                        {src: asset('keyclub.png'), alt: 'keyclub'},
                    ],
                },
                {
                    name: 'traditional arts',
                    galleryLayout: 'row',
                    gallery: [
                        {src: asset('paint1.jpg'), alt: 'paint1'},
                        {src: asset('paint2.png'), alt: 'paint2'},
                    ],
                },
            ],
        },
    },

    {
        id: 'books',
        label: 'books',
        src: asset('books.png'),
        layer: 30,
        hitbox: {top: '65.57%', left: '71.21%', width: '8.58%', height: '5.41%'},
        pageData: {
            title: 'bookshelf',
            galleryLayout: 'grid-3',
            gallery: [
                {src: asset('lastlecture.png'), alt: 'last lecture', caption: ';;;;'},
                {src: asset('strangebuildings.png'), alt: 'strange buildings', caption: ';;;;'},
                {src: asset('letthem.jpg'), alt: 'let them', caption: ';;;'},
                {src: asset('atomichabits.jpg'), alt: 'atomic habits', caption: ';;;'},
                {src: asset('handmaidstale.jpg'), alt: 'handmaids tale', caption: ';;;;'},
                {src: asset('anxiouspeople.jpg'), alt: 'anxious people', caption: ';;;;;'},
                {src: asset('sevenhusbands.jpg'), alt: 'seven husbands', caption: ';;;;'},
                {src: asset('thewayiusedtobe.jpeg'), alt: 'the way i used to be', caption: ';;;'},
            ],
        },
    },

    {
        id: 'drink',
        label: 'drink',
        src: asset('drink.png'),
        layer: 35,
        hitbox: {top: '73.65%', left: '17.55%', width: '6.39%', height: '11.57%'}, /* clickable area to activate sketchPage */
        pageData: {
            title: 'fuel for my ambitions',
            image: asset('drinkbuild.png'),
            imageWidth: '4000px',
            imageMarginTop: '-2rem',
            subtitle: 'heytea inspired. bloom a close second',
        },
    },
]