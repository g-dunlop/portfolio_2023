import {defineStore} from 'pinia';
import {ref} from 'vue';
const hasura = import.meta.env.VITE_X_HASURA_ADMIN_SECRET;
const apiUrl = import.meta.env.VITE_HASURA_ENDPOINT;
import axios from 'axios';

export const useBlogStore = defineStore('blog', () => {
    // other options...
    const blogs = ref([])
    const blog = ref(null)

    async function getBlogById (id) {
        try{
        const result = await axios({
            method:"POST",
            url:apiUrl,
            headers:{
              "content-type": "application/json",
              "x-hasura-admin-secret": hasura
            },
            data: {
                query:`
                query getBlogPost {
                    blog_posts(where: {id: {_eq: ${id}}}) {
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
        
            }})
            console.log(result.data.data.blog_posts)
            this.blog = result.data.data.blog_posts[0]
        } catch (error) {
            console.error(error)
        }
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
                                created_at
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

    return {blog, blogs, fetchBlogs, getBlogById}
  })