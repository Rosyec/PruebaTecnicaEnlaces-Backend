export interface MusicBrainzDta {
    genres:         Genre[];
    "genre-offset": number;
    "genre-count":  number;
}

export interface Genre {
    id:             string;
    name:           string;
    disambiguation: string;
}