"use client"
import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { Button } from "@/components/ui/button";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { createClient } from "@/utils/supabase/client";

export default function Index() {
  const supabase = createClient()
  const handleClick = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }
  return (
    <>
      <Button onClick={handleClick}>Login with google</Button>
    </>
  );
}
