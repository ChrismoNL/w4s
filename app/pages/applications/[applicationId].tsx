import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getApplication from "app/applications/queries/getApplication"
import deleteApplication from "app/applications/mutations/deleteApplication"

export const Application = () => {
  const router = useRouter()
  const applicationId = useParam("applicationId", "number")
  const [deleteApplicationMutation] = useMutation(deleteApplication)
  const [application] = useQuery(getApplication, { id: applicationId })

  return (
    <>
      <Head>
        <title>Application {application.id}</title>
      </Head>

      <div>
        <h1>Application {application.id}</h1>
        <pre>{JSON.stringify(application, null, 2)}</pre>

        <Link href={Routes.EditApplicationPage({ applicationId: application.id })}>
          <a>Edit</a>
        </Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteApplicationMutation({ id: application.id })
              router.push(Routes.ApplicationsPage())
            }
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Delete
        </button>
      </div>
    </>
  )
}

const ShowApplicationPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.ApplicationsPage()}>
          <a>Applications</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Application />
      </Suspense>
    </div>
  )
}

ShowApplicationPage.authenticate = true
ShowApplicationPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowApplicationPage
