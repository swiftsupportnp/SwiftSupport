import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}

/**
 * Optimizes a Sanity image for the web.
 * - Forces WebP format
 * - Automatic quality adjustment
 * - Smart cropping (hotspot support)
 */
export function optimizeImage(source: any, width?: number, height?: number) {
    if (!source) return "";

    let img = urlFor(source).format("webp").auto("format");

    if (width) img = img.width(width);
    if (height) img = img.height(height);

    return img.url();
}
