import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateApplication = z.object({
  title: z.string(),
})

export default resolver.pipe(
  resolver.zod(CreateApplication),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const application = await db.application.create({ data: input })

    return application
  }
)
