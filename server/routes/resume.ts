import path from "path";

import { RequestHandler } from "express";

export const handleGetResume: RequestHandler = (req, res) => {
  // Path to resume PDF in public folder
  const resumePath = path.join(process.cwd(), "public", "resume.pdf");
  
  res.download(resumePath, "Khalid_IBNFKIH_Resume.pdf", (err) => {
    if (err) {
      // If file doesn't exist, provide a fallback message
      if (!res.headersSent) {
        res.status(404).json({ 
          message: "Resume not found. Please upload resume.pdf to the public folder.",
          email: "khalidibnfkih@gmail.com"
        });
      }
    }
  });
};
