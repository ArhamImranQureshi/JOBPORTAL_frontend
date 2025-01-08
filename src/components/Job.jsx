import React from "react";
import { Button } from "./ui/button.jsx";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar.jsx";
import { Badge } from "./ui/badge.jsx";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
const jobid = '1'
const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button>
          <Avatar>
            <AvatarImage src="https://pics.craiyon.com/2023-11-22/wjOxoPhuQc2FiD5K0yJOLQ.webp"></AvatarImage>
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">Pakistan</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-gray-600 text-sm ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque autem saepe excepturi, similique optio error iusto ipsum assumenda! Ad, suscipit.</p>
      </div>
        <div className="flex items-center gap-2 mt-4">
            <Badge className='text-blue-700 font-bold'>12 Positions</Badge>
            <Badge className='text-[#F83002] font-bold'>Part Time</Badge>
            <Badge className='text-[#7209b7] font-bold'>60000 Pkr</Badge>
        </div>
        <div className="flex items-center gap-4 mt-4">
        <Button variant='outline' onClick={()=>{navigate(`/description/${jobid}`)}}>Details</Button>
        <Button className='bg-[#7209b7] text-white'>Save For Later</Button>
        </div>
    </div>
  );
};

export default Job;
