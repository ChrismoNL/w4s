import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetApplicationsInput
  extends Pick<Prisma.ApplicationFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetApplicationsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: applications,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.application.count({ where }),
      query: (paginateArgs) => db.application.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      applications,
      nextPage,
      hasMore,
      count,
    }
  }
)
