"use client";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { GetSupabaseUser } from "@/actions";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Index() {
  const [user, setUser] = useState<any>(null);
  const supabase = createClient();

  useEffect(() => {
    const setSupabaseUser = async () => {
      const user = await GetSupabaseUser();
      if (user != null) {
        setUser(user);
      }
    };

    setSupabaseUser();
  }, [user]);
  if (user != null) {
    redirect("/protected");
  }

  const handleClick = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  if (user != null) {
    redirect("/protected");
  }

  return (
    <>
      <Button onClick={handleClick}>Login with google</Button>
    </>
  );
}
