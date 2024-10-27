const employees = [
    {
        "id": 1,
        "name": "Nikhil",
        "email": "emp@gmail.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "taskNumber": 1,
                "title": "Design Home Page",
                "description": "Create a mockup for the new homepage",
                "date": "2024-10-18",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskNumber": 2,
                "title": "Prepare Presentation",
                "description": "Prepare the Q4 sales presentation",
                "date": "2024-10-15",
                "category": "Sales",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskNumber": 3,
                "title": "Fix Bug #402",
                "description": "Resolve the issue with user authentication",
                "date": "2024-10-12",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 2,
        "name": "John",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskNumber": 1,
                "title": "Write Blog Post",
                "description": "Draft the monthly blog post",
                "date": "2024-10-10",
                "category": "Marketing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskNumber": 2,
                "title": "Client Meeting",
                "description": "Meeting with client to discuss project scope",
                "date": "2024-10-16",
                "category": "Client Relations",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "name": "Emily",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "taskNumber": 1,
                "title": "Product Research",
                "description": "Research for the new product line",
                "date": "2024-10-20",
                "category": "Research",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskNumber": 2,
                "title": "Team Workshop",
                "description": "Conduct a team workshop for new hires",
                "date": "2024-10-19",
                "category": "HR",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 4,
        "name": "Alice",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskNumber": 1,
                "title": "Social Media Strategy",
                "description": "Plan and execute the social media strategy",
                "date": "2024-10-17",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskNumber": 2,
                "title": "Data Backup",
                "description": "Ensure all server data is backed up",
                "date": "2024-10-18",
                "category": "IT",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "name": "Michael",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskNumber": 1,
                "title": "Market Analysis",
                "description": "Analyze competitor performance",
                "date": "2024-10-21",
                "category": "Business Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskNumber": 2,
                "title": "Update Documentation",
                "description": "Update project documentation",
                "date": "2024-10-13",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    }
]

const admin = [
    {
        "id": 1,
        "name": "Nikhil Sir",
        "email": "admin@gmail.com",
        "password": "123"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees) );
    localStorage.setItem('admin', JSON.stringify(admin) );
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
}
