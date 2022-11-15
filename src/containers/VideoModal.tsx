import { Button, Modal } from '@mui/material';
import { Box } from '@mui/system';

interface Props {
    videoId: string;
    handleClose: () => void;
}

export const VideoModal: React.FC<Props> = ({ videoId, handleClose }) => {
    return (
        <Modal
            open={!!videoId}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="wrapper">
                <Box bgcolor="#fff" display="flex" flexDirection="column">
                    <iframe
                        width="560"
                        height="315"
                        src={`${process.env.REACT_APP_VIDEO_EMBED_URL}/${videoId}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                    <Button variant="contained" onClick={handleClose}>
                        Close
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};
