
export const COLORS = {
    gray:{
        '300': '#424242',
        '600':'#1b1b1b'
    },
    blue: '#25ace2',
    white: '#FFF',
    black: '#000',
}


export const LOGO = {
    companylogo: `assets/logo.png`
}

export const BREAKPOINT_SIZES = {
    xs: 320,
    sm: 540,
    md: 900,
    lg: 1024,
    xl: 1440,
};

export const BREAKPOINTS = {
    xs: `(max-width: ${BREAKPOINT_SIZES.xs}px)`,
    sm: `(max-width: ${BREAKPOINT_SIZES.sm}px)`,
    md: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
    lg: `(max-width: ${BREAKPOINT_SIZES.lg}px)`,
    xl: `(max-width: ${BREAKPOINT_SIZES.xl}px)`,
    xsMin: `(min-width: ${BREAKPOINT_SIZES.xs + 1}px)`,
    smMin: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
    mdMin: `(min-width: ${BREAKPOINT_SIZES.md + 1}px)`,
    lgMin: `(min-width: ${BREAKPOINT_SIZES.lg + 1}px)`,
    xlMin: `(min-width: ${BREAKPOINT_SIZES.xl + 1}px)`,
    desktop: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
  };

export const SITE_TITLE ='bookmymovie';

export const LIGHTCOLORS = {
    '--text-color': 'hsl(0deg 0% 5%)',
    '--color-primary-100': 'hsl(240deg 100% 90%)',
    '--color-primary-300': 'hsl(242deg 100% 70%)',
    '--color-decorative-500': 'hsl(50deg 100% 70%)',
    '--color-backdrop': 'hsl(104, 76%, 52%)',
    '--color-gray-1000': 'black',
}

export const DARKCOLORS = {
    '--text-color': 'hsl(0deg 0% 100%)',
    '--color-decorative-500': 'hsl(256deg 40% 30%)',
    '--color-backdrop': 'hsl(104, 76%, 52%)',
    '--color-gray-1000': 'white',
}


// Light Mode 
LIGHTCOLORS['--color-primary'] = LIGHTCOLORS['--color-primary-500'];
LIGHTCOLORS['--color-backdrop'] = LIGHTCOLORS['--color-decorative-500'];


// Dark Mode 
DARKCOLORS['--color-backdrop'] = DARKCOLORS['--color-decorative-500'];


export const nowShowingMovie = [
    {
        id: 1,
        movieName: "Jawan",
        movieRunningLanguage: ["Tamil","Hinid","Telegu"],
        newRelease: false,
        likesCount: 30
    },
];