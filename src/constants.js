
export const COLORS = {
    gray:{
        '300': '#424242',
        '600':'#1b1b1b'
    },
    white: '#FFF',
    black: '#000',
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