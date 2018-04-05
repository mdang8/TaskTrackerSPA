# TaskTrackerSPA

**HW08 for CS4550: Web Development**

## Part 3

The TaskTracker app is now in a single page app version. When users first visit the site, they will be shown a landing page. From there they can access any of the pages on the nav bar. While accessing those pages, they will only have read priveleges and will not be able to modify or delete any of the data.

Also located on the nav bar are two login fields (name and password) that users can enter existing account information and become logged in as a specific user. If a user doesn't have an existing account, they can register a new one by clicking the "Register User" link on the nav bar. This brings them to a form where they have to enter a name, password, and password confirmation. If the strings typed in the password and password confirmation fields don't match, then an alert will pop up telling the user to fix it. A user account will not be created until all valid information is entered. When an account is successfully created, the user will be notified and can see their account on the "Users" page.

Once a user is logged into an account, they can create new tasks. When creating a new task, they can assign it to any one of the other users by selecting their name from a select dropdown input. This was a UI decision to make assigning tasks more user-friendly. Also, a duration has to be entered and must be in intervals of 15. There is another select dropdown to indicate if the task has been completed or not. All fields must be filled with a value or an alert will pop up notifying the user to fill in the missing fields. There is a field for selecting the creator of the task, but if it's set to anything other than the logged-in user, it'll give an alert.

Users can see all the created tasks for every user in the "Tasks" page. They can also view tasks assigned to specific users on the "Users" page. For each task, there is a "Delete" button that when clicked, will simply delete the task. Only the creator of the task can delete it. All other users will receive a notification that they are not allowed to delete that task.
