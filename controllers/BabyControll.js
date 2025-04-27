import { BabyCaremodel } from "../models/BabyCareModel.js";
import axios from 'axios';

const BACKEND_URL = 'https://urbancare-backend.onrender.com';


// export const BabyControll=async(req,res)=>{
//     const {specialist}=req.params
//     console.log("Searching for specialist",specialist)
//     try{
//         const data=await BabyCaremodel.find({specialist:specialist})
//         console.log("Raw DB response:",data)
//         if (data.length === 0) {
//             return res.status(200).json({ 
//               message: "No providers found for this category.",
//               specialist: specialist // Helps verify the correct category was searched
//             });
//           }
//           const response = data.map(result => ({
//             name:result.name,
//             age:result.age,
//             gender:result.gender,
//             experienceInYears:result.experienceInYears,
//             specialist: result.specialist,
//             rating: result.rating,
//             price: result.chargesPerHour || result.chargesPerlour,
//             availableTimings: result.availableTimings,
//             location: result.location
//           }));
//           res.status(201).json(response);

//     }catch(err){
//         res.status(500).json({ 
//             message: 'Failed to fetch providers',
//             error: err.message 
//           });
//     }
// }
export const fetchBabyCareProviders = async (specialist) => {
  try {
    const response = await axios.get(${BACKEND_URL}/api/baby-care/${specialist});
    return response.data;
  } catch (error) {
    console.error('Error fetching baby care providers:', error);
    throw error;
  }
};
