import { NextResponse } from "next/server";

export async function POST( ){
    try{
        const response = await fetch('https://places.googleapis.com/v1/places:searchNearby', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': process.env.GOOGLE_API_KEY,
            'X-Goog-FieldMask': 'places.displayName',
        },
        body: JSON.stringify({
            "includedTypes": ["restaurant"],
            "maxResultCount": 10,
            "languageCode": "en",
            "locationRestriction": {
                "circle": {
                    "center": {
                        "latitude": 35.9049,
                        "longitude":  -79.0469},
                    "radius": 500.0
                }
            }
        })
    })
    const data = await response.json();

    return NextResponse.json(data);
    }
    catch(error){
        return NextResponse.error(500, "Internal Server Error")
    }

    
}