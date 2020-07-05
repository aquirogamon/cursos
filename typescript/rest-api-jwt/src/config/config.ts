export default {
  jwtSecrect: process.env.JWT_SECRET || "somesecrettoken",
  DB: {
    URI: process.env.MONGODB_URI || "mongodb://192.168.1.6/jwttutorial",
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD
  },
  facebookSecrect: {
    facebookClientID: "192868525416063",
    facebookClientSecrect: "17427c1fd8344f589d5a4035563ea162"
  }
};
