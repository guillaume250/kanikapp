module.exports = {
  server: {
    env: "Development",
    port: 5000,
    uri: "http://localhost:"
  },
  databases: {
    mongodb: {
      local: "mongodb://127.0.0.1:27017/kanikapp",
      remote: "mongodb://fabrice:fabrice@ds127065.mlab.com:27065/kanikapp"
    }
  },
  token: {
    secret: "kanika-dev-secret",
    expiration: "1h" //jsonwebtoken will calculate 1 hour from the token creation date
  },
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
