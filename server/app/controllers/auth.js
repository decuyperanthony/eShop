const User = require("../models/user");


// une libraire pour tester le format des email
const emailValidator = require("email-validator");
// bcrypt, pour HASHER les mots de passer
const bcrypt = require("bcrypt");