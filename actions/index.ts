"use server";

import { createClient } from "@/utils/supabase/server";

export const GetSupabaseUser = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};
