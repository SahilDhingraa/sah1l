import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Sahil Dhingra
      </h1>
      <p className="mb-4">
        {`I'm a Full Stack Software Engineer specializing in Golang (Go), JavaScript and cloud technologies with hands-on experience building scalable microservices and web applications. At One Healthcare, I architect distributed systems and develop ML recommendation engines while working extensively with Docker, Kubernetes, PostgreSQL, and AWS services. I'm passionate about optimizing database performance, implementing CI/CD pipelines with GitHub Actions, and creating real-time solutions using Node.js, React, WebSockets, and Azure. Currently contributing to open source projects and working toward AWS Cloud Practitioner certification with expertise in containerization, API development, and DevOps practices.`}
      </p>
      <div className="my-8">
        {`Location: `} <span className='px-1 underline'>{`Pune, India`}</span>
      </div>
      <div className='my-8 '>
        <div className="flex gap-2">
          {`Email: `} <span className='px-1 underline flex gap-1'>
            <a href="mailto:me@sah1l.com">{`me@sah1l.com`}</a>,
            <a href="mailto:dhingrasd451@gmail.com">{`dhingrasd451@gmail.com`}</a>
          </span>
        </div>
        {/* <div className="my-8">
          <BlogPosts />
        </div> */}
      </div>
    </section>
  )
}
