const mongoose = require('mongoose');

// Define a schema for the data
const RecommendationSchema = new mongoose.Schema({
  Symptom: {
    type: String,
    required: true,
  },
  PossibleDisease: {
    type: String,
    required: true,
  },
  Medicine: {
    type: String,
    required: true,
  },
});

// Create a model based on the schema
const Recommendation = mongoose.model('Recommendation', RecommendationSchema);
