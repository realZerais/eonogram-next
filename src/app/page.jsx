import { Post } from "@/components/Post";
import { createClient } from '@/utils/supabase/server';





export default async function Home() {

  const supabase = await createClient();
  const { data: posts } = await supabase.from("posts").select();

  
  return (
    <div className="w-full px-55 m-5">
      {posts.map((post) =>(
        <Post post={post} key={post.id}></Post>
      ))}   

{posts.map((post) =>(
        <Post post={post} key={post.id}></Post>
      ))} 

{posts.map((post) =>(
        <Post post={post} key={post.id}></Post>
      ))} 

{posts.map((post) =>(
        <Post post={post} key={post.id}></Post>
      ))} 


{posts.map((post) =>(
        <Post post={post} key={post.id}></Post>
      ))} 

{posts.map((post) =>(
        <Post post={post} key={post.id}></Post>
      ))} 
    </div>
  );
}