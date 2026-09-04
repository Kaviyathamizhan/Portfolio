import React from 'react'
import { socialData, heroSocialPlatforms, contactSocialPlatforms } from '@/lib/data'
import { GitHubIcon, LinkedInIcon, LeetCodeIcon, XIcon, InstagramIcon, GmailIcon } from './Icons'
import { Code } from 'lucide-react'
import { cn } from '@/lib/utils'

type SocialVariant = 'hero' | 'contact'

interface SocialLinksProps {
  variant?: SocialVariant
  className?: string
}

const platformIcons: Record<string, React.ReactNode> = {
  GitHub: <GitHubIcon className="w-4 h-4" />,
  LinkedIn: <LinkedInIcon className="w-4 h-4" />,
  Email: <GmailIcon className="w-4 h-4" />,
  LeetCode: <LeetCodeIcon className="w-4 h-4" />,
  X: <XIcon className="w-4 h-4" />,
  Twitter: <XIcon className="w-4 h-4" />,
  Instagram: <InstagramIcon className="w-4 h-4" />,
}

const platformBrandHoverStyles: Record<
  string,
  {
    card: string
    icon: string
    text: string
  }
> = {
  LinkedIn: {
    card: 'hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 hover:shadow-[0_0_20px_rgba(10,102,194,0.25)]',
    icon: 'group-hover:text-[#0A66C2]',
    text: 'group-hover:text-text-primary',
  },
  GitHub: {
    card: 'hover:border-white/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]',
    icon: 'group-hover:text-white',
    text: 'group-hover:text-text-primary',
  },
  LeetCode: {
    card: 'hover:border-[#FFA116]/60 hover:bg-[#FFA116]/10 hover:shadow-[0_0_20px_rgba(255,161,22,0.25)]',
    icon: 'group-hover:text-[#FFA116]',
    text: 'group-hover:text-text-primary',
  },
  Instagram: {
    card: 'hover:border-[#E4405F]/60 hover:bg-[#E4405F]/10 hover:shadow-[0_0_20px_rgba(228,64,95,0.25)]',
    icon: 'group-hover:text-[#E4405F]',
    text: 'group-hover:text-text-primary',
  },
  X: {
    card: 'hover:border-white/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]',
    icon: 'group-hover:text-white',
    text: 'group-hover:text-text-primary',
  },
  Twitter: {
    card: 'hover:border-[#1DA1F2]/60 hover:bg-[#1DA1F2]/10 hover:shadow-[0_0_20px_rgba(29,161,242,0.25)]',
    icon: 'group-hover:text-[#1DA1F2]',
    text: 'group-hover:text-text-primary',
  },
  Email: {
    card: 'hover:border-[#EA4335]/60 hover:bg-[#EA4335]/10 hover:shadow-[0_0_20px_rgba(234,67,53,0.25)]',
    icon: 'group-hover:scale-110',
    text: 'group-hover:text-text-primary',
  },
}

export function SocialLinks({ variant = 'hero', className }: SocialLinksProps) {
  const platforms = variant === 'hero' ? heroSocialPlatforms : contactSocialPlatforms

  const links = socialData.filter(
    (s) => s.enabled && (platforms as readonly string[]).includes(s.platform)
  )

  const baseStyles =
    'group inline-flex items-center gap-2 rounded-xl text-sm font-medium transition-all duration-300 border text-text-secondary bg-[#0d0d0d] border-[#262626] cursor-pointer'

  const sizeStyles = variant === 'hero' ? 'px-4 py-2' : 'px-5 py-2.5'

  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {links.map((social) => {
        const brand = platformBrandHoverStyles[social.platform] ?? {
          card: 'hover:border-[#000047]/50 hover:bg-[#000047]/15',
          icon: 'group-hover:text-white',
          text: 'group-hover:text-text-primary',
        }

        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit my ${social.platform}`}
            className={cn(baseStyles, sizeStyles, brand.card)}
          >
            <span
              className={cn(
                'flex-shrink-0 text-text-muted transition-colors duration-300',
                brand.icon
              )}
            >
              {platformIcons[social.platform] ?? <Code className="w-4 h-4" />}
            </span>
            <span className={cn('transition-colors duration-300', brand.text)}>
              {social.platform}
            </span>
          </a>
        )
      })}
    </div>
  )
}
