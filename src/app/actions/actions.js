'use server'

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';


export async function createPost(formData) {

    const title = formData.get('title');
    const content = formData.get('content');

    const payload = [{
        title: title,
        content: content
    }]

    console.log(payload);
    
    const supabase = await createClient();

    const {data: newPost, error} = await supabase.from('posts').insert(payload).select();
   
    console.log("new Post", newPost);
    console.log("error", error);
    
    

    revalidatePath('/home')
    // Update data
    // Revalidate cache
}