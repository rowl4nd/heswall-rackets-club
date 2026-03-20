import { Metadata } from "next";
import BookPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Book a Court",
  description: "Book squash, racketball, or padel courts online at Heswall Rackets Club. Members book free, padel is pay & play for everyone.",
};

export default function BookPage() {
  return <BookPageClient />;
}
