import * as React from "react";
import { cn } from "./utils";
import { useState } from "react";

interface VideoCardProps extends React.ComponentProps<"div"> {
  title: string;
  creator?: string;
  note?: string; // Description/note about the video
  url: string; // YouTube URL or custom thumbnail
  articleUrl?: string; // Optional link to essay/article
  articleTitle?: string; // Custom link text (defaults to "Read what I think")
  size?: "small" | "medium" | "large";
  variant?: "default" | "dark";
}

// Extract YouTube video ID from URL
function getYouTubeId(url: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

// Get YouTube thumbnail URL
function getYouTubeThumbnail(videoId: string, quality: 'default' | 'hq' | 'max' = 'max'): string {
  const qualityMap = {
    default: 'default',
    hq: 'hqdefault',
    max: 'maxresdefault'
  };
  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
}

function VideoCard({
  className,
  title,
  creator,
  note,
  url,
  articleUrl,
  articleTitle = "Read what I think",
  size = "medium",
  variant = "default",
  ...props
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = getYouTubeId(url);
  const thumbnail = videoId ? getYouTubeThumbnail(videoId) : url;

  const handlePlay = () => {
    if (videoId) {
      setIsPlaying(true);
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <div
      data-slot="video-card"
      className={cn(
        "group h-full flex relative overflow-hidden",
        "transition-all duration-300",
        "hover:z-10 hover:scale-[1.02] hover:-translate-y-1",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[4px_8px_16px_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.2)]",
        variant === "default" && "bg-card",
        variant === "dark" && "bg-foreground text-background",
        className,
      )}
      style={{
        transformStyle: 'preserve-3d',
      }}
      {...props}
    >
      {/* Left Half - Video */}
      <div
        className={cn(
          "relative bg-foreground overflow-hidden cursor-pointer flex-shrink-0",
          size === "small" && "w-32 md:w-40",
          size === "medium" && "w-40 md:w-48",
          size === "large" && "w-48 md:w-56"
        )}
        onClick={handlePlay}
      >
        {isPlaying && videoId ? (
          // Embedded YouTube video
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            {/* Thumbnail */}
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              onError={(e) => {
                // Fallback to default quality if maxres doesn't exist
                if (videoId && e.currentTarget.src.includes('maxresdefault')) {
                  e.currentTarget.src = getYouTubeThumbnail(videoId, 'hq');
                }
              }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-foreground/10 to-foreground/40" />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300">
              <div className="w-16 h-16 border-2 border-background/80 group-hover:border-secondary bg-background/10 group-hover:bg-secondary backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <svg
                  className={cn(
                    "w-6 h-6 ml-1 transition-colors",
                    "text-background/80 group-hover:text-secondary-foreground"
                  )}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Right Half - Content */}
      <div className={cn(
        "flex-1 p-6 flex flex-col justify-between",
        size === "small" && "p-4"
      )}>
        {/* Top section - Title & Creator */}
        <div>
          <h4 className={cn(
            "font-black leading-tight group-hover:text-secondary transition-colors mb-2",
            size === "small" && "text-sm",
            size === "medium" && "text-base md:text-lg",
            size === "large" && "text-lg md:text-xl",
            variant === "dark" && "text-background group-hover:text-secondary"
          )}>
            {title}
          </h4>

          {creator && (
            <p className={cn(
              "text-xs font-mono uppercase tracking-wider mb-4",
              variant === "default" && "text-muted-foreground",
              variant === "dark" && "text-background/60"
            )}>
              {creator}
            </p>
          )}

          {/* Note/Description */}
          {note && (
            <p className={cn(
              "text-sm leading-relaxed",
              variant === "default" && "text-muted-foreground",
              variant === "dark" && "text-background/70"
            )}>
              {note}
            </p>
          )}
        </div>

        {/* Bottom section - Optional article link */}
        {articleUrl && (
          <div className="mt-4 pt-4 border-t border-foreground/10">
            <a
              href={articleUrl}
              onClick={(e) => e.stopPropagation()}
              className={cn(
                "text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2",
                "hover:text-secondary transition-colors group/link",
                variant === "default" && "text-foreground",
                variant === "dark" && "text-background"
              )}
            >
              {articleTitle}
              <span className="text-secondary group-hover/link:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export { VideoCard };
export type { VideoCardProps };
