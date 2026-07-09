import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] grid place-items-center text-center px-4">
      <div>
        <h1 className="display-title text-[28vw] md:text-[16rem] leading-none text-blood">404</h1>
        <p className="font-mono uppercase tracking-[0.3em] text-bone/70 -mt-4">Now you see it, now you don’t.</p>
        <Link to="/" className="btn-punk mt-8">Back Home</Link>
      </div>
    </div>
  )
}
