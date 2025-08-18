import { IncomingMessage, ServerResponse } from "http";

import getRequestBody from "../utils/getBody";
import getRouteParams from "../utils/getParams";

import { postPodcastService, getPodcastService, patchPodcastService, deletePodcastService } from "../services/podcastService";

import { ContentType } from "../types/ContentType";
import { PodcastDTO } from "../types/PodcastDTO";
import { Routes } from "../types/Routes";

const defaultContent = { "Content-Type": ContentType.JSON };

export const postPodcastController = async (request: IncomingMessage, response: ServerResponse) => {
    const body = await getRequestBody(request);
    const content: PodcastDTO = postPodcastService(body);

    response.writeHead(content.statusCode, defaultContent);

    response.end();
}

export const getPodcastController = async (request: IncomingMessage, response: ServerResponse) => {
    const content: PodcastDTO = getPodcastService(request.url);

    response.writeHead(content.statusCode, defaultContent);
    response.write(JSON.stringify(content.body));

    response.end();
}

export const patchPodcastController = async (request: IncomingMessage, response: ServerResponse) => {
    const params = getRouteParams(request.url || "", `${Routes.PODCAST}:id`);
    const body = await getRequestBody(request);

    const content: PodcastDTO = patchPodcastService(params.id, body);

    response.writeHead(content.statusCode, defaultContent);

    response.end();
}

export const deletePodcastController = async (request: IncomingMessage, response: ServerResponse) => {
    const params = getRouteParams(request.url || "", `${Routes.PODCAST}:id`);
    const content: PodcastDTO = deletePodcastService(params.id);

    response.writeHead(content.statusCode, defaultContent);

    response.end();
}
