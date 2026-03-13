const quizData = [
  {
    "question": "If X → Y and YZ → W then XZ → W is",
    "options": [
      "Composition Rule",
      "Reflexivity Rule",
      "Union Rule",
      "Pseudo transitive Rule"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "What is the difference between supervised and unsupervised learning?",
    "options": [
      "Supervised learning requires labeled data while unsupervised learning does not.",
      "Unsupervised learning requires labeled data while supervised learning does not.",
      "Supervised learning does not require data while unsupervised learning does.",
      "There is no difference between supervised and unsupervised learning."
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Which of the following is an example of a dimensionality reduction technique?",
    "options": [
      "Principal component analysis (PCA)",
      "Support vector machine (SVM)",
      "K-nearest neighbors (KNN)",
      "AdaBoost"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Which of the following is an example of a clustering algorithm?",
    "options": [
      "Decision tree",
      "Random forest",
      "K-means",
      "Gradient descent"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "You are predicting whether an email is spam or not. Based on the features, you obtained an estimated probability to be 0.75. What’s the meaning of this estimated probability?\nA) there is 75% chance that the email will be spam\nB) there is 25% chance that the email will be spam\nC) there is 75% chance that the email will not be spam\nD) there is 25% chance that the email will not be spam",
    "options": [
      "B and D",
      "A and B",
      "C and D",
      "A and D"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "What are the advantages of Classification and Regression Trees (CART)?",
    "options": [
      "Decision trees require relatively less effort from users for data preparation",
      "Nonlinear relationships between parameters do not affect tree performance.",
      "Both decision trees require relatively less effort from users for data preparation and nonlinear relationships between parameters do not affect tree performance.",
      "None of these"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "What are the advantages of Classification and Regression Trees (CART)?",
    "options": [
      "Decision trees implicitly perform variable screening or feature selection",
      "Can handle both numerical and categorical data",
      "Can handle multi-output problems.",
      "All of these"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "What are the disadvantages of Classification and Regression Trees (CART)?",
    "options": [
      "Decision trees can be unstable because small variations in the data might result in a completely different tree being generated",
      "Decision trees require relatively less effort from users for data preparation",
      "Nonlinear relationships between parameters do not affect tree performance.",
      "Decision trees implicitly perform variable screening or feature selection"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Decision tree learners may create biased trees if some classes dominate. What’s the solution of it?",
    "options": [
      "balance the dataset prior to fitting",
      "imbalance the dataset prior to fitting",
      "balance the dataset after fitting",
      "No solution possible"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "What is the maximum depth in a decision tree?",
    "options": [
      "the length of the longest path from a root to a leaf",
      "the length of the shortest path from a root to a leaf",
      "the length of the longest path from a root to a sub-node",
      "None of these"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Decision tree can be used for ______.",
    "options": [
      "classification",
      "regression",
      "Both classification and regression",
      "None of these"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "Decision tree is a ______ algorithm.",
    "options": [
      "supervised learning",
      "unsupervised learning",
      "Both supervised learning and unsupervised learning",
      "None of these"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "In which of the following cases will K-means clustering fail to give good results?\n1) Data points with outliers\n2) Data points with different densities\n3) Data points with nonconvex shapes",
    "options": [
      "1 and 2",
      "2 and 3",
      "1 and 3",
      "All of these"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "Suppose, your target variable is the price of a house using Decision Tree. What type of tree do you need to predict the target variable?",
    "options": [
      "classification tree",
      "regression tree",
      "clustering tree",
      "dimensionality reduction tree"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Suppose, your target variable is whether a passenger will survived or not using Decision Tree. What type of tree do you need to predict the target variable?",
    "options": [
      "classification tree",
      "regression tree",
      "clustering tree",
      "dimensionality reduction tree"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "In SVM, if the number of input features is 3, then the hyperplane is a _____.",
    "options": [
      "line",
      "circle",
      "plane",
      "None of these"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "In SVM, the dimension of the hyperplane depends upon which one?",
    "options": [
      "the number of features",
      "the number of samples",
      "the number of target variables",
      "All of these"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "In SVM, we are looking to maximize the margin between the data points and the hyperplane. The loss function that helps maximize the margin is called ______.",
    "options": [
      "hinge loss",
      "categorical cross-entropy loss",
      "binary cross-entropy loss",
      "None of these"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "In SVM, what is a hyperplane?",
    "options": [
      "decision boundaries",
      "data points",
      "features",
      "None of these"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "What’s the objective of the support vector machine algorithm?",
    "options": [
      "to find an optimal hyperplane in an N-dimensional space that distinctly classifies the data points where N is the number of features.",
      "to find an optimal hyperplane in an N-dimensional space that distinctly classifies the data points where N is the number of samples.",
      "to find an optimal hyperplane in an N-dimensional space that distinctly classifies the data points where N is the number of target variables.",
      "None of these"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "In which Strategy of data reduction redundant attributes are detected.",
    "options": [
      "Date cube aggregation",
      "Numerosity reduction",
      "Data compression",
      "Dimension reduction"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "Fraud Detection, Image Classification, Diagnostic, and Customer Retention are applications in which of the following",
    "options": [
      "Unsupervised Learning: Regression",
      "Supervised Learning: Classification",
      "Unsupervised Learning: Clustering",
      "Reinforcement Learning"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Suppose you are using RBF kernel in SVM with high Gamma value. What does this signify?",
    "options": [
      "The model would consider even far away points from hyperplane for modelling.",
      "The model would consider only the points close to the hyperplane for modelling.",
      "The model would not be affected by distance of points from hyperplane for modelling.",
      "None of the above"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "What is shape of dendrites like?",
    "options": [
      "Oval",
      "Round",
      "Tree",
      "Rectangular"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "Which of the following is not a type of supervised learning?",
    "options": [
      "Classification",
      "Regression",
      "Clustering",
      "None of the above"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "Which of the following is true about regularized linear regression model?",
    "options": [
      "Increase in regularization parameter (lambda) will make the model to underfit the data and the validation error will go up.",
      "Decrease in regularization parameter (lambda) will make the model to overfit the data and the training error go up",
      "Increase in regularization parameter (lambda) will make the model to underfit the data and the training error go down",
      "All of these are true"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Logistic Regression is a Machine Learning algorithm that is used to predict the probability of a ___?",
    "options": [
      "categorical independent variable",
      "categorical dependent variable",
      "numerical dependent variable",
      "numerical independent variable"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "HTML5 features, include native audio and video support without the need for.",
    "options": [
      "Flash",
      "Canvas",
      "SVG",
      "Applet"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "What does the status code – 404 indicate",
    "options": [
      "The server cannot find the requested resource.",
      "The client cannot find the requested resource",
      "The server-client connection was not established",
      "If it is an unauthenticated request"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Cross-Site Scripting (XSS) is a",
    "options": [
      "Cross domain scripting language",
      "Client side scripting language",
      "A type of web application vulnerability",
      "Cross platform scripting language"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Circle segments are helpful for viewing _________ data.",
    "options": [
      "One dimensional",
      "Two dimensional",
      "Multi dimensional",
      "Mixed mode"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "Closure occurs when an object is __________.",
    "options": [
      "Complete",
      "Incomplete",
      "Distorted",
      "Distributed"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Color is best understood in terms of luminance, _________, and saturation.",
    "options": [
      "Brightness",
      "Hue",
      "Histogram",
      "Intensity"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Designer may use the law of _______ to create a shape of an island and its reflection on the sea.",
    "options": [
      "Proximity",
      "Similarity",
      "Continuity",
      "Transitivity"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Finding all the possible paths from one node to another is an example of _______ task.",
    "options": [
      "Topological",
      "Sequential",
      "Interpolation",
      "Informal"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "For visualization design, the technique driven approach is _____________.",
    "options": [
      "Bottom-up",
      "Top-down",
      "Linear",
      "Cascading"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "For a choropleth map, a choice of _______ bins is good.",
    "options": [
      "2-4",
      "4-6",
      "6-8",
      "5-7"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Gender', 'eye color' are examples of _________ data.",
    "options": [
      "Categorical",
      "Ordinal",
      "Quantitative",
      "Qualitative"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Greenland appears to be bigger than Africa in which type of projection?",
    "options": [
      "Conformal",
      "Area preserving",
      "Shadow",
      "Gray"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "In node-link diagram, which type of nodes are perceived as tightly grouped?",
    "options": [
      "Node with direct single link",
      "Node with multiple links",
      "Isolated nodes",
      "Clustered nodes"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "In HSL system, the __________ axis is the amount of white mixed with that pure color.",
    "options": [
      "Hue",
      "Saturation",
      "Colour",
      "Light"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "KDD process is useless if the results are not ___________.",
    "options": [
      "Understandable",
      "Colourful",
      "Plottable",
      "Reproducible"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Luminance and saturation are _________ channels.",
    "options": [
      "Amplitude",
      "Magnitude",
      "Cardinality",
      "Identity"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "The goal of task abstraction is to transform user task from a domain specific language into a ____ level concise representation.",
    "options": [
      "High",
      "Low",
      "Mid",
      "Min"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "The length characteristic of which among these visual variable is theoretically infinite?",
    "options": [
      "Texture",
      "Shape",
      "Color",
      "Size"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "The number of unique values for an attribute is known as ________.",
    "options": [
      "Group value",
      "Cardinality",
      "Entropy",
      "Information gain"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "The red, blue, and green axes of the RGB color space are ________ useful as separable channels.",
    "options": [
      "Not",
      "Highly",
      "Occasionally",
      "Always"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "What will be the output for the following: x <- c(1,2,NA,3); mean(x)",
    "options": [
      "1.5",
      "NA",
      "Undefined",
      "Error"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "When similarity occurs, an object can be emphasized if it is dissimilar to the others. This is called ____________.",
    "options": [
      "Abnormality",
      "Anomaly",
      "Synonyms",
      "Wrong view"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Which among these is a better example of clustering?",
    "options": [
      "Dendogram",
      "Decision tree",
      "Circle segment",
      "Decision tables"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Which among these is example of sequential type attribute?",
    "options": [
      "Temperature",
      "Altitude",
      "Month",
      "Age"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "Which among these is not among the main Gestalt laws?",
    "options": [
      "Law of proximity",
      "Law of similarity",
      "Law of transitivity",
      "Law of continuity"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "Which among these will return the modulus division between A and B?",
    "options": [
      "A%%B",
      "A%B",
      "A~B",
      "A/B"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Which forecasting method is used when situation is stable and historical data exist?",
    "options": [
      "Quantitative",
      "Qualitative",
      "Distributive",
      "Descriptive"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Which forecasting method is used when situation is vague and little data exist?",
    "options": [
      "Quantitative",
      "Qualitative",
      "Descriptive",
      "Distributive"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Which marks are effective in showing complete information on hierarchical data?",
    "options": [
      "Cliques",
      "Containments",
      "Multiple colors",
      "Multiple shapes"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Which of these commands will run a simple linear regression of miles per gallon on car weight using the dataframe mtcars. Results are sent to the screen. Nothing is saved.",
    "options": [
      "lm(mpg~wt, data=mtcars)",
      "lm(mpg~wt, mtcars)",
      "lm(mpg~wt, df)",
      "ls(mpg~wt, df)"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "While representing time series data, it is advisable not to use more than _____ variables on a line graph.",
    "options": [
      "Two",
      "Three",
      "Four",
      "Six"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "LRU stands for",
    "options": [
      "Low Rate Usage",
      "Least Rate Usage",
      "Least Recently Used",
      "Low Required Usage"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "The technique that removes unimportant nodes of a decision tree is called ____",
    "options": [
      "Pruning",
      "Clustering",
      "Classifying",
      "Optimizing"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Statement 1: Private Cloud may exist only on-premises.\nStatement 2: Private Cloud can be managed by a third party",
    "options": [
      "Statement 1 is true",
      "Both the statements are true",
      "Statement 2 is true",
      "Both the statements are false"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "_____ removes the affixes of a word and returns the base form.",
    "options": [
      "Wording",
      "Affixing",
      "Infixing",
      "Stemming"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "Giving numerical representation for various target classes of dependent variables is called ___",
    "options": [
      "Cross-Entropy",
      "One-Hot Encoding",
      "Multinominal Regression",
      "Parameter Optimization"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Part-of-Speech Tagging is a ____ problem.",
    "options": [
      "Classification",
      "Clustering",
      "Sequence Labelling",
      "Prediction"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "When the sentences in a text are reinterpreted based on the given context using real world knowledge, it is called ____",
    "options": [
      "Syntax Analysis",
      "Semantic Analysis",
      "Pragmatic Analysis",
      "Vector Analysis"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "Data cleaning and data quality is the important property for most of the algorithm proper working. State True or False.",
    "options": [
      "True",
      "False",
      "both option a,b",
      "Null"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "ROC – Receiver Operator Characteristic is plotted between ____",
    "options": [
      "True Positive Rate and False Positive Rate",
      "True Negative Rate and False Negative Rate",
      "True Positive Rate and False Negative Rate",
      "True Negative Rate and False Positive Rate"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Text Data is converted into a collection of tokens by ___ after which Part of Speech Tagging is performed.",
    "options": [
      "Tokenization",
      "Stemming",
      "Verbs",
      "Nouns"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Which of the following is also called as the Sensitivity of a Model?",
    "options": [
      "Precision",
      "Recall",
      "F1 Score",
      "Specificity"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Which of the following Natural Toolkit allows text preprocessing on Indian Languages?",
    "options": [
      "NLTK",
      "INDIC",
      "Spacy",
      "TextBlob"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Which tool is best suited for mathematical operations in Data Analysis?",
    "options": [
      "LibreOffice",
      "SQL",
      "MS Word",
      "Octave"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "The case when the actual and predicted values are same is ____",
    "options": [
      "True Negative",
      "False Positive",
      "Neutral Negative",
      "False Negative"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "__________ do not encrypt an entire block per iteration.",
    "options": [
      "Feistel networks",
      "Rijndael networks",
      "Feister networks",
      "Both (a) and (b)"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Ensuring isolation property is the responsibility of the",
    "options": [
      "Recovery-management component of the DBMS",
      "Concurrency-control component of the DBMS",
      "Transaction-management component of the DBMS",
      "Buffer management component in DBMS"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "________ are the machine learning algorithms that can be used with unlabelled data.",
    "options": [
      "Regression algorithms",
      "Clustering algorithms",
      "Instance Based algorithms",
      "Classification algorithms"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "__________ are applied throughout the software process.",
    "options": [
      "Framework activities",
      "Umbrella activities",
      "Planning activities",
      "Construction activities"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "A threat action that interrupts delivery of system services by hindering system operation is known as ____________.",
    "options": [
      "Masquerade",
      "Falsification",
      "Repudiation",
      "Obstruction"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "An interface that provides I/O transfer of data directly to and from the memory unit and peripheral is termed a",
    "options": [
      "DDA",
      "Serial interface",
      "BR",
      "DMA"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "BFS on a rooted tree is equivalent to",
    "options": [
      "inorder traversal",
      "level order traversal",
      "postorder traversal",
      "preorder traversal"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "During a write operation if the required block is not present in the cache then ______ occurs.",
    "options": [
      "Write Miss",
      "Write latency",
      "Write hit",
      "Write delay"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Finite automata --------------- memory",
    "options": [
      "No auxiliary memory",
      "Finite",
      "Infinite",
      "none"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Identify the correct statement(s) is/are with respect to EDA\ni) focuses on more narrowly on checking assumptions required for model fitting\nii) Used in hypothesis testing\niii) Non-robust understanding of the data\niv) Non-scientific approach to get the story of the data",
    "options": [
      "ii) and iii)",
      "i) and ii)",
      "i) and iii)",
      "ii) and iv)"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Identify the incorrect statement(s) is/are with respect to Function names\ni) Function names have no initial capital letters\nii) Function names have no dots\niii) Function names have initial small letters\niv) Function names have no underscores",
    "options": [
      "ii), iii), iv)",
      "i), ii)",
      "ii), iii)",
      "iii), iv)"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "Identify the incorrect statement(s) is/are with respect to real-world data\ni) Real world data is clean\nii) Real world data is incomplete\niii) Having missing attribute values\niv) containing no errors or outliers",
    "options": [
      "i) and iii)",
      "ii) and iii)",
      "i) and ii)",
      "i) and iv)"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "If a queue is implemented using linked list by keeping track of a front pointer and a rear pointer, which of these pointers will change during an insertion into a non-empty queue?",
    "options": [
      "Only rear pointer changes",
      "Neither of the pointers change",
      "Only front pointer changes",
      "Both of the pointers change"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "If the running time of algorithm A is Θ(g(n)), then\n(I) The worst-case running time of A is O(g(n))\n(II) The best case running time of A is Ω(g(n))",
    "options": [
      "Only I is true",
      "Only II is true",
      "both I and II are true",
      "Both I and II are false"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "In Advanced Encryption Standard, _________ arithmetic is used in the Substitution-Box.",
    "options": [
      "Poisson",
      "Galois field",
      "Regular",
      "Normal"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "In SQL the statement select * from R, S is equivalent to",
    "options": [
      "Select * from R natural join S",
      "Select * from R cross join S",
      "Select * from R union join S",
      "Select * from R inner join S"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Let a, b ∈ R and b > 0. The value of (n + a)^b is",
    "options": [
      "Θ(b^n)",
      "Θ(n^b)",
      "Θ(nb)",
      "Θ(n + b)"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Object based data models are used in describing the abstraction at",
    "options": [
      "Physical level",
      "Both conceptual and view level",
      "Both Physical and conceptual level",
      "All the 3 Levels ( Physical, Conceptual and View )"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Suppose that a bus has 16 data lines and requires 4 cycles of 250 ns each to transfer data. The bandwidth of this bus would be 2 Megabytes/sec. If the cycle time of the bus was reduced to 125 ns and the number of cycles required for transfer stayed the same what would the bandwidth of the bus?",
    "options": [
      "1 Megabyte/sec",
      "4 Megabytes/sec",
      "8 Megabytes/sec",
      "2 Megabytes/sec"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "The relation scheme student performance (name, courseNo, rollNo, grade) has the following functional dependencies:\n\nname, courseNo --> grade\nrollNo, courseNo —> grade\nname —> rollNo\nrollNo —> name\n\nThe highest normal form of this relation scheme is:",
    "options": [
      "2 NF",
      "3 NF",
      "BCNF",
      "4 NF"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "The solution of the recurrence T(n) = T(n − 1) + log n is",
    "options": [
      "O(n)",
      "O(n^2 logn)",
      "O(nlogn)",
      "O(logn)"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "What is the function used in R to create a simple linear regressor?",
    "options": [
      "lm() function",
      "lr() function",
      "slr() function",
      "slm() function"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Which map are extremely popular and the most common thematic map in use today.",
    "options": [
      "Flow map",
      "Choropleth map",
      "Cartogram",
      "Heat map"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Which of the following data structures is most efficient in terms of both space and time to reverse a string of characters?",
    "options": [
      "queue",
      "array",
      "linked list",
      "stack"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "Which of the following operations is performed more efficiently by doubly linked list than by a singly linked list?",
    "options": [
      "Searching an unsorted list for a given item",
      "Inserting a node after the node with a given location",
      "Traversing the list to process each node",
      "Deleting a node whose location is given"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "Which of the following search uses the problem-specific knowledge outside the definition of the problem",
    "options": [
      "Informed search",
      "Depth-first search",
      "Breadth-first search",
      "Uninformed search"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "(a+b)(cd)*(a+b) denotes the following set",
    "options": [
      "{a(cd)^nb|n>=1}",
      "{a(cd)^n>=1}U{b(cd)^n|n>=1}",
      "{a(cd)^na|n>=0}U{a(cd)^nb|n>=0}U{b(cd)^na|n>=0}U{b(cd)^nb|n>=0}",
      "{ac^nd^nb|n>=1}"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "Match the following.\nList-I (P. Regular expression, Q. Pushdown automata, R. Dataflow analysis, S. Register allocation)\nList-II (1. Lexical analysis, 2. Code generation, 3. Syntax analysis, 4. Code optimization)",
    "options": [
      "P-4. Q-1, R-2, S-3",
      "P-1, Q-3, R-4, S-2",
      "P-3, Q-4, R-1, S-2",
      "P-2, Q-1, R-4, S-3"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Relations that are generated from the ER model will always be in",
    "options": [
      "1NF",
      "2NF",
      "3NF",
      "4NF"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Which one of the following is not mandatory in a symmetric key cryptosystem?",
    "options": [
      "Plain text",
      "Cipher text",
      "Secret key",
      "Session key"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "In Data Encryption Standard, the encryption algorithm generates 16 different ____ subkeys, one for each of the 16 encryption rounds",
    "options": [
      "16-bit",
      "24-bit",
      "32-bit",
      "48-bit"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "Match the following where ‘n’ is the number of elements in the list.\n(1. Sorting, 2. Binary search, 3. Linear search, 4. Search in a hash table)\n(a. O(1), b. O(nlogn), c. O(logn), d. O(n))",
    "options": [
      "1-b, 2-c, 3-a, 4-d",
      "1-c, 2-b, 3-a, 4-d",
      "1-b, 2-c, 3-d, 4-a",
      "1-a, 2-c, 3-b, 4-d"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "What is the output of the following recursive function when func(2,4) is called?\nint func(int x, int y) { if (y==2) return 1; else return x * func(x,y-1); }",
    "options": [
      "Output is 6",
      "Output is 4",
      "Output is 2",
      "Output is 5"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Convex hull is defined as the smallest __________ that encloses all the given points in 2-D space.",
    "options": [
      "Polygon",
      "Rectangle",
      "Ellipse",
      "Circle"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Find the time complexity of the code segment below (Binary Search implementation).",
    "options": [
      "O(n)",
      "O(n^2)",
      "O(logn)",
      "O(1)"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "Identify the relationship between P and NP complexity classes of algorithms.",
    "options": [
      "P and NP are disjoint",
      "P is a subset of NP",
      "NP is a subset of P",
      "P and NP are equal"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Match the following with respect to a network flow graph.\n1. Flow conservation constraint | a. Source and sink nodes should not be in the same set\n2. Capacity constraint | b. Incoming flow equals the outgoing flow from a vertex\n3. s-t cut | c. The edges must have either capacity or flow greater than 0\n4. Augmenting path | d. Flow cannot exceed the capacity over an edge",
    "options": [
      "1-c, 2-b, 3-a, 4-d",
      "1-b, 2-d, 3-a, 4-c",
      "1-b, 2-d, 3-c, 4-a",
      "1-a, 2-b, 3-d, 4-c"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Match the following.\n1. Divide and conquer | a. overlapping subproblems\n2. Dynamic programming | b. state space tree\n3. Backtracking | c. branching decision in a state space tree\n4. Branch and bound | d. disjoint subproblems",
    "options": [
      "1-d, 2-c, 3-a, 4-b",
      "1-d, 2-a, 3-b, 4-c",
      "1-a, 2-d, 3-c, 4-b",
      "1-d, 2-a, 3-c, 4-b"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "Pick out one from below that does not come under complexity class “NP”",
    "options": [
      "O(n^n)",
      "O(n!)",
      "O(n^3)",
      "O(2^n)"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Pick out one from below that does not come under complexity class “P”.",
    "options": [
      "O(n log n)",
      "O(n^3)",
      "O(n^3 log n)",
      "O(2^n)"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Pick out the algorithm whose time complexity is not O(n^3)",
    "options": [
      "Matrix multiplication",
      "Floyd’s algorithm",
      "Warshall's algorithm",
      "Matrix Addition"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "Pick out the statement below which is false.",
    "options": [
      "The steps in a deterministic algorithm are uniquely defined",
      "The outcome of each step in a nondeterministic algorithm cannot be determined",
      "The deterministic algorithms are efficient",
      "The nondeterministic algorithms are efficient"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "What is the average time complexity of randomized quicksort?",
    "options": [
      "O(nlogn)",
      "O(n^2)",
      "O(n^2logn)",
      "O(n^3)"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "What is the time complexity of Edmond Karps algorithm where ‘V’ is the set of vertices and ‘E’ is the number of edges in the network flow graph.",
    "options": [
      "O(VE)",
      "O(VE^2)",
      "O(V^2E)",
      "O(V^2E^2)"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Which algorithm strategy listed below guarantees in producing near optimal solution with reasonable time complexity?",
    "options": [
      "Brute force",
      "Heuristic",
      "Approximate",
      "Nondeterministic"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "What is an event in delegation event model used by Java programming language?",
    "options": [
      "An event is an object that describes a state change in a source",
      "An event is an object that describes a state change in processing",
      "An event is a class used for defining object, to create events",
      "An event is an object that describes any change by the user and system"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "What is javax.servlet.Servlet?",
    "options": [
      "interface",
      "abstract class",
      "concrete class",
      "final class"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Which of the following code is used to get names of the parameters in servlet? (Objects in the options closely represent the classes from which they are created)",
    "options": [
      "request.getParameterNames()",
      "response.getParameterNames()",
      "Header.getParameterNames()",
      "request.extractParameterNames()"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Which of the following code retrieves name and version of the protocol in Servlet programming? (Objects in the options closely represent the classes from which they are created)",
    "options": [
      "Header.getProtocol()",
      "response.getProtocol()",
      "request.getProtocol()",
      "request.getNameVersionProtocol()"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "Let f(n) = 2n and g(n) = n^3 + 10. Assume that we write g(n) = O(f(n)) using the standard definition of big-oh notation. Then the value of n0 is",
    "options": [
      "10",
      "9",
      "8",
      "7"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Find the false statement/s?\n(A) There is unique minimal DFA for every regular language\n(B) All non-deterministic Turing machine can’t be converted to an equivalent deterministic Turing machine\n(C) All RE is not a CFL\n(D) All subset of a recursively enumerable set is not recursive",
    "options": [
      "A and B",
      "B and C",
      "A and D",
      "D only"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Which of the following statements is false?\n(A) Every NFA can be converted to an equivalent DFA\n(B) Every non-deterministic Turing machine can be converted to an equivalent deterministic Turing machine\n(C) Every regular language is also a context-free language\n(D) Every subset of a recursively enumerable set is recursive",
    "options": [
      "D ONLY",
      "A ONLY",
      "B ONLY",
      "C ONLY"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "John is asked to make an automaton which accepts a given string for all the occurrence of ‘1001’ in it. How many number of transitions would John use such that, the string processing application works?",
    "options": [
      "11",
      "9",
      "12",
      "15"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "L1= {w | w does not contain the string tr }\nL2= {w | w does contain the string tr}\nGiven ∑= {t, r}, The difference of the minimum number of states required to form L1 and L2?",
    "options": [
      "0",
      "1",
      "2",
      "Cannot be said"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Consider the following languages:\nL1 = {0^i1^j | i != 2j}\nL2 = {0^i1^j | i = 2j+1}\nL3 = {0^i1^j | i = j}\nL4 = {0^i1^j | i != j}\nWhich of these is/are context-free:",
    "options": [
      "Only L3",
      "Only L3 & L2",
      "Only L4 & L3",
      "L1, L2, L3, and L4"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "Consider the language given below:\n{a^m b^n C^(m+n) | m, n ≥ 1} It is a ___________ language.",
    "options": [
      "regular",
      "not context-free but context sensitive",
      "not context-sensitive but type-0",
      "not regular but context-free"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "Consider the RE for all strings starts with xy and ends with yyx is.",
    "options": [
      "xyx*y*yyx",
      "xy(xy)*yyx",
      "xy(x+y)*yyx",
      "xyx*y*xyyyx"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "For the given grammar\nS →S + a | S × a | a\nFor a sentence a + a × a, the handles in the right-sentential form of the reduction are",
    "options": [
      "a, S + a",
      "a, S + S × a",
      "a, a + a and a + a × a",
      "a, S + a and S × a"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "Given the grammar\nE→T∗E ∣T\nT→F+T ∣F\nF→a∣b\nWhich of the following statements is wrong?",
    "options": [
      "Precedence of + over ∗ is confirmed",
      "Parsing is ambiguous",
      "Right to left assessment of ∗ and + occurs",
      "Parsing is unambiguous"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "If G is the CFG, r is the total number of rightmost derivations, l is the total number of leftmost derivations, as well as P refers to the total number of parse trees, then assume that r, l, and P are computed for some given particular string. Here, for a given ‘G’ CFG and given ‘w’ string, what is the relation between all three of these?",
    "options": [
      "r ≤ P ≥ l",
      "r = P = l",
      "r ≥ P ≤ l",
      "r ≥ P =l"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "If we consider an arbitrary NFA (non-deterministic finite automaton) with N states in total, the maximum number of states that are there in an equivalent DFA (minimised) is at least:",
    "options": [
      "N!",
      "2N",
      "2^N",
      "N^2"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "If you consider a regular expression r, in which r = (11 + 111)* over Ʃ = {0, 1}, then the number of states in minimal DFA and NFA respectively are:",
    "options": [
      "DFA – 4, NFA – 3",
      "DFA – 3, NFA – 3",
      "DFA – 3, NFA – 4",
      "DFA – 4, NFA – 4"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "In the finite automaton with minimum state deterministic that accepts a given language L={w | w ε {0,1} *, the total number of 0s as well as 1s in w that would be divisible by 3 & 5, respectively} would have:",
    "options": [
      "9 states",
      "10 states",
      "11 states",
      "15 states"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "The total number of states to build the given language using DFA:\nL = {w | w has exactly 2 a’s and at least 2 b’s}",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Which among the following looks similar to the given expression?\n((0+1). (0+1)) *",
    "options": [
      "{xϵ {0,1} *|x is all binary number with even length}",
      "{xϵ {0,1} |x is all binary number with even length}",
      "{xϵ {0,1} *|x is all binary number with odd length}",
      "{xϵ {0,1} |x is all binary number with odd length}"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Which of the folowing pairs of regular expressions are equivalent ?\na. (01)* and (10)* 1\nb. x (xx) * and (xx) * x\nc. x+ and x+x*+",
    "options": [
      "a only",
      "b only",
      "c only",
      "a , b and c"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Which one of these given regular expressions isn’t equivalent to this regular expression:\n(m + n + o) *",
    "options": [
      "(m*n* + o*)*",
      "((mn)* + o*)*",
      "(m*n*o*)*",
      "(m* + n* + o*)*"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Given the language L = {ab, aa, baa}, which of the following strings are in L*?\n1) abaabaaabaa\n2) aaaabaaaa\n3) baaaaabaaaab\n4) baaaaabaa",
    "options": [
      "1, 2, 3",
      "2, 3, 4",
      "1, 2, 4",
      "1, 3, 4"
    ],
    "correctAnswer": "3"
  }
  ]
