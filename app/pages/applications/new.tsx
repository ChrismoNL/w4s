import { Link, useRouter, useMutation, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import createApplication from "app/applications/mutations/createApplication"
import { ApplicationForm, FORM_ERROR } from "app/applications/components/ApplicationForm"

const NewApplicationPage: BlitzPage = () => {
  const router = useRouter()
  const [createApplicationMutation] = useMutation(createApplication)

  return (
    <div>
      <h1>Create New Application</h1>

      <ApplicationForm
        submitText="Create Application"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreateApplication}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const application = await createApplicationMutation(values)
            router.push(Routes.ShowApplicationPage({ applicationId: application.id }))
          } catch (error) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />

      <p>
        <Link href={Routes.ApplicationsPage()}>
          <a>Applications</a>
        </Link>
      </p>
    </div>
  )
}

NewApplicationPage.authenticate = true
NewApplicationPage.getLayout = (page) => <Layout title={"Create New Application"}>{page}</Layout>

export default NewApplicationPage
