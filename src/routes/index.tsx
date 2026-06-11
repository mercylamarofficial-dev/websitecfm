import { createFileRoute } from "@tanstack/react-router";
import App from "../app/App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Convix Software — Digital Agency" },
      { name: "description", content: "The all-in-one digital agency powering the future of businesses." },
      { property: "og:title", content: "Convix Software — Digital Agency" },
      { property: "og:description", content: "The all-in-one digital agency powering the future of businesses." },
    ],
  }),
  component: App,
});

