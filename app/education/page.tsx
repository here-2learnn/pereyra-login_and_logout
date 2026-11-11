
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const educationList = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Naga College Foundation",
    period: "2025 - Present",
    description:
      "Currently a second-year BSIT student, learning about programming, information technology, and computer systems.",
    achievements: [],
  },
];

export default function Education() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Education</h1>
        <p className="text-muted-foreground mt-1">
          My academic background and current studies.
        </p>
      </div>

      <div className="space-y-6">
        {educationList.map((item, idx) => (
          <Card key={idx}>
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">
                      {item.degree}
                    </CardTitle>
                    <CardDescription>
                      {item.institution}
                    </CardDescription>
                  </div>
                </div>

                <span className="text-sm font-medium text-muted-foreground">
                  {item.period}
                </span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                {item.description}
              </p>

              {item.achievements.length > 0 && (
                <>
                  <div className="text-sm font-medium text-muted-foreground">
                    <Award className="h-4 w-4 inline mr-1 text-primary" />
                    Key Highlights
                  </div>

                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}