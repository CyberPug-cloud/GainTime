🛠 Core Data Database Structure
The database will contain three main entities:

Habit – Information about a habit
HabitEntry – Record of habit completion (single days)
UserSettings – User settings
📌 Entity Structure in Core Data
1️⃣ Habit (Habits)

Attribute	Data Type	Description
id	UUID	Unique habit ID
name	String	Habit name (e.g., "Running")
emoji	String	Habit icon (e.g., "🏃")
color	String	Habit color in UI (hex)
goalType	String	Goal type (e.g., "daily", "weekly")
goalValue	Int	Number of repetitions per week (for weekly goals)
reminderTime	Date	Reminder time (optional)
createdAt	Date	Creation date
streak	Int	Consecutive streak counter
➡️ Relationship: Habit (1) ⬅→ (N) HabitEntry (one habit can have multiple entries)

2️⃣ HabitEntry (Habit Entries)

Attribute	Data Type	Description
id	UUID	Unique entry ID
date	Date	Date of habit completion
isCompleted	Boolean	Whether the habit was completed that day
habit	Relationship	Relationship to the Habit entity
➡️ Relationship: HabitEntry (N) ⬅→ (1) Habit

3️⃣ UserSettings (User Settings)

Attribute	Data Type	Description
id	UUID	Unique settings ID
notificationsEnabled	Boolean	Whether notifications are enabled
darkMode	Boolean	Whether dark mode is enabled
weeklyReport	Boolean	Whether the user wants to receive weekly reports
➡️ Relationship: No relationships – settings are global for the user.

🔄 Relationships Between Entities
Habit ⬅→ (1 to N) HabitEntry (one habit can have multiple entries)
UserSettings – standalone entity, not related to Habit or HabitEntry.

