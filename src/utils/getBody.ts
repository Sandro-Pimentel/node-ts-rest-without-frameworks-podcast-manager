import { IncomingMessage } from "http";

export default async function getRequestBody(request: IncomingMessage) {
    return new Promise<any>((resolve, reject) => {
        let body = "";

        request.on("data", chunk => body += chunk);
        request.on("end", () => {
          try {
            resolve(body ? JSON.parse(body) : {});
          } catch (error) {
            reject(error);
          }
        });
        request.on("error", error => reject(error));
      });
}
