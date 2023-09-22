import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-[#161A26]">
      <div className="font-bold text-[#03FB35] p-4 max-w-7xl mx-auto container tracking-widest font-neue">
        <Link href="/">
          <div className="text-base md:text-2xl">Movie Test</div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
