import { ThemeOptions } from '@mui/material';
import scssVars from './main.scss';

export const defaultTheme: ThemeOptions = {
    palette: {
        common: {
            black: '#030C18',
            white: '#fff',
        },
        background: {
            default: '#fff',
        },
        primary: {
            main: scssVars.primary,
        },
        secondary: {
            main: scssVars.secondary,
        },
        text: {
            primary: '#273446',
            secondary: '#5C6573',
            disabled: '#CED7E4',
        },
        success: {
            main: '#73D85A',
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {},
            },
        },
        MuiTextField: {
            defaultProps: {
                fullWidth: true,
            },
        },
    },
    typography: {
        allVariants: {
            color: '#273446',
            fontWeight: 400,
        },
        fontFamily: 'Roboto, sans-serif',
        h1: {
            fontSize: 64,
            fontWeight: 600,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.29,
            letterSpacing: 2.8,
        },
        h2: {
            fontSize: 40,
            fontWeight: 600,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.4,
            letterSpacing: 2,
        },
        h3: {
            fontSize: 24,
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 0,
        },
        h4: {
            fontSize: 18,
            fontWeight: 900,
            lineHeight: 1.22,
            letterSpacing: 1,
            fontStretch: 'normal',
            fontStyle: 'normal',
        },
        h5: {
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 1.29,
            letterSpacing: 0.7,
            fontStretch: 'normal',
            fontStyle: 'normal',
        },
        h6: {
            fontSize: 12,
            fontWeight: 'bold',
            lineHeight: 1.8,
            letterSpacing: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
        },
        subtitle1: {
            fontSize: 14,
            lineHeight: 1.35,
            letterSpacing: 0.5,
            fontWeight: 600,
            fontStretch: 'normal',
            fontStyle: 'normal',
        },
        subtitle2: {
            fontSize: 14,
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 0.25,
            lineHeight: '24px',
        },
        body1: {
            fontSize: 16,
            lineHeight: 1.33,
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 0.3,
        },
        body2: {
            fontSize: 12,
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.38,
            letterSpacing: 'normal',
        },
        caption: {
            fontSize: 12,
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.29,
            letterSpacing: 0.2,
        },
    },
};
