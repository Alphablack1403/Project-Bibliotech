import { createClient } from 'jsr:@supabase/supabase-js@2'

const url = "https://gmicieambssdwlicouse.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtaWNpZWFtYnNzZHdsaWNvdXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5NDE2MTksImV4cCI6MjA0OTUxNzYxOX0.KnYIrsddYN_05_7s_wrESUdhNGrwqYfR59E4KEuuaws"
const supabase = supabase.createClient(url, key);
export const LibrosController = {
    selectAll: async ()=>{
      //Logica
      const {data,error}=await supabase.from('libros').select ()
      if (error)
        return {error}
      return {data}
      
    },
    removeEventListener: ()=>{}
  }