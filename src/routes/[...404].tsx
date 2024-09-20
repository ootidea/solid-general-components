import { Title } from '@solidjs/meta'
import { HttpStatusCode } from '@solidjs/start'

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
        <a href="/">Go back to the home page</a>
      </p>
    </main>
  )
}
