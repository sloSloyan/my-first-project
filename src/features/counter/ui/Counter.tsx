import { useCounter } from "../model/UseCounter"

export function Counter() {
  const { count, increment } = useCounter()

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}