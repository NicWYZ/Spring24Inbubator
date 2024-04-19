import Link from "next/link";

export default function Results({ place }) {
    const status = place.currentOpeningHours ? (place.currentOpeningHours.openNow? "Open" : "Closed") : ""
    
    
    const today = new Date().getDay();
    const adjustedToday = today === 0 ? 6 : today - 1;
    const todayOpeningHours = place.currentOpeningHours ? (place.currentOpeningHours.weekdayDescriptions[adjustedToday]) : "";
    const summary = place.editorialSummary ? place.editorialSummary.text : "";
    const rating = place.rating ? "Rating:" + place.rating : "";

  return (
    <div>
      <div className = "boxes"> 
              <Link href = {place.googleMapsUri}><h2 class="font-bold">{place.displayName.text}</h2></Link>
              <h2>{place.shortFormattedAddress}</h2>
              <h2>{status}</h2>
              <h2>{todayOpeningHours}</h2>
              <h2>{rating}</h2>
              <p class="italic">{summary}</p>
      </div>
    </div>
  );
}  
