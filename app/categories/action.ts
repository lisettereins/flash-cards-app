'use server'

import { createClient } from "@/lib/supabase/server";

export async function createCategory(name: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("categories")
    .insert({ name })
    .select();
    

  if (error) {
    throw new Error("create failed");
  }
  return { success: true };
}

export async function createCard(question: string, answer: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("cards")
    .insert({ question, answer })
    .select();
    

  if (error) {
    throw new Error("create failed");
  }
  return { success: true };
}

export async function updateCard(cardId: string, question: string, answer:string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("cards")
    .update({ question, answer })
    .eq("id", cardId)
    .select();

  if (error) {
    throw new Error("update failed");
  }
  return { success: true };
}

export async function deleteCard(cardId: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("cards")
    .delete()
    .eq("id", cardId)
    .select();

  if (error) {
    throw new Error("delete failed");
  }
  return { success: true };
}
