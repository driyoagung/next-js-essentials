// @ts-nocheck
import { default as __fd_glob_23 } from "../content/docs/routing/meta.json?collection=meta"
import { default as __fd_glob_22 } from "../content/docs/rendering/meta.json?collection=meta"
import { default as __fd_glob_21 } from "../content/docs/production/meta.json?collection=meta"
import { default as __fd_glob_20 } from "../content/docs/layout/meta.json?collection=meta"
import { default as __fd_glob_19 } from "../content/docs/data-fetching/meta.json?collection=meta"
import { default as __fd_glob_18 } from "../content/docs/getting-started/meta.json?collection=meta"
import { default as __fd_glob_17 } from "../content/docs/database/meta.json?collection=meta"
import { default as __fd_glob_16 } from "../content/docs/authentication/meta.json?collection=meta"
import { default as __fd_glob_15 } from "../content/docs/forms/meta.json?collection=meta"
import { default as __fd_glob_14 } from "../content/docs/crud/meta.json?collection=meta"
import { default as __fd_glob_13 } from "../content/docs/api/meta.json?collection=meta"
import { default as __fd_glob_12 } from "../content/docs/meta.json?collection=meta"
import * as __fd_glob_11 from "../content/docs/rendering/index.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/routing/index.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/production/index.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/layout/index.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/data-fetching/index.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/getting-started/index.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/database/index.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/forms/index.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/crud/index.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/api/index.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/authentication/index.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/index.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();

export const docs = await create.doc("docs", "content/docs", {"index.mdx": __fd_glob_0, "authentication/index.mdx": __fd_glob_1, "api/index.mdx": __fd_glob_2, "crud/index.mdx": __fd_glob_3, "forms/index.mdx": __fd_glob_4, "database/index.mdx": __fd_glob_5, "getting-started/index.mdx": __fd_glob_6, "data-fetching/index.mdx": __fd_glob_7, "layout/index.mdx": __fd_glob_8, "production/index.mdx": __fd_glob_9, "routing/index.mdx": __fd_glob_10, "rendering/index.mdx": __fd_glob_11, });

export const meta = await create.meta("meta", "content/docs", {"meta.json": __fd_glob_12, "api/meta.json": __fd_glob_13, "crud/meta.json": __fd_glob_14, "forms/meta.json": __fd_glob_15, "authentication/meta.json": __fd_glob_16, "database/meta.json": __fd_glob_17, "getting-started/meta.json": __fd_glob_18, "data-fetching/meta.json": __fd_glob_19, "layout/meta.json": __fd_glob_20, "production/meta.json": __fd_glob_21, "rendering/meta.json": __fd_glob_22, "routing/meta.json": __fd_glob_23, });