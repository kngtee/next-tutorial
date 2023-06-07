import {defineConfig} from "sanity";
import {deskTool} from "sanity/desk";
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: "7dauu8lt",
    dataset: "production",
    title: "My Portfolio",
    apiVersion: "2023-06-07",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: schemas},
})

export default config;