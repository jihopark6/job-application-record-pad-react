# Job Application History (REACT)

This is a React.js version of the project jihopark6/job-application-record-pad ( https://github.com/jihopark6/job-application-record-pad/tree/develop )

All data is stored locally in the browser (`localStorage`) — no backend or account is required.

---

## Features

- **Add & manage applications** : log company name, job title, application date, contact info, and the original job posting URL
- **Track status** : mark each application as Applied, Interviewing, Offer, or Rejected
- **Memos** : attach free-form notes to each application (follow-up reminders, interview prep, impressions, etc.)
- **Offline-ready** : works without an internet connection once loaded (PWA)

---

## Pages & Navigation

| Path | Page | What renders |
|------|------|--------------|
| `/` | Home | Application list + search bar |
| `/new` | New Application | Empty form |
| `/edit` | Edit Application | Pre-filled form + related memos |
| `/memo` | Memos | Memo form + full memo list |

---

## Components

**App** : Root. Owns `editingData` (the application data being edited), `searchQuery`, and `currentPath`.

**Application** : Reads `applicationData` from localStorage and renders a filtered list of application cards. Filtering matches `searchQuery` against both company name and job title. Clicking a card loads it into `editingData` and navigates to `/edit`.

**AppForm** : Create and edit form with fields: Date, Company, Job Title, Job Posting URL, Contact Info, and Status. 
- **New mode** : shows the empty form for new item.
- **Edit mode** : to edit a matched existing item.
- **Delete** : removes the matched record and returns to Home.
- **Company autocomplete** : debounces the company field input, calls an external API, and shows a list of suggestions.

**MemoForm** : Writes a new memo to `memoData` in localStorage. The application dropdown is loaded from `applicationData`.

**MemoList** : Reads `memoData` and renders memo content. 
