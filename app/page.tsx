"use client";

import { Coins, Gamepad2, Users, Flag, Target, Mic } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WaitlistForm } from "@/components/waitlist-form";

export default function Home() {
  const [jumboEmail, setJumboEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleJumboSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
            <Flag className="h-6 w-6 text-pixel-green flag-animation" />
            <span className="font-game text-xl text-white">AD SIMULATOR</span>
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
              href="#prizes"
              className="font-pixel text-pixel-green hover:text-pixel-yellow"
            >
              Prizes
            </Link>
            <Link
              href="#advertise"
              className="font-pixel text-pixel-green hover:text-pixel-yellow"
            >
              Advertise
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
                <span className="font-game text-sm text-pixel-yellow">
                  COMING SOON
                </span>
              </div>
              <h1 className="font-game font-bold text-4xl text-white md:text-5xl lg:text-6xl">
                AD <span className="text-pixel-green">SIMULATOR</span>
              </h1>
              <p className="max-w-[600px] font-pixel text-lg text-pixel-light-gray">
                A fast-paced FPS shooter where you capture the flag in a world dominated by advertisements. Battle through billboard-filled arenas and secure your victory!
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

        <section id="prizes" className="bg-pixel-dark px-4 py-16 border-t border-pixel-border">
          <div className="container mx-auto max-w-5xl">
            <h2 className="mb-8 text-center font-game text-3xl text-white md:text-4xl">
              REAL MONEY <span className="text-pixel-yellow blink-animation">PRIZES</span>
            </h2>
            
            <div className="mb-10 bg-pixel-card border-2 border-pixel-yellow p-6 rounded-lg shadow-pixel">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="bg-pixel-dark rounded-full p-4 w-32 h-32 flex items-center justify-center">
                  <Coins className="w-16 h-16 text-pixel-yellow" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 font-game text-2xl text-pixel-yellow">WIN REAL MONEY!</h3>
                  <p className="font-pixel text-pixel-light-gray text-lg mb-3">
                    All advertising revenue is accumulated into a weekly prize pool. Every Friday, a special competitive mode is activated where the best teams compete to claim the prize.
                  </p>
                  <p className="font-pixel text-white">
                    <span className="text-pixel-green font-bold">The more advertisers we have, the bigger the prize pool grows!</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 border-pixel-border bg-pixel-card p-6 rounded-lg shadow-pixel text-center">
                <h3 className="font-game text-xl text-white mb-4">Competitive Mode</h3>
                <p className="font-pixel text-pixel-light-gray">
                  Activated every Friday at 8:00 PM. Participate with your team in intense CTF battles.
                </p>
              </div>
              <div className="border-2 border-pixel-border bg-pixel-card p-6 rounded-lg shadow-pixel text-center">
                <h3 className="font-game text-xl text-white mb-4">Weekly Prize</h3>
                <p className="font-pixel text-pixel-light-gray">
                  The winning team takes the accumulated prize pool. Direct bank transfer to players.
                </p>
              </div>
              <div className="border-2 border-pixel-border bg-pixel-card p-6 rounded-lg shadow-pixel text-center">
                <h3 className="font-game text-xl text-white mb-4">Leaderboards</h3>
                <p className="font-pixel text-pixel-light-gray">
                  Permanent ranking table. Special bonuses for the most consistent players.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button variant="pixel" size="lg" className="font-game">
                COMPETITION REGISTRATION
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="bg-pixel-dark px-4 py-16">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center font-game text-3xl text-white md:text-4xl">
              Game <span className="text-pixel-green">Features</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="rounded-lg border-2 border-pixel-border bg-pixel-card p-6 shadow-pixel">
                <div className="mb-4 inline-flex rounded-full bg-pixel-green/20 p-3">
                  <Flag className="h-6 w-6 text-pixel-green" />
                </div>
                <h3 className="mb-2 font-game text-xl text-white">
                  Capture The Flag
                </h3>
                <p className="font-pixel text-pixel-light-gray">
                  Infiltrate enemy territory, seize their flag, and navigate back to your base while fighting off opponents.
                </p>
              </div>
              <div className="rounded-lg border-2 border-pixel-border bg-pixel-card p-6 shadow-pixel">
                <div className="mb-4 inline-flex rounded-full bg-pixel-yellow/20 p-3">
                  <Target className="h-6 w-6 text-pixel-yellow" />
                </div>
                <h3 className="mb-2 font-game text-xl text-white blink-animation">
                  FPS Action
                </h3>
                <p className="font-pixel text-pixel-light-gray">
                  Fast-paced first-person shooter gameplay with various weapons and tactical opportunities for team combat.
                </p>
              </div>
              <div className="rounded-lg border-2 border-pixel-border bg-pixel-card p-6 shadow-pixel">
                <div className="mb-4 inline-flex rounded-full bg-pixel-red/20 p-3">
                  <Users className="h-6 w-6 text-pixel-red" />
                </div>
                <h3 className="mb-2 font-game text-xl text-white">
                  Ad Billboards
                </h3>
                <p className="font-pixel text-pixel-light-gray">
                  Navigate a world filled with billboard advertisements from real companies. Use them for cover or as landmarks!
                </p>
              </div>
              <div className="rounded-lg border-2 border-pixel-border bg-pixel-card p-6 shadow-pixel">
                <div className="mb-4 inline-flex rounded-full bg-pixel-green/20 p-3">
                  <Mic className="h-6 w-6 text-pixel-green" />
                </div>
                <h3 className="mb-2 font-game text-xl text-white blink-animation">
                  Voice Chat
                </h3>
                <p className="font-pixel text-pixel-light-gray">
                  Real-time voice communication with your teammates for strategic coordination and immersive gameplay experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-to-play" className="bg-pixel-pattern px-4 py-16">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center font-game text-3xl text-white md:text-4xl">
              How to <span className="text-pixel-green">Play</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pixel-dark font-game text-2xl text-pixel-green">
                  1
                </div>
                <h3 className="mb-2 font-game text-xl text-white">Join Team</h3>
                <p className="font-pixel text-pixel-light-gray">
                  Enter a match and be assigned to either the red or blue team to begin the battle.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pixel-dark font-game text-2xl text-pixel-green">
                  2
                </div>
                <h3 className="mb-2 font-game text-xl text-white">
                  Defend Base
                </h3>
                <p className="font-pixel text-pixel-light-gray">
                  Protect your team's flag from enemy players attempting to capture it.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pixel-dark font-game text-2xl text-pixel-green">
                  3
                </div>
                <h3 className="mb-2 font-game text-xl text-white">
                  Capture Flag
                </h3>
                <p className="font-pixel text-pixel-light-gray">
                  Infiltrate the enemy base, grab their flag, and carry it back to your base to score.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pixel-dark font-game text-2xl text-pixel-green">
                  4
                </div>
                <h3 className="mb-2 font-game text-xl text-white">
                  Win Match
                </h3>
                <p className="font-pixel text-pixel-light-gray">
                  The first team to reach the target number of flag captures wins the match!
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
            <h2 className="mb-6 text-center font-game text-3xl text-white md:text-4xl">
              Advertise{" "}
              <span className="text-pixel-yellow blink-animation">
                Your Brand
              </span>
            </h2>
            <p className="mb-10 text-center font-pixel text-pixel-light-gray max-w-2xl mx-auto">
              Place your brand on in-game billboards throughout the arena. Players will see your ads as they navigate the battlefield in search of the enemy flag. <span className="text-pixel-yellow">Part of your advertising budget goes into the weekly prize pool for players!</span>
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="rounded-lg border-2 border-pixel-border bg-pixel-card p-6 shadow-pixel">
                <h3 className="mb-4 font-game text-2xl text-white">
                  Billboard Options
                </h3>
                <ul className="space-y-3 font-pixel text-pixel-light-gray">
                  <li className="flex items-start gap-2">
                    <span className="text-pixel-green">▶</span>
                    <span>Strategic locations near capture points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pixel-green">▶</span>
                    <span>Giant billboards visible from across the map</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pixel-green">▶</span>
                    <span>Digital screens with animated advertisements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pixel-green">▶</span>
                    <span>Base-area exclusive sponsorship opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pixel-green">▶</span>
                    <span>Team uniform branding packages</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border-2 border-pixel-border bg-pixel-card p-6 shadow-pixel">
                <h3 className="mb-4 font-game text-2xl text-white">
                  Why Advertise With Us?
                </h3>
                <div className="space-y-4 font-pixel text-pixel-light-gray">
                  <p>
                    <span className="text-pixel-yellow font-bold">
                      High Visibility:
                    </span>{" "}
                    Players will constantly see your ads as they navigate the map.
                  </p>
                  <p>
                    <span className="text-pixel-yellow font-bold">
                      Strategic Placement:
                    </span>{" "}
                    Billboards can be used as landmarks and meeting points, increasing brand recognition.
                  </p>
                  <p>
                    <span className="text-pixel-yellow font-bold">
                      Support Competitors:
                    </span>{" "}
                    Your ad budget directly contributes to the prize pools that motivate players and increase engagement.
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
                <p className="font-game text-pixel-yellow">
                  Early advertisers get premium billboard locations at discounted rates!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist" className="bg-pixel-dark px-4 py-16">
          <div className="container mx-auto max-w-3xl">
            <div className="rounded-lg border-2 border-pixel-border bg-pixel-card p-8 shadow-pixel">
              <h2 className="mb-6 text-center font-game text-3xl text-white">
                Join the <span className="text-pixel-green">Waitlist</span>
              </h2>
              <p className="mb-8 text-center font-pixel text-pixel-light-gray">
                Be the first to know when AD SIMULATOR launches. Get early
                access and exclusive in-game items for your character.
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
              <Flag className="h-5 w-5 text-pixel-green flag-animation" />
              <span className="font-game text-lg text-white">
                AD SIMULATOR
              </span>
            </div>
            <div className="flex gap-6">
              <Link
                href="#"
                className="font-pixel text-sm text-pixel-light-gray hover:text-pixel-green"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="font-pixel text-sm text-pixel-light-gray hover:text-pixel-green"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="font-pixel text-sm text-pixel-light-gray hover:text-pixel-green"
              >
                Contact
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p className="font-pixel text-sm text-pixel-light-gray">
                &copy; {new Date().getFullYear()} AD SIMULATOR. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
