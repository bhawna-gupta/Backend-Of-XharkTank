// //All Pitches Queries
const AddPitchQuery = `INSERT INTO pitches(entrepreneur,"pitchTitle","pitchIdea","askAmount",equity) VALUES($1, $2, $3, $4,$5) returning *`;
const AddOfferQuery = `INSERT INTO offers(id,investor,amount,equity,comment) VALUES($1, $2, $3, $4,$5) returning *`
const findPitchQuery= `SELECT * FROM pitches WHERE id=$1`;
const getAllPitchesQuery =`SELECT * From pitches order by id desc`;
const getAllOffersQuery =`SELECT * From offers WHERE id=$1`;
const fetchPitchQuery= `SELECT * From pitches WHERE id=$1`;

 module.exports={
AddPitchQuery,
AddOfferQuery,
findPitchQuery,
getAllPitchesQuery,
getAllOffersQuery,
fetchPitchQuery
}