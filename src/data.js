import React, { Component } from 'react';

var symbols = [
    "AARTIIND",
    "ABB",
    "ABBOTINDIA",
    "ABCAPITAL",
    "ABFRL",
    "ACC",
    "ADANIENT",
    "ADANIPORTS",
    "ALKEM",
    "AMARAJABAT",
    "AMBUJACEM",
    "APOLLOHOSP",
    "APOLLOTYRE",
    "ASHOKLEY",
    "ASIANPAINT",
    "ASTRAL",
    "ATUL",
    "AUBANK",
    "AUROPHARMA",
    "AXISBANK",
    "BAJAJ-AUTO",
    "BAJAJFINSV",
    "BAJFINANCE",
    "BALKRISIND",
    "BALRAMCHIN",
    "BANDHANBNK",
    "BANKBARODA",
    "BATAINDIA",
    "BEL",
    "BERGEPAINT",
    "BHARATFORG",
    "BHARTIARTL",
    "BHEL",
    "BIOCON",
    "BOSCHLTD",
    "BPCL",
    "BRITANNIA",
    "BSOFT",
    "CANBK",
    "CANFINHOME",
    "CHAMBLFERT",
    "CHOLAFIN",
    "CIPLA",
    "COALINDIA",
    "COFORGE",
    "COLPAL",
    "CONCOR",
    "COROMANDEL",
    "CROMPTON",
    "CUB",
    "CUMMINSIND",
    "DABUR",
    "DALBHARAT",
    "DEEPAKNTR",
    "DELTACORP",
    "DIVISLAB",
    "DIXON",
    "DLF",
    "DRREDDY",
    "EICHERMOT",
    "ESCORTS",
    "EXIDEIND",
    "FEDERALBNK",
    "FSL",
    "GAIL",
    "GLENMARK",
    "GMRINFRA",
    "GNFC",
    "GODREJCP",
    "GODREJPROP",
    "GRANULES",
    "GRASIM",
    "GUJGASLTD",
    "HAL",
    "HAVELLS",
    "HCLTECH",
    "HDFC",
    "HDFCAMC",
    "HDFCBANK",
    "HDFCLIFE",
    "HEROMOTOCO",
    "HINDALCO",
    "HINDCOPPER",
    "HINDPETRO",
    "HINDUNILVR",
    "HONAUT",
    "IBULHSGFIN",
    "ICICIBANK",
    "ICICIGI",
    "ICICIPRULI",
    "IDEA",
    "IDFC",
    "IDFCFIRSTB",
    "IEX",
    "IGL",
    "INDHOTEL",
    "INDIACEM",
    "INDIAMART",
    "INDIGO",
    "INDUSINDBK",
    "INDUSTOWER",
    "INFY",
    "INTELLECT",
    "IOC",
    "IPCALAB",
    "IRCTC",
    "ITC",
    "JINDALSTEL",
    "JKCEMENT",
    "JSWSTEEL",
    "JUBLFOOD",
    "KOTAKBANK",
    "L&TFH",
    "LALPATHLAB",
    "LAURUSLABS",
    "LICHSGFIN",
    "LT",
    "LTI",
    "LTIM",
    "LTTS",
    "LUPIN",
    "M&M",
    "M&MFIN",
    "MANAPPURAM",
    "MARICO",
    "MARUTI",
    "MCDOWELL-N",
    "MCX",
    "METROPOLIS",
    "MFSL",
    "MGL",
    "MOTHERSON",
    "MPHASIS",
    "MRF",
    "MUTHOOTFIN",
    "NATIONALUM",
    "NAUKRI",
    "NAVINFLUOR",
    "NESTLEIND",
    "NMDC",
    "NTPC",
    "OBEROIRLTY",
    "OFSS",
    "ONGC",
    "PAGEIND",
    "PEL",
    "PERSISTENT",
    "PETRONET",
    "PFC",
    "PIDILITIND",
    "PIIND",
    "PNB",
    "POLYCAB",
    "POWERGRID",
    "PVR",
    "RAIN",
    "RAMCOCEM",
    "RBLBANK",
    "RECLTD",
    "RELIANCE",
    "SAIL",
    "SBICARD",
    "SBILIFE",
    "SBIN",
    "SHREECEM",
    "SIEMENS",
    "SRF",
    "SRTRANSFIN",
    "SUNPHARMA",
    "SUNTV",
    "SYNGENE",
    "TATACHEM",
    "TATACOMM",
    "TATACONSUM",
    "TATAMOTORS",
    "TATAPOWER",
    "TATASTEEL",
    "TCS",
    "TECHM",
    "TITAN",
    "TORNTPHARM",
    "TORNTPOWER",
    "TRENT",
    "TVSMOTOR",
    "UBL",
    "ULTRACEMCO",
    "UPL",
    "VEDL",
    "VOLTAS",
    "WHIRLPOOL",
    "WIPRO",
    "ZEEL",
    "ZYDUSLIFE"
];
var arr = [];

const bg = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#1b5364",
    width: "100vw",
    height: "13vh",
}
const logo = {
    margin: "0px",
    padding: "1.5%",
}
const logotext = {
    fontSize: "5vh",
    color: "aliceblue",
    margin: "0px",
}
const eqdiv = {
    padding: "2.3%",
}
const eqlink = {
    color: "aliceblue",
    fontSize: "3vh",
    textDecoration: "none",
}
const optiontext = {
    fontSize: "3vh"

}
const optiondiv = {
    padding: "2.3%",
}
const bsdata = {
    display: "flex",
    flexDirection: "row",
}
const tableborder = {
    border: "1px solid"
}
const outerborder = {
    border: "2px solid"
}
// program to reverse a string

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

export default class Data extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    async componentDidMount() {
        await fetch(`http://tickertradz.co.in:9000/data/AARTIIND/NFO/28-02-2023`, { method: "POST" })
            .then(res => res.json())
            .then((result) => {
                arr = result;
            })
        this.setState({ data: arr });
    }
    handlefind = async () => {
        var revrse = [];
        var sname = document.getElementById('symbol').value;
        var type = document.getElementById('type').value;
        var date = document.getElementById('date').value;
        revrse = date.split("-");
        var datereverse = `${revrse[2]}-${revrse[1]}-${revrse[0]}`
        console.log(datereverse);
        await fetch(`http://tickertradz.co.in:9000/data/${sname}/${type}/${datereverse}`, { method: "POST" })
            .then(res => res.json())
            .then((result) => {
                arr = result;
                console.log(arr)
            })
        this.setState({ data: arr });
    }
    render() {
        return (

            <>
                <div style={bg}>
                    <div style={logo}>
                        <p style={logotext}>TickerTradz</p>
                    </div>
                    <div style={eqdiv}>
                        <a style={eqlink} href='http://tickertradz.co.in:3000/equity'>Equity</a>
                    </div>
                    <div style={eqdiv}>
                        <a style={eqlink} href='https://kite.trade/connect/login?api_key=7ebr1ptb3ccwvz07'>Home</a>
                    </div>
                    <div style={optiondiv}>
                        <select name='symbol' id="symbol" style={optiontext}>
                            {
                                symbols.map((item) => {
                                    return <option key={item} value={item}>
                                        {item}
                                    </option>
                                })};
                        </select>
                    </div>
                    <div style={{ height: "3vh", marginTop: "5vh" }}>
                        <input type="date" name="date" id="date"></input>
                    </div>
                    <div style={optiondiv}>
                        <select name='type' id="type" style={optiontext}>
                            <option value="NFO">NFO</option>
                            <option value="EQ">EQ</option>
                        </select>
                    </div>
                    <div style={optiondiv}>
                        <button type='submit' style={optiontext} onClick={this.handlefind}>Search</button>
                    </div>
                </div>
                <div style={bsdata}>
                    <table className="table table-striped">
                        <thead>
                            <td style={tableborder}>Stock Name</td>
                            <td style={tableborder}>Date</td>
                            <td style={tableborder}>Time</td>
                            <td style={tableborder}>Type</td>
                            <td style={{
                                border: "1px solid",
                                backgroundColor: "#90ee90"
                            }}>Buyer</td>
                            <td style={{
                                border: "1px solid",
                                backgroundColor: "#ffb6c1"
                            }}>Sellers</td>
                            <td style={tableborder}>volume</td>
                            <td style={tableborder}>Open Interest</td>
                            <td style={tableborder}>oi_day_high</td>
                            <td style={tableborder}>oi_day_low</td>
                        </thead>
                        {
                            this.state.data.map((items) => {
                                return <tbody>
                                    <td style={tableborder}>{items.name}</td>
                                    <td style={tableborder}>{items.date}</td>
                                    <td style={tableborder}>{items.time}</td>
                                    <td style={tableborder}>{items.type}</td>
                                    <td style={{
                                        border: "1px solid",
                                        backgroundColor: "#90ee90"
                                    }}>{items.buy_q}</td>
                                    <td style={{
                                        border: "1px solid",
                                        backgroundColor: "#ffb6c1"
                                    }}>{items.sell_q}</td>
                                    <td style={tableborder}>{items.volume}</td>
                                    <td style={tableborder}>{items.oi}</td>
                                    <td style={tableborder}>{items.oi_day_high}</td>
                                    <td style={tableborder}>{items.oi_day_low}</td>
                                </tbody>
                            })}
                    </table>
                </div>
            </>
        );
    }
}