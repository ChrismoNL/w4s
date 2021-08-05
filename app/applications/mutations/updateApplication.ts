import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateApplication = z.object({
  id: z.number(),
  title: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateApplication),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const application = await db.application.update({ where: { id }, data })

    return application
  }
)
