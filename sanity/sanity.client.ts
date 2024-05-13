


import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'



const config: ClientConfig = {
    projectId: 'r8udx71r',
  dataset: "production",
  apiVersion: "2023-07-16",
  useCdn: false,
};

const client = createClient(config);
export const apiVersion = config.apiVersion;
export const dataset = config.dataset;
export const projectId = config.projectId;

const builder = imageUrlBuilder(client)

export function urlFor(source:any){
  return builder.image(source);
}


export default client;