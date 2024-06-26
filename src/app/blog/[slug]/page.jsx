import Image from 'next/image'
import styles from './singleBlog.module.css'
import PostUser from '@/components/postUser/PostUser'
import { Suspense } from 'react'
// import { getPost } from '@/lib/data'

// FETCH DATA WITH USING A FAKE API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
//   if (!res.ok) {
//     throw new Error('Something went wrong')
//   }
//   return res.json()
// }

// MONGODB FETCH DATA API ROUTES
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const SingleBlog = async ({ params }) => {
  const { slug } = params

  // FETCH DATA WITH USING A FAKE API
  // const post = await getData(slug)

  // FETCH DATA WITHOUT USING AN API
  // const post = await getPost(slug)

  // MONGODB FETCH DATA API ROUTES
  const post = await getData(slug);

  return (
    <div className={styles.container}>
      {post.img &&
        <div className={styles.imgContainer}>
          <Image
            src={post.img}
            alt=""
            fill
            className={styles.img}
          />
        </div>
      }
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  )
}

export default SingleBlog