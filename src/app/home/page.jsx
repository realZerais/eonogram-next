import { createClient } from '@/utils/supabase/server';
import { Post } from '@/components/Post';

export default async function Home() {
  const supabase = await createClient();
  const { data: posts } = await supabase.from("posts").select();

  // return <pre>{JSON.stringify(posts, null, 2)}</pre>


  
  return(
    <div className='w-2/3 p-2 h-full'>
      
      <h2 className='font-semibold'>Posts</h2>
  

      {posts.map((post) =>(
        <Post post={post} key={post.id}></Post>
      ))}

    </div>
  )
}