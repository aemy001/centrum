import PageTitle from '@/components/PageTitle'
import AllWizard from '../forms/wizard/components/AllWizard'
export const metadata = {
  title: 'Wizard',
}
export default function Page() {
  return (
    <>
      <div>
        <AllWizard />
      </div>
    </>
  )
}
