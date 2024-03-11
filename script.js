document.addEventListener('DOMContentLoaded', function () {
    const jobExperiences = [
        {
            "title": "Senior Backend Engineer",
            "company": "Alleyway Capital 💵",
            "location": "Remote (PST), India 🇮🇳",
            "date": "Sep 2023 - Present",
            "responsibilities": [
                "Setup several tools to increase productivity of developers like Bitbucket CI/CD pipelines, AWS Cloudwatch and architected a scalable logging microservice",
                "Revamped major part of the code to scale the system and separate reads from writes",
                "Built a garbage collection system to archive old data from the system based on business needs and free up database clutter",
                "Modularized legacy code to functionally separate modules and custom services for clients",
                "Implemented new features in the application",
                "Involved in multiple mid and senior developer interviews"
            ]
        },
        {
            "title": "Fullstack Developer",
            "company": "FarmSetu Technologies 🛰️",
            "location": "Nashik, India 🇮🇳",
            "date": "Dec 2021 - Aug 2023",
            "responsibilities": [
                "Developed GraphQL/REST-based microservices with intricate business logic and seamless intercommunication",
                "Optimized database and API performance, resulting in response time reductions of up to 80%",
                "Led, architected, and developed multiple complex backend systems for a variety of agri-launchpads including finance, e-commerce, and content creation related products",
                "Collaborated closely with product, business, and customer success teams to facilitate the organization’s break-even stage",
                "Conducted 100+ engineering interviews"
            ]
        },
        {
            "title": "Software Developer",
            "company": "Ufaber Edutech Pvt. Ltd. 📚",
            "location": "Remote, India 🇮🇳",
            "date": "Mar 2021 - Nov 2021",
            "responsibilities": [
                "Led a team of junior developers to build several mock examination systems, exam evaluation systems and LMS products.",
                "Mentored colleagues and junior developers in agile methodologies and query optimization.",
                "Collaborated with the product/project team and senior management to develop new features and improve existing ones."
            ]
        },
        {
            "title": "Junior Software Developer",
            "company": "KisanHub Technologies Pvt. Ltd. 🌾",
            "location": "Pune, India 🇮🇳",
            "date": "Mar 2019 - Feb 2021",
            "responsibilities": [
                "Collaborated with team members to build a crop quality module, which helped businesses assess the export quality of crops worth $500k each day",
                "Built and documented an ETL system to set up sync of agricultural and geo-location data of farmers from external APIs",
                "Fixed several bugs and improved the performance of the existing system",
                "Collaborated in squads to ship working features within days of planning and inception"
            ]
        },
        {
            "title": "Junior Software Engineer",
            "company": "Zephony Pvt. Ltd. 🧑🏻‍💻",
            "location": "Remote, India 🇮🇳",
            "date": "Aug 2018 - Feb 2019",
            "responsibilities": [
                "Developed multiple RESTful APIs for a variety of clients",
                "Implemented custom data structures and algorithms to reduce dependency on external libraries",
            ]
        },
        {
            "title": "Python Developer",
            "company": "Technokrats Pvt. Ltd. 👨🏻‍💼",
            "location": "Kolkata, India",
            "date": "May 2018 -  Jul 2018",
            "responsibilities": [
                "Collaborated with a UK based client to maintain an insurance claims management system"
            ]
        },
    ];

    const mainSkills = [
        "Python", "Django", "FastAPI", "PostgreSQL", "Kubernetes", "Docker", "AWS", "Git", "CI/CD"
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
    
    function renderJobExperiences(currentIndex, showAll) {
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
        renderExperienceList(currentIndex, showAll); // Update experience list
    }
      

    function renderExperienceList(currentIndex, showAll) {
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
                renderJobExperiences(currentIndex, showAll);
            });
            experienceList.appendChild(listItem);

            // Check if "See More" is clicked and show all items
            if (showAll || index <= 3) {
                listItem.style.display = 'block';
            } else {
                listItem.style.display = 'none';
            }
        });

        // Add "See More" functionality only if there are more than 3 items
        if (jobExperiences.length > 3) {
            const seeMoreButton = document.createElement('button');
            seeMoreButton.textContent = 'See More';
            seeMoreButton.className = 'btn btn-primary  see-more-btn';
            seeMoreButton.addEventListener('click', function () {
                showAll = true;
                renderExperienceList(currentIndex, showAll);
            });
            experienceList.appendChild(seeMoreButton);
            seeMoreButton.style.display = showAll ? 'none' : 'block';

        }

        if (showAll) {
            const seeLessButton = document.createElement('button');
            seeLessButton.textContent = 'See Less';
            seeLessButton.className = 'btn btn-primary see-more-btn';
            seeLessButton.addEventListener('click', function () {
                showAll = false;
                renderExperienceList(currentIndex, showAll);
            });
            experienceList.appendChild(seeLessButton);
            seeLessButton.style.display = 'block';
            
        }

    }

    function renderSkills() {
        const pillsContainer = document.getElementById('pills-tab');
        const contentContainer = document.getElementById('pills-tabContent');
        if (!pillsContainer || !contentContainer) {
            console.error("Skills containers not found.");
            return;
        }
    
        pillsContainer.innerHTML = '';
        contentContainer.innerHTML = '';
    
        mainSkills.forEach((skill, index) => {
            const pillId = `skill-tab-${index}`;
            const contentId = `skill-content-${index}`;
    
            const pill = document.createElement('li');
            pill.classList.add('nav-item');
            if (index === 0) {
                pill.classList.add('active');
            }
            pill.innerHTML = `
                <button class="nav-link rounded-pill" id="${pillId}" data-toggle="pill" role="tab" aria-controls="${contentId}" aria-selected="${index === 0 ? 'true' : 'false'}">${skill}</button>
            `;
            pillsContainer.appendChild(pill);
        });
    }
    

    let currentIndex = 0;

    // Initial render
    renderJobExperiences(currentIndex);
    renderExperienceList(currentIndex);
    renderSkills();
});


document.addEventListener('DOMContentLoaded', function () {

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
        experienceList.style.height = `calc(100% - ${experienceHeading.clientHeight}px)`;
    }

    // Start date of the job
    const startDate = new Date('2018/05');
    
    // Current date
    const currentDate = new Date();

    // Calculate the difference in months
    const diffMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());

    // Convert months to years and months format
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;

    // ------------------------------
    const experienceHeading = document.querySelector('#experience h3');
    experienceHeading.innerHTML += ` (${years} years ${months} months)`;


    adjustExperienceContainerHeight();
    window.addEventListener('resize', adjustExperienceContainerHeight);
});
