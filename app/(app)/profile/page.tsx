import { getPersonalInfo, getSkills, getExperience } from "@/lib/payload";
import ProfilePageClient from "./ProfilePageClient";

export default async function ProfilePage() {
  const [personalInfo, skills, experience] = await Promise.all([
    getPersonalInfo(),
    getSkills(),
    getExperience(),
  ]);

  return (
    <ProfilePageClient 
      personalInfo={personalInfo}
      skills={skills}
      experience={experience}
    />
  );
}
