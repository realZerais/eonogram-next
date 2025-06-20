import { Post } from "@/components/Post";
import { createClient } from '@/utils/supabase/server';
import { Hero } from "@/components/Hero";

export default async function Home() {

  const supabase = await createClient();
  const { data: posts } = await supabase.from("posts").select();

  
  return (
    <div className="w-full px-10 m-5">
      <Hero/>
      
    </div>
  );
}