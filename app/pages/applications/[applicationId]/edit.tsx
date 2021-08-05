import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getApplication from "app/applications/queries/getApplication"
import updateApplication from "app/applications/mutations/updateApplication"
import { ApplicationForm, FORM_ERROR } from "app/applications/components/ApplicationForm"

export const EditApplication = () => {
  const router = useRouter()
  const applicationId = useParam("applicationId", "number")
  const [application, { setQueryData }] = useQuery(
    getApplication,
    { id: applicationId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateApplicationMutation] = useMutation(updateApplication)

  return (
    <>
      <Head>
        <title>Edit Application {application.id}</title>
      </Head>

      <div>
        <h1>Edit Application {application.id}</h1>
        <pre>{JSON.stringify(application)}</pre>

        <ApplicationForm
          submitText="Update Application"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdateApplication}
          initialValues={application}
          onSubmit={async (values) => {
            try {
              const updated = await updateApplicationMutation({
                id: application.id,
                ...values,
              })
              await setQueryData(updated)
              router.push(Routes.ShowApplicationPage({ applicationId: updated.id }))
            } catch (error) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />
      </div>
    </>
  )
}

const EditApplicationPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditApplication />
      </Suspense>

      <p>
        <Link href={Routes.ApplicationsPage()}>
          <a>Applications</a>
        </Link>
      </p>
    </div>
  )
}

EditApplicationPage.authenticate = true
EditApplicationPage.getLayout = (page) => <Layout>{page}</Layout>

export default EditApplicationPage
