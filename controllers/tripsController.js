const Trip = require("../models/Trip");
// const redisClient = require("../services/redis");

exports.getTrips = async (req, res) => {
  // const cacheKey = "trips:all";
  // const cachedData = await redisClient.get(cacheKey);
  // if (cachedData) {
  //   return res.json(JSON.parse(cachedData));
  // }

  const rows = await Trip.findAll();
  // await redisClient.set(cacheKey, JSON.stringify(rows), { EX: 1800 });
  res.json(rows);
};

exports.getTripById = async (req, res) => {
  // const cacheKey = `trips:${req.params.id}`;
  // const cached = await redisClient.get(cacheKey);
  // if (cached) {
  //   return res.json(JSON.parse(cached));
  // }

  const { id } = req.params;
  const trip = await Trip.findByPk(id);
  if (trip) {
    // await redisClient.set(cacheKey, JSON.stringify(trip), { EX: 1800 });
    res.json(trip);
  } else {
    res.status(404).json({ message: "Trip not found" });
  }
};

exports.createTrip = async (req, res) => {
  const { title, description, country, city, start_date, end_date } =req.body;
  const userId = req.user.userId;
  await Trip.create({
    title,
    description,
    country,
    city,
    start_date,
    end_date,
    userId,
  });
  // await redisClient.del("trips:all");
  res.status(201).json({ message: "Trip added successfully" });
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
    // await redisClient.del("trips:all");
    // await redisClient.del(`trips:${id}`);
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
    // await redisClient.del("trips:all");
    // await redisClient.del(`trips:${id}`);
    res.json({ message: "Trip deleted successfully" });
  } else {
    res.status(404).json({ message: "Trip not found" });
  }
};

;
