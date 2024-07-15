import { useState } from 'react';
import './App.css';
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import WordFadeIn from "@/components/magicui/word-fade-in";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
import { BorderBeam } from "@/components/magicui/border-beam";


function App() {  
  return (
    <>
    <WordFadeIn words="Hello bro Don't worry. Let's solve the problem"></WordFadeIn>
    </>
  )
}

export default App
