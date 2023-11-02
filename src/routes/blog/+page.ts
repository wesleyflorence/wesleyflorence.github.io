import type { PageLoad } from './$types'

interface PostMeta {
  title: string
  date: string
}

interface Post {
  path: string
  meta: PostMeta
}

interface PageData {
  posts: Post[]
}

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch(`/api/posts`)
  const posts = await response.json()

  return {
    posts,
  }
}

export type { PageData, Post, PostMeta };
