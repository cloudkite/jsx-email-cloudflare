import { useLoaderData } from "@remix-run/react";

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  jsxToString
} from 'jsx-email';

const Email = () => (
  <Html>
    <Head />
    <Preview>Log in with this magic link.</Preview>
    <Body>
      <Container>
        <Heading>🪄 Your magic link</Heading>
        <Section>
          <Text>
            <Link>
              👉 Click here to sign in 👈
            </Link>
          </Text>
          <Text>If you didn't request this, please ignore this email.</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export async function loader() {
  return { preview: await jsxToString(<Email />) }
}

export default function Index() {
  const { preview } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Preview</h1>
      <pre>{preview}</pre>
    </div>
  );
}
