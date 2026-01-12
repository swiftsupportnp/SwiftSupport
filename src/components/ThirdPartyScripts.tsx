import { client } from "@/lib/sanity";

async function getCustomScripts() {
    const query = `*[_type == "globalSettings"][0].customScripts`;
    return await client.fetch(query);
}

export default async function ThirdPartyScripts() {
    const scripts = await getCustomScripts();

    if (!scripts) return null;

    return (
        <div
            id="third-party-scripts"
            style={{ display: "none" }}
            dangerouslySetInnerHTML={{ __html: scripts }}
        />
    );
}
