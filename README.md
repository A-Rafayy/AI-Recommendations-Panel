# AI Recommendations Panel

A clean, clinical-looking **AI Recommendations Panel** built with **React/Next + TailwindCSS**.  
This component displays a summary, a list of recommendations, and flags for veterinary cases using a static JSON object.

---

 ## How to Run the Project

**Clone from GitHub**

1. Clone the repository:

   - git clone https://github.com/A-Rafayy/AI-Recommendations-Panel.git
   
   - cd AI-Recommendations-Panel

3. Install dependencies:

   - npm install

3. Start the development server:

   - npm run dev

4. Open in your browser:

   - http://localhost:3000

---

  ### Demo Data

```json
{
  "summary": "10-year-old female spayed cat with E. coli UTI confirmed on culture.",
  "recommendations": [
    { "title": "Primary Antibiotic", "value": "Amoxicillin-clavulanate" },
    { "title": "Dosage", "value": "12.5–20 mg/kg PO q12h" },
    { "title": "Duration", "value": "7 days" },
    { "title": "Monitoring", "value": "Recheck clinical signs in 3–4 days" }
  ],
  "flags": ["No complicating factors identified", "Follow ISCAID guidelines"]
}

---
