import Meta from './Meta'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className="bg-[#161A26]">
      <Meta />
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default Layout
