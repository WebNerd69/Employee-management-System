const employees = [
     {
          id: 1,
          name: "John Doe", 
          email: "john.doe@example.com",
          username: "john.doe@example.com",
          password: "1234",
          is_admin: false,
          taskCount: {
               active: 5,
               new: 3,
               accepted: 3,
               completed: 0,
               failed: 0
          },
          tasks: [
               {
                    title: "Create project proposal",
                    description: "Draft a comprehensive project proposal for the new client",
                    deadline: "15/06/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: false,
                    is_failed: false,
                    is_active: true,
                    priority: "high"
               },
               {
                    title: "Review code changes",
                    description: "Review and approve code changes for the latest feature",
                    deadline: "20/06/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "medium"
               },
               {
                    title: "Update documentation",
                    description: "Update the user manual with the latest features",
                    deadline: "25/06/2024",
                    is_completed: false,
                    is_new: false,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "low"
               },
               {
                    title: "Attend team meeting",
                    description: "Participate in weekly team sync-up meeting",
                    deadline: "30/06/2024",
                    is_completed: false,
                    is_new: false,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "medium"
               },
               {
                    title: "Complete training module",
                    description: "Finish the online training module on new technology stack",
                    deadline: "05/07/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: false,
                    is_failed: false,
                    is_active: true,
                    priority: "low"
               }
          ]
     },
     {
          id: 2,
          name: "Jane Smith",
          email: "jane.smith@example.com",
          username: "jane.smith@example.com",
          password: "1234",
          is_admin: false,
          taskCount: {
               active: 5,
               new: 3,
               accepted: 3,
               completed: 0,
               failed: 0
          },
          tasks: [
               {
                    title: "Design new user interface",
                    description: "Create mockups for the new user dashboard",
                    deadline: "18/06/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "high"
               },
               {
                    title: "Implement responsive design",
                    description: "Ensure the website is responsive across all devices",
                    deadline: "23/06/2024",
                    is_completed: false,
                    is_new: false,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "high"
               },
               {
                    title: "Conduct user testing",
                    description: "Organize and conduct user testing sessions for the new feature",
                    deadline: "28/06/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: false,
                    is_failed: false,
                    is_active: true,
                    priority: "medium"
               },
               {
                    title: "Create style guide",
                    description: "Develop a comprehensive style guide for the product",
                    deadline: "03/07/2024",
                    is_completed: false,
                    is_new: false,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "medium"
               },
               {
                    title: "Optimize image assets",
                    description: "Optimize all image assets for better performance",
                    deadline: "08/07/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: false,
                    is_failed: false,
                    is_active: true,
                    priority: "low"
               }
          ]
     },
     {
          id: 3,
          name: "Michael Johnson",
          email: "michael.johnson@example.com",
          username: "michael.johnson@example.com",
          password: "1234",
          is_admin: false,
          taskCount: {
               active: 5,
               new: 3,
               accepted: 3,
               completed: 0,
               failed: 0
          },
          tasks: [
               {
                    title: "Develop API endpoints",
                    description: "Create new API endpoints for the user authentication system",
                    deadline: "20/06/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "high"
               },
               {
                    title: "Optimize database queries",
                    description: "Improve the performance of slow database queries",
                    deadline: "25/06/2024",
                    is_completed: false,
                    is_new: false,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "high"
               },
               {
                    title: "Implement caching mechanism",
                    description: "Set up a caching system to improve application performance",
                    deadline: "30/06/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: false,
                    is_failed: false,
                    is_active: true,
                    priority: "medium"
               },
               {
                    title: "Write unit tests",
                    description: "Create unit tests for the new authentication module",
                    deadline: "05/07/2024",
                    is_completed: false,
                    is_new: false,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "medium"
               },
               {
                    title: "Refactor legacy code",
                    description: "Refactor the old payment processing module",
                    deadline: "10/07/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: false,
                    is_failed: false,
                    is_active: true,
                    priority: "low"
               }
          ]
     },
     {
          id: 4,
          name: "Emily Brown",
          email: "emily.brown@example.com",
          username: "emily.brown@example.com",
          password: "1234",
          is_admin: false,
          taskCount: {
               active: 5,
               new: 3,
               accepted: 3,
               completed: 0,
               failed: 0
          },
          tasks: [
               {
                    title: "Create marketing campaign",
                    description: "Develop a marketing campaign for the product launch",
                    deadline: "22/06/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "high"
               },
               {
                    title: "Analyze user feedback",
                    description: "Compile and analyze user feedback from the beta testing phase",
                    deadline: "27/06/2024",
                    is_completed: false,
                    is_new: false,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "medium"
               },
               {
                    title: "Prepare sales presentation",
                    description: "Create a sales presentation for potential clients",
                    deadline: "02/07/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: false,
                    is_failed: false,
                    is_active: true,
                    priority: "high"
               },
               {
                    title: "Conduct market research",
                    description: "Research market trends and competitor analysis",
                    deadline: "07/07/2024",
                    is_completed: false,
                    is_new: false,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "medium"
               },
               {
                    title: "Plan social media strategy",
                    description: "Develop a social media strategy for the next quarter",
                    deadline: "12/07/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: false,
                    is_failed: false,
                    is_active: true,
                    priority: "low"
               }
          ]
     },
     {
          id: 5,
          name: "David Wilson",
          email: "david.wilson@example.com",
          username: "david.wilson@example.com",
          password: "1234",
          is_admin: false,
          taskCount: {
               active: 5,
               new: 3,
               accepted: 3,
               completed: 0,
               failed: 0
          },
          tasks: [
               {
                    title: "Set up CI/CD pipeline",
                    description: "Implement a continuous integration and deployment pipeline",
                    deadline: "24/06/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "high"
               },
               {
                    title: "Configure monitoring tools",
                    description: "Set up monitoring and alerting for the production environment",
                    deadline: "29/06/2024",
                    is_completed: false,
                    is_new: false,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "high"
               },
               {
                    title: "Perform security audit",
                    description: "Conduct a comprehensive security audit of the system",
                    deadline: "04/07/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: false,
                    is_failed: false,
                    is_active: true,
                    priority: "high"
               },
               {
                    title: "Optimize server performance",
                    description: "Tune server configurations for optimal performance",
                    deadline: "09/07/2024",
                    is_completed: false,
                    is_new: false,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "medium"
               },
               {
                    title: "Implement backup strategy",
                    description: "Design and implement a robust backup and recovery strategy",
                    deadline: "14/07/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: false,
                    is_failed: false,
                    is_active: true,
                    priority: "high"
               }
          ]
     },
     {
          id: 6,
          name: "Emily Brown",
          email: "emily.brown@example.com",
          username: "emily.brown@example.com",
          password: "1234",
          is_admin: false,
          taskCount: {
               active: 5,
               new: 3,
               accepted: 3,
               completed: 0,
               failed: 0
          },
          tasks: [
               {
                    title: "Develop mobile app",
                    description: "Create a mobile app version of our web platform",
                    deadline: "30/06/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "high"
               },
               {
                    title: "Implement push notifications",
                    description: "Add push notification functionality to the mobile app",
                    deadline: "05/07/2024",
                    is_completed: false,
                    is_new: false,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "medium"
               },
               {
                    title: "Conduct user testing for mobile app",
                    description: "Organize and run user testing sessions for the new mobile app",
                    deadline: "10/07/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: false,
                    is_failed: false,
                    is_active: true,
                    priority: "high"
               },
               {
                    title: "Optimize app performance",
                    description: "Improve the app's loading times and overall performance",
                    deadline: "15/07/2024",
                    is_completed: false,
                    is_new: false,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "medium"
               },
               {
                    title: "Implement offline mode",
                    description: "Add offline functionality to the mobile app",
                    deadline: "20/07/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: false,
                    is_failed: false,
                    is_active: true,
                    priority: "low"
               }
          ]
     },
     {
          id: 7,
          name: "Michael Johnson",
          email: "michael.johnson@example.com",
          username: "michael.johnson@example.com",
          password: "1234",
          is_admin: false,
          taskCount: {
               active: 5,
               new: 3,
               accepted: 3,
               completed: 0,
               failed: 0
          },
          tasks: [
               {
                    title: "Create data visualization dashboard",
                    description: "Design and implement a dashboard for data visualization",
                    deadline: "02/07/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "high"
               },
               {
                    title: "Implement real-time data updates",
                    description: "Add real-time data updating functionality to the dashboard",
                    deadline: "07/07/2024",
                    is_completed: false,
                    is_new: false,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "high"
               },
               {
                    title: "Develop custom chart components",
                    description: "Create reusable chart components for the dashboard",
                    deadline: "12/07/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: false,
                    is_failed: false,
                    is_active: true,
                    priority: "medium"
               },
               {
                    title: "Implement data export feature",
                    description: "Add functionality to export dashboard data in various formats",
                    deadline: "17/07/2024",
                    is_completed: false,
                    is_new: false,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "low"
               },
               {
                    title: "Conduct performance optimization",
                    description: "Optimize dashboard performance for large datasets",
                    deadline: "22/07/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: false,
                    is_failed: false,
                    is_active: true,
                    priority: "high"
               }
          ]
     },
     {
          id: 8,
          name: "Sarah Davis",
          email: "sarah.davis@example.com",
          username: "sarah.davis@example.com",
          password: "1234",
          is_admin: false,
          taskCount: {
               active: 5,
               new: 3,
               accepted: 3,
               completed: 0,
               failed: 0
          },
          tasks: [
               {
                    title: "Implement user authentication system",
                    description: "Develop a secure user authentication and authorization system",
                    deadline: "05/07/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "high"
               },
               {
                    title: "Add social login options",
                    description: "Integrate social media login options for user convenience",
                    deadline: "10/07/2024",
                    is_completed: false,
                    is_new: false,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "medium"
               },
               {
                    title: "Implement password reset functionality",
                    description: "Add a secure password reset feature for users",
                    deadline: "15/07/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: false,
                    is_failed: false,
                    is_active: true,
                    priority: "high"
               },
               {
                    title: "Develop user profile management",
                    description: "Create functionality for users to manage their profiles",
                    deadline: "20/07/2024",
                    is_completed: false,
                    is_new: false,
                    is_accepted: true,
                    is_failed: false,
                    is_active: true,
                    priority: "medium"
               },
               {
                    title: "Implement multi-factor authentication",
                    description: "Add multi-factor authentication for enhanced security",
                    deadline: "25/07/2024",
                    is_completed: false,
                    is_new: true,
                    is_accepted: false,
                    is_failed: false,
                    is_active: true,
                    priority: "high"
               }
          ]
     }

];

const admins = [
     {
          name: "Admin User",
          email: "admin@example.com",
          username: "admin@example.com",
          password: "1234",
          is_admin: true
     }
]


export const setLocalStorage = ()=>{
     localStorage.setItem('employees',JSON.stringify(employees))
     localStorage.setItem('admins',JSON.stringify(admins))
}

export const getLocalStorage = ()=>{
     const employeeData = JSON.parse(localStorage.getItem('employees'))
     const adminData = JSON.parse(localStorage.getItem('admins'))
     return({employeeData,adminData})
}

// useEffect(() => {
//   localStorage.clear()
//   setLocalStorage()
// })
