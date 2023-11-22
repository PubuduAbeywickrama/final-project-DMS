from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.preprocessing import LabelEncoder
import pandas as pd

def interpret_food_label(label):
    food_labels = {0: 'balanced', 1: 'low_carb', 2: 'low_fat'}
    return food_labels.get(label, 'unknown')

def interpret_exercise_label(label):
    exercise_labels = {0: 'cardio', 1: 'strength'}
    return exercise_labels.get(label, 'unknown')

# Assume you have a dataset with columns: age, gender, weight, height, bmi, glucose, food_suggestion, exercise_suggestion

# Load your dataset
# df = pd.read_csv('your_dataset.csv')

# For simplicity, let's create a sample dataset
data = {
    'age': [30, 25, 35, 40, 28],
    'gender': ['male', 'female', 'male', 'female', 'male'],
    'weight': [70, 55, 80, 65, 75],
    'height': [175, 160, 180, 165, 170],
    'bmi': [22.86, 21.48, 24.69, 23.87, 25.95],
    'glucose': [90, 95, 88, 105, 92],
    'food_suggestion': ['balanced', 'balanced', 'low_carb', 'balanced', 'low_fat'],
    'exercise_suggestion': ['cardio', 'strength', 'cardio', 'strength', 'cardio']
}

df = pd.DataFrame(data)

# Encode categorical variables
label_encoder = LabelEncoder()
df['gender'] = label_encoder.fit_transform(df['gender'])

# Features and target
X = df[['age', 'weight', 'height', 'bmi', 'glucose', 'gender']]
y_food = df['food_suggestion']
y_exercise = df['exercise_suggestion']

# Split the dataset
X_train, X_test, y_food_train, y_food_test, y_exercise_train, y_exercise_test = train_test_split(
    X, y_food, y_exercise, test_size=0.2, random_state=42
)

# Create decision tree classifiers
food_classifier = DecisionTreeClassifier()
exercise_classifier = DecisionTreeClassifier()

# Train the models
food_classifier.fit(X_train, y_food_train)
exercise_classifier.fit(X_train, y_exercise_train)

# Make predictions for the user input
user_input = {
    'age': 35,
    'gender': 'male',
    'weight': 75,
    'height': 178,
    'bmi': 23.8,
    'glucose': 95
}

# Convert user input to numerical format
user_input['gender'] = label_encoder.transform([user_input['gender']])[0]

# Ensure feature names are consistent between training and testing data
feature_names = X.columns.tolist()

user_food_prediction = food_classifier.predict([list(user_input.values())])[0]
user_exercise_prediction = exercise_classifier.predict([list(user_input.values())])[0]

# Interpret the predictions
food_recommendation = interpret_food_label(user_food_prediction)
exercise_recommendation = interpret_exercise_label(user_exercise_prediction)

# Provide output to the user
print("Food Recommendation:", food_recommendation)
print("Exercise Recommendation:", exercise_recommendation)
