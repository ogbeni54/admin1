import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">lamadin</span>
      </div>
      <hr />
      <div className="center">
        <ul>

              <p className='title'>MAIN</p>
            <li>
                  <DashboardIcon className="icon" />
                <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <li>
                  <PersonOutlineOutlinedIcon className="icon"  />
                <span>Users</span>
            </li>
            <li>
                  <ProductionQuantityLimitsIcon className="icon" />
                <span>Products</span>
            </li>
            <li>
                  <LocalShippingIcon className="icon"  />
                <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
                  <QueryStatsIcon className="icon" />
                <span>Stats</span>
            </li>
            <li>
                  <NotificationsOutlinedIcon className="icon"  />
                <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
                  <MonitorHeartOutlinedIcon className="icon" />
                <span>System Health</span>
            </li>
            <li>
                  <PsychologyOutlinedIcon className="icon"  />
                <span>Logs</span>
            </li>
            <li>
                  <SettingsIcon className="icon" />
                <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
                  <AccountCircleOutlinedIcon className="icon" />
                <span>Profile</span>
            </li>
            <li>
                  <ExitToAppOutlinedIcon className="icon" />
                <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        {/* <div className="colorOption"></div> */}
      </div>
    </div>
  )
}

export default Sidebar
