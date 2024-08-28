import { createClient } from "@sanity/client";

export default createClient({
    projectId: "8gmyi8zu",
    dataset: "production",
    apiVersion: "2024-08-28",
    useCdn: false
})