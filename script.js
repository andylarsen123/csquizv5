document.addEventListener("DOMContentLoaded", function () {
  // Initialize quiz data
const quizData = [
    { question: "<strong>Coastal Solutions Compendium:</strong><br>Choose an option", answersIfYes: [{ text: "Interactive Tool", link: "https://example.com/interactive-tool", category: "General" }], linkIfNo: "https://www.planningmi.org/aws/MAP/pt/show_detail/588804?layout_name=layout_details&model_name=news_article" },
      { question: "The shoreline is<strong>elevated</strong>, such as by bluffs", answersIfYes: [
        { text: "Natural Features / Sensitive Area Overlay", link: "https://example.com/", category: "Zoning Tools" },
        { text: "Bluff Protection Overlay", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589620?layout_name=layout_details&model_name=news_article", category: "Zoning Tools" }
    ]},
    { question: "The shoreline is <strong>sandy</strong>", answersIfYes: [
        { text: "Shoreline Setback", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589617?layout_name=layout_details&model_name=news_article", category: "Zoning Tools" },
        { text: "Natural Features / Sensitive Area Overlay", link: "https://example.com/", category: "Zoning Tools" },
        { text: "Shoreline Armoring Prohibition", link: "https://example.com/", category: "Site Development Standards" }
    ]},
    { question: "There are <strong>dunes</strong> along the shoreline", answersIfYes: [
        { text: "Natural Features / Sensitive Area Overlay", link: "https://example.com/", category: "Zoning Tools" },
        { text: "Dune Protection Overlay", link: "https://example.com/", category: "Zoning Tools" },
        { text: "Shoreline Armoring Prohibition", link: "https://example.com/", category: "Site Development Standards" }
    ]},
    { question: "There are <strong>coarse sediment beaches </strong> along the shoreline", answersIfYes: [
        { text: "Shoreline Setback", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589617?layout_name=layout_details&model_name=news_article", category: "Zoning Tools" },
        { text: "Shoreline Armoring Prohibition", link: "https://example.com/", category: "Site Development Standards" }
    ]},
    { question: "There is <strong>bedrock</strong> along the shoreline", answersIfYes: [
        { text: "Shoreline Setback", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589617?layout_name=layout_details&model_name=news_article", category: "Zoning Tools" }
    ]},
    { question: "There are <strong>wetlands</strong> along the shoreline", answersIfYes: [
        { text: "Natural Features / Sensitive Area Overlay", link: "https://example.com/", category: "Zoning Tools" },
        { text: "Shoreline Armoring Prohibition", link: "https://example.com/", category: "Site Development Standards" }
    ]},
    { question: "The shoreline is <strong>armored</strong> (has seawalls, riprap, etc.)", answersIfYes: [
        { text: "Shoreline Armoring Prohibition", link: "https://example.com/", category: "Site Development Standards" },
        { text: "Shoreline Setback", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589617?layout_name=layout_details&model_name=news_article", category: "Zoning Tools" },
        { text: "Non-Conformity and Variance Standards", link: "https://example.com/natural-features-overlay", category: "Land Development Standards" }
    ]},
    { question: "There are <strong>state-designated</strong> critical dunes, sensitive environmental areas, or high-risk erosion areas along the shoreline", answersIfYes: [
        { text: "Permit Review of State-designated Lands", link: "https://example.com/", category: "Zoning Tool" }
    ]},
    { question: "There are <strong>designated floodplains</strong> along the shoreline", answersIfYes: [
        { text: "Shoreline Armoring Prohibition", link: "https://example.com/", category: "Site Development Standards" },
        { text: "Coastal Floodplain Overlay", link: "https://example.com/", category: "Zoning Tools" },
        { text: "Natural Features / Sensitive Area Overlay", link: "https://example.com/", category: "Zoning Tools" }
    ]},
    { question: "The <strong>character of the shoreline is similar</strong> across your community", answersIfYes: [
        { text: "Shoreline District", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589619?layout_name=layout_details&model_name=news_article", category: "Zoning Tools" }
    ]},
    { question: "There is <strong>more than one zoning district</strong> along your shoreline", answersIfYes: [
        { text: "Shoreline Setback", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589617?layout_name=layout_details&model_name=news_article", category: "Zoning Tools" },
        { text: "Shoreline Overlay", link: "https://example.com/", category: "Zoning Tools" }
    ]},
    { question: "There is existing capacity to implement and review <strong>discretionary standards</strong> to make zoning more flexible", answersIfYes: [
        { text: "Planned Unit Development (PUD)", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589621?layout_name=layout_details&model_name=news_article", category: "Zoning Tools" }
    ]},
    { question: "There is land along the shoreline which may be <strong>platted or divided</strong>", answersIfYes: [
        { text: "Land Divisions", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589623?layout_name=layout_details&model_name=news_article", category: "Regulatory Alternatives" }
    ]},
    { question: "<strong>Development already exists</strong> along the shoreline", answersIfYes: [
        { text: "Shoreline Armoring Prohibition", link: "https://example.com/", category: "Site Development Standards" },
        { text: "Non-Conformity and Variance Standards", link: "https://example.com/natural-features-overlay", category: "Land Development Standards" },
        { text: "Moveable Structure Requirements", link: "https://example.com", category: "Site Development Standards" }
    ]},
    { question: "You anticipate <strong>new development or redevelopment</strong> along your shoreline", answersIfYes: [
        { text: "Shoreline Setback", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589617?layout_name=layout_details&model_name=news_article", category: "Zoning Tools" },
        { text: "Shoreline Armoring Prohibition", link: "https://example.com/", category: "Site Development Standards" },       
        { text: "Shoreline District", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589619?layout_name=layout_details&model_name=news_article", category: "Zoning Tools" }
         ]},
    { question: "The shoreline property is experiencing <strong>erosion</strong>", answersIfYes: [
        { text: "Shoreline Setback", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589617?layout_name=layout_details&model_name=news_article", category: "Zoning Tools" },
        { text: "Shoreline Armoring Prohibition", link: "https://example.com/", category: "Site Development Standards" },
        { text: "Moveable Structure Requirements", link: "https://example.com", category: "Site Development Standards" }
    ]},
    { question: "The shoreline property experiences <strong>flooding</strong>", answersIfYes: [
        { text: "Shoreline Setback", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589617?layout_name=layout_details&model_name=news_article", category: "Zoning Tools" },
        { text: "Shoreline Armoring Prohibition", link: "https://example.com/", category: "Site Development Standards" },
        { text: "Moveable Structure Requirements", link: "https://example.com", category: "Site Development Standards" }  
    ]},
    { question: "There are existing or desired <strong>shoreline-specific uses</strong>, such as marinas", answersIfYes: [
        { text: "Shoreline District", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589619?layout_name=layout_details&model_name=news_article", category: "Zoning Tools" },
        { text: "Marinas and Special Waterfront Uses", link: "https://example.com/", category: "Site Development Standards" }
    ]},
    { question: "The community is concerned about <strong>invasive plant or animal species</strong>", answersIfYes: [
        { text: "Shoreline Greenbelt", link: "https://example.com/", category: "Site Development Standards" }   
    ]},
    { question: "The community is concerned about <strong>water quality</strong>", answersIfYes: [
        { text: "Shoreline Greenbelt", link: "https://example.com/", category: "Site Development Standards" }   
    ]},
    { question: "It is a priority for your community to <strong>preserve or create access</strong> to the shoreline", answersIfYes: [
        { text: "Shoreline Setback", link: "https://www.planningmi.org/aws/MAP/pt/show_detail/589617?layout_name=layout_details&model_name=news_article", category: "Zoning Tools" },
        { text: "Shoreline Armoring Prohibition", link: "https://example.com/", category: "Site Development Standards" }
    ]}
]

  const yesButton = document.getElementById('yes-btn');
  const noButton = document.getElementById('no-btn');
  const questionText = document.getElementById('question-text');
  const quizControls = document.getElementById('quiz-controls');
  const questionScreen = document.getElementById('question-screen');
  const resultsScreen = document.getElementById('results');
  const answersList = document.getElementById('answers-list');
  const controlButtons = document.getElementById('control-buttons');
  
  // Add styles to prevent horizontal scrolling
  addScrollStyles();
  
  // Store all selected answers across all screens
  let allSelectedAnswers = new Set();
  
  // Hide restart button on load
  const existingRestartButton = document.getElementById('restart-btn');
  if (existingRestartButton) {
    existingRestartButton.style.display = 'none';
  }
  
  // Set up initial screen
  questionText.innerHTML = "<strong>Coastal Solutions Compendium:</strong><br>Choose an option";  
  resultsScreen.classList.add('hidden');
  questionScreen.classList.add('hidden');
  if (controlButtons) {
    controlButtons.classList.add('hidden');
  }
  
  // Event listeners for initial choice buttons
  yesButton.addEventListener('click', function () {
    // Reset answers when starting a new quiz
    allSelectedAnswers = new Set();
    
    questionText.style.display = 'none';
    quizControls.style.display = 'none';
    questionScreen.classList.remove('hidden');
    questionScreen.innerHTML = '';
    
    // Always hide restart button when starting/continuing the quiz
    if (existingRestartButton) {
      existingRestartButton.style.display = 'none';
    }
    if (controlButtons) {
      controlButtons.classList.add('hidden');
    }
    
    showQuestions(0);
  });

noButton.addEventListener('click', function () {
  window.open("https://www.planningmi.org/aws/MAP/pt/show_detail/588804?layout_name=layout_details&model_name=news_article", "_blank");
});

  // Function to add CSS styles that prevent horizontal scrolling
  function addScrollStyles() {
    // Create a style element
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      /* Prevent horizontal scrolling in tables */
      table {
        width: 100%;
        table-layout: fixed;
      }
      
      /* Ensure cell content wraps instead of causing horizontal overflow */
      table th, table td {
        word-wrap: break-word;
        overflow-wrap: break-word;
      }
      
      /* Allow vertical scrolling but prevent horizontal */
      .results-container {
        overflow-y: auto;
        overflow-x: hidden;
        padding: 0px
      }
      
      /* Category styling for results */
      .category-header {
        font-weight: bold;
        margin-top: 15px;
        margin-bottom: 5px;
        color: #333;
        border-bottom: 1px solid #ccc;
      }
      
      .category-content {
        margin-left: 10px;
      }
      
      /* Make table more responsive */
      @media (max-width: 768px) {
        table {
          font-size: 0.9em;
        }
      }
    `;
    document.head.appendChild(styleElement);
  }

function showQuestions(screenIndex) {
    const form = document.createElement('form');
    form.id = 'quiz-form';

    // Define our custom groupings
    const groupings = [
        { startIndex: 1, count: 5 },
        { startIndex: 6, count: 4 },
        { startIndex: 10, count: 4 },
        { startIndex: 14, count: 5 },
        { startIndex: 19, count: 3 }
    ];

    // Define headers for each grouping
    const headers = [
        "Physical Characteristics (1/2)",
        "Physical Characteristics (2/2)",
        "Zoning",
        "Development",
        "Priorities"
    ];

    if (screenIndex >= groupings.length) {
        showResults();
        return;
    }

    const currentGroup = groupings[screenIndex];
    const startIndex = currentGroup.startIndex;
    const questionsToShow = quizData.slice(startIndex, startIndex + currentGroup.count);
    const endIndex = startIndex + currentGroup.count;

    // Add section header
    const header = document.createElement('h2');
    header.textContent = headers[screenIndex];
    header.style.textAlign = 'center';
    header.style.marginBottom = '10px';
    form.appendChild(header);

    const heading = document.createElement('p');
    heading.textContent = "Check all that applies to your shoreline (or blank if unsure):";
    heading.style.textAlign = 'left';
    heading.style.fontWeight = 'bold';
    heading.style.marginLeft = '13px';
    heading.style.marginBottom = '5px';
    form.appendChild(heading);

    // Create questions for this screen
    questionsToShow.forEach((data, i) => {
        const div = document.createElement('div');
        div.className = 'question-item';

        const questionContainer = document.createElement('div');
        questionContainer.className = 'question-container';
        questionContainer.style.display = 'flex'; // Align checkbox and text in a row
        questionContainer.style.alignItems = 'center'; // Vertically align checkbox and text

        const checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';
        checkboxInput.name = `q${startIndex + i}`;
        checkboxInput.value = 'yes';
        checkboxInput.id = `checkbox-${startIndex + i}`

        const checkboxLabel = document.createElement('label');
        checkboxLabel.setAttribute('for', checkboxInput.id); // Link the label to the checkbox

        checkboxLabel.innerHTML = "Select";

        const questionLabel = document.createElement('span');
        questionLabel.innerHTML = data.question; 

        questionContainer.appendChild(checkboxInput);
        questionContainer.appendChild(questionLabel);
        div.appendChild(questionContainer);
        form.appendChild(div);
    });

    // Buttons container
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons-container';

    // Continue button
    const continueButton = document.createElement('button');
    continueButton.type = 'submit';
    continueButton.textContent = 'Continue';
    continueButton.className = 'continue-btn';
    buttonsContainer.appendChild(continueButton);

    // Back button
    const backButton = document.createElement('button');
    backButton.type = 'button';
    backButton.textContent = 'Back';
    backButton.className = 'back-btn';

    if (screenIndex > 0) {
        backButton.addEventListener('click', function() {
            questionScreen.innerHTML = '';
            showQuestions(screenIndex - 1);
        });
    } else {
        backButton.addEventListener('click', function() {
            questionScreen.classList.add('hidden');
            questionText.style.display = '';
            quizControls.style.display = '';
            if (existingRestartButton) {
                existingRestartButton.style.display = 'none';
            }
            if (controlButtons) {
                controlButtons.classList.add('hidden');
            }
        });
    }

    buttonsContainer.appendChild(backButton);
    form.appendChild(buttonsContainer);

    // Form submission handler
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Process checked answers
        questionsToShow.forEach((data, i) => {
            const questionIndex = startIndex + i;
            const input = form.querySelector(`input[name="q${questionIndex}"]:checked`);
            if (input && data.answersIfYes) {
                data.answersIfYes.forEach(answer => allSelectedAnswers.add(answer));
            }
        });

        questionScreen.innerHTML = '';
        if (endIndex < quizData.length) {
            showQuestions(screenIndex + 1);
        } else {
            showResults();
        }
    });

    questionScreen.innerHTML = '';
    questionScreen.appendChild(form);
}

function showResults() {
    resultsScreen.classList.remove('hidden');
    answersList.innerHTML = '';
    
    // Make sure the results container has proper styling
    resultsScreen.className = 'results-container';
    
    if (allSelectedAnswers.size) {
        // Define our categories
        const categories = [
            "Zoning Tools", 
            "Site Development Standards", 
            "Land Development Standards"
        ];
        
        // Create an object to group answers by category
        const categorizedAnswers = {};
        categories.forEach(category => {
            categorizedAnswers[category] = new Set();
        });
        
        // Add answers to their respective categories
        Array.from(allSelectedAnswers)
            .filter(answer => answer && typeof answer === 'object' && answer.text && answer.link && answer.category)
            .forEach(answer => {
                if (categorizedAnswers[answer.category]) {
                    categorizedAnswers[answer.category].add(answer.text);
                }
            });
        
        // Display answers by category
        categories.forEach(category => {
            // Create category header
            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'category-header';
            categoryHeader.textContent = category + ':';
            
            // Create category content container
            const categoryContent = document.createElement('div');
            categoryContent.className = 'category-content';
            
            // Add answers for this category or "None" if empty
            if (categorizedAnswers[category].size > 0) {
                const answerTexts = Array.from(categorizedAnswers[category]).sort();
                
                // Create a list of links for this category
                const answersList = document.createElement('ul');
                
                answerTexts.forEach(text => {
                    // Find the original answer object to get the link
                    const answerObj = Array.from(allSelectedAnswers).find(item => item.text === text);
                    
                    if (answerObj && answerObj.link) {
                        const listItem = document.createElement('li');
                        const link = document.createElement('a');
                        link.href = answerObj.link;
                        link.target = '_blank';
                        link.rel = 'noopener noreferrer';
                        link.textContent = text;
                        listItem.appendChild(link);
                        answersList.appendChild(listItem);
                    }
                });
                
                categoryContent.appendChild(answersList);
            } else {
                categoryContent.textContent = "None";
            }
            
            // Add category section to results
            answersList.appendChild(categoryHeader);
            answersList.appendChild(categoryContent);
        });
    } else {
        answersList.innerHTML = "<p>No recommendations based on your selections.</p>";
    }
    
    // Only show restart button on results screen
    showRestartButton();
}

  function showRestartButton() {
    // Show the existing restart button only on the results screen
    if (controlButtons) {
      controlButtons.classList.remove('hidden');
    }
    
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
      restartBtn.style.display = 'block';
      
      // Make sure the event listener is attached
      restartBtn.onclick = function() {
        // Reset the quiz
        allSelectedAnswers = new Set();
        answersList.innerHTML = '';
        resultsScreen.classList.add('hidden');
        questionText.style.display = '';
        quizControls.style.display = '';
        questionScreen.classList.add('hidden');
        
        // Hide the control buttons (including restart button)
        if (controlButtons) {
          controlButtons.classList.add('hidden');
        }
        
        // Explicitly hide the restart button
        restartBtn.style.display = 'none';
      };
    }
  }  
});
