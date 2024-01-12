// contentlayer.config.ts
import { defineDocumentType, makeSource } from "@contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "string", required: true }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/thread/${post._raw.flattenedPath}`
    },
    readTimeMinutes: {
      type: "number",
      resolve: (doc) => calculateReadingTime(doc.body.raw)
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/data/threads",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});
var calculateReadingTime = (text) => {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `${readTime}`;
};
export {
  Post,
  calculateReadingTime,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ZBMOOA7S.mjs.map
