import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import React from "react";

const filterData = [
  {
    filterType: "Location",
    array: ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend",
      "Backend",
      "Fullstack",
      "DevOps",
      "Mobile Development",
      "AI/ML",
      "Data Science",
      "Cyber Security",
      "Game Development",
      "Blockchain",
      "IOT",
      "Cloud Computing",
      "UI/UX",
      "Graphic Designing",
      "Digital Marketing",
      "Content Writing",
      "SEO",
      "SMM",
      "SEM",
    ],
  },
  {
    filterType: "Salary",
    array: [
      "0-40K",
      "40K-70K",
      "70K-100K",
      "100K-150K",
      "150K-200K",
      "200K-300K",
    ],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3"></hr>
      <RadioGroup>
        {
            filterData.map((data,index)=>(
                <div>
                    <h1 className="font-bold text-lg">{data.filterType}</h1>
                    {
                        data.array.map((items,index)=>{
                            return(
                                <div className="flex items-center space-x-2 m-2">
                                    <RadioGroupItem value={items}/>
                                    <Label>{items}</Label>
                                </div>
                            )
                        })
                    }
                </div>
            ))
        }
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
