document.addEventListener('DOMContentLoaded', function () {
    const jobExperiences = [
        {
            "title": "Senior Software Developer",
            "company": "Tech Company",
            "location": "New York",
            "date": "2018 - 2020",
            "responsibilities": [
                "Developed web applications using HTML, CSS, and JavaScript.",
                "Collaborated with the design team to implement user-friendly interfaces."
            ]
        },
        {
            "title": "Software Developer",
            "company": "Digital Agency",
            "location": "San Francisco",
            "date": "2020 - Present",
            "responsibilities": [
                "Implemented responsive designs using CSS frameworks like Bootstrap.",
                "Optimized website performance for faster load times."
            ]
        },
        {
            "title": "Junior Developer",
            "company": "Digital Agency",
            "location": "San Francisco",
            "date": "2020 - Present",
            "responsibilities": [
                "Implemented responsive designs using CSS frameworks like Bootstrap.",
                "Optimized website performance for faster load times."
            ]
        },
        {
            "title": "Intern",
            "company": "Digital Agency",
            "location": "San Francisco",
            "date": "2020 - Present",
            "responsibilities": [
                "Implemented responsive designs using CSS frameworks like Bootstrap.",
                "Optimized website performance for faster load times."
            ]
        }
        // Add more job experiences here
    ];
    

    const skills = [
        "HTML", "CSS", "JavaScript", "Bootstrap", "React"
    ]; // Example skills data

    function generateJobHTML(job) {
        return `
            <div class="job-details">
                <h3>${job.title}</h3>
                <p>${job.company}</p>
                <p>${job.location}</p>
                <p>${job.date}</p>
                <ul>
                    ${job.responsibilities.map(responsibility => `<li>${responsibility}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    function renderJobExperiences(currentIndex) {
        const experienceContainer = document.getElementById('experience-content');
        if (!experienceContainer) {
            console.error("Experience container element not found.");
            return;
        }
        experienceContainer.innerHTML = ''; // Clear existing content

        const jobHTML = generateJobHTML(jobExperiences[currentIndex]);
        experienceContainer.insertAdjacentHTML('beforeend', jobHTML);

        renderExperienceList(currentIndex);
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
            pill.innerHTML = `
                <button class="nav-link rounded-pill ${index === 0 ? 'active' : ''}" id="${pillId}" data-bs-toggle="pill" data-bs-target="#${contentId}" type="button" role="tab" aria-controls="${contentId}" aria-selected="${index === 0 ? 'true' : 'false'}">${skill}</button>
            `;
            pillsContainer.appendChild(pill);

            // Create content
            const content = document.createElement('div');
            content.classList.add('tab-pane', 'fade', `${index === 0 ? 'show active' : ''}`);
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
    renderSkills();
});
