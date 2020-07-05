const LdapStrategy = require("passport-ldapauth");
import { Request, Response } from "express";
import config from "../config/config";
import passport from "./passport";

const OPTS = {
  server: {
    url: "ldap://172.19.3.130:389",
    bindDn: "CN=USRLIMDC,OU=Usuarios de Sistema,DC=tim,DC=com,DC=pe",
    bindCredentials: "Cl4r0peru51!",
    searchBase: "DC=tim,DC=com,DC=pe",
    searchFilter:
      "(&(objectcategory=person)(objectclass=user)(|(samaccountname={{username}})(mail={{username}})))",
    searchAttributes: [
      "displayName",
      "mail",
      "title",
      "description",
      "physicalDeliveryOfficeName",
      "co",
      "department",
      "company"
    ]
  }
};

export default new LdapStrategy(OPTS);
