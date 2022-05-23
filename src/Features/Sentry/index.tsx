import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

console.log("process.env.NEXT_PUBLIC_APP_ENV", process.env.NEXT_PUBLIC_APP_ENV);
Sentry.init({
  environment: process.env.NEXT_PUBLIC_APP_ENV,
  dsn: "https://ba3f592af9f1452c8180c2334f757402@o255017.ingest.sentry.io/6432025",
  integrations: [new BrowserTracing()],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
