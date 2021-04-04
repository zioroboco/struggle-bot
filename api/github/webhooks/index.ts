import { createNodeMiddleware, createProbot } from "probot"

import app from "../../../lib/app"
const probot = createProbot({
  defaults: {
    webhookPath: "/api/github/webhooks",
  },
})

export default createNodeMiddleware(app, { probot })
