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