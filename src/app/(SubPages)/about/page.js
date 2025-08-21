import Image from "next/image";
import bg from '../../../../public/background/AboutPage_Background.png'
import RenderModel from "@/components/RenderModel";
import WizardHat from "@/components/models/wizardHat";


export default function Home() {
  return (
    <>
      <Image className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50" src={bg} alt="background-image"  />

   <div className='w-full h-screen absolute top-1/2 -translate-y-1/2 left-0'>
      <RenderModel>
          <WizardHat />
        </RenderModel>
   </div>
    </>
  );
}
