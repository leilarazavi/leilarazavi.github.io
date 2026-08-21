export type ProfessionalActivity = {
  id: string;
  title: string;
  organization: string;
  role: string;
  location?: string;
};

export const professionalActivities: ProfessionalActivity[] = [
  {
    id: "qom-counseling-centers-association",
    title: "نشست هم‌افزایی نهادهای تخصصی روان‌شناسی استان قم",
    organization: "انجمن صنفی کارفرمایی مراکز مشاوره قم",
    role: "معاون انجمن صنفی کارفرمایی مراکز مشاوره قم",
    location: "قم"
  },
  {
    id: "psychology-school-central-council",
    title: "شورای مرکزی مدرسه روان‌شناسی",
    organization: "مدرسه روان‌شناسی",
    role: "عضو شورای مرکزی",
    location: "قم"
  }
];
