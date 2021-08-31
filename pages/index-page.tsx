import Head from "next/head";
import Script from "next/script";
import React from "react";
import Layout from "../components/layout/onepirate/Layout";
import { PostModel } from "../model/post";
import { siteConfig } from "../util/siteConfig";
import parse from "html-react-parser";
import styles from "../styles/Slug.module.css";

const Index = ({ posts }: { posts: PostModel[] }) => {
  return (
    <>
      {posts[0]?.head ? <Head>{parse(posts[0]?.head)}</Head> : ""}
      <section
        className={styles.contentSection}
        dangerouslySetInnerHTML={{ __html: posts[0]?.content }}
      ></section>
      {posts[0]?.javascript ? (
        <Script id="post-added"> {posts[0]?.javascript} </Script>
      ) : (
        ""
      )}
    </>
  );
};

export const getPostsBySlug = async (slug: string): Promise<PostModel[]> => {
  const res = await fetch(
    `${process.env.contentApiHost}/v1/posts?slug=${slug}`
  );
  let posts = await res.json();
  return posts;
};

export const getStaticProps = async () => {
  const posts = await getPostsBySlug("home");
  return {
    props: {
      posts,
    },
  };
};

Index.getLayout = (page: any) => <Layout props={siteConfig}> {page} </Layout>;

export default Index;
