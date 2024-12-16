"use client";

import { GetSupabaseUser } from "@/actions";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/container";
import SignInButton from "@/components/sign-in-button";

export default function Index() {
  const [user, setUser] = useState<any>(null);
  const [count, setCount] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1); // Increment the counter every 1 second
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Fetch and set the user
  useEffect(() => {
    const setSupabaseUser = async () => {
      const user = await GetSupabaseUser();
      if (user != null) {
        setUser(user);
      }
    };

    setSupabaseUser();
  }, [count]);

  // Redirect when user is set
  useEffect(() => {
    // console.log("check");
    // console.log(user);

    if (user != null) {
      router.push("/protected");
    }
  }, [user, count]);

  if (user != null) {
    redirect("/protected");
  }

  return (
    <Container>
      <SignInButton />
    </Container>
  );
}
