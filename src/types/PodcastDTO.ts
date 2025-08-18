import { PodcastModel } from "../models/PodcastModel";

export interface PodcastDTO {
    statusCode: number;
    body?: PodcastModel[];
}
