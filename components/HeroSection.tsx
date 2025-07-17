import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="px-5 pt-32 md:pt-52 lg:pt-40 lg:-mt-8 max-w-4xl mx-auto text-center">
      <div className="space-y-5 md:space-y-8">
        <div className="space-y-3 md:space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-snug md:leading-tight tracking-tight">
            Powerful Landing Pages
            <br />
            That Convert
          </h1>

          <p className="text-sm md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
            Launch high-converting landing pages faster, generate qualified leads, and optimize your marketing efforts—all with one simple solution.
          </p>
        </div>

        {/* Email Signup Form */}
        <div className="flex flex-col gap-3 max-w-sm md:max-w-md mx-auto">
          <input
            type="email"
            placeholder="Work email"
            className="w-full px-4 py-3 h-12 rounded-xl bg-white/90 shadow-[0_2px_12px_0_rgba(0,0,0,0.10)] text-gray-900 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-lime-400 font-medium"
          />
          <Button className="w-full bg-lime-400 hover:bg-lime-500 text-black font-bold px-6 py-4 h-14 rounded-xl shadow-[0_2px_16px_0_rgba(0,0,0,0.12)] border border-lime-300 text-base">
            Start my trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
