import * as http from "http";

import { postPodcastController, getPodcastController, patchPodcastController, deletePodcastController } from "./controllers/podcastController"; 
import { Routes } from "./types/Routes";
import { HttpMethod } from "./types/HttpMethod";
import { StatusCode } from "./types/StatusCode";
import { ContentType } from "./types/ContentType";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse): Promise<void> => {
    const baseUrl = request.url?.split("?")[0];

    if(request.method === HttpMethod.POST && baseUrl === Routes.PODCAST) await postPodcastController(request, response);

    else if(request.method === HttpMethod.GET && baseUrl === Routes.PODCAST) await getPodcastController(request, response);
    
    else if(request.method === HttpMethod.PATCH && baseUrl?.includes(Routes.PODCAST)) await patchPodcastController(request, response);

    else if(request.method === HttpMethod.DELETE && baseUrl?.includes(Routes.PODCAST)) await deletePodcastController(request, response);

    else  {
        response.writeHead(StatusCode.NotFound, { "Content-Type": ContentType.JSON });
        response.write(JSON.stringify({ message: "Rota não encontrada" }));

        response.end();
    }
}
