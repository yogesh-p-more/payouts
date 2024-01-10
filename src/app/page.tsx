"use client"
import Image from 'next/image'
import { Inter } from "next/font/google";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiArrowLeftThick } from "react-icons/ti";
const inter = Inter({ weight: "400", subsets: ["latin"], display: "swap" })

export default function Home() {
  const handleMenuClick = () => {
    const menu = document.querySelector('.sidebar');

    // Toggle the 'active' class
    menu.classList.toggle('active');
  };

  const handleMenuClick1 = () => {
    const menu = document.querySelector('.sidebar');

    // Toggle the 'active' class
    menu.classList.toggle('active');
  };
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="main-box">
            <div className="left-box sidebar">
              <div className="set-width">
                <div className="user">
                  <div className="user-logo">
                    <Image src="/img/Image.png" width={39} height={39} alt="" />
                  </div>
                  <div className="user-name">
                    <div className="name small2">Nishyan</div>
                    <div className="visit-store">
                      <a href="" className="small1">Visit store</a>
                    </div>
                  </div>
                  <div className="user-dropicon">
                    <Image src="/img/dropdown.png" width={15} height={8.68} alt="" />
                  </div>
                </div>
                <div className={"navlist " + inter.className}>
                  <div className="list-ltem">
                    <div className="listicon">
                      <Image src="/img/icon1.png" width={20} height={20} alt="" />
                    </div>
                    <div className="listname small01">
                      Home
                    </div>
                  </div>
                  <div className="list-ltem">
                    <div className="listicon">
                      <Image src="/img/icon2.png" width={20} height={20} alt="" />
                    </div>
                    <div className="listname small01">
                      Orders
                    </div>
                  </div>
                  <div className="list-ltem">
                    <div className="listicon">
                      <Image src="/img/icon3.png" width={20} height={20} alt="" />
                    </div>
                    <div className="listname small01">
                      Products
                    </div>
                  </div>
                  <div className="list-ltem">
                    <div className="listicon">
                      <Image src="/img/icon4.png" width={20} height={20} alt="" />
                    </div>
                    <div className="listname small01">
                      Delivery
                    </div>
                  </div>
                  <div className="list-ltem">
                    <div className="listicon">
                      <Image src="/img/icon5.png" width={20} height={20} alt="" />
                    </div>
                    <div className="listname small01">
                      Marketing
                    </div>
                  </div>

                  <div className="list-ltem">
                    <div className="listicon">
                      <Image src="/img/icon6.png" width={20} height={20} alt="" />
                    </div>
                    <div className="listname small01">
                      Analytics
                    </div>
                  </div>
                  <div className="list-ltem">
                    <div className="listicon">
                      <Image src="/img/icon7.png" width={20} height={20} alt="" />
                    </div>
                    <div className="listname small01">
                      Payouts
                    </div>
                  </div>
                  <div className="list-ltem">
                    <div className="listicon">
                      <Image src="/img/icon8.png" width={20} height={20} alt="" />
                    </div>
                    <div className="listname small01">
                      Discounts
                    </div>
                  </div>
                  <div className="list-ltem">
                    <div className="listicon">
                      <Image src="/img/icon9.png" width={20} height={20} alt="" />
                    </div>
                    <div className="listname small01">
                      Audience
                    </div>
                  </div>
                  <div className="list-ltem">
                    <div className="listicon">
                      <Image src="/img/icon10.png" width={20} height={20} alt="" />
                    </div>
                    <div className="listname small01">
                      Appearance
                    </div>
                  </div>
                  <div className="list-ltem">
                    <div className="listicon">
                      <Image src="/img/icon11.png" width={20} height={20} alt="" />
                    </div>
                    <div className="listname small01">
                      Plugins
                    </div>
                  </div>
                </div>

                <div className="credits">
                  <div className="icon">
                    <Image src="/img/wallet.png" width={24} height={24} alt="" />
                  </div>
                  <div className="content">
                    <div className="small1">Available credits</div>
                    <div className="balance">222.10</div>
                  </div>
                </div>
              </div>
              <div className="close-icon" onClick={handleMenuClick1}>
                  <TiArrowLeftThick />
              </div>
            </div>
            <div className="right-box dash-header">
              <div className="cus-header">
                <div className="cus-headermenu" onClick={handleMenuClick}>
                  <GiHamburgerMenu />
                </div>
                <div className="cus-header01">
                  <div className="headlogo">
                    <Image src="/img/logo.png" width={81} height={28} alt="" />
                  </div>
                  <div className="help">
                    <Image src="/img/Help.png" width={14} height={14} alt="" />
                    <span className="small">How it works</span>
                  </div>
                </div>
                <div className="cus-header02">
                  <div className="search-filter">
                    <div className="search-icon">
                      <Image src="/img/search.png" width={16} height={16} alt="" />
                    </div>
                    <input type="search" placeholder="Search features, tutorials, etc." />
                  </div>
                </div>
                <div className="cus-header03">
                  <div className="header-btn">
                    <div className="header-btn1">
                      <Image src="/img/mess.png" width={20} height={20} alt="" />
                    </div>
                    <div className="header-btn1">
                      <Image src="/img/filldrop.png" width={15} height={10} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="setalldata">
                <div className="box1">
                  <div className="heading">
                    <h2 className="heading">Overview</h2>
                  </div>
                  <div className="selectbox">
                    <select name="select" id="">
                      <option value="" selected>Last Month</option>
                      <option value="">Six Month</option>
                      <option value="">Two Month</option>
                      <option value="">One Month</option>
                    </select>
                    <div className="selecticon">
                      <Image src="/img/select-donw.png" width={16} height={16} alt="" />
                    </div>
                  </div>
                </div>

                <div className="box2">
                  <div className="minibox">
                    <div className="head-box">
                      <div className="headingbox">
                        <h2 className="heading01">
                          Next Payout
                        </h2>
                        <Image src="/img/Help.png" width={16} height={16} alt="" />
                      </div>

                      <div className="time small01">
                        by Today, <span>04:00 PM</span>
                      </div>
                    </div>
                    <div className="orderbox">
                      <div className="price">
                        <h2 className="heading02">
                          ₹92,312.20
                        </h2>
                      </div>
                      <div className="orders">
                        <a href="">13 orders <Image src="/img/dropright.png" width={20} height={20}
                          alt="" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="minibox">
                    <div className="head-box">
                      <div className="headingbox">
                        <h2 className="heading01">
                          Next Payout
                        </h2>
                        <Image src="/img/Help.png" width={16} height={16} alt="" />
                      </div>

                      {/* <!-- <div className="time small01">
                        by Today, <span>04:00 PM</span>
                      </div> --> */}
                    </div>
                    <div className="orderbox">
                      <div className="price">
                        <h2 className="heading02">
                          ₹92,312.20
                        </h2>
                      </div>
                      <div className="orders">
                        <a href="">13 orders <Image src="/img/dropright.png" width={20} height={20}
                          alt="" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="minibox">
                    <div className="head-box">
                      <div className="headingbox">
                        <h2 className="heading01">
                          Next Payout
                        </h2>
                        <Image src="/img/Help.png" width={16} height={16} alt="" />
                      </div>

                      {/* <!-- <div className="time small01">
                        by Today, <span>04:00 PM</span>
                      </div> --> */}
                    </div>
                    <div className="orderbox">
                      <div className="price">
                        <h2 className="heading02">
                          ₹92,312.20
                        </h2>
                      </div>
                      {/* <!-- <div className="orders">
                        <a href="">13 orders <Image src="/img/dropright.png" width={20} height={20}
                          alt="" /></a>
                      </div> --> */}
                    </div>
                  </div>
                </div>


                <div className="box3">
                  <div className="heading">
                    <h2 className="heading">Transactions | Last Month</h2>
                  </div>

                  <div className={"buttons " + inter.className}>
                    <div className="btn active">Payouts (22)</div>
                    <div className="btn">Refunds (2)</div>
                  </div>
                </div>

                <div className="box4">
                  <div className="tabel-btns">
                    <div className="searchhistory">
                      <div className="search-icon">
                        <Image src="/img/search.png" width={16} height={16} alt="" />
                      </div>
                      <input type="search" placeholder="Order ID or transaction Id" />
                    </div>

                    <div className="flex">
                      <div className="sort">
                        <span className="heading01">Sort</span>
                        <Image src="/img/Sort.png" width={16} height={16} alt="" />
                      </div>
                      <div className="download">
                        <Image src="/img/download.png" width={17.5} height={17.5} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className='settabel'>
                    <table className="table" width={100} cellPadding="0" cellSpacing="0">
                      <thead className="table-head">
                        <tr>
                          <th className="left">Date <Image src="/img/filldrop.png" width={8} height={8} alt="" style={{ display: 'inline-block' }} /></th>
                          <th className="left">Status</th>
                          <th className="left">Transaction ID</th>
                          <th className="right">Order amount</th>
                          <th className="right">Transaction fees</th>
                          <th className="right">Total</th>
                        </tr>
                      </thead>
                      <tbody className="table-body">
                        <tr>
                          <td className="left">Today, 09:00 PM</td>
                          <td className="left"><span className="circle"></span> Processing</td>
                          <td className="left">131634495747</td>
                          <td className="right">₹10,125.00</td>
                          <td className="right">₹1,125.00</td>
                          <td className="right">₹9,312</td>
                        </tr>
                        <tr>
                          <td className="left">Today, 09:00 PM</td>
                          <td className="left"><span className="circle active"></span> Processing</td>
                          <td className="left">131634495747</td>
                          <td className="right">₹10,125.00</td>
                          <td className="right">₹1,125.00</td>
                          <td className="right">₹9,312</td>
                        </tr>
                        <tr>
                          <td className="left">Today, 09:00 PM</td>
                          <td className="left"><span className="circle active"></span> Processing</td>
                          <td className="left">131634495747</td>
                          <td className="right">₹10,125.00</td>
                          <td className="right">₹1,125.00</td>
                          <td className="right">₹9,312</td>
                        </tr>
                        <tr>
                          <td className="left">Today, 09:00 PM</td>
                          <td className="left"><span className="circle active"></span> Processing</td>
                          <td className="left">131634495747</td>
                          <td className="right">₹10,125.00</td>
                          <td className="right">₹1,125.00</td>
                          <td className="right">₹9,312</td>
                        </tr>
                        <tr>
                          <td className="left">Today, 09:00 PM</td>
                          <td className="left"><span className="circle active"></span> Processing</td>
                          <td className="left">131634495747</td>
                          <td className="right">₹10,125.00</td>
                          <td className="right">₹1,125.00</td>
                          <td className="right">₹9,312</td>
                        </tr>
                        <tr>
                          <td className="left">Today, 09:00 PM</td>
                          <td className="left"><span className="circle active"></span> Processing</td>
                          <td className="left">131634495747</td>
                          <td className="right">₹10,125.00</td>
                          <td className="right">₹1,125.00</td>
                          <td className="right">₹9,312</td>
                        </tr>
                        <tr>
                          <td className="left">Today, 09:00 PM</td>
                          <td className="left"><span className="circle active"></span> Processing</td>
                          <td className="left">131634495747</td>
                          <td className="right">₹10,125.00</td>
                          <td className="right">₹1,125.00</td>
                          <td className="right">₹9,312</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
