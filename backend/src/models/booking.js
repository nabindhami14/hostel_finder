const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequalize");
const Room = require("./room");
const User = require("./user");

const Booking = sequelize.define("bookings", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
  roomId: {
    type: DataTypes.INTEGER,
    references: {
      model: Room,
      key: "id",
    },
  },
  checkInDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  checkOutDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

User.hasMany(Booking, { foreignKey: "userId" });
Booking.belongsTo(User, { foreignKey: "userId" });

Room.hasMany(Booking, { foreignKey: "roomId" });
Booking.belongsTo(Room, { foreignKey: "roomId" });

module.exports = Booking;
