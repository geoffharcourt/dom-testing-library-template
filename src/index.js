import React from 'react'

function Counter() {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(c => c + 1)
  return <button data-test="my-test-name" onClick={increment}>{count}</button>
}

export default Counter
