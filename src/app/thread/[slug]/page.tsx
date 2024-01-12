import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";

import Link from "next/link";
import { BlogNav } from "@/components/Navbar/Navigation";
import Footer from "@/components/Footer/Footer";
import Divider from "@/components/Divider";

const mdxComponents: MDXComponents = {
    a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
    if (!post) notFound();

    const MDXContent = useMDXComponent(post.body.code);

    return (
        <main>
            <BlogNav post={post.title} />
            <section className='max-w-3xl mx-auto px-3 xl:px-0'>
                <section className="my-16">
                    <header>
                        <div className="flex gap-3 items-center text-xs text-neutral-600 dark:text-neutral-400 uppercase font-semibold">
                            <span className="text-indigo-500">{post.tags}</span>
                            •
                            <time dateTime={post.date}>
                                {new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(new Date(post.date))}
                            </time>
                            •
                            <span>{post.readTimeMinutes} min read</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl font-black my-5">{post.title}</h1>
                    </header>
                    <Divider />
                    <article className="prose dark:prose-invert xl:text-xl prose-p:text-gray-400">
                        <MDXContent components={mdxComponents} />
                    </article>
                </section>
            </section>
            <hr className='pb-10  border-t border-t-neutral-700' />
            <Footer />
        </main >
    );
};

export default PostLayout;

export const generateStaticParams = async () =>
    allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
    if (!post) notFound();
    return { title: post.title };
};
