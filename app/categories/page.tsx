import { createClient } from '@/lib/supabase/server'

export default async function Page() {
  const supabase = await createClient()
  const { data: categories } = await supabase.from('categories').select()

  return (
    <>
    
      <ul>
        {categories?.map((category) => (
          <li key={category.id}>
            {category.name}{" "}
          </li>
        ))}
      </ul>
    
    </>
  );
}