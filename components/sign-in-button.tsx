"use client";

import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/client";

const SignInButton = () => {
      const supabase = createClient();
  const handleClick = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };
  return <Button onClick={handleClick}>Login with google</Button>;
};

export default SignInButton;
