const router = require("express").Router();
const db = require("../../models");

// Routes
// =============================================================

// /api/city

router.get("/api/city", (req, res) => {
  let latLonApiCall =
    "https://api.opentripmap.com/0.1/en/places/geoname?name=" +
    req.body.cityName +
    "&apikey=5ae2e3f221c38a28845f05b6d3c5612fbf8d9a0bb1b85e69d409790b";

  // turning the API call into JSON
  fetch(latLonApiCall).then((cityLatLonResponse) => {
    lat = cityLatLonResponse.lat;
    lon = cityLatLonResponse.lon;

    apiCall =
      "https://api.opentripmap.com/0.1/en/places/radius?radius=40233&lon=" +
      lon +
      "&lat=" +
      lat +
      "&kinds=restaurants&rate=3&format=json&limit=10&apikey=5ae2e3f221c38a28845f05b6d3c5612fbf8d9a0bb1b85e69d409790b";

    // turning the api call into json
    fetch(apiCall)
      .then(function (cityResponse) {
        //printing out to the page the names things
        console.log(cityResponse);
        res.json(cityResponse);
      });
  });
});

// router.get("/:id", (req, res) => {
//   db.Author.findOne({
//     where: {
//       id: req.params.id,
//     },
//     // Here we add an "include" property to our options in our findOne query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just `db.Post`
//     include: [db.Post],
//   }).then((dbAuthor) => {
//     res.json(dbAuthor);
//   });
// });

// router.post("/", (req, res) => {
//   db.Author.create(req.body).then((dbAuthor) => {
//     res.json(dbAuthor);
//   });
// });

// router.delete("/:id", (req, res) => {
//   db.Author.destroy({
//     where: {
//       id: req.params.id,
//     },
//   }).then((dbAuthor) => {
//     res.json(dbAuthor);
// //   });
// });

module.exports = router;
