import sys
import json
import pandas as pd
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import nltk

# Download the "stopwords" and "punkt" resources
nltk.download('stopwords')
nltk.download('punkt')

class HealthRecommendation:
    def __init__(self):
        # Load the health dataset from the CSV file
        self.health_data = pd.read_csv('health_data.csv', delimiter='\t')

        # Print column names for debugging
        # print("Columns in health dataset:", self.health_data.columns)

    def preprocess_text(self, text):
        # Tokenize, remove stopwords, and perform stemming
        ps = PorterStemmer()
        stop_words = set(stopwords.words('english'))
        words = [ps.stem(word.lower()) for word in word_tokenize(text) if word.isalnum() and word.lower() not in stop_words]
        return ' '.join(words)

    def recommend_health_condition(self, symptom):
        # Preprocess the input symptom
        preprocessed_symptom = self.preprocess_text(symptom)

        # Check if 'Symptoms' is in the columns
        if 'Symptoms' not in self.health_data.columns:
            return {"Symptom": symptom, "PossibleDisease": "Column 'Symptoms' not found", "Medicine": "Column 'Symptoms' not found"}

        # Preprocess symptoms in the health dataset
        preprocessed_symptoms = [self.preprocess_text(sym) for sym in self.health_data['Symptoms']]

        # Create TF-IDF vectors
        vectorizer = TfidfVectorizer()
        vectors = vectorizer.fit_transform([preprocessed_symptom] + preprocessed_symptoms)

        # Calculate cosine similarity between the input symptom and health dataset symptoms
        similarity_scores = cosine_similarity(vectors[0:1], vectors[1:]).flatten()

        if not similarity_scores.any():
            return {"Symptom": symptom, "PossibleDisease": "Not found", "Medicine": "Not found"}

        # Find the index of the most similar health condition
        max_similarity_index = similarity_scores.argmax()

        # Access the recommended health condition and medicine from the DataFrame
        recommended_disease = self.health_data.loc[max_similarity_index, 'PossibleDisease']
        recommended_medicine = self.health_data.loc[max_similarity_index, 'Medicine']

        return {"Symptom": symptom, "PossibleDisease": recommended_disease, "Medicine": recommended_medicine}

if __name__ == "__main__":
    # Extract symptom from command-line argument
    symptom = sys.argv[1]

    # Create an instance of HealthRecommendation
    health_rec = HealthRecommendation()

    # Get recommended health condition and medicine for the symptom
    recommended_health_condition = health_rec.recommend_health_condition(symptom)

    # Print the recommended health condition and medicine in the desired format
    print(json.dumps(recommended_health_condition))
