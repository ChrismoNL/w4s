import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getApplications from "app/applications/queries/getApplications"

const ITEMS_PER_PAGE = 100

export const ApplicationsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ applications, hasMore }] = usePaginatedQuery(getApplications, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {applications.map((application) => (
          <li key={application.id}>
            <Link href={Routes.ShowApplicationPage({ applicationId: application.id })}>
              <a>{application.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>
    </div>
  )
}

const ApplicationsPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Applications</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewApplicationPage()}>
            <a>Create Application</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <ApplicationsList />
        </Suspense>
      </div>
    </>
  )
}

ApplicationsPage.authenticate = true
ApplicationsPage.getLayout = (page) => <Layout>{page}</Layout>

export default ApplicationsPage
