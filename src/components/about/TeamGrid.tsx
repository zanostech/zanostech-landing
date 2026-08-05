import SectionHeader from "@/components/SectionHeader";
import { getTeamMembers } from "@/lib/api";

const fallbackTeam = [
  { initials: "ZR", name: "Zahin Rahman", role: "Founder · Design Director" },
  { initials: "NA", name: "Nazia Ahsan", role: "Head of Engineering" },
  { initials: "RI", name: "Rafid Islam", role: "Lead Product Designer" },
  { initials: "SK", name: "Sadia Karim", role: "UI/UX Designer" },
  { initials: "MC", name: "Mahin Chowdhury", role: "Full-stack Engineer" },
  { initials: "TH", name: "Tanvir Hasan", role: "Video Editor · Motion" },
  { initials: "AN", name: "Ayesha Noor", role: "Frontend Engineer" },
  { initials: "RH", name: "Rakib Hossain", role: "Backend Engineer" },
];

export default async function TeamGrid() {
  const dynamicData = await getTeamMembers();
  
  let team = fallbackTeam;
  if (dynamicData && dynamicData.length > 0) {
    team = dynamicData.map((d: any) => ({
      initials: d.name.split(" ").map((n: string) => n[0]).join("").substring(0, 2).toUpperCase(),
      name: d.name,
      role: d.designation,
    }));
  }

  return (
    <section className="py-16 sm:py-24 border-t border-white/[0.06]">
      <div className="px-4 sm:px-6 lg:px-8 container mx-auto w-full">
        <SectionHeader
          tag="The Team"
          title={<>People who <span className="text-[#22c55e]">actually</span> do the work.</>}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {team.map((member) => (
            <div
              key={member.initials}
              className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden"
            >
              <div className="aspect-square bg-gradient-to-br from-[#1a2e1a] to-[#0d1f0d] flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-bold text-white/20">{member.initials}</span>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold text-sm mb-1">{member.name}</h3>
                <p className="text-white/40 text-xs">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
