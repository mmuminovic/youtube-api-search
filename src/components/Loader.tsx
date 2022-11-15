import { Box, CircularProgress } from '@mui/material';

export const Loader = () => {
    return (
        <Box
            height="60vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <CircularProgress />
        </Box>
    );
};
