import { client } from "@/sanity/lib/client"
import { getSiteSettings, getSocialSettings } from "@/sanity/queries/settings"
import { ThemeToggle } from "./theme/theme-toggle"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react"

export default async function Header() {
  const siteSettings = await client.fetch(getSiteSettings)
  const socialSettings = await client.fetch(getSocialSettings)

  return (
    <header >
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {siteSettings?.logo ? (
            <Image
              src={siteSettings.logo}
              alt={siteSettings.title}
              width={32}
              height={32}
              className="h-8 w-auto"
            />
          ) : (
            <span className="text-xl font-bold">{siteSettings?.title}</span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialSettings?.facebook && (
              <Link 
                href={socialSettings.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            )}
            {socialSettings?.instagram && (
              <Link 
                href={socialSettings.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            )}
            {socialSettings?.twitter && (
              <Link 
                href={socialSettings.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            )}
            {socialSettings?.youtube && (
              <Link 
                href={socialSettings.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            )}
            {socialSettings?.linkedin && (
              <Link 
                href={socialSettings.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            )}
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}