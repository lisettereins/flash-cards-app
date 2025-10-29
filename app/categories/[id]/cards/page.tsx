import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function Page() {
  const supabase = await createClient();
  const { data: cards } = await supabase.from("cards").select();

  return (
    <>
    <Link href={`/categories/`}>
              Categories
    </Link>
      <ul className="flex flex-wrap gap-6 justify-center mt-8">
        {cards?.map((card) => (
          <li key={card.id}
              className="flex flex-col justify-between bg-white dark:bg-slate-800 
                 rounded-2xl shadow-md p-6 w-64 hover:shadow-lg 
                 transition-all duration-200 border border-gray-100 
                 dark:border-white/10">
            Q:{card.question}{" "}
            A:{card.answer}
            <Link href={`/categories/${card.categories_id}/cards/${card.id}/edit`}>
              Edit card
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
