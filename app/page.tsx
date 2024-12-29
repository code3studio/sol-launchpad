"use client";
import Image from "next/image";
import { HeroImg } from "@images";
import { Separator } from "@/components/ui/separator";
import { Button } from "@components/ui/button";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";
import SolanaLaunchpadCTA from "@/components/SolanaLaunchpadCTA";
import Partners from "@/components/Partners";


export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {" "}
      <SolanaLaunchpadCTA />
{/* Overview section */}
<section className="flex flex-col lg:flex-row justify-center bg-gradient-to-b from-slate-900 to-background items-start gap-4 px-[2em] lg:px-[4em] py-4 w-full">
  <div className="relative flex flex-col h-full gap-4 lg:w-1/2">
    <h2 className="text-[1.6em] pl-6 font-bold mb-4 text-teal-400 glitch-text">
      Demo
    </h2>
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "0px",
        paddingBottom: "52.402%",
      }}
    >
      <iframe
        allow="fullscreen; autoplay"
        allowFullScreen
        height="100%"
        src="https://streamable.com/e/hor0b3?autoplay=1&muted=1"
        width="100%"
        style={{
          border: "none",
          width: "100%",
          height: "100%",
          position: "absolute",
          left: "0px",
          top: "0px",
          overflow: "hidden",
        }}
      ></iframe>
    </div>
  </div>

        <div className="flex flex-col items-start gap-8 lg:w-1/2 lg:mt-[2em]">
          <div>
            <h2 className="text-[1.6em] pl-6 font-bold mb-4 text-teal-400 glitch-text">
            SolGPT AI
            </h2>
            <p className="pl-6 text-justify text-slate-200">
            SolGPT AI connects AI agents with Solana protocols, 
            enabling them to autonomously execute over 15 Solana-specific actions, 
            including token trading, 
            asset lending, and executing compressed airdrops.
            </p>
            <div className="pl-6">
              <h4 className="text-[1.1em] font-extralight mb-4 mt-6 text-tealClr font-monsterr">
                • Pump.fun Launch
              </h4>
              <h3 className="text-[1.1em] font-extralight mb-4 text-tealClr font-monsterr">
                • Version Updates
              </h3>
              <h3 className="text-[1.1em] font-extralight text-tealClr mb-4 font-monsterr">
                • Token Gated Features
              </h3>
            </div>
          </div>

          <div className="text-slate-200">
  <h3 className="text-[1.6em] pl-6 font-bold mb-4 text-teal-400 glitch-text">
    Utility
  </h3>
  <ul className="pl-6">
    <div className="pl-6 space-y-4 list-disc">
      <li>
        Enable AI agents to autonomously trade Solana tokens, creating seamless token swap functionality.
      </li>
      <li>
        Facilitate asset lending and borrowing on decentralized platforms, ensuring liquidity and accessibility.
      </li>
      <li>
        Execute zk-compressed airdrops with drastically reduced costs using Light Protocol and Helius.
      </li>
      <li>
        Launch SPL tokens and manage NFTs, including minting and royalty configurations, using Metaplex tools.
      </li>
      <li>
        Integrate DeFi actions like staking, pool creation, and dynamic asset management on Solana DEXs.
      </li>
    </div>
  </ul>
</div>

          <div className="relative flex items-center justify-center w-full gap-4">
            <Separator className="shrink" />
            <Button variant={"outline"} className="text-teal-400 min-w-max">
            Setup Now
            </Button>
            <Separator className="shrink" />
          </div>
        </div>
      </section>
      <Separator className="w-[90%] mx-auto my-10 lg:my-20" />
      {/* Features section */}
      <Features />
      <Separator className="w-[90%] mx-auto my-10 lg:my-20" />
      {/* Services section */}
      {/* FAQ section */}
      <FAQ />
      <Separator className="w-[90%] mx-auto my-10 lg:my-20" />
      {/* Partners section */}
      <Partners />
    </motion.main>
  );
}
