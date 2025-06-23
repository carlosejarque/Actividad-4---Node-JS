const Trip = require("../models/Trip");

exports.getTrips = async (req, res) => {

  const rows = await Trip.findAll();
  res.json(rows);
};

exports.getTripById = async (req, res) => {

  const { id } = req.params;
  const trip = await Trip.findByPk(id);
  if (trip) {
    res.json(trip);
  } else {
    res.status(404).json({ message: "Trip not found" });
  }
};

exports.createTrip = async (req, res) => {
  const { title, description, country, city, start_date, end_date } =req.body;
  const userId = req.user.userId;
  const trip = await Trip.create({
    title,
    description,
    country,
    city,
    start_date,
    end_date,
    userId,
  });
  res.status(201).json({ message: "Trip added successfully", trip });
};

exports.updateTrip = async (req, res) => {
  const { id } = req.params;
  const { title, description, country, city, start_date, end_date, userId } =
    req.body;
  const trip = await Trip.findByPk(id);

  if (trip) {
    await trip.update({
      title,
      description,
      country,
      city,
      start_date,
      end_date,
      userId,
    });
    res.json({ message: "Trip updated successfully" });
  } else {
    res.status(404).json({ message: "Trip not found" });
  }
};

exports.deleteTrip = async (req, res) => {
  const { id } = req.params;
  const trip = await Trip.findByPk(id);

  if (trip) {
    await trip.destroy();
    res.json({ message: "Trip deleted successfully" });
  } else {
    res.status(404).json({ message: "Trip not found" });
  }
};

;
