const lessonContent = [
    {
        title: "Advantages of Cranial Ultrasound",
        content: `
            <ul>
                <li>Safe and non-invasive</li>
                <li>Bedside-compatible</li>
                <li>Reliable for early imaging</li>
                <li>Allows serial imaging to monitor brain maturation</li>
                <li>Cost-effective</li>
                <li>Suitable for screening</li>
            </ul>
        `
    },
    {
        title: "Key Indications",
        content: `
            <ul>
                <li>Prenatal abnormalities detected on sonogram</li>
                <li>Increasing head circumference</li>
                <li>Inflammatory diseases (acquired/congenital)</li>
                <li>Prematurity</li>
                <li>Diagnosis of conditions like:
                    <ul>
                        <li>Hypoxia</li>
                        <li>Hypertension</li>
                        <li>Hypercapnia</li>
                        <li>Asphyxia</li>
                        <li>Seizures</li>
                        <li>Coagulation defects</li>
                    </ul>
                </li>
                <li>Birth trauma</li>
                <li>Genetic syndromes and malformations</li>
            </ul>
        `
    },
    {
        title: "Technical Aspects",
        content: `
            <p>Transducers: 5-7.5-10 MHz range</p>
            <ul>
                <li>Standard examination: 7.5-8 MHz</li>
                <li>Tiny infants: 10 MHz</li>
                <li>Large infants: 5 MHz</li>
            </ul>
        `
    },
    {
        title: "Acoustic Windows",
        content: `
            <ul>
                <li>Anterior Fontanel (primary window)</li>
                <li>Posterior Fontanel</li>
                <li>Mastoid Fontanel</li>
                <li>Temporal window</li>
            </ul>
        `
    },
    {
        title: "Standard Views",
        content: `
            <h3>Coronal Views Interactive Demo</h3>
            <p>Explore the six standard coronal views below. Click on each view to see detailed annotations and descriptions.</p>
            <div id="brain-demo" class="brain-demo"></div>
            <h3>Additional Views:</h3>
            <h4>Sagittal Views (minimum 5 planes):</h4>
            <ul>
                <li>Midsagittal plane</li>
                <li>Parasagittal planes (right and left)</li>
            </ul>
        `
    },
    {
        title: "Common Pathologies Detected",
        content: `
            <h3>Hemorrhagic Conditions:</h3>
            <ul>
                <li>Germinal Matrix Hemorrhage</li>
                <li>Subependymal-Intraventricular Hemorrhage (SEH-IVH)</li>
                <li>Grades I-IV classification</li>
            </ul>
            <h3>White Matter Injuries:</h3>
            <ul>
                <li>Periventricular Leukomalacia (PVL)</li>
                <li>Hypoxic-Ischemic Encephalopathy (HIE)</li>
            </ul>
            <h3>Congenital Malformations:</h3>
            <ul>
                <li>Chiari Malformation</li>
                <li>Holoprosencephaly</li>
                <li>Dandy-Walker Malformation</li>
                <li>Agenesis of Corpus Callosum</li>
            </ul>
        `
    },
    {
        title: "Doppler Applications",
        content: `
            <p>Assesses:</p>
            <ul>
                <li>Decreased blood flow/ischemia</li>
                <li>Vascular abnormalities</li>
                <li>Cerebral edema</li>
                <li>Hydrocephalus</li>
                <li>Intracranial tumors</li>
            </ul>
        `
    },
    {
        title: "Follow-up Protocol",
        content: `
            <ul>
                <li>Weekly ultrasounds recommended for hemorrhage monitoring</li>
                <li>Serial imaging for brain maturation assessment</li>
                <li>Regular monitoring for hydrocephalus development</li>
            </ul>
        `
    },
    {
        title: "Clinical Integration",
        content: `
            <p>Important for making decisions on:</p>
            <ul>
                <li>Continuation of intensive care</li>
                <li>Treatment optimization</li>
                <li>Neurological prognosis assessment</li>
                <li>Timing of injury evaluation</li>
            </ul>
            <p>For proper implementation, practitioners should:</p>
            <ul>
                <li>Maintain standardized scanning protocols</li>
                <li>Document findings systematically</li>
                <li>Correlate findings with clinical presentation</li>
                <li>Consider serial examinations when indicated</li>
            </ul>
        `
    }
];

let currentStep = 0;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentStepDisplay = document.getElementById('currentStep');
const contentContainer = document.getElementById('lessonContent');

function updateContent() {
    const lesson = lessonContent[currentStep];
    contentContainer.innerHTML = `
        <h2>${lesson.title}</h2>
        ${lesson.content}
    `;
    
    currentStepDisplay.textContent = `${currentStep + 1}/${lessonContent.length}`;
    
    // Update button states
    prevBtn.disabled = currentStep === 0;
    nextBtn.disabled = currentStep === lessonContent.length - 1;

    // Initialize brain demo only in the Standard Views section
    if (lesson.title === "Standard Views" && window.createBrainDemo) {
        window.createBrainDemo();
    }
}

prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        updateContent();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentStep < lessonContent.length - 1) {
        currentStep++;
        updateContent();
    }
});

// Initialize the first step
updateContent();
