import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetApplication = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetApplication), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const application = await db.application.findFirst({ where: { id } })

  if (!application) throw new NotFoundError()

  return application
})
