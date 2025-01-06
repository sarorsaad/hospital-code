const coronalViews = [
    {
        id: 'frontal-lobes',
        title: 'Frontal Lobes',
        description: 'This view shows the frontal lobes of the brain. Key structures visible include the anterior cerebral arteries and frontal cortex.',
        imagePath: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVR4nO3BMQEAAADCoPVPbQZ/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A/dxAAF3H5QdAAAAAElFTkSuQmCC',
        annotations: [
            { x: 45, y: 30, text: 'Superior Frontal Gyrus' },
            { x: 25, y: 50, text: 'Middle Frontal Gyrus' },
            { x: 65, y: 45, text: 'Anterior Cerebral Artery' }
        ]
    },
    {
        id: 'frontal-horns',
        title: 'Frontal Horns of Lateral Ventricle',
        description: 'The frontal horns of the lateral ventricles are visible in this plane. Note the characteristic butterfly appearance.',
        imagePath: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVR4nO3BMQEAAADCoPVPbQZ/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A/dxAAF3H5QdAAAAAElFTkSuQmCC',
        annotations: [
            { x: 35, y: 40, text: 'Lateral Ventricle' },
            { x: 50, y: 30, text: 'Septum Pellucidum' },
            { x: 65, y: 45, text: 'Caudate Nucleus' }
        ]
    },
    {
        id: 'foramen-monro',
        title: 'Foramen of Monro & 3rd Ventricle',
        description: 'This view demonstrates the connection between the lateral and third ventricles through the foramen of Monro.',
        imagePath: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVR4nO3BMQEAAADCoPVPbQZ/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A/dxAAF3H5QdAAAAAElFTkSuQmCC',
        annotations: [
            { x: 50, y: 35, text: 'Foramen of Monro' },
            { x: 50, y: 50, text: '3rd Ventricle' },
            { x: 30, y: 45, text: 'Thalamus' }
        ]
    },
    {
        id: 'lateral-ventricle',
        title: 'Body of Lateral Ventricle',
        description: 'The body of the lateral ventricle is visible at this level, along with surrounding structures.',
        imagePath: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVR4nO3BMQEAAADCoPVPbQZ/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A/dxAAF3H5QdAAAAAElFTkSuQmCC',
        annotations: [
            { x: 40, y: 40, text: 'Body of Lateral Ventricle' },
            { x: 60, y: 45, text: 'Choroid Plexus' },
            { x: 25, y: 50, text: 'Corpus Callosum' }
        ]
    },
    {
        id: 'trigone',
        title: 'Trigone of Lateral Ventricle',
        description: 'The trigone (atrium) of the lateral ventricle is shown here, an important landmark for ventricular assessment.',
        imagePath: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVR4nO3BMQEAAADCoPVPbQZ/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A/dxAAF3H5QdAAAAAElFTkSuQmCC',
        annotations: [
            { x: 45, y: 35, text: 'Trigone' },
            { x: 30, y: 50, text: 'Choroid Plexus' },
            { x: 60, y: 45, text: 'Occipital Horn' }
        ]
    },
    {
        id: 'parieto-occipital',
        title: 'Parieto-occipital Lobe',
        description: 'This posterior view shows the parieto-occipital region and posterior horns of the lateral ventricles.',
        imagePath: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVR4nO3BMQEAAADCoPVPbQZ/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A/dxAAF3H5QdAAAAAElFTkSuQmCC',
        annotations: [
            { x: 40, y: 30, text: 'Parietal Lobe' },
            { x: 50, y: 50, text: 'Occipital Lobe' },
            { x: 30, y: 45, text: 'Posterior Horn' }
        ]
    }
];

function createBrainDemo() {
    const demoContainer = document.getElementById('brain-demo');
    if (!demoContainer) return;

    // Clear any existing content
    demoContainer.innerHTML = '';

    // Create view selector buttons
    const viewSelector = document.createElement('div');
    viewSelector.className = 'view-selector';
    
    coronalViews.forEach(view => {
        const button = document.createElement('button');
        button.className = 'view-button';
        button.textContent = view.title;
        button.onclick = () => showView(view);
        viewSelector.appendChild(button);
    });

    // Create image container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'brain-image';
    imageContainer.innerHTML = '<div class="placeholder-text">Select a view above to see the ultrasound image</div>';

    // Create description container
    const descriptionContainer = document.createElement('div');
    descriptionContainer.className = 'view-description';

    demoContainer.appendChild(viewSelector);
    demoContainer.appendChild(imageContainer);
    demoContainer.appendChild(descriptionContainer);

    // Show first view by default
    showView(coronalViews[0]);
}

function showView(view) {
    const imageContainer = document.querySelector('.brain-image');
    const descriptionContainer = document.querySelector('.view-description');
    
    // Update buttons
    document.querySelectorAll('.view-button').forEach(button => {
        button.classList.toggle('active', button.textContent === view.title);
    });

    // Update image and annotations
    imageContainer.innerHTML = `
        <img src="${view.imagePath}" alt="${view.title}" style="background-color: #f0f0f0;">
        ${view.annotations.map(annotation => `
            <div class="annotation" style="left: ${annotation.x}%; top: ${annotation.y}%;">
                <div class="annotation-tooltip">${annotation.text}</div>
            </div>
        `).join('')}
    `;

    // Update description
    descriptionContainer.innerHTML = `
        <h3>${view.title}</h3>
        <p>${view.description}</p>
    `;
}

// Initialize demo when DOM is loaded
document.addEventListener('DOMContentLoaded', createBrainDemo);
