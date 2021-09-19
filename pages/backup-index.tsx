import parse from "html-react-parser";
import Head from "next/head";
import Script from "next/script";
import React, { ReactElement } from "react";
import Layout from "../src/components/layout/onepirate/Layout";
import { PostModel } from "../src/model/post";
import { SiteConfigModel } from "../src/model/siteConfig";
import styles from "../styles/Slug.module.css";

const Index = ({ posts }: { posts: PostModel[] }) => {
  return (
    <>
      {posts[0]?.translations[0].head ? <Head>{parse(posts[0]?.translations[0].head)}</Head> : ""}
      <section
        className={styles.contentSection}
        dangerouslySetInnerHTML={{ __html: posts[0]?.translations[0].content }}
      ></section>
      {posts[0]?.translations[0].javascript ? (
        <Script id="post-added"> {posts[0]?.translations[0].javascript} </Script>
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

Index.getLayout = (page: ReactElement, siteConfig: SiteConfigModel) => <Layout props={siteConfig}> {page} </Layout>;

export default Index;
