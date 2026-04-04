import { notFound, redirect } from 'next/navigation'
import { links } from 'app/links'

export default async function RedirectPage({
  params,
}: {
  params: Promise<{ redirect: string }>
}) {
  const { redirect: key } = await params
  const destination = links[key as keyof typeof links]

  if (!destination) {
    notFound()
  }

  redirect(destination)
}
