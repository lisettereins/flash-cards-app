import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function Page() {
  const supabase = await createClient();
  const { data: categories } = await supabase.from("categories").select();

  return (
    <>
    <Link href={`/categories/create`}>
              New category
    </Link>
      <ul className="flex flex-wrap gap-6 justify-center mt-8">
        {categories?.map((category) => (
          <li key={category.id}
              className="flex flex-col justify-between bg-white dark:bg-slate-800 
                 rounded-2xl shadow-md p-6 w-64 hover:shadow-lg 
                 transition-all duration-200 border border-gray-100 
                 dark:border-white/10">
            {category.name}{" "}
            <Link href={`/categories/${category.id}/cards/create`}>
              New card
            </Link>
            <Link href={`/categories/${category.id}/cards`}>
              Cards
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
