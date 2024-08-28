import { createClient } from "contentful"

const useContentful = () => {

    // const client = createClient({
    //     space: import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID,
    //     accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    // })

    const client = createClient({
        space: 'ibhu9qvhd8r8',
        environment: 'master', // defaults to 'master' if not set
        accessToken: 'WLDYimBmzWJYWO2675PoGQdY2FIetwrE9zwvrs4ImGo'
      })

    const fetchBlogs = async () => {
        try {
          const entries = await client.getEntries({
                content_type: "primacyBlog",
            })
            return entries
        } catch (error) {
            console.log(error)
        }
    }
 return {fetchBlogs}
}

export default useContentful;