import React from 'react'
import { socialData, heroSocialPlatforms, contactSocialPlatforms } from '@/lib/data'
import { GitHubIcon, LinkedInIcon, LeetCodeIcon, XIcon, InstagramIcon } from './Icons'
import { Mail, Code } from 'lucide-react'
import { cn } from '@/lib/utils'

type SocialVariant = 'hero' | 'contact'

interface SocialLinksProps {
  variant?: SocialVariant
  className?: string
}

const platformIcons: Record<string, React.ReactNode> = {
  GitHub: <GitHubIcon className="w-4 h-4" />,
  LinkedIn: <LinkedInIcon className="w-4 h-4" />,
  Email: <Mail className="w-4 h-4" />,
  LeetCode: <LeetCodeIcon className="w-4 h-4" />,
  X: <XIcon className="w-4 h-4" />,
  Twitter: <XIcon className="w-4 h-4" />,
  Instagram: <InstagramIcon className="w-4 h-4" />,
}

const contactHoverStyles: Record<string, string> = {
  LinkedIn:
    'hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10',
  GitHub:
    'hover:text-text-primary hover:border-text-secondary hover:bg-[#24292e]/40',
  Email:
    'hover:text-primary hover:border-primary/40 hover:bg-primary/10',
  LeetCode:
    'hover:text-[#FFA116] hover:border-[#FFA116]/40 hover:bg-[#FFA116]/10',
  Instagram:
    'hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10',
}

export function SocialLinks({ variant = 'hero', className }: SocialLinksProps) {
  const platforms = variant === 'hero' ? heroSocialPlatforms : contactSocialPlatforms

  const links = socialData.filter(
    (s) => s.enabled && (platforms as readonly string[]).includes(s.platform)
  )

  const baseStyles =
    'inline-flex items-center gap-2 rounded-xl text-sm font-medium transition-all duration-200 border text-text-secondary bg-[#0d0d0d] border-[#262626]'

  const variantStyles =
    variant === 'hero'
      ? 'px-4 py-2 hover:text-text-primary hover:border-[#333333] hover:bg-[#141414]'
      : 'px-5 py-2.5'

  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {links.map((social) => {
        const hoverClass =
          variant === 'contact'
            ? contactHoverStyles[social.platform] ?? 'hover:text-primary hover:border-primary/40'
            : ''

        return (
          <a
            key={social.platform}
            href={social.url}
            target={social.platform !== 'Email' ? '_blank' : undefined}
            rel="noopener noreferrer"
            aria-label={`Visit my ${social.platform}`}
            className={cn(baseStyles, variantStyles, hoverClass)}
          >
            <span className="flex-shrink-0 text-text-muted group-hover:text-current transition-colors">
              {platformIcons[social.platform] ?? <Code className="w-4 h-4" />}
            </span>
            <span>{social.platform}</span>
          </a>
        )
      })}
    </div>
  )
}
