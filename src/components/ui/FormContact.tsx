"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/cn";
import React, { useState } from "react";
import Statusdot from "./statusdot";

export function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [service, setService] = useState("Starter"); 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement; // <-- assert type here

  const formData = {
    name: form.name.valueOf,
    company: form.company.value,
    email: form.email.value,
    phone: form.phone.value,
    service: service,
    message: form.message.value,
  };


    setStatusMessage("⏳ Sending...");
    try {
      const res = await fetch(
        "https://telegram-proxy.jadalimamad.workers.dev",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      setSubmitted(true);
      setStatusMessage("🟢 Form submitted successfully!");
      form.reset();
    } catch (err) {
      setStatusMessage("🔴 Failed to send form. Try again.");
      console.error(err);
    }
  };
  
  return (
    <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-transparent">
      {submitted ? (
        <p className="text-green-500 text-center mt-4">🟢 Form submitted successfully!</p>
      ) : (
      <form className="my-8" name="contact" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input required id="name" name="name" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="company">Bussiness name</Label>
            <Input required id="company" name="company" placeholder="Your Company" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input required id="email" name="email" placeholder="Example@gmail.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="tel">Phone</Label>
          <Input required id="phone" name="phone" placeholder="0921919191" type="tel" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label>Service</Label>
          <Statusdot value={service} onChange={setService}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="text">Message</Label>
          <Input
            id="message"
            required
            placeholder="Describe what you want from us."
            type="text"
            name="message"
            className="h-28"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-800 block w-full text-white rounded-md h-10 font-medium"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>

        {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" /> */}
      </form>
      )}
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-[2px] w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};