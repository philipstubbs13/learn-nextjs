
export default function Home() {

  async function consoleLog() {
    "use server"
    console.log("hello")
  }

  return (
    <form action={consoleLog}>
      <button>console log</button>
    </form>
  )
}