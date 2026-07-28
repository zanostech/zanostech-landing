import SectionHeader from "@/components/SectionHeader";

const team = [
  { initials: "ZR", name: "Zahin Rahman", role: "Founder · Design Director" },
  { initials: "NA", name: "Nazia Ahsan", role: "Head of Engineering" },
  { initials: "RI", name: "Rafid Islam", role: "Lead Product Designer" },
  { initials: "SK", name: "Sadia Karim", role: "UI/UX Designer" },
  { initials: "MC", name: "Mahin Chowdhury", role: "Full-stack Engineer" },
  { initials: "TH", name: "Tanvir Hasan", role: "Video Editor · Motion" },
  { initials: "AN", name: "Ayesha Noor", role: "Frontend Engineer" },
  { initials: "RH", name: "Rakib Hossain", role: "Backend Engineer" },
];

export default function TeamGrid() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1200px]">
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
