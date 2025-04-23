"use client";

import { Download, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-20 hero-gradient">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Humera Khan</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl opacity-90">
                Frontend Developer & CEO
              </span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl mb-8 text-balance">
              Founder of{" "}
              <span className="font-semibold text-primary">HumAi Webs</span>,
              where I break down complex user experience problems to create
              integrity-focused solutions that connect businesses with their
              audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                <a href="#contact" className="flex items-center gap-2">
                  Get in Touch
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 rounded-full">
                <a
                  href="/humera-resume.pdf"
                  className="flex items-center gap-2">
                  <Download className="h-4 w-4" /> Download CV
                </a>
              </Button>
            </div>
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Twitter profile"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="GitHub profile"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn profile"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30">
                <Image
                  src="/humera2.jpg"
                  alt="Humera Khan - Frontend Developer & CEO"
                  fill
                  className="object-cover po"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
