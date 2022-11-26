import Image from "next/image";

interface Props {
  image: string;
  alt: string;
}

export const ProfileImage: React.FC<Props> = (props) => {
  return (
    <div className="border-4 relative bg-emerald-600 border-emerald-600 h-48 w-48 md:h-72 md:w-72 rounded-full">
      <Image
        src={props.image}
        alt={props.alt}
        objectFit="cover"
        className="rounded-full"
        layout="fill"
      />
    </div>
  );
};
