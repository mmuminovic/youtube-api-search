import axios from 'axios';

export const getVideos = async (search: string) => {
    try {
        const res = await axios.get(
            `${process.env.REACT_APP_VIDEO_API_URL}?key=${process.env.REACT_APP_VIDEO_API_KEY}&q=${search}&type=video&part=snippet&maxResults=20`
        );
        return res.data;
    } catch (err: any) {
        console.log(
            `Fetching videos failed with error message: ${err.message}`
        );
        throw new Error();
    }
};
