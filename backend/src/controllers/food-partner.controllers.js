import foodpartner from '../models/foodPartner.model.js'
import foodmodel from '../models/fooditems.models.js'
const getFoodPartnerById = async(req,res)=>{
    const id = req.params.id
    const partner = await foodpartner.findById(id)
    const fooditem = await foodmodel.find({
foodPartner:id})
    if(!partner){
        res.status(404).json({message:"Partner not found"})
    }
        res.status(200).json({
        message:"foodpartner is here 2no",
        partner,fooditem
    })
}
export default {getFoodPartnerById}