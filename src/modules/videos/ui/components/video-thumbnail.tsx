import Image from "next/image";

interface VideoThumbnailProps {
  title: string;
  imageUrl?: string | null;
  previewUrl?: string | null;
}

export const VideoThumbnail = ({
  title,
  imageUrl,
  previewUrl,
}: VideoThumbnailProps) => {
  return (
    <div className="relative">
      {/*Thumbnail wrapper */}
      <div className="relative w-full overflow-hidden rounded-xl aspect-video">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt="Thumbnail"
          fill
          className="size-full object-cover"
        />
      </div>

      {/*Video Duration box */}
      {/*TODO:Add video duration box */}
    </div>
  );
};
