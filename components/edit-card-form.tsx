"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateCard } from "@/app/categories/action";


export default function EditCardForm({
  card,
}: {
  card: { id: string; question: string, answer: string };
}) {
   const [question, setQuestion] = useState(card.question);
  const [answer, setAnswer] = useState(card.answer);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await updateCard(card.id, question, answer);
    router.push("/cards");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
       <input
          type="text"
          placeholder="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
          className="p-2 rounded border dark:bg-slate-700 dark:text-white"
        />
         <input
          type="text"
          placeholder="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
          className="p-2 rounded border dark:bg-slate-700 dark:text-white"
        />
      <button
        type="submit"
        className="bg-gray-50 text-black p-2 rounded hover:bg-gray-200"
      >
        Save changes
      </button>
    </form>
  );
}
