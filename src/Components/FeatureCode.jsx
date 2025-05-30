import Codewindow from "./Codewindow"

const Codepage = () => {
    return (
        <>
        <div className="hero bg-[#000000] min-h-[50vh] py-[100px]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Code now!</h1>
      <p className="py-6">
        Practice coding problems in a clean and interactive environment.
        <br />
💻 Currently supports JavaScript, Python, and C++ — with more languages coming soon!
      </p>
    </div>

    <div className="card bg-transparent w-full max-w-sm shrink-0 shadow-2xl">
      <Codewindow/>
    </div>
  </div>
</div>
        </>
    )
}

export default Codepage