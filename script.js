document.addEventListener('DOMContentLoaded', function () {
    const jobExperiences = [
        {
            "title": "Senior Backend Engineer",
            "company": "Alleyway Capital 💵",
            "location": "Remote (PST), India 🇮🇳",
            "date": "Sep 2023 - Present",
            "responsibilities": [
                "Developed web applications using HTML, CSS, and JavaScript.",
                "Collaborated with the design team to implement user-friendly interfaces.",
                "Developed web applications using HTML, CSS, and JavaScript.",
                "Collaborated with the design team to implement user-friendly interfaces.",
                "Developed web applications using HTML, CSS, and JavaScript.",
                "Collaborated with the design team to implement user-friendly interfaces.",
                "Developed web applications using HTML, CSS, and JavaScript.",
                "Collaborated with the design team to implement user-friendly interfaces.",
                "Developed web applications using HTML, CSS, and JavaScript.",
            ]
        },
        {
            "title": "Fullstack Developer",
            "company": "FarmSetu Technologies 🛰️",
            "location": "Nashik, India 🇮🇳",
            "date": "Dec 2021 - Aug 2023",
            "responsibilities": [
                "Implemented responsive designs using CSS frameworks like Bootstrap.",
                "Optimized website performance for faster load times.",
            ]
        },
        {
            "title": "Software Developer",
            "company": "Ufaber Edutech Pvt. Ltd. 📚",
            "location": "Remote, India 🇮🇳",
            "date": "Mar 2021 - Nov 2021",
            "responsibilities": [
                "Implemented responsive designs using CSS frameworks like Bootstrap.",
                "Optimized website performance for faster load times.",
            ]
        },
        {
            "title": "Junior Software Developer",
            "company": "KisanHub Technologies Pvt. Ltd. 🌾",
            "location": "Pune, India 🇮🇳",
            "date": "Mar 2019 - Feb 2021",
            "responsibilities": [
                "Implemented responsive designs using CSS frameworks like Bootstrap.",
                "Optimized website performance for faster load times.",
            ]
        },
        {
            "title": "Junior Software Engineer",
            "company": "Zephony Pvt. Ltd. 🧑🏻‍💻",
            "location": "Remote, India 🇮🇳",
            "date": "Aug 2018 - Feb 2019",
            "responsibilities": [
                "Implemented responsive designs using CSS frameworks like Bootstrap.",
                "Optimized website performance for faster load times.",
            ]
        },
        {
            "title": "Python Developer",
            "company": "Technokrats Pvt. Ltd. 👨🏻‍💼",
            "location": "Kolkata, India",
            "date": "May 2018 -  Jul 2018",
            "responsibilities": [
                "Implemented responsive designs using CSS frameworks like Bootstrap.",
                "Optimized website performance for faster load times.",
            ]
        },
    ];

    const skills = [
        "Python", "Django", "Flask", "FastAPI", "PostgreSQL", "MySQL", "Kubernetes", "Docker", "HTML & CSS", "Javascript", "ReactJS",
    ]; 

    function animateTerminal(text, element) {
        let index = 0;

        function addNextCharacter() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(addNextCharacter, 50);
            }
        }

        addNextCharacter();
    }

    function generateJobHTML(job) {
        const jobDetails = `
            <div class="job-details">
                <h5 id="job-title"></h3>
                <p id="job-company"></p>
                <p id="job-location"></p>
                <p id="job-date"></p>
                <ul id="job-responsibilities"></ul>
            </div>
        `;
    
        const terminalElements = [
            { id: 'job-title', text: job.title },
            { id: 'job-company', text: job.company },
            { id: 'job-location', text: job.location },
            { id: 'job-date', text: job.date }
        ];
    
        return { jobDetails, terminalElements, responsibilities: job.responsibilities };
    }
    
    function renderJobExperiences(currentIndex) {
        const experienceContainer = document.getElementById('experience-content');
        if (!experienceContainer) {
            console.error("Experience container element not found.");
            return;
        }
        experienceContainer.innerHTML = ''; // Clear existing content
    
        const { jobDetails, terminalElements, responsibilities } = generateJobHTML(jobExperiences[currentIndex]);
        experienceContainer.insertAdjacentHTML('beforeend', jobDetails);
    
        terminalElements.forEach(element => {
            animateTerminal(element.text, document.getElementById(element.id));
        });
    
        const jobResponsibilities = document.getElementById('job-responsibilities');
        if (jobResponsibilities) {
            jobResponsibilities.innerHTML = ''; // Clear existing content
            responsibilities.forEach(responsibility => {
                responsibility = "👉🏼 " + responsibility.trim()
                const li = document.createElement('li');
                animateTerminal(responsibility, li);
                jobResponsibilities.appendChild(li);
            });
        }
    
        renderExperienceList(currentIndex); // Update experience list
    }
      

    function renderExperienceList(currentIndex) {
        const experienceList = document.getElementById('experience-list');
        if (!experienceList) {
            console.error("Experience list element not found.");
            return;
        }
        experienceList.innerHTML = ''; // Clear existing content

        jobExperiences.forEach((job, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item list-group-item-action';
            listItem.textContent = `${job.title} (${job.date})`;
            if (index === currentIndex) {
                listItem.classList.add('active');
            }
            listItem.addEventListener('click', function () {
                currentIndex = index;
                renderJobExperiences(currentIndex);
            });
            experienceList.appendChild(listItem);
        });
    }

    function renderSkills() {
        const pillsContainer = document.getElementById('pills-tab');
        const contentContainer = document.getElementById('pills-tabContent');
        if (!pillsContainer || !contentContainer) {
            console.error("Skills containers not found.");
            return;
        }
    
        // Clear existing content
        pillsContainer.innerHTML = '';
        contentContainer.innerHTML = '';
    
        // Render skills pills and content
        skills.forEach((skill, index) => {
            const pillId = `skill-tab-${index}`;
            const contentId = `skill-content-${index}`;
    
            // Create pill
            const pill = document.createElement('li');
            pill.classList.add('nav-item');
            if (index === 0) {
                pill.classList.add('active');
            }
            pill.innerHTML = `
                <button class="nav-link rounded-pill" id="${pillId}" data-toggle="pill" role="tab" aria-controls="${contentId}" aria-selected="${index === 0 ? 'true' : 'false'}">${skill}</button>
            `;
            pillsContainer.appendChild(pill);
    
            // Create content
            const content = document.createElement('div');
            content.classList.add('tab-pane', 'fade');
            content.id = contentId;
            content.setAttribute('role', 'tabpanel');
            content.setAttribute('aria-labelledby', pillId);
            content.innerHTML = `<p>This is the content for ${skill}</p>`;
            contentContainer.appendChild(content);
        });
    }
    

    let currentIndex = 0; // Current index in the job experiences

    // Initial render
    renderJobExperiences(currentIndex);
    renderExperienceList(currentIndex);
    renderSkills();
});


document.addEventListener('DOMContentLoaded', function () {
    // Start date of the job
    const startDate = new Date('May 2018');
    
    // Current date
    const currentDate = new Date();

    // Calculate the difference in months
    const diffMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());

    // Convert months to years and months format
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;

    // ------------------------------
    // Manage the experience list height dynamically
    // Display the total experience beside the Experience heading
    const experienceHeading = document.querySelector('#experience h3');
    experienceHeading.innerHTML += ` (${years} years ${months} months)`;

    adjustExperienceContainerHeight(); // Call the function initially to adjust the height

    // Function to adjust the height of the experience container dynamically
    function adjustExperienceContainerHeight() {
        const experienceContainer = document.getElementById('experience-container');
        if (!experienceContainer) {
            console.error("Experience container element not found.");
            return;
        }
        // Set the height to auto to calculate the actual height based on current viewport
        experienceContainer.style.height = 'auto';
        const height = experienceContainer.clientHeight;
        experienceContainer.style.height = `${height}px`;

        // Set the height of the experience list to the remaining height
        const experienceList = document.getElementsByClassName('experience-list')[0];
        if (!experienceList) {
            console.error("Experience list element not found.");
            return;
        }
        experienceList.style.height = `calc(100% - ${height}px)`;

    }

    // Adjust the height of the experience container whenever the window is resized
    window.addEventListener('resize', adjustExperienceContainerHeight);
});