import React, { useState } from "react";
import Navbar from "./ui/shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./ui/AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";

const isResume = true;
const skills = [ "React", "Node", "Express", "MongoDB", "Firebase","JavaScript", "TypeScript", "HTML", "CSS", "SASS", "Tailwind"]
const Profile = () => {
  const [open,setOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border borde-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="src\assets\Profile.png"></AvatarImage>
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Arham Qureshi</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
                maiores mod?
              </p>
            </div>
          </div>
          <Button onClick={()=>setOpen(true)} variant="outline" className="text-right">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
            <div className="flex items-center my-2 gap-3">
                <Mail/>
                <p>arhamimranqureshi@gmail.com</p>
            </div>
            <div className="flex items-center my-2 gap-3">
                <Contact/>
                <p>+92 300 9375122</p>
            </div>
        </div>
        <div className="my-5">
            <h1 className="font-bold"> Skills</h1>
            <div className="flex items-center gap-1 my-2">
            {
                skills.length !== 0 ? skills.map((skill,index)=>(
                    <Badge key={index}>{skill}</Badge>
                )) : <span>No Skills</span>
            }
            </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="text-md font-bold">Resume</Label>
            {
                isResume ? <a target="_blank" className="text-blue-500 w-full hover:underline cursor-pointer" href="https://drive.google.com/file/d/10R2-0OU0StfFzdYNv4j7yT-BOOT4qEkr/view?usp=sharing">Arham Qureshi's Resume</a>: <span>No Resume</span>
            }
        </div>
      </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl">
                <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
                <AppliedJobTable/>
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>

  );
};

export default Profile;
