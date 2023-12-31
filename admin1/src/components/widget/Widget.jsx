import './widget.scss';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

const Widget = ({type}) => {
    let data;

    // temporary
    const amount = 100;
    const diff = 20;

        switch (type) {
             case "user":
                data = {
                    title: "USERS",
                    isMoney: false,
                    link: "See all users",
                    icon: <PersonOutlineOutlinedIcon className='icon' 
                    style={{
                        color:"crimson",
                        backgroundColor: "rgba(255,0,0,0.2)",
                    }} />

                };
                break;
                case "order":
                data = {
                    title: "ORDERS",
                    isMoney: false,
                    link: "view all orders",
                    icon: <ShoppingCartOutlinedIcon 
                    className='icon' 
                    style={{
                      backgroundColor: 'rgba(218, 165, 32, 0.2)',
                      color: 'goldenrod',
                    }}/>

                };
                break;
                case "earning":
                data = {
                    title: "EARNINGS",
                    isMoney: true,
                    link: "View net earnings",
                    icon: <MonetizationOnOutlinedIcon 
                    className='icon'
                    style={{
                      backgroundColor: 'rgba(0, 128, 0, 0.2)',
                      color: 'green'
                    }} />

                };
                break;
                case "balance":
                data = {
                    title: "BALANCE",
                    isMoney: true,
                    link: "See details",
                    icon: <AccountBalanceOutlinedIcon 
                    className='icon'
                    style={{backgroundColor: 'rgba(128, 0, 128, 0.2)', color: 'purple'}} />

                };
                break;
                default:
                    break;
        }




  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
            {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
            <ArrowDropUpIcon/>
            {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
