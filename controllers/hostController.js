//POST route for renter to create new booking on Renters AND Bookings table
// WORKS
router.post("/api/host", (req, res) => {
    console.log("inside post method")
    console.log(req.body)
    db.Renters.create(req.body)
      .then((newRenter) => {
          // let bookingDetails = {
          //     "bookingId": req.body.bookingId, 
          //     "rentersId": req.body.rentersId,
          //     "locationTitle": req.body.locationTitle,
          //     "hostId": req.body.hostId
          // }
          // db.bookings.create(bookingDetails).then ((booking ) => {
          //     res.json(newRenter);
          // })
          res.json(newRenter);
      })
      .catch((err) => {
        console.log(err);
      });
  });