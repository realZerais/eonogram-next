import { createClient } from '@/utils/supabase/server';
import { Post } from '@/components/Post';
import PostForm from '@/components/PostForm';

export default async function Home() {
  const supabase = await createClient();
  const { data: posts } = await supabase.from("posts").select();
  
  return(
    <div className='w-2/3 p-2 h-full'>
        
      <PostForm/>
      
      <h2 className='font-semibold my-5'>Posts</h2>

      {posts.map((post) =>(
        <Post post={post} key={post.id}></Post>
      ))}

    </div>
  )
}