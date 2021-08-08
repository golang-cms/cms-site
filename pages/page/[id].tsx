import { PostModel } from "../../model/post";

function createMarkup(content: string) {
  return { __html: content };
}


const Post = ({ post }: { post: PostModel }) => {
  return (
    <>
      <h2>{post?.title}</h2>
      <section dangerouslySetInnerHTML={createMarkup(post?.content)}></section>
    </>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: false,
  };
}

// This also gets called at build time
export async function getStaticProps({ params }: any) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://cms-api-content-api-cms-zt1983811.cloud.okteto.net/v1/posts/${params.id}`
  );
  const post = await res.json();

  // Pass post data to the page via props
  return {
    props: { post },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}

export default Post;
