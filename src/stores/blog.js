import {defineStore} from 'pinia';
import {ref} from 'vue';
const hasura = import.meta.env.VITE_X_HASURA_ADMIN_SECRET;
const apiUrl = import.meta.env.VITE_HASURA_ENDPOINT;
import axios from 'axios';

export const useBlogStore = defineStore('blog', () => {
    // other options...
    const blogs = ref([])

    async function getBlogById (id) {
        console.log('getBlogById', id)
        const blog =  this.blogs.filter(blog => blog.id == id)
        console.log(blog)
        return blog
    }

    async function fetchBlogs () {
        try {
            const result = await axios({
                method:"POST",
                url:apiUrl,
                headers:{
                    "content-type":"application/json",
                    "x-hasura-admin-secret":hasura
                },
                data:{
                    query:`
                        query getAllBlogs {
                            blog_posts {
                                id
                                title
                                content
                                created_at
                                updated_at
                                id
                                tagline
                                tags
                                thumbnail
                                user {
                                username
                                }
                                }
                            }
                        `
                }
            })
            console.log(result.data.data.blog_posts)
            this.blogs = result.data.data.blog_posts
        } catch (error) {
            console.error(error)
        }
    }

    return {blogs, fetchBlogs, getBlogById}
  })