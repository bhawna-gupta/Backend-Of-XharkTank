const  pool = require('../db/pool.js');

let{
  empty
} = require( '../helpers/validations');

let {
  status,
} =require( '../helpers/status');
let {AddPitchQuery,AddOfferQuery,findPitchQuery,getAllPitchesQuery,getAllOffersQuery,fetchPitchQuery} = require('../db/query.js');


//Add a Pitch
const AddPitch = async (req, res) => {
  const {entrepreneur,pitchTitle,pitchIdea,askAmount,equity}= req.body;

  if (empty(entrepreneur) || empty(pitchTitle) || empty(pitchIdea) || empty(askAmount)||empty(equity) || equity>100) {
    return res.sendStatus(status.bad);
  }
  const values = [
    entrepreneur,pitchTitle,pitchIdea,askAmount,equity
  ];
  try 
  {
       const {rows} = await pool.query(AddPitchQuery,values); 
       const dbResponse = rows;
       dbResponse[0].id=dbResponse[0].id.toString();
       return res.status(status.created).json({"id":dbResponse[0].id});
   } 
  catch (error) 
  {
      return ;
  }
};

//Get All Pitches
const getAllPitches = async (req, res) => {
    try {
      const  {rows} = await pool.query(getAllPitchesQuery);
      const dbResponse = rows;
      for(let i=0;i<dbResponse.length;i++)
      {
            offerResponse=await pool.query(getAllOffersQuery,[dbResponse[i].id]);
            dbResponse[i].id=dbResponse[i].id.toString();
            dbResponse[i].offers=offerResponse.rows;
            for(let j=0;j<dbResponse[i].offers.length;j++)
            {
              dbResponse[i].offers[j].id = dbResponse[i].offers[j].id.toString();
            }
      }
      return res.status(status.success).send(dbResponse);
    } catch (error) {
      return;
    }
};

//Make a counter offer for a pitch
 const makeCounterOffer = async (req, res) => {
  const {pitch_id}=req.params;
  const {investor,amount,equity,comment}=req.body;
  if (empty(investor) || empty(amount) || empty(equity) || empty(comment) || equity>100) {
    return res.sendStatus(status.bad);
  }
  const values = [
    pitch_id,investor,amount,equity,comment
  ];
     
  try {
      
    const { rows } = await pool.query(findPitchQuery, [pitch_id]);
    const dbResponse = rows.length;
    
    if (dbResponse==0) {
      return res.sendStatus(status.notfound);
    }
        databaseResponse = await pool.query(AddOfferQuery,values); 
        databaseResponse =databaseResponse.rows;
        databaseResponse[0].id=databaseResponse[0].id.toString();
       return res.status(status.created).json({"id":databaseResponse[0].id});
      } 
      catch (error) {
        return ;
      }
};

//Fetch a Single Pitch
const fetchPitch = async (req,res) => {
  const {pitch_id} = req.params;
  try
  {
    const  {rows} = await pool.query(fetchPitchQuery,[pitch_id]);
    const dbResponse = rows.length;
    if (dbResponse==0) {
      return res.sendStatus(status.notfound);
    }
    const databaseResponse=rows[0];
    offerResponse=await pool.query(getAllOffersQuery,[databaseResponse.id]);
    databaseResponse.id = databaseResponse.id.toString();
    databaseResponse.offers=offerResponse.rows;
    for(let i=0;i<databaseResponse.offers.length;i++)
    {
      databaseResponse.offers[i].id = databaseResponse.offers[i].id.toString();
    }
    return res.status(status.success).send(databaseResponse);
  }
 
 catch (error) {
  return ;
 }
};

module.exports ={
  AddPitch,
  makeCounterOffer,
  getAllPitches,
  fetchPitch
}