import { defineDocumentType, makeSource } from "@contentlayer/source-files";
import readingTime from 'reading-time'

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        date: { type: "date", required: true },
        tags: { type: 'string', required: true },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (post) => `/thread/${post._raw.flattenedPath}`,
        },
        readTimeMinutes: {
            type: 'number',
            resolve: (doc) => calculateReadingTime(doc.body.raw)
        }
    },
}));

export default makeSource({
    contentDirPath: "src/data/threads",
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});

export const calculateReadingTime = (text: any) => {
    // Step 2: Determine the average reading speed (words per minute)
    const wordsPerMinute = 200;
    // Step 3: Calculate the word count
    const noOfWords = text.split(/\s/g).length;
    // Step 4: Calculate the estimated reading time (in minutes)
    const minutes = noOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    // Step 5: Format the output
    return `${readTime}`;
}