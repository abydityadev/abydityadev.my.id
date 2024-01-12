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
                        <div className="flex gap-3 items-center text-xs text-neutral-600 dark:text-neutral-400">
                            <span>Thread</span>
                            /
                            <time dateTime={post.date}>
                                {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(new Date(post.date))}
                            </time>
                        </div>
                        <h1 className="text-6xl font-black my-2">{post.title}</h1>
                        <p>{post.readTimeMinutes} min read <span className="text-neutral-500">@</span> <span className="text-indigo-500">{post.tags}</span></p>
                    </header>
                    <Divider />
                    <article className="prose dark:prose-invert xl:text-xl">
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
