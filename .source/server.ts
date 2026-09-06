// @ts-nocheck
import { default as __fd_glob_33 } from "../content/docs/routing/meta.json?collection=meta"
import { default as __fd_glob_32 } from "../content/docs/rendering/meta.json?collection=meta"
import { default as __fd_glob_31 } from "../content/docs/production/meta.json?collection=meta"
import { default as __fd_glob_30 } from "../content/docs/layout/meta.json?collection=meta"
import { default as __fd_glob_29 } from "../content/docs/getting-started/meta.json?collection=meta"
import { default as __fd_glob_28 } from "../content/docs/data-fetching/meta.json?collection=meta"
import { default as __fd_glob_27 } from "../content/docs/forms/meta.json?collection=meta"
import { default as __fd_glob_26 } from "../content/docs/api/meta.json?collection=meta"
import { default as __fd_glob_25 } from "../content/docs/database/meta.json?collection=meta"
import { default as __fd_glob_24 } from "../content/docs/crud/meta.json?collection=meta"
import { default as __fd_glob_23 } from "../content/docs/authentication/meta.json?collection=meta"
import { default as __fd_glob_22 } from "../content/docs/meta.json?collection=meta"
import * as __fd_glob_21 from "../content/docs/routing/nested-route.mdx?collection=docs"
import * as __fd_glob_20 from "../content/docs/routing/navigation.mdx?collection=docs"
import * as __fd_glob_19 from "../content/docs/routing/index.mdx?collection=docs"
import * as __fd_glob_18 from "../content/docs/routing/dynamic-route.mdx?collection=docs"
import * as __fd_glob_17 from "../content/docs/routing/basic-routing.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/rendering/index.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/production/index.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/layout/shared-layout.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/layout/root-layout.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/layout/nested-layout.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/layout/index.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/getting-started/what-is-nextjs.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/getting-started/project-structure.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/getting-started/nextjs-vs-react-vite.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/getting-started/index.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/database/index.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/forms/index.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/data-fetching/index.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/crud/index.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/authentication/index.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/api/index.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/index.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();

export const docs = await create.doc("docs", "content/docs", {"index.mdx": __fd_glob_0, "api/index.mdx": __fd_glob_1, "authentication/index.mdx": __fd_glob_2, "crud/index.mdx": __fd_glob_3, "data-fetching/index.mdx": __fd_glob_4, "forms/index.mdx": __fd_glob_5, "database/index.mdx": __fd_glob_6, "getting-started/index.mdx": __fd_glob_7, "getting-started/nextjs-vs-react-vite.mdx": __fd_glob_8, "getting-started/project-structure.mdx": __fd_glob_9, "getting-started/what-is-nextjs.mdx": __fd_glob_10, "layout/index.mdx": __fd_glob_11, "layout/nested-layout.mdx": __fd_glob_12, "layout/root-layout.mdx": __fd_glob_13, "layout/shared-layout.mdx": __fd_glob_14, "production/index.mdx": __fd_glob_15, "rendering/index.mdx": __fd_glob_16, "routing/basic-routing.mdx": __fd_glob_17, "routing/dynamic-route.mdx": __fd_glob_18, "routing/index.mdx": __fd_glob_19, "routing/navigation.mdx": __fd_glob_20, "routing/nested-route.mdx": __fd_glob_21, });

export const meta = await create.meta("meta", "content/docs", {"meta.json": __fd_glob_22, "authentication/meta.json": __fd_glob_23, "crud/meta.json": __fd_glob_24, "database/meta.json": __fd_glob_25, "api/meta.json": __fd_glob_26, "forms/meta.json": __fd_glob_27, "data-fetching/meta.json": __fd_glob_28, "getting-started/meta.json": __fd_glob_29, "layout/meta.json": __fd_glob_30, "production/meta.json": __fd_glob_31, "rendering/meta.json": __fd_glob_32, "routing/meta.json": __fd_glob_33, });