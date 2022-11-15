import { Box, Typography } from '@mui/material';

interface VideoListItemProps {
    videoData: any;
    selectVideo: (videoData: any) => void;
}

export const VideoListItem: React.FC<VideoListItemProps> = ({
    videoData,
    selectVideo,
}) => {
    return (
        <Box
            className="video-list__item"
            onClick={() => selectVideo(videoData)}
        >
            <img
                src={videoData?.snippet?.thumbnails?.default?.url}
                alt={videoData?.ivideoData?.videoId}
                width={videoData?.snippet?.thumbnails?.default?.width}
                height={videoData?.snippet?.thumbnails?.default?.height}
            />
            <Box p={2}>
                <Typography variant="body1">
                    {videoData?.snippet?.title}
                </Typography>
                <Typography variant="caption">
                    {videoData?.snippet?.channelTitle}
                </Typography>
            </Box>
        </Box>
    );
};
