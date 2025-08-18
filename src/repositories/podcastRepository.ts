import { podcastsList } from "../data/podcasts";
import { PodcastModel } from "../models/PodcastModel";

export const createPodcastRepository = (newPodcast: PodcastModel): void => {
    podcastsList.push(newPodcast);
}

export const getAllPodcastsRepository = (): PodcastModel[] => {
    return podcastsList;
}

export const getOnePodcastRepository = (videoId: string) => {
    return podcastsList.findIndex(podcast => podcast.videoId === videoId);
}

export const getFilteredPoscastsRepository = (podcastName: string): PodcastModel[] => {
    return podcastsList.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
}

export const alterPartialPodcastRepository = (videoId: string, newData: PodcastModel): void => {
    const podcastIndex = getOnePodcastRepository(videoId);

    podcastsList[podcastIndex] = newData;
}

export const removePodcastRepository = (videoId: string): void => {
    const podcastIndex = getOnePodcastRepository(videoId);

    podcastsList.splice(podcastIndex, 1);
}
