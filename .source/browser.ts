// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "authentication/index.mdx": () => import("../content/docs/authentication/index.mdx?collection=docs"), "api/index.mdx": () => import("../content/docs/api/index.mdx?collection=docs"), "crud/index.mdx": () => import("../content/docs/crud/index.mdx?collection=docs"), "forms/index.mdx": () => import("../content/docs/forms/index.mdx?collection=docs"), "database/index.mdx": () => import("../content/docs/database/index.mdx?collection=docs"), "getting-started/index.mdx": () => import("../content/docs/getting-started/index.mdx?collection=docs"), "data-fetching/index.mdx": () => import("../content/docs/data-fetching/index.mdx?collection=docs"), "layout/index.mdx": () => import("../content/docs/layout/index.mdx?collection=docs"), "production/index.mdx": () => import("../content/docs/production/index.mdx?collection=docs"), "routing/index.mdx": () => import("../content/docs/routing/index.mdx?collection=docs"), "rendering/index.mdx": () => import("../content/docs/rendering/index.mdx?collection=docs"), }),
};
export default browserCollections;