import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";


const Avatar = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <img
    src={src}
    alt={alt}
    className={`w-20 h-20 rounded-full mb-4 border-2 border-gray-200 ${className}`}
  />
);


const profileData = {
  name: "saripah",
  description: "Frontend Developer",
  image: "https://via.placeholder.com/150",
  socialMedia: [
    { url: "https://linkedin.com" },
    { url: "https://github.com" }
  ]
};

export const ProfileCard = () => {
  const { name, description, image, socialMedia } = profileData;
  return (
    <Card>
      <CardContent className="flex flex-col items-center text-center">
        <div className="flex flex-col items-center">
          <Avatar src={image} alt={name} />
        </div>   

        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <div className="flex flex-row gap-2 mt-4">
          {socialMedia?.[0]?.url && (
            <Button>
              <a
                href={socialMedia[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="mr-2" size={18} />
                LinkedIn
              </a>
            </Button>
          )}
          {socialMedia?.[1]?.url && (
            <Button>
              <a
                href={socialMedia[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="mr-2" size={18} />
                Github
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}