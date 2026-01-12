import { Star } from "lucide-react";

interface StarRatingProps {
    rating: number;
}

export default function StarRating({ rating }: StarRatingProps) {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    size={18}
                    className={`${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                />
            ))}
        </div>
    );
}
