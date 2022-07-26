const News = require("../models/newsModel");

// Gauti visus studentus
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json({
      status: "success",
      results: news.length,
      data: {
        news: news,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Sukurti studentą
exports.createNews = async (req, res) => {
  try {
    const newNews = await News.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        news: newNews,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Gauti studentą pagal ID
exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        news: news,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Atnaujinti esamą studentą
exports.updateNews = async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, {
      // atnaujinus duomenis - gauti atnaujintą studento informaciją
      new: true,
      // papildomai patikrintų duomenis pagal DB schemą (studentModel)
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        news: news,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Pašalinti studentą pagal ID
exports.deleteNews = async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
