import Image from "next/image";
import bg from '../../../public/background/ProjectsPage_Background.png'
import ProjectList from "@/components/projects";
import { projectsData } from "../data";
import RenderModel from "@/components/RenderModel";
import WizardScythe from "@/components/models/wizardScythe";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image className="w-full h-full object-cover object-center opacity-25 -z-20" src={bg} alt="background-image" fill />

    <ProjectList projects= {projectsData} />

   <div className='flex items-center justify-center fixed top-20 left-0 h-screen'>
      <RenderModel>
          <WizardScythe />
        </RenderModel>
   </div>
    </main>
  );
}
