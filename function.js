

const resourceForm = document.getElementById('resourceForm');
const resourceList = document.getElementById('resourceList');


resourceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    
    const title = document.getElementById('title').value;
    const type = document.getElementById('type').value;
    const link = document.getElementById('link').value;

    
    const listItem = document.createElement('li');

    
    const resourceLink = document.createElement('a');
    resourceLink.href = link;
    resourceLink.target = "_blank";
    resourceLink.textContent = title;

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.classList.add('delete-button');


    deleteButton.addEventListener('click', function() {
        resourceList.removeChild(listItem); 
    });

    
    listItem.innerHTML = `<strong>${type}:</strong> `;
    listItem.appendChild(resourceLink);
    listItem.appendChild(deleteButton);

    
    resourceList.appendChild(listItem);

    
    resourceForm.reset();
});