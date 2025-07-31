import Image from "next/image";
import bg from '../../public/background/HomePage_Background.png'
import RenderModel from "@/components/RenderModel";
import ElfWizard from "@/components/models/elfWizard";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image className="w-full h-full object-cover object-center opacity-25" src={bg} alt="background-image" fill />

      <div className="w-full h-screen">
        <Navigation/>
        <RenderModel>
          <ElfWizard />
        </RenderModel>
      </div>
    </main>
  );
}
