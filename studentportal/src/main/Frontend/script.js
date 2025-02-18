document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#studentTable tbody');
    const branchFilter = document.querySelector('#branchFilter');
    const sectionFilter = document.querySelector('#sectionFilter');
    const filterButton = document.querySelector('#filterButton');
    const addStudentForm = document.querySelector('#addStudentForm');
    const searchButton = document.querySelector('#searchButton');
    const rollNoInput = document.querySelector('#rollNumber');

    // Function to fetch and display students (with optional filtering)
    function fetchStudents(branch = '', section = '', rollNo = '') {
        let url = 'http://localhost:8080/api/students';

        // Apply filters only if both branch and section are provided
        if (branch && section) {
            url = `http://localhost:8080/api/students/filter?branch=${branch}&section=${section}`;
        }

        // Apply roll number search if provided
        if (rollNo) {
            url = `http://localhost:8080/api/students/search?rollNumber=${rollNumber}`;
        }

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                tableBody.innerHTML = ''; // Clear table before inserting new data

                if (data.length === 0) {
                    tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center;">No students found</td></tr>`;
                    return;
                }

                data.forEach(student => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${student.name}</td>
                        <td>${student.rollNumber}</td>
                        <td>${student.contactNumber}&nbsp;
                            <a href="tel:${student.contactNumber}">📞</a>&nbsp;
                            <a href="sms:${student.contactNumber}">📩</a>
                        </td>
                        <td>${student.branch}</td>
                        <td>${student.section}</td>
                        <td>${student.year}</td>
                    `;
                    tableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching students:', error));
    }

    // Fetch all students when the page loads
    fetchStudents();

    // Filter students when the filter button is clicked
    filterButton.addEventListener('click', () => {
        const branch = branchFilter.value.trim();
        const section = sectionFilter.value.trim();
        fetchStudents(branch, section);
    });

    // Search for students by roll number
    searchButton.addEventListener('click', () => {
        const rollNo = rollNoInput.value.trim();
        fetchStudents('', '', rollNumber); // Fetch students by roll number
    });

    // Add Student Form Submission
    addStudentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const studentData = {
            name: document.querySelector('#name').value.trim(),
            rollNumber: document.querySelector('#rollNumber').value.trim(),
            contactNumber: document.querySelector('#contactNumber').value.trim(),
            branch: document.querySelector('#branch').value.trim(),
            section: document.querySelector('#section').value.trim(),
            year: parseInt(document.querySelector('#year').value.trim(), 10)
        };
        // Validate required fields before sending request
        if (!studentData.name || !studentData.rollNumber || !studentData.contactNumber || 
            !studentData.branch || !studentData.section || !studentData.year) {
            alert('Please fill in all fields.');
            return;
        }

        fetch('http://localhost:8080/api/students/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(studentData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(() => {
            alert('Student added successfully!');
            addStudentForm.reset();
            fetchStudents(); // Refresh student list
        })
        .catch(error => console.error('Error adding student:', error));
    });
});
