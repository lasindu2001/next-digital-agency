import PostCard from '@/components/postCard/PostCard'
import styles from './blog.module.css'
import { getPosts } from '@/lib/data'

// FETCH DATA WITH USING AN API
// const getData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next: {revalidate: 3600}})
//   if (!res.ok) {
//     throw new Error('Something went wrong')
//   }
//   return res.json()
// }

const Blog = async () => {
  // FETCH DATA WITH USING AN API
  // const posts = await getData()

  // FETCH DATA WITHOUT USING AN API
  const posts = await getPosts()

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post}>
          <PostCard post={post}/>
        </div>
      ))}
    </div>
  )
}

export default Blog