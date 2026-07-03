const itineraries = {

    "Rajasthan": [
        "Jaipur",
        "Ajmer",
        "Pushkar",
        "Jodhpur",
        "Udaipur",
        "Mount Abu",
        "Chittorgarh",
        "Bikaner",
        "Jaisalmer",
        "Ranthambore"
    ],

    "Goa": [
        "Panaji",
        "Miramar Beach",
        "Dona Paula",
        "Calangute Beach",
        "Baga Beach",
        "Anjuna Beach",
        "Fort Aguada",
        "Vagator Beach",
        "Dudhsagar Falls",
        "Palolem Beach"
    ],

    "Kerala": [
        "Kochi",
        "Munnar",
        "Thekkady",
        "Alleppey",
        "Kumarakom",
        "Kovalam",
        "Varkala",
        "Wayanad",
        "Bekal",
        "Kannur"
    ],

    "Himachal Pradesh": [
        "Shimla",
        "Kufri",
        "Manali",
        "Solang Valley",
        "Kasol",
        "Manikaran",
        "Dharamshala",
        "McLeodganj",
        "Kaza",
        "Spiti Valley"
    ],

    "Jammu & Kashmir": [
        "Srinagar",
        "Gulmarg",
        "Sonmarg",
        "Pahalgam",
        "Doodhpathri",
        "Patnitop",
        "Leh",
        "Nubra Valley",
        "Pangong Lake",
        "Tso Moriri"
    ],

    "Uttarakhand": [
        "Dehradun",
        "Mussoorie",
        "Rishikesh",
        "Haridwar",
        "Nainital",
        "Bhimtal",
        "Kausani",
        "Auli",
        "Kedarnath",
        "Badrinath"
    ],

    "Tamil Nadu": [
        "Chennai",
        "Mahabalipuram",
        "Pondicherry",
        "Kanchipuram",
        "Thanjavur",
        "Madurai",
        "Rameswaram",
        "Kodaikanal",
        "Ooty",
        "Coimbatore"
    ],

    "Karnataka": [
        "Bengaluru",
        "Mysuru",
        "Bandipur",
        "Coorg",
        "Chikmagalur",
        "Hampi",
        "Badami",
        "Gokarna",
        "Udupi",
        "Mangaluru"
    ],

    "Maharashtra": [
        "Mumbai",
        "Lonavala",
        "Khandala",
        "Pune",
        "Mahabaleshwar",
        "Nashik",
        "Aurangabad",
        "Ajanta Caves",
        "Ellora Caves",
        "Shirdi"
    ],

    "West Bengal": [
        "Kolkata",
        "Howrah",
        "Shantiniketan",
        "Murshidabad",
        "Digha",
        "Darjeeling",
        "Kalimpong",
        "Mirik",
        "Dooars",
        "Sundarbans"
    ]
};

const button = document.querySelector("button");

button.addEventListener("click", function () {

    const state = document.getElementById("state").value;
    const days = Number(document.querySelector("input").value);

    const result = document.getElementById("result");

    if(state === "" || days <= 0){
        result.innerHTML = "<h3>Please select a state and enter valid days.</h3>";
        return;
    }

    const places = itineraries[state];

    let html = `
        <h2>${state} Itinerary</h2>
    `;

    const totalDays = Math.min(days, places.length);

    for(let i = 0; i < totalDays; i++){
        html += `<p><strong>Day ${i+1}:</strong> ${places[i]}</p>`;
    }

    if(days > places.length){
    html += `
    <div class="extra-note">
        <h3>Extra Travel Time Available</h3>

        <p>
            Your trip duration is longer than the suggested itinerary.
            Consider spending more time at each destination, exploring
            nearby attractions, shopping, local food experiences, or
            extending your journey to neighboring states.
        </p>
    </div>
    `;
}

    result.innerHTML = html;
});