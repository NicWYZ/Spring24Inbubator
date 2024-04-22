import { NextResponse } from "next/server";

export async function POST( ){
    try{
        const response = await fetch('https://places.googleapis.com/v1/places:searchNearby', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': process.env.GOOGLE_API_KEY,
            'X-Goog-FieldMask': 'places.displayName,places.googleMapsUri',
        },
        body: JSON.stringify({
            "includedTypes": ["bus_stop"],
            "rankPreference": "DISTANCE",
            "maxResultCount": 20,
            "languageCode": "en",
            "locationRestriction": {
                "circle": {
                    "center": {
                        "latitude": 35.9121,
                        "longitude":  -79.0512},
                    "radius": 3000.0
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