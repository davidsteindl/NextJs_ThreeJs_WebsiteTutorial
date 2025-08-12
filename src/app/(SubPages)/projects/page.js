import Image from "next/image";
import bg from '../../../../public/background/ProjectsPage_Background.png'
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import WizardScythe from "@/components/models/wizardScythe";


export default function Home() {
  return (
    <>
      <Image className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50" src={bg} alt="background-image"  />

    <ProjectList projects= {projectsData} />

   <div className='flex items-center justify-center fixed top-10 left-0 h-screen'>
      <RenderModel>
          <WizardScythe />
        </RenderModel>
   </div>
    </>
  );
}
