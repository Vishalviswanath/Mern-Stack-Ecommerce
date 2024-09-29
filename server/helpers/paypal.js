const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AcjMisT-_2AJ_Z5HhG_VEkSwbJVtu-j0kxJLfxDxGb3S8gRWlf1vGL2qxbxQseXta4QFgOguswUjPkEY",
  client_secret: "EBAtlKBbpwEqMGivoc4hdUubdORcq7ZkhbcM4CG2jkmuHYu4CxuRbl_KaQ5IY7OcGPfs14uWg4IgACIz",
});

module.exports = paypal;
