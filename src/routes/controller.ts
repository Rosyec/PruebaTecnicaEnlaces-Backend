import { Response, Request, Router } from "express";
import axios from 'axios';
import { MusicBrainzDta } from "../helpers/data.interface";

const router: Router = Router();

const API_MUSICBRAINZ = axios.create({baseURL: 'https://musicbrainz.org/ws/2/genre'});

router.get('/getAllGenresByCount', async (req: Request<void, void, void, Querys>, resp: Response) => {
    const { limit, offset } = req.query;
    const response = await API_MUSICBRAINZ.get<MusicBrainzDta>(`/all?limit=${limit}&offset=${offset}&fmt=json`);
    resp.status(200).json({
            ...response.data,
        });
});

export {
    router
}

interface Querys {
    limit: string,
    offset: string
}