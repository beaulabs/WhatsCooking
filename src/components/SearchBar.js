import React, { useState, useEffect, useRef } from 'react';
import AutoSuggestions from './AutoSuggestions';
  

const SearchBar = ({searchTerm, setSearchTerm, setSubmitted, setValid, pathOptions, showSuggestions, setShowSuggestions}) => {

    const initial = useRef(true);
    const [suggestions, setSuggestions] = useState([]);

    console.log("SEARCHTERM: " + searchTerm);

    const Suggestions_AC_Endpoint =
        "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whatscooking-hcogd/service/cookingPost/incoming_webhook/restaurants_autocomplete";
        
    // this is a function definition that calls another function API.fetchContent()
    const fetchAC_Content = async (searchTerm) =>{
        let endpoint = Suggestions_AC_Endpoint;
        if (searchTerm && pathOptions.includes('name')){
            endpoint = endpoint +`?restname=${searchTerm}`;
        }
        try {
                
            let restaurants = await (await fetch(endpoint)).json();
            setSuggestions(restaurants);
            
        } catch (error){
            console.error(error);
        }   
    };

    useEffect(()=>{
        if ( initial.current){
            initial.current=false;
            return;
        }
       
// BUILD OUT AUTOCOMPLETE TERMS
        if (searchTerm!==''&& pathOptions.includes('name')){
                fetchAC_Content(searchTerm);
                console.log("FETCHING AC CONTENT");
                if (suggestions.length !== 0){
                    setShowSuggestions(true);
                    return;
                }
                setShowSuggestions(false);     
        }
        return;

    }, [searchTerm]);

    return (
    <div className="relative flex flex-col w-2/3">
        <div className="flex w-2/3 px-3 py-2 mx-auto my-4 text-2xl text-black duration-700 ease-in-out transform bg-white border rounded-full border-san-juan-300 hover:border-san-juan-700 transition-width hover:shadow-xl hover:w-full active:w-full focus:w-full">
            <div className="my-auto text-6xl">🥄</div>
            <input
                type='text'
                placeholder="Search restaurants..."
                autoComplete="off"
                onChange={event => {
                    setSearchTerm(event.target.value)
                }}
                value={searchTerm}
                className="flex-grow w-full px-5 bg-transparent outline-none font-body"
            />
        </div>
        { showSuggestions && 
            <div className="absolute z-10 w-auto bg-white rounded shadow-2xl left-20 text-san-juan-700 top-24 font-body">
                <AutoSuggestions 
                    items={suggestions}
                    showSuggestions={showSuggestions}
                    setSuggestions={setSuggestions}
                    setSearchTerm={setSearchTerm}
                    setSubmitted={setSubmitted}
                    setValid={setValid}
                />
            </div>
        }    
        
       
    </div>
    )
}

export default SearchBar;

