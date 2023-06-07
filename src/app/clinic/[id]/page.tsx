import Dashboard from '@/template/clinic/dashboard/Dashboard'
import { getServerSession } from 'next-auth'

const page = ({ params }: { params: { id: string } }) => {
  return <Dashboard />
}

export async function getServerSideProps(context) {
  console.log('provando session')
  const session = await getServerSession(context.req, context.res)

  console.log(session)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}
export default page
