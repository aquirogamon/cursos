const axios = require("axios");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

class Main {
  static async getInternetPPM() {
    const fqdn = "&FQDN=Node%3D" + "10.235.0.123";
    await axios
      .get(
        "https://aquiroga:Cl4r0peru51@172.19.212.8:4440/ppm/rest/reports/Transport+Statistics/Interface/Interface+Utilization%2FBit+Rates?outputType=jsonv2&durationSelect=lastHour&intervalTypeKey=FIVE_MINUTE&maxPageSize=200000" +
          fqdn
      )
      .then(function(response) {
        console.log("Data: ", response.data["report"]["data"]);
        console.log("Satus: ", response.status);
        console.log("Status Text: ", response.statusText);
        console.log("Headers: ", response.headers);
        console.log("Config: ", response.config);
      });
  }
}
Main.getInternetPPM();
