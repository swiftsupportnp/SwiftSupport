import { globalSettings } from "./globalSettings";
import { page } from "./page";
import { guide } from "./guide";
import { service } from "./service";
import { testimonial } from "./testimonial";
import * as blocks from "./blocks";

export const schemaTypes = [
    globalSettings,
    page,
    guide,
    service,
    testimonial,
    ...Object.values(blocks),
];
