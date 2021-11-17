import parse from "html-react-parser";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Script from "next/script";
import React, { ReactElement, useEffect, useState } from "react";
import Layout from "../src/components/layout/onepirate/Layout";
import { PostModel } from "../src/model/post";
import { SiteConfigModel } from "../src/model/siteConfig";
import styles from "../styles/Slug.module.css";

function createMarkup(content: string) {
  return { __html: content };
}

let posts: PostModel[];

const Page = ({ post }: { post: PostModel }) => {
  const router = useRouter();
  console.log("locale is " , router.locale);

  if (router.isFallback) {
    // your loading indicator
    return <div>loading...</div>;
  }
  // console.log(post);
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <>
      <Head>{parse(post?.translations[0].head)}</Head>
      {/* <h2>{post?.title}</h2> */}
      <section
        className={styles.contentSection}
        // dangerouslySetInnerHTML={createMarkup(post?.content)}
        dangerouslySetInnerHTML={{ __html: post?.translations[0].content }}
      ></section>
      {post?.translations[0]?.javascript ? (
        <Script id="slug-page-id">
          {" "}
          {post?.translations[0].javascript}{" "}
        </Script>
      ) : (
        ""
      )}
    </>
  );
};

Page.getLayout = (page: ReactElement, siteConfig: SiteConfigModel) => {
    return <Layout props={siteConfig}> {page} </Layout>;
};
 

export const getPosts = async (): Promise<PostModel[]> => {
  if (posts) {
    // return posts;
  }

  const res = await fetch(`${process.env.contentApiHost}/v1/posts`);
  posts = await res.json();
  return posts;
};

// This function gets called at build time
export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post?.slug,
      },
    };
  });
  // console.log("============ get post", paths);

  return {
    paths: paths,
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: false,
  };
}

// This also gets called at build time
export async function getStaticProps({ params }: any) {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug == params.slug);

  return {
    props: { post },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}

export default Page;