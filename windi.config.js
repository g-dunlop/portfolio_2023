import {defineConfig, transform} from 'windicss/helpers'

export default defineConfig ({
    darkMode:false,
    preflight:true,
    theme: {
        container: {
            center:true
        },
        extend: {
            screens: {
                'sm':'640px',
                'md': '768px',
                'lg':'1024px',
                'xl':'1280px',
                '2xl':'1536px',
            },
            fontFamily: {
                sans: ['runda', 'ui-sans-serif', 'system-ui'],
                header:['omnes-pro', 'runda', 'Open Sans']
            },
        },
    },
    plugins: [
        transform('daisyui'),
    ],
    daisyui: {
        styled:true,
        
            themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
        
        base:true,
        utils:true,
        logs:true,
        rtl:false,
    },
})