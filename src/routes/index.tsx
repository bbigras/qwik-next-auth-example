import { component$, Resource } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import { useSessionContext } from "./SessionContext";

export default component$(() => {
  const sessionResource = useSessionContext();

  return (
    <div>
      <h1>
        Welcome to Qwik <span class="lightning">⚡️</span>
      </h1>
      <a href="/protected">Protected</a>

      <p>
        <Link href="/test/">test</Link>
      </p>

      <Resource
        value={sessionResource}
        onPending={() => <span>Pending</span>}
        onRejected={() => <span>Rejected</span>}
        onResolved={(data) => (
          <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            {data ? (
              <a href="/api/auth/signout">Sing Out</a>
            ) : (
              <a href="/api/auth/signin">Sign In</a>
            )}
          </div>
        )}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};
