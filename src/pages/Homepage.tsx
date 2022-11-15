import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useQuery } from 'react-query';
import { getVideos } from '../utils/youtubeAPI';
import { VideoModal } from '../containers/VideoModal';
import { VideoListItem } from '../components/VideoListItem';
import { Loader } from '../components/Loader';

export const Homepage: React.FC = () => {
    const [search, setSearch] = useState<string>('');
    const [videos, setVideos] = useState<any[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<any>(null);

    const { refetch, isFetching } = useQuery<any>(
        ['getVideos', search],
        () => getVideos(search),
        {
            onSuccess: (data: any) => {
                setVideos(data.items);
            },
            onError: () => {},
            enabled: false,
        }
    );

    return (
        <div className="wrapper">
            <VideoModal
                videoId={selectedVideo?.id?.videoId}
                handleClose={() => setSelectedVideo(null)}
            />
            <Box width="80%">
                <Box display="flex">
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                refetch();
                            }
                        }}
                    />
                    <Button variant="outlined" onClick={() => refetch()}>
                        Search
                    </Button>
                </Box>
                {isFetching ? (
                    <Loader />
                ) : (
                    <Box className="video-list">
                        {videos.map((data: any) => (
                            <VideoListItem
                                key={data.id.videoId}
                                videoData={data}
                                selectVideo={setSelectedVideo}
                            />
                        ))}
                    </Box>
                )}
            </Box>
        </div>
    );
};
