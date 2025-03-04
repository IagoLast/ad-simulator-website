"use client";

import { Coins, Gamepad2, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WaitlistForm } from "@/components/waitlist-form";

export default function Home() {
  const [jumboEmail, setJumboEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleJumboSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: jumboEmail }),
      });

      if (response.ok) {
        window.alert("Thank you for joining our waitlist!");
        setJumboEmail(""); // Clear the input after successful submission
      } else {
        const data = await response.json();
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-pixel-border bg-pixel-dark px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-6 w-6 text-pixel-green" />
            <span className="font-pixel text-xl text-white">AD SIMULATOR</span>
          </div>
          <nav className="hidden space-x-4 md:block">
            <Link
              href="#features"
              className="font-pixel text-pixel-green hover:text-pixel-yellow"
            >
              Features
            </Link>
            <Link
              href="#how-to-play"
              className="font-pixel text-pixel-green hover:text-pixel-yellow"
            >
              How to Play
            </Link>
            <Link
              href="#waitlist"
              className="font-pixel text-pixel-green hover:text-pixel-yellow"
            >
              Join Waitlist
            </Link>
          </nav>
          <Button variant="pixel" size="sm" className="hidden md:inline-flex">
            Play Now
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-pixel-pattern px-4 py-16 md:py-24">
          <div className="container mx-auto grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-6">
              <div className="inline-block rounded bg-pixel-dark px-4 py-1">
                <span className="font-pixel text-sm text-pixel-yellow">
                  COMING SOON
                </span>
              </div>
              <h1 className="font-pixel font-bold text-4xl text-white md:text-5xl lg:text-6xl">
                AD <span className="text-pixel-green">SIMULATOR</span>
              </h1>
              <p className="max-w-[600px] font-pixel text-lg text-pixel-light-gray">
                A battlefield full of ads. Sponsored weapons. <br /> Join
                matches and win the pot!
              </p>
              <form
                onSubmit={handleJumboSubmit}
                className="w-full max-w-md mt-6"
              >
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={jumboEmail}
                    onChange={(e) => setJumboEmail(e.target.value)}
                    className="flex-grow rounded rounded-r-none"
                    disabled={submitting}
                  />
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="px-8 rounded rounded-l-none"
                  >
                    {submitting ? "Sending..." : "Join waitlist"}
                  </Button>
                </div>
              </form>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[640px] aspect-video">
                <div className="absolute inset-0 rounded-lg border-4 border-pixel-border bg-pixel-dark shadow-pixel"></div>
                <div className="absolute inset-4 rounded-lg border-2 border-pixel-green bg-pixel-dark overflow-hidden">
                  <video
                    className="w-full h-full object-contain"
                    src="/video/demo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-pixel-dark px-4 py-16">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center font-pixel text-3xl text-white md:text-4xl">
              Game <span className="text-pixel-green">Features</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border-2 border-pixel-border bg-pixel-card p-6 shadow-pixel">
                <div className="mb-4 inline-flex rounded-full bg-pixel-green/20 p-3">
                  <Gamepad2 className="h-6 w-6 text-pixel-green" />
                </div>
                <h3 className="mb-2 font-pixel text-xl text-white">
                  Ad Battlefield
                </h3>
                <p className="font-pixel text-pixel-light-gray">
                  Fight in a world where everything is an advertisement. Use
                  branded weapons and power-ups to dominate.
                </p>
              </div>
              <div className="rounded-lg border-2 border-pixel-border bg-pixel-card p-6 shadow-pixel">
                <div className="mb-4 inline-flex rounded-full bg-pixel-yellow/20 p-3">
                  <Coins className="h-6 w-6 text-pixel-yellow" />
                </div>
                <h3 className="mb-2 font-pixel text-xl text-white blink-animation">
                  Win the Pot
                </h3>
                <p className="font-pixel text-pixel-light-gray">
                  Each match has a prize pool. The last player standing takes it
                  all. Will you be the champion?
                </p>
              </div>
              <div className="rounded-lg border-2 border-pixel-border bg-pixel-card p-6 shadow-pixel">
                <div className="mb-4 inline-flex rounded-full bg-pixel-red/20 p-3">
                  <Users className="h-6 w-6 text-pixel-red" />
                </div>
                <h3 className="mb-2 font-pixel text-xl text-white">
                  Regular Matches
                </h3>
                <p className="font-pixel text-pixel-light-gray">
                  New matches are generated periodically. Join the waitlist and
                  get notified when it's time to play.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-to-play" className="bg-pixel-pattern px-4 py-16">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center font-pixel text-3xl text-white md:text-4xl">
              How to <span className="text-pixel-green">Play</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pixel-dark font-pixel text-2xl text-pixel-green">
                  1
                </div>
                <h3 className="mb-2 font-pixel text-xl text-white">Sign Up</h3>
                <p className="font-pixel text-pixel-light-gray">
                  Join the waitlist to get early access to the game.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pixel-dark font-pixel text-2xl text-pixel-green">
                  2
                </div>
                <h3 className="mb-2 font-pixel text-xl text-white">
                  Get Notified
                </h3>
                <p className="font-pixel text-pixel-light-gray">
                  Receive alerts when new matches are about to start.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pixel-dark font-pixel text-2xl text-pixel-green">
                  3
                </div>
                <h3 className="mb-2 font-pixel text-xl text-white">
                  Join Battle
                </h3>
                <p className="font-pixel text-pixel-light-gray">
                  Enter the ad-filled battlefield and fight for supremacy.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pixel-dark font-pixel text-2xl text-pixel-green">
                  4
                </div>
                <h3 className="mb-2 font-pixel text-xl text-white">
                  Win Rewards
                </h3>
                <p className="font-pixel text-pixel-light-gray">
                  Be the last one standing and claim the prize pool.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="advertise"
          className="bg-pixel-dark px-4 py-16 border-y border-pixel-border"
        >
          <div className="container mx-auto">
            <h2 className="mb-6 text-center font-pixel text-3xl text-white md:text-4xl">
              Advertise{" "}
              <span className="text-pixel-yellow blink-animation">
                Your Brand
              </span>
            </h2>
            <p className="mb-10 text-center font-pixel text-pixel-light-gray max-w-2xl mx-auto">
              Place your brand in the battlefield. Get your products, services,
              and logos in front of players as they compete for the prize.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="rounded-lg border-2 border-pixel-border bg-pixel-card p-6 shadow-pixel">
                <h3 className="mb-4 font-pixel text-2xl text-white">
                  Advertising Options
                </h3>
                <ul className="space-y-3 font-pixel text-pixel-light-gray">
                  <li className="flex items-start gap-2">
                    <span className="text-pixel-green">▶</span>
                    <span>Sponsored weapons with your brand logo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pixel-green">▶</span>
                    <span>In-game billboards and banners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pixel-green">▶</span>
                    <span>Power-ups branded with your company</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pixel-green">▶</span>
                    <span>Sponsored game areas and zones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pixel-green">▶</span>
                    <span>Custom branded character skins</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border-2 border-pixel-border bg-pixel-card p-6 shadow-pixel">
                <h3 className="mb-4 font-pixel text-2xl text-white">
                  Why Advertise With Us?
                </h3>
                <div className="space-y-4 font-pixel text-pixel-light-gray">
                  <p>
                    <span className="text-pixel-yellow font-bold">
                      Engagement:
                    </span>{" "}
                    Players interact directly with your brand during intense
                    gameplay.
                  </p>
                  <p>
                    <span className="text-pixel-yellow font-bold">
                      Memorability:
                    </span>{" "}
                    Your brand becomes part of the game experience, not just
                    another ad.
                  </p>
                  <p>
                    <span className="text-pixel-yellow font-bold">
                      Targeting:
                    </span>{" "}
                    Reach gamers who are fully engaged and paying attention.
                  </p>
                  <div className="mt-6">
                    <Button variant="pixel" className="w-full" asChild>
                      <a href="mailto:info+adsimulator@timetime.in">Request Ad Info</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block rounded-lg border-2 border-pixel-yellow bg-pixel-yellow/10 p-4 shadow-pixel">
                <p className="font-pixel text-pixel-yellow">
                  Early advertisers get premium placement and discounted rates!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist" className="bg-pixel-dark px-4 py-16">
          <div className="container mx-auto max-w-3xl">
            <div className="rounded-lg border-2 border-pixel-border bg-pixel-card p-8 shadow-pixel">
              <h2 className="mb-6 text-center font-pixel text-3xl text-white">
                Join the <span className="text-pixel-green">Waitlist</span>
              </h2>
              <p className="mb-8 text-center font-pixel text-pixel-light-gray">
                Be the first to know when AD SIMULATOR launches. Get early
                access and exclusive in-game items.
              </p>
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-pixel-border bg-pixel-dark px-4 py-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5 text-pixel-green" />
              <span className="font-pixel text-lg text-white">
                AD SIMULATOR
              </span>
            </div>
            <div className="flex gap-6">
              <Link
                href="#"
                className="font-pixel text-sm text-pixel-light-gray hover:text-pixel-green"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="font-pixel text-sm text-pixel-light-gray hover:text-pixel-green"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="font-pixel text-sm text-pixel-light-gray hover:text-pixel-green"
              >
                Contact
              </Link>
            </div>
            <div className="font-pixel text-sm text-pixel-light-gray">
              © {new Date().getFullYear()} AD SIMULATOR. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
