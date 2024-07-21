const express = require("express");

const Room = require("../models/room");

const router = express.Router();

router.post("/", async (req, res) => {
  const { hostelId, roomNumber, price } = req.body;
  try {
    const room = await Room.create({ hostelId, roomNumber, price });
    res.status(201).json(room);
  } catch (error) {
    console.error("Error creating room:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  const roomId = req.params.id;
  try {
    const room = await Room.findByPk(roomId);
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    res.json(room);
  } catch (error) {
    console.error("Error fetching room:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  const roomId = req.params.id;
  const { hostelId, roomNumber, price } = req.body;
  try {
    const room = await Room.findByPk(roomId);
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    room.hostelId = hostelId;
    room.roomNumber = roomNumber;
    room.price = price;
    await room.save();
    res.json(room);
  } catch (error) {
    console.error("Error updating room:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  const roomId = req.params.id;
  try {
    const room = await Room.findByPk(roomId);
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }
    await room.destroy();
    res.json({ message: "Room deleted successfully" });
  } catch (error) {
    console.error("Error deleting room:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
