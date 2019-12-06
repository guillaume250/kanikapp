module.exports = {
  db: "mongodb://guil12:guil12@ds041821.mlab.com:41821/kanikadb",
  db_alt: "mongodb://fabrice:fabrice@ds127065.mlab.com:27065/kanikapp",
  test_users: {
    fabrice: {
      _id: "5951aec6ca973c1a0b5388csse",
      ViewBookings: true,
      ViewReports: true,
      ViewUsers: true,
      CanComfirmBooking: true,
      CanCancelBooking: true,
      CanDeleteBooking: true,
      Status: true,
      Password: "Fabrice",
      UserName: "Fabrice",
      FullNames: "Fabrice Ndayisenga",
      Title: "Managing Director",
      __v: 0
    },
    guillaume: {
      _id: "5951aec6ca973c1a0b5388case",
      ViewBookings: true,
      ViewReports: true,
      ViewUsers: true,
      CanComfirmBooking: true,
      CanCancelBooking: true,
      CanDeleteBooking: true,
      Status: true,
      Password: "0788517777",
      UserName: "Guillaume",
      FullNames: "Guillaume Sayinzoga",
      Title: "Chief Technology Officer",
      __v: 1
    }
  }
};
