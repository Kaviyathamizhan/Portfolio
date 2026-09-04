import { Social } from '@/types'

export const socialData: Social[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/Kaviyathamizhan',
    icon: 'Github',
    enabled: true,
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/kaviyathamizhan-t-k',
    icon: 'Linkedin',
    enabled: true,
  },
  {
    platform: 'LeetCode',
  // TODO: Add LeetCode profile URL
    url: 'leetcode.com/u/Kaviya_thamizhan-37/',
    icon: 'Code',
    enabled: true,
  },
  {
    platform: 'Email',
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=kaviyathamizhan37@gmail.com',
    icon: 'Mail',
    enabled: true,
  },
  {
    platform: 'Instagram',
  // TODO: Add Instagram profile URL
    url: 'https://instagram.com/',
    icon: 'Instagram',
    enabled: true,
  },
]

export const heroSocialPlatforms = ['GitHub', 'LinkedIn', 'LeetCode', 'Email'] as const
export const contactSocialPlatforms = ['LinkedIn', 'GitHub', 'Email', 'Instagram'] as const
