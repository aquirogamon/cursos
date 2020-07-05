import express from "express";
import morgan from "morgan";
import cors from "cors";
import passport from "passport";
import passportMiddleware from "./middlewares/passport";
import passportFacebookMiddleware from "./middlewares/passportFacebook";
import passportLdapMiddleware from "./middlewares/passportLdap";

import authLocalRoutes from "./routes/authLocal.routes";
import specialRoutes from "./routes/special.routes";
import documentationRoutes from "./routes/documentation.routes";
import authFacebookRoutes from "./routes/authFacebook.routes";
import authLdapRoutes from "./routes/authLdap.routes";

// Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
passport.use(passportLdapMiddleware);

// Routes
app.get("/", (req, res) => {
  res.send(`The API is at http://localhost:${app.get("port")}`);
});

app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

app.use(authLocalRoutes);
app.use(authFacebookRoutes);
app.use(specialRoutes);
app.use(documentationRoutes);
app.use(authLdapRoutes);

export default app;
