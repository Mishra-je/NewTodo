
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Complete project report",
        date: "2024-10-01",
        category: "Work",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Attend team meeting",
        date: "2024-10-05",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Update client presentation",
        date: "2024-10-10",
        category: "Work",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Prepare budget proposal",
        date: "2024-10-02",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Submit expense reports",
        date: "2024-10-07",
        category: "Finance",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Conduct market research",
        date: "2024-10-12",
        category: "Research",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 3,
    firstName: "Ishaan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Design new marketing materials",
        date: "2024-10-03",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Plan company event",
        date: "2024-10-08",
        category: "Event",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Evaluate social media strategy",
        date: "2024-10-13",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 4,
    firstName: "Anaya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Implement feedback from reviews",
        date: "2024-10-04",
        category: "Quality Assurance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Test new software version",
        date: "2024-10-09",
        category: "Quality Assurance",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Document testing procedures",
        date: "2024-10-14",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 5,
    firstName: "Saanvi",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Organize team workshop",
        date: "2024-10-06",
        category: "Training",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Conduct one-on-one meetings",
        date: "2024-10-11",
        category: "HR",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Review employee performance",
        date: "2024-10-16",
        category: "HR",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export default employees;

export const setLocalStorage = () => {
  localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}


// export const getLocalStorage = () => {
//   const employee = JSON.parse(localStorage.getItem('employees'))
//   // console.log('emplo',employee);
//   const admin = JSON.parse(localStorage.getItem('admin'))
//   // console.log(employee,admin);
//   return {employee,admin}
// }

export const employee = JSON.parse(localStorage.getItem('employees'))
// console.log('emplo',employee);
export const admin1 = JSON.parse(localStorage.getItem('admin'))

// export const getLocalStorage = () => {
 
//   // console.log(employee,admin);
//   return {employee,admin}
// }

