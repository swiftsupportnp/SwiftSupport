import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";

interface LucideIconProps extends LucideProps {
    name: string;
}

export default function LucideIcon({ name, ...props }: LucideIconProps) {
    const Icon = (Icons as any)[name];

    if (!Icon) {
        // Fallback to a default icon if name is invalid
        return <Icons.HelpCircle {...props} />;
    }

    return <Icon {...props} />;
}
