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
]

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
const label = {
    fontSize: "3vh",
    color: "CCCCCC",
    marginLeft: "4vw"
}
const datas = {
    fontSize: "4vh",
    marginLeft : "4vw"
}
const bsdata = {
    display: "flex",
    flexDirection: "row",
}
const leftdata = {
    marginLeft: "25vw",
    marginTop: "20vh",
}
const rightdata = {
    marginTop: "12vh",
    marginLeft: "4vw",
}

function EQ() {
    async function data() {
        var sname = document.getElementById('symbol').value
        await fetch(`http://tickertradz.co.in:9000/futures/NSE:${sname}`)
            .then(res => res.json())
            .then((result) => {
                document.getElementById("time").innerHTML = result.timestamp;
                document.getElementById("ltp").innerHTML = result.last_price;
                document.getElementById("buy").innerHTML = result.buy_quantity;
                document.getElementById("sell").innerHTML = result.sell_quantity;
                document.getElementById("oi").innerHTML = result.oi;
                document.getElementById("bs").innerHTML = result.buy_quantity / result.sell_quantity;
                document.getElementById("sb").innerHTML = result.sell_quantity / result.buy_quantity;
                document.getElementById("vol").innerHTML = result.volume;
            })

    }
    return (
        <>
            <div style={bg}>
                <div style={logo}>
                    <p style={logotext}>TickerTradz</p>
                </div>
                <div style={eqdiv}>
                    <a style={eqlink} href="http://tickertradz.co.in:3000/?status=success&request_token=Gmlha3PYsldx8o0kn6vY9c5HI9LfGg65&action=login&type=login">Home</a>
                </div>
                <div style={optiondiv}>
                    <select id="symbol" style={optiontext}>
                        {
                            symbols.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))};
                    </select>
                </div>
                <div style={optiondiv}>
                    <button style={optiontext} onClick={data}>Search</button>
                </div>
            </div>
            <div style={bsdata}>
                <div style={rightdata}>
                    <label style={label}>Time</label>
                    <p style={datas} id="time"></p>
                    <label style={label}>LTP</label>
                    <p style={datas} id="ltp"></p>
                    <label style={label}>Volume</label>
                    <p style={datas} id="vol"></p>
                    <label style={label}>Buy Quantity</label>
                    <p style={datas} id="buy"></p>
                    <label style={label}>Sell Quantity</label>
                    <p style={datas} id="sell"></p>
                    <label style={label}>Open Interest</label>
                    <p style={datas} id="oi"></p>
                </div>
                <div style={leftdata}>
                    <label style={label}>Buyers/Sellers</label>
                    <p style={datas} id="bs"></p>
                    <label style={label}>Sellers/Buyers</label>
                    <p style={datas} id="sb"></p>
                </div>
            </div>
        </>
    );
}
export default EQ;