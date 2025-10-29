import EditCardForm from "@/components/edit-card-form";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function EditCardPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const supabase = await createClient();
  const { id } = await params;

  const { data: card } = await supabase
    .from("cards")
    .select()
    .eq("id", id)
    .single();

  if (!card) {
    notFound();
  }

  return (
    <>
    <Link href={`/categories/${card.categories_id}/cards/`}>
      Cards
    </Link>
    <div
      className="mx-auto flex-col max-w-sm items-center gap-x-4 rounded-xl 
    bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none 
    dark:-outline-offset-1 dark:outline-white/10"
    >
      
      <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">
        Edit card
      </h1>
      <EditCardForm card={card} />
    </div>
    </>
  );
}
