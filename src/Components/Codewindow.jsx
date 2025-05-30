const Codewindow = () => {
//     return (
//         <div className="mockup-code w-full">
//   <pre data-prefix="1"><code>npm i tailwindcss</code></pre>
//   <pre data-prefix="2"><code>    installing...</code></pre>
//   <pre data-prefix="3" className="bg-blu text-warning-content"><code>Error in Code ops</code></pre>
// </div>
//     )

  return (
    <div className="mockup-code w-full border-[1px] p-5">
      <pre data-prefix="">
        <code>function generateFibonaccis(n) {'{'}</code>
      </pre>
      <pre data-prefix="">
        <code>    var fib = [1, 1];</code>
      </pre>
      <pre data-prefix="">
        <code>  for (var i = 2; i &lt; n; i++) {'{'}</code>
      </pre>
      <pre data-prefix="">
        <code>    fib[i] = fib[i - 2] + fib[i - 1];</code>
      </pre>
      <pre data-prefix="">
        <code>  {'}'}</code>
      </pre>
      <pre data-prefix="">
        <code>  return fib;</code>
      </pre>
      <pre data-prefix="">
        <code>{'}'}</code>
      </pre>
      <pre data-prefix="">
        <code>var fib = generateFibonaccis(10);</code>
      </pre>
      <pre data-prefix="">
        <code>console.log(fib.join(" "));</code>
      </pre>
      <pre
        data-prefix=""
        className="font-bold text-error-content"
      >
        <code>Error in Code ops</code>
      </pre>
    </div>
  )

}

export default Codewindow