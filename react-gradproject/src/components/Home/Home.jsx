import {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import countriesSlice, { callAPI } from './countrySlice';
import { Grid, Card, CardContent, CardMedia, Typography} from '@mui/material';
import ReactPaginate from 'react-paginate';

function Home(){
    const dispatch = useDispatch()
    const flags = useSelector((state) => state.countries.flags)
    
    useEffect(()=>{
        dispatch(callAPI())
    },[dispatch])
    //console.log(data)

    const [pageNumber, setPageNumber] = useState(0);
    const picsPerPage = 12;
    const pagesVisited = pageNumber * picsPerPage;
    const slicedFlags = flags.slice(pagesVisited, pagesVisited + picsPerPage);

    
    const showFlags = slicedFlags.map((flag) => {
        console.log(flag)
        return(
        <>
        <Card sx ={{ 
            margin: "25px",          

        }}>
            <CardMedia
            component="img"
            height="180"
            image={flag.flags.svg}
            alt={flag.altSpellings} 
            />
            <CardContent sx={{
                color:"darkgreen"
            }}>
                <Typography gutterBottom variant="h5" component="div">
                    {flag.altSpellings[1]}
                </Typography>
                <Typography variant="body" component="div">
                    Continent: {flag.continents}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Capital: {flag.capital}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Population: {flag.population}
                </Typography> 
            </CardContent>
        </Card>
      </>)
    });
   

    const pageCount = Math.ceil(flags.length / picsPerPage);
    const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

    return(
        <>

        <h1> Country Flags </h1> <hr />
        <div className="home-container">
            <div className="country-flags"> 
                {showFlags} 
            </div>{" "}
        </div>{" "}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />{" "} 
        </>
    )
}
export default Home
