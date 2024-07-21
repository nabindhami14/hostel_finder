const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequalize");

const Hostel = require("./hostel");

const Room = sequelize.define("rooms", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  hostelId: {
    type: DataTypes.INTEGER,
    references: {
      model: Hostel,
      key: "id",
    },
  },
  roomNumber: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Hostel.hasMany(Room, { foreignKey: "hostelId" });
Room.belongsTo(Hostel, { foreignKey: "hostelId" });

module.exports = Room;
