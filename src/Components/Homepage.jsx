import Navbar from "./Navbar"
import "../index.css"

const Homepage = () => {
    return(
        <>
        <Navbar/>
        <div
  className="hero min-h-screen"
  style={{
      backgroundImage:
      "url('/src/assets/magicpattern-grid-pattern-1748598067126.png')",
    }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">New Way to Start DSA Journey</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
</>
    )
}

export default Homepage