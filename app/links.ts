export const links = {
  resume:
    'https://drive.google.com/file/d/1XWp3w-f7uCR0S6gNywoEKg5lLb5bwnD4/view?usp=sharing',
  github: 'https://github.com/sahildhingraa',
  x: 'https://x.com/novoocaiine',
  twitter: 'https://x.com/novoocaiine',
  linkedin: 'https://www.linkedin.com/in/sahildhingraa',
  insta: 'https://instagram.com/novoocaiine',
  instagram: 'https://instagram.com/novoocaiine',
  discord: 'https://discordapp.com/users/892365061438439505',
  upwork: 'https://www.upwork.com/freelancers/sahildhingraa',
} as const

export type LinkKey = keyof typeof links

export const footerLinks: Array<{ key: LinkKey; label: string }> = [
  { key: 'resume', label: 'resume' },
  { key: 'github', label: 'github' },
  { key: 'x', label: 'x (twitter)' },
  { key: 'linkedin', label: 'linkedin' },
  { key: 'insta', label: 'instagram' },
  { key: 'discord', label: 'discord' },
  { key: 'upwork', label: 'upwork' },
]
