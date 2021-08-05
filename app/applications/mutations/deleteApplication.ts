import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const DeleteApplication = z.object({
  id: z.number(),
})

export default resolver.pipe(
  resolver.zod(DeleteApplication),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const application = await db.application.deleteMany({ where: { id } })

    return application
  }
)
