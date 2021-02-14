console.info("found me also")

import { Probot } from "probot"

export default (app: Probot) => {
  app.log("App loaded!")

  app.on("issues.opened", async context => {
    return context.octokit.issues.createComment(
      context.issue({ body: "Ding!" })
    )
  })
}
