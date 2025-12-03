"use client"
import AIRecommendationsPanel from "@/components/AIRecommendationsPanel";


const data = {
  summary: "10-year-old female spayed cat with E.coli UTI confirmed on culture.",
  recommendations: [
    { title: "Primary Antibiotic", value: "Amoxicillin-clavulanate" },
    { title: "Dosage", value: "12.5-20 mg/kg PO q12h" },
    { title: "Duration", value: "7 days" },
    { title: "Monitoring", value: "Recheck clinical signs in 3-4 days" }
  ],
  flags: ["No complicating factors identified", "Follow ISCAID guidelines"]
};



export default function Home() {

  // Close button handler
   const handleClose = () => {
    alert("Close clicked!");
  };

  return <AIRecommendationsPanel data={data} onClose={handleClose} />;
}
