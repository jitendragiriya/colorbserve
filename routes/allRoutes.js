const express = require("express");
const {
  LOGIN,
  ALL_RECEPE,
  ALL_INGREDIENT,
  ALL_PROCESS,
  AUTH,
} = require("../constants/ourRoutes");
const { login, authUser } = require("../controllers/auth");
const { getAllIngredients } = require("../controllers/ingredient");
const { getAllProcess } = require("../controllers/process");
const { getAllRecipies } = require("../controllers/recipe");
const { isAuthenticatedUser } = require("../middlewares/authUser");
const router = express.Router();

// routes
router.get(AUTH, isAuthenticatedUser, authUser);
router.post(LOGIN, login);
router.get(ALL_RECEPE, isAuthenticatedUser ,getAllRecipies);
router.get(ALL_INGREDIENT, isAuthenticatedUser , getAllIngredients);
router.get(ALL_PROCESS, isAuthenticatedUser , getAllProcess);

module.exports = router;
