import Link from 'next/link'
import { footerLinks } from 'app/links'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 grid grid-cols-1 gap-2 text-neutral-600 md:grid-cols-4 dark:text-neutral-300">
        {footerLinks.map(({ key, label }) => (
          <li key={key}>
            <Link
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              href={`/${key}`}
            >
              <ArrowIcon />
              <p className="ml-2 h-7 text-nowrap">{label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
