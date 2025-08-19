import { podcastsList } from "../data/podcasts";
import { PodcastModel } from "../models/PodcastModel";
import { alterPartialPodcastRepository, createPodcastRepository, getAllPodcastsRepository, getFilteredPoscastsRepository, getOnePodcastRepository, removePodcastRepository } from "../repositories/podcastRepository";
import { PodcastDTO } from "../types/PodcastDTO";
import { StatusCode } from "../types/StatusCode";

export const postPodcastService = (newPodcast: PodcastModel): PodcastDTO => {
    let responseFormat: PodcastDTO = {
        statusCode: 0,
    };

    createPodcastRepository(newPodcast);

    responseFormat.statusCode = StatusCode.Created;

    return responseFormat;
}

export const getPodcastService = (podcastName?: string): PodcastDTO => {
    let responseFormat: PodcastDTO = {
        statusCode: 0,
        body: [],
    };

    const queryString = podcastName?.split("?name=")[1] || "";

    const data = queryString ? getFilteredPoscastsRepository(queryString) : getAllPodcastsRepository();

    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data,
    };

    return responseFormat;
}

export const patchPodcastService = (videoId: string, newData: PodcastModel) => {
    let responseFormat: PodcastDTO = {
        statusCode: 0,
        body: [],
    };

    const podcastIndex = getOnePodcastRepository(videoId);

    if(podcastIndex) {
        const newPodcast: PodcastModel = podcastsList[podcastIndex];

        if(newData.podcastName) newPodcast.podcastName = newData.podcastName;

        if(newData.episode) newPodcast.episode = newData.episode;

        if(newData.categories) newPodcast.categories = newData.categories;
        
        responseFormat.statusCode = StatusCode.OK;
        alterPartialPodcastRepository(videoId, newPodcast);
    } else responseFormat.statusCode = StatusCode.NotFound;

    return responseFormat;
}

export const deletePodcastService = (videoId: string) => {
    let responseFormat: PodcastDTO = {
        statusCode: 0,
        body: [],
    };

    const podcastIndex = getOnePodcastRepository(videoId);

    if(podcastIndex !== -1) {
        responseFormat.statusCode = StatusCode.OK;
        removePodcastRepository(videoId);
    } else responseFormat.statusCode = StatusCode.NotFound;

    return responseFormat;
}
