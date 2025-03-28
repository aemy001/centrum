import IconifyIcon from '@/components/wrappers/IconifyIcon'
import LeftSideBarToggle from './components/LeftSideBarToggle'
import Link from 'next/link'
import ProfileDropdown from './components/ProfileDropdown'
import ThemeCustomizerToggle from './components/ThemeCustomizerToggle'
import Notifications from './components/Notifications'
import ThemeModeToggle from './components/ThemeModeToggle'
import MaximizeScreen from './components/MaximizeScreen'
import { Container } from 'react-bootstrap'
const page = () => {
  return (
    <header>
      <div className="topbar">
        <Container fluid>
          <div className="navbar-header">
            <div className="d-flex align-items-center gap-2">
              <LeftSideBarToggle />

              {/* <form className="app-search d-none d-md-block me-auto">
                <div className="position-relative">
                  <input type="search" className="form-control border-0" placeholder="Search..." autoComplete="off" />
                  <IconifyIcon icon="ri:search-line" className=" search-widget-icon" />
                </div>
              </form> */}
            </div>
            <div className="d-flex align-items-center gap-2">
              {/* <ThemeModeToggle /> */}

              {/* <MaximizeScreen /> */}

              {/* <Notifications /> */}

              {/* <ThemeCustomizerToggle /> */}
              <Link href="/addSell" className="btn btn-primary setAddSell">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {' '}
                  <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />{' '}
                </svg>
                Add Sell
              </Link>
              <ProfileDropdown />
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}
export default page
