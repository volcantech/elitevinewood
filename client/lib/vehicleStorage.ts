import { Vehicle, VehicleCategory } from "@/data/vehicles";

const STORAGE_KEY = "elite_vehicles";

// Initialize with default vehicles
const defaultVehicles: Vehicle[] = [
    {
        "name": "Asbo",
        "category": "Compacts",
        "price": 25000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-maxwell-asbo-491012.jpg",
        "id": "1",
        "seats": 2
    },
    {
        "name": "Blista",
        "category": "Compacts",
        "price": 25000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-dinka-blista-gtao-013964.jpg",
        "id": "2",
        "seats": 2
    },
    {
        "name": "Blista Kanjo",
        "category": "Compacts",
        "price": 150000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-BlistaKanjo-752752.jpg",
        "id": "3",
        "seats": 2
    },
    {
        "name": "Brioso R/A",
        "category": "Compacts",
        "price": 160000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-BriosoRA-932429.jpg",
        "id": "4",
        "seats": 2
    },
    {
        "name": "Brioso 300",
        "category": "Compacts",
        "price": 170000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-grotti-brioso-300-gtao-458990.jpeg",
        "id": "5",
        "seats": 2
    },
    {
        "name": "Club",
        "category": "Compacts",
        "price": 100000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-bf-club-gtao-849713.jpg",
        "id": "6",
        "seats": 2
    },
    {
        "name": "Dilettante",
        "category": "Compacts",
        "price": 80000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-Dilettante-426229.jpg",
        "id": "7",
        "seats": 4
    },
    {
        "name": "Issi",
        "category": "Compacts",
        "price": 100000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-weeny-issi-gtao-822809.jpg",
        "id": "8",
        "seats": 2
    },
    {
        "name": "Brioso 300 large",
        "category": "Compacts",
        "price": 200000,
        "trunkWeight": 100,
        "image": "https://static.wikia.nocookie.net/gtawiki/images/4/4c/Brioso300Widebody-GTAOe-front.png",
        "id": "9",
        "seats": 2
    },
    {
        "name": "Issi Classique",
        "category": "Compacts",
        "price": 150000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-weeny-issi-classic-gtao-822735.jpg",
        "id": "10",
        "seats": 2
    },
    {
        "name": "Panto",
        "category": "Compacts",
        "price": 45000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-Panto-954733.jpg",
        "id": "11",
        "seats": 2
    },
    {
        "name": "Prairie",
        "category": "Compacts",
        "price": 125000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-bollokan-prairie-035248.jpg",
        "id": "12",
        "seats": 2
    },
    {
        "name": "Rhapsody",
        "category": "Compacts",
        "price": 125000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-declasse-rhapsody-318054.jpg",
        "id": "13",
        "seats": 2
    },
    {
        "name": "Weevil",
        "category": "Compacts",
        "price": 90000,
        "trunkWeight": 100,
        "image": "https://static.wikia.nocookie.net/gtawiki/images/3/3d/Weevil-GTAO-front.png",
        "id": "14",
        "seats": 2
    },
    {
        "name": "Oracle XS",
        "category": "Coupes",
        "price": 325000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-ubermacht-oracle-xs-948812.jpg",
        "id": "15",
        "seats": 4
    },
    {
        "name": "Fathom FR36",
        "category": "Coupes",
        "price": 1600000,
        "trunkWeight": 100,
        "image": "https://static.wikia.nocookie.net/gtawiki/images/8/8f/FR36-GTAOe-front.png",
        "id": "16",
        "seats": 2
    },
    {
        "name": "Zion Cabrio",
        "category": "Coupes",
        "price": 375000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-ubermacht-zion-cabrio-951445.jpg",
        "id": "17",
        "seats": 2
    },
    {
        "name": "Zion",
        "category": "Coupes",
        "price": 350000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-ubermacht-zion-951191.jpg",
        "id": "18",
        "seats": 2
    },
    {
        "name": "Windsor Drop",
        "category": "Coupes",
        "price": 1100000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-WindsorDrop-770969.jpg",
        "id": "19",
        "seats": 4
    },
    {
        "name": "Windsor",
        "category": "Coupes",
        "price": 975000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-enus-windsor-238535.jpg",
        "id": "20",
        "seats": 2
    },
    {
        "name": "Sentinel",
        "category": "Coupes",
        "price": 350000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-ubermacht-sentinel-950388.jpg",
        "id": "21",
        "seats": 2
    },
    {
        "name": "Sentinel XS",
        "category": "Coupes",
        "price": 375000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-ubermacht-sentinel-xs-950602.jpg",
        "id": "22",
        "seats": 2
    },
    {
        "name": "Previon",
        "category": "Coupes",
        "price": 200000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-karin-previon-gtao-217121.jpg",
        "id": "23",
        "seats": 2
    },
    {
        "name": "Oracle",
        "category": "Coupes",
        "price": 300000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-ubermacht-oracle-948577.jpg",
        "id": "24",
        "seats": 4
    },
    {
        "name": "Jackal",
        "category": "Coupes",
        "price": 375000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-ocelot-jackal-gtao-685867.jpg",
        "id": "25",
        "seats": 4
    },
    {
        "name": "Felon GT",
        "category": "Coupes",
        "price": 400000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-lampadati-felon-gt-323769.jpg",
        "id": "26",
        "seats": 2
    },
    {
        "name": "Felon",
        "category": "Coupes",
        "price": 350000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-lampadati-felon-323635.jpg",
        "id": "27",
        "seats": 4
    },
    {
        "name": "F620",
        "category": "Coupes",
        "price": 400000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-ocelot-f620-gtao-685716.jpg",
        "id": "28",
        "seats": 2
    },
    {
        "name": "Exemplar",
        "category": "Coupes",
        "price": 450000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-dewbauchee-exemplar-376853.jpg",
        "id": "29",
        "seats": 4
    },
    {
        "name": "Cognoscenti Cabrio",
        "category": "Coupes",
        "price": 525000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-CognoscentiCabrio-769855.jpg",
        "id": "30",
        "seats": 2
    },
    {
        "name": "Asea",
        "category": "Sedans",
        "price": 150000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-declasse-asea-303854.jpg",
        "id": "31",
        "seats": 4
    },
    {
        "name": "Asterope",
        "category": "Sedans",
        "price": 175000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/small/gta-mag-Asterope-750124.jpg",
        "id": "32",
        "seats": 4
    },
    {
        "name": "Cognoscenti",
        "category": "Sedans",
        "price": 650000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-Cognoscenti-768832.jpg",
        "id": "33",
        "seats": 4
    },
    {
        "name": "Cognoscenti 55",
        "category": "Sedans",
        "price": 675000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-Cognoscenti55-769202.jpg",
        "id": "34",
        "seats": 4
    },
    {
        "name": "Emperor",
        "category": "Sedans",
        "price": 150000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-albany-emperor-gtao-643682.jpg",
        "id": "35",
        "seats": 4
    },
    {
        "name": "Fugitive",
        "category": "Sedans",
        "price": 325000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-Fugitive-925015.jpg",
        "id": "36",
        "seats": 4
    },
    {
        "name": "Glendale",
        "category": "Sedans",
        "price": 300000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-benefactor-glendale-gtao-229315.jpg",
        "id": "37",
        "seats": 4
    },
    {
        "name": "Glendale Custom",
        "category": "Sedans",
        "price": 350000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-benefactor-glendale-custom-gtao-225470.jpg",
        "id": "38",
        "seats": 4
    },
    {
        "name": "Ingot",
        "category": "Sedans",
        "price": 150000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-vulcar-ingot-gtao-822948.jpg",
        "id": "39",
        "seats": 4
    },
    {
        "name": "Intruder",
        "category": "Sedans",
        "price": 150000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-karin-intruder-gtao-218360.jpg",
        "id": "40",
        "seats": 4
    },
    {
        "name": "Premier",
        "category": "Sedans",
        "price": 175000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-declasse-premier-317633.jpg",
        "id": "41",
        "seats": 4
    },
    {
        "name": "Primo",
        "category": "Sedans",
        "price": 250000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-albany-primo-956164.jpg",
        "id": "42",
        "seats": 4
    },
    {
        "name": "Primo Custom",
        "category": "Sedans",
        "price": 325000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-albany-primo-custom-956432.jpg",
        "id": "43",
        "seats": 4
    },
    {
        "name": "Regina",
        "category": "Sedans",
        "price": 200000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-dundreary-regina2-960219.jpg",
        "id": "44",
        "seats": 4
    },
    {
        "name": "Corbillard Romero",
        "category": "Sedans",
        "price": 325000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-albany-romero-hearse2-956718.jpg",
        "id": "45",
        "seats": 2
    },
    {
        "name": "Schafter",
        "category": "Sedans",
        "price": 225000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-Schafter-949865.jpg",
        "id": "46",
        "seats": 4
    },
    {
        "name": "Stafford",
        "category": "Sedans",
        "price": 300000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-Stafford-770384.jpg",
        "id": "47",
        "seats": 4
    },
    {
        "name": "Stanier",
        "category": "Sedans",
        "price": 250000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-vapid-stanier-gtao-682854.jpg",
        "id": "48",
        "seats": 4
    },
    {
        "name": "Stratum",
        "category": "Sedans",
        "price": 250000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-zirconium-stratum-gtao-822659.jpg",
        "id": "49",
        "seats": 4
    },
    {
        "name": "Stretch",
        "category": "Sedans",
        "price": 10000000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-dundreary-stretch2-958969.jpg",
        "id": "50",
        "seats": 6
    },
    {
        "name": "Super Diamond",
        "category": "Sedans",
        "price": 800000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-SuperDiamond-770587.jpg",
        "id": "51",
        "seats": 4
    },
    {
        "name": "Surge",
        "category": "Sedans",
        "price": 125000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-Surge-935387.jpg",
        "id": "52",
        "seats": 4
    },
    {
        "name": "Tailgater",
        "category": "Sedans",
        "price": 325000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-obey-tailgater-868807.jpg",
        "id": "53",
        "seats": 4
    },
    {
        "name": "Tailgater S",
        "category": "Sedans",
        "price": 650000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-obey-tailgater-s2-gtao-795607.jpg",
        "id": "54",
        "seats": 4
    },
    {
        "name": "Warrener",
        "category": "Sedans",
        "price": 425000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-vulcar-warrener-gtao-822876.jpg",
        "id": "55",
        "seats": 4
    },
    {
        "name": "Warrener HKR",
        "category": "Sedans",
        "price": 500000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-vulcar-warrener-hkr-gtao-628639.jpg",
        "id": "56",
        "seats": 2
    },
    {
        "name": "Washington",
        "category": "Sedans",
        "price": 325000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-albany-washington-959786.jpg",
        "id": "57",
        "seats": 4
    },
    {
        "name": "Rhinehart",
        "category": "Sedans",
        "price": 750000,
        "trunkWeight": 100,
        "image": "https://static.wikia.nocookie.net/gtawiki/images/e/e1/Rhinehart-GTAOe-front.png",
        "id": "58",
        "seats": 4
    },
    {
        "name": "Scharmann",
        "category": "Sedans",
        "price": 750000,
        "trunkWeight": 100,
        "image": "https://i.imgur.com/n9UAB7K.png",
        "id": "59",
        "seats": 4
    },
    {
        "name": "Asterope GZ",
        "category": "Sedans",
        "price": 450000,
        "trunkWeight": 100,
        "image": "https://static.wikia.nocookie.net/gtawiki/images/7/71/AsteropeGZ-GTAOe-front.png",
        "id": "60",
        "seats": 4
    },
    {
        "name": "Deity",
        "category": "Sedans",
        "price": 450000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-enus-deity2-gtao-487068.jpg",
        "id": "61",
        "seats": 4
    },
    {
        "name": "Baller",
        "category": "SUVs",
        "price": 700000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-gallivanter-baller-385661.jpg",
        "id": "62",
        "seats": 4
    },
    {
        "name": "Baller II",
        "category": "SUVs",
        "price": 700000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-gallivanter-baller-ii-386748.jpg",
        "id": "63",
        "seats": 4
    },
    {
        "name": "Baller LE",
        "category": "SUVs",
        "price": 750000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-gallivanter-baller-le-386146.jpg",
        "id": "64",
        "seats": 4
    },
    {
        "name": "Baller LE LWB",
        "category": "SUVs",
        "price": 800000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-gallivanter-baller-le-lwb-386544.jpg",
        "id": "65",
        "seats": 4
    },
    {
        "name": "BeeJay XL",
        "category": "SUVs",
        "price": 600000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-BeeJayXL-764076.jpg",
        "id": "66",
        "seats": 4
    },
    {
        "name": "Cavalcade",
        "category": "SUVs",
        "price": 700000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-albany-cavalcade-954284.jpg",
        "id": "67",
        "seats": 4
    },
    {
        "name": "Cavalcade II",
        "category": "SUVs",
        "price": 750000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-albany-cavalcade-ii2-954505.jpg",
        "id": "68",
        "seats": 4
    },
    {
        "name": "Contender",
        "category": "SUVs",
        "price": 1500000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-vapid-contender-238739.jpg",
        "id": "69",
        "seats": 4
    },
    {
        "name": "Dubsta",
        "category": "SUVs",
        "price": 1200000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-Dubsta-953877.jpg",
        "id": "70",
        "seats": 4
    },
    {
        "name": "Dubsta II",
        "category": "SUVs",
        "price": 1300000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-benefactor-dubsta-ii2-gtao-920111.jpg",
        "id": "71",
        "seats": 4
    },
    {
        "name": "Fathom FQ 2",
        "category": "SUVs",
        "price": 500000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-fathom-fq-2-236776.jpg",
        "id": "72",
        "seats": 4
    },
    {
        "name": "Granger",
        "category": "SUVs",
        "price": 1000000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-declasse-granger2-307525.jpg",
        "id": "73",
        "seats": 8
    },
    {
        "name": "Gresley",
        "category": "SUVs",
        "price": 650000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-bravado-gresley-gtao-001166.jpg",
        "id": "74",
        "seats": 4
    },
    {
        "name": "Habanero",
        "category": "SUVs",
        "price": 450000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-emperor-habanero-038530.jpg",
        "id": "75",
        "seats": 4
    },
    {
        "name": "Huntley S",
        "category": "SUVs",
        "price": 800000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-HuntleyS-770036.jpg",
        "id": "76",
        "seats": 4
    },
    {
        "name": "Landstalker",
        "category": "SUVs",
        "price": 700000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-dundreary-landstalker-960043.jpg",
        "id": "77",
        "seats": 4
    },
    {
        "name": "Landstalker XL",
        "category": "SUVs",
        "price": 750000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-dundreary-landstalker-xl-gtao-225749.jpg",
        "id": "78",
        "seats": 4
    },
    {
        "name": "Mesa",
        "category": "SUVs",
        "price": 500000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-canis-mesa-374212.jpg",
        "id": "79",
        "seats": 4
    },
    {
        "name": "Novak",
        "category": "SUVs",
        "price": 1200000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-lampadati-novak-324467.jpg",
        "id": "80",
        "seats": 4
    },
    {
        "name": "Patriot",
        "category": "SUVs",
        "price": 900000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-mammoth-patriot-407039.jpg",
        "id": "81",
        "seats": 4
    },
    {
        "name": "Patriot Stretch",
        "category": "SUVs",
        "price": 5000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/1aa865546750beae37c47a63affeec1d",
        "id": "82",
        "seats": 6
    },
    {
        "name": "Radius",
        "category": "SUVs",
        "price": 500000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-vapid-radius-478740.jpg",
        "id": "83",
        "seats": 4
    },
    {
        "name": "Rebla GTS",
        "category": "SUVs",
        "price": 1400000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-ubermacht-rebla-gts2-949397.jpg",
        "id": "84",
        "seats": 4
    },
    {
        "name": "Rocoto",
        "category": "SUVs",
        "price": 750000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-obey-rocoto-868548.jpg",
        "id": "85",
        "seats": 4
    },
    {
        "name": "Seminole",
        "category": "SUVs",
        "price": 600000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-canis-seminole-374339.jpg",
        "id": "86",
        "seats": 4
    },
    {
        "name": "Seminole Frontier",
        "category": "SUVs",
        "price": 800000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-canis-seminole-frontier-gtao-227070.jpg",
        "id": "87",
        "seats": 4
    },
    {
        "name": "Serrano",
        "category": "SUVs",
        "price": 750000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-benefactor-serrano-gtao-643645.jpg",
        "id": "88",
        "seats": 4
    },
    {
        "name": "Toros",
        "category": "SUVs",
        "price": 1700000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-Toros-461333.jpg",
        "id": "89",
        "seats": 4
    },
    {
        "name": "Astron",
        "category": "SUVs",
        "price": 1600000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-pfister-astron2-gtao-486216.jpg",
        "id": "90",
        "seats": 4
    },
    {
        "name": "XLS",
        "category": "SUVs",
        "price": 1200000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-XLS-957036.jpg",
        "id": "91",
        "seats": 4
    },
    {
        "name": "I-Wagen",
        "category": "SUVs",
        "price": 1300000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-obey-iwagen-gtao-693370.jpg",
        "id": "92",
        "seats": 4
    },
    {
        "name": "Baller ST",
        "category": "SUVs",
        "price": 1700000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/136b1591019513983e514c99c3c1527c",
        "id": "93",
        "seats": 4
    },
    {
        "name": "Granger 3600LX",
        "category": "SUVs",
        "price": 1200000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-declasse-granger-3600lx-gtao-301770.jpg",
        "id": "94",
        "seats": 8
    },
    {
        "name": "Issi Rallye",
        "category": "SUVs",
        "price": 1300000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/5d19681e65cd59fdb880db5695023310",
        "id": "95",
        "seats": 4
    },
    {
        "name": "Jubilee",
        "category": "SUVs",
        "price": 1300000,
        "trunkWeight": 100,
        "image": "https://gtamag.com/images/photo/gta-mag-enus-jubilee2-gtao-487444.jpg",
        "id": "96",
        "seats": 4
    },
    {
        "name": "Aleutian",
        "category": "SUVs",
        "price": 1800000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/81d2ea5ec2884f957d3f9112ad6bfa4a",
        "id": "97",
        "seats": 4
    },
    {
        "name": "Cavalcade XL",
        "category": "SUVs",
        "price": 1600000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/c69269f1585872b2530c8eb1a7b4ee22",
        "id": "98",
        "seats": 4
    },
    {
        "name": "Dorado",
        "category": "SUVs",
        "price": 700000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/dba533a6e2fb26e60d7031b694eef5bb",
        "id": "99",
        "seats": 4
    },
    {
        "name": "Vivanite",
        "category": "SUVs",
        "price": 900000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/9ba972f695c60901f4fd82a2c4225daa",
        "id": "100",
        "seats": 4
    },
    {
        "name": "Baller ST-D",
        "category": "SUVs",
        "price": 900000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/f5bc006d1a0147ebff8fa587b7a705ad",
        "id": "101",
        "seats": 4
    },
    {
        "name": "Alpha",
        "category": "Sports",
        "price": 750000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/62681ede25ee721be4b9c46275522ae8",
        "id": "102",
        "seats": 2
    },
    {
        "name": "Banshee",
        "category": "Sports",
        "price": 825000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/b1e75246a5c90766c266cbd00fe7b651",
        "id": "103",
        "seats": 2
    },
    {
        "name": "Bestia GTS",
        "category": "Sports",
        "price": 900000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/62d53d00a10958e05016ff1f9ce9eef6",
        "id": "104",
        "seats": 2
    },
    {
        "name": "Blista Compact",
        "category": "Sports",
        "price": 350000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/0878123b7e4b738095544d2ada436f5b",
        "id": "105",
        "seats": 2
    },
    {
        "name": "Buffalo",
        "category": "Sports",
        "price": 450000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/645819058f3bc44c42224cdc675ca178",
        "id": "106",
        "seats": 4
    },
    {
        "name": "Buffalo S",
        "category": "Sports",
        "price": 500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/572fde59aab87e66ae36fd92a3e5cb9a",
        "id": "107",
        "seats": 4
    },
    {
        "name": "Calico GTF",
        "category": "Sports",
        "price": 650000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/0aafb25d151cb3a76fbbccc259b81be1",
        "id": "108",
        "seats": 2
    },
    {
        "name": "Carbonizzare",
        "category": "Sports",
        "price": 950000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/81911488704264e57446a88f9bd5854d",
        "id": "109",
        "seats": 2
    },
    {
        "name": "Comet",
        "category": "Sports",
        "price": 850000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/344d2921d59ac99df594e720bb946a37",
        "id": "110",
        "seats": 2
    },
    {
        "name": "Comet Rétro Custom",
        "category": "Sports",
        "price": 900000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/ddeb20a2b62fd2d2d7e45805a6aa6375",
        "id": "111",
        "seats": 2
    },
    {
        "name": "Comet S2",
        "category": "Sports",
        "price": 1200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/0f83212470f25aae97a236f2161cfd03",
        "id": "112",
        "seats": 2
    },
    {
        "name": "Comet SR",
        "category": "Sports",
        "price": 1000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/f20a7fe3c03e55aa6ac04c0db2a1fc90",
        "id": "113",
        "seats": 2
    },
    {
        "name": "Coquette",
        "category": "Sports",
        "price": 1000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/24b8bdaf1db2cf3d88fbacf163dbfd3e",
        "id": "114",
        "seats": 2
    },
    {
        "name": "Coquette D10",
        "category": "Sports",
        "price": 1400000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/4ef2f283a9428d1f3641e76c0307a043",
        "id": "115",
        "seats": 2
    },
    {
        "name": "Cypher",
        "category": "Sports",
        "price": 1100000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/e994d2238d5211a4f8cf5f2e5ff686b8",
        "id": "116",
        "seats": 2
    },
    {
        "name": "Tampa Drift",
        "category": "Sports",
        "price": 750000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/85e7b7cc046f87b74f9ce81c1a881ca9",
        "id": "117",
        "seats": 2
    },
    {
        "name": "Elegy RH8",
        "category": "Sports",
        "price": 1100000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/306c15592e7dfd0d9ce73f85d0cd432a",
        "id": "118",
        "seats": 2
    },
    {
        "name": "Elegy Rétro Custom",
        "category": "Sports",
        "price": 1200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/ecac7651b94091e083e5068e03264843",
        "id": "119",
        "seats": 2
    },
    {
        "name": "Euros",
        "category": "Sports",
        "price": 950000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/71705592df5c0d18855809f0d074ab7c",
        "id": "120",
        "seats": 2
    },
    {
        "name": "Feltzer",
        "category": "Sports",
        "price": 1100000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/f758e8ef10273636c830d7aed8305333",
        "id": "121",
        "seats": 2
    },
    {
        "name": "Flash GT",
        "category": "Sports",
        "price": 650000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/db47f6a8d9d26d951f361cbaa2536d56",
        "id": "122",
        "seats": 2
    },
    {
        "name": "Furore GT",
        "category": "Sports",
        "price": 1100000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/42775b3635375597405696ff660951bb",
        "id": "123",
        "seats": 2
    },
    {
        "name": "Fusilade",
        "category": "Sports",
        "price": 700000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/5881299dbb093221d05c7e586299947a",
        "id": "124",
        "seats": 2
    },
    {
        "name": "Futo GTX",
        "category": "Sports",
        "price": 550000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/7f1f6dd2259bfeac5f5b85c6ec008d01",
        "id": "125",
        "seats": 2
    },
    {
        "name": "Futo",
        "category": "Sports",
        "price": 500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/8f09ecdb4bf6c5c1a64e10a8d9c92456",
        "id": "126",
        "seats": 2
    },
    {
        "name": "GB200",
        "category": "Sports",
        "price": 800000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/aa94af09150a58daf5d486fb7bc6030c",
        "id": "127",
        "seats": 2
    },
    {
        "name": "Growler",
        "category": "Sports",
        "price": 1100000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/6b06c411ec28d9fa5840a7a49c32e36e",
        "id": "128",
        "seats": 2
    },
    {
        "name": "Hotring Sabre",
        "category": "Sports",
        "price": 700000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/8f0b5732a807bee74acb0659aace27d1",
        "id": "129",
        "seats": 2
    },
    {
        "name": "Imorgon",
        "category": "Sports",
        "price": 2500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/897345b381283ea77e5831577c8a5d0b",
        "id": "130",
        "seats": 2
    },
    {
        "name": "Itali GTO",
        "category": "Sports",
        "price": 2000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/ba7acf6b4aff2f62b02f9234810713df",
        "id": "131",
        "seats": 2
    },
    {
        "name": "Itali RSX",
        "category": "Sports",
        "price": 2200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/74042388552efb0b3b4b483fccfbdba9",
        "id": "132",
        "seats": 2
    },
    {
        "name": "Issi Sport",
        "category": "Sports",
        "price": 750000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/155be5e958df8d5fa0161ab9b9561d74",
        "id": "133",
        "seats": 2
    },
    {
        "name": "Jester",
        "category": "Sports",
        "price": 850000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/5fff3c45323e5357d1728980c1033773",
        "id": "134",
        "seats": 2
    },
    {
        "name": "Jester (Course)",
        "category": "Sports",
        "price": 875000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/fa80850ecd0d4900a22407bef85f12a8",
        "id": "135",
        "seats": 2
    },
    {
        "name": "Jester classique",
        "category": "Sports",
        "price": 950000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/89bb6e10a5a66e138037c50580d0caf0",
        "id": "136",
        "seats": 2
    },
    {
        "name": "Jester RR",
        "category": "Sports",
        "price": 1200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/2a31ba13c53320f056948c7c410a3be7",
        "id": "137",
        "seats": 2
    },
    {
        "name": "Jugular",
        "category": "Sports",
        "price": 1400000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/859e4a027f547501947ca247be15223b",
        "id": "138",
        "seats": 4
    },
    {
        "name": "Khamelion",
        "category": "Sports",
        "price": 450000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/7c332ee949c6c2fee818ee10cfb363b1",
        "id": "139",
        "seats": 2
    },
    {
        "name": "Komoda",
        "category": "Sports",
        "price": 1300000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/33e974c2d5d875139150d1f799b9724f",
        "id": "140",
        "seats": 4
    },
    {
        "name": "Kuruma",
        "category": "Sports",
        "price": 900000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/7b322fc26ab87e350fc49b9eac990144",
        "id": "141",
        "seats": 4
    },
    {
        "name": "Locust",
        "category": "Sports",
        "price": 950000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/dbb753fd85f671100a99f1c16650d0a6",
        "id": "142",
        "seats": 2
    },
    {
        "name": "Lynx",
        "category": "Sports",
        "price": 1100000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/ddb7ae52dfc4684c0d6f10ab6f1a03dd",
        "id": "143",
        "seats": 2
    },
    {
        "name": "Massacro",
        "category": "Sports",
        "price": 1600000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/83a71dd9d99877fdf6daf44ee7b96d3b",
        "id": "144",
        "seats": 2
    },
    {
        "name": "Massacro (Course)",
        "category": "Sports",
        "price": 1700000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/d81be492f84f32aa9bff0ebeb325636d",
        "id": "145",
        "seats": 2
    },
    {
        "name": "Neo",
        "category": "Sports",
        "price": 1800000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/16a739088af9da2590cc5dbcc68b38dd",
        "id": "146",
        "seats": 2
    },
    {
        "name": "Neon",
        "category": "Sports",
        "price": 1200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/5ee57ae85a2fccfa3b220993d77d050e",
        "id": "147",
        "seats": 4
    },
    {
        "name": "Omnis",
        "category": "Sports",
        "price": 1000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/978f6a616e9a4aec6af23f88e7c7418f",
        "id": "148",
        "seats": 2
    },
    {
        "name": "Paragon R",
        "category": "Sports",
        "price": 1500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/433322ae88327066b1357575358ff783",
        "id": "149",
        "seats": 2
    },
    {
        "name": "Pariah",
        "category": "Sports",
        "price": 1800000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/b51ca61e8e72af6c0eca7dd5ab175960",
        "id": "150",
        "seats": 2
    },
    {
        "name": "Penumbra",
        "category": "Sports",
        "price": 550000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/a8dd4e8a0ab35cc4cb3aa633af6536c1",
        "id": "151",
        "seats": 2
    },
    {
        "name": "Penumbra FF",
        "category": "Sports",
        "price": 700000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/44d89062eff5535b1269e5ee808f70cd",
        "id": "152",
        "seats": 2
    },
    {
        "name": "Raiden",
        "category": "Sports",
        "price": 1200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/d4f1c5892c55c68d9318259ea83614d8",
        "id": "153",
        "seats": 4
    },
    {
        "name": "Rapid GT",
        "category": "Sports",
        "price": 1400000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/8f6c6cf40ae1de61ea8f10e664ab5ee5",
        "id": "154",
        "seats": 2
    },
    {
        "name": "Rapid GT Cabrio",
        "category": "Sports",
        "price": 1400000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/d459c4f50269417e3fe15b7a0255ef45",
        "id": "155",
        "seats": 2
    },
    {
        "name": "Raptor",
        "category": "Sports",
        "price": 850000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/0390e7ff19424790f42efa5b756ac07d",
        "id": "156",
        "seats": 2
    },
    {
        "name": "Remus",
        "category": "Sports",
        "price": 900000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/8dd636d2d77270e80547a46b206e77e4",
        "id": "157",
        "seats": 2
    },
    {
        "name": "RT3000",
        "category": "Sports",
        "price": 850000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/c9d910fc89907f870d31b8a8b6056ffe",
        "id": "158",
        "seats": 2
    },
    {
        "name": "Ruston",
        "category": "Sports",
        "price": 1100000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/73bcd273c414f901237b2a11ac89ff40",
        "id": "159",
        "seats": 2
    },
    {
        "name": "Schafter LWB",
        "category": "Sports",
        "price": 750000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/3e6aa42c31d31261e08df8d2791a15dd",
        "id": "160",
        "seats": 4
    },
    {
        "name": "Schafter V12",
        "category": "Sports",
        "price": 900000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/7074c7c237de86b41d3d12f5833ba136",
        "id": "161",
        "seats": 4
    },
    {
        "name": "Schlagen GT",
        "category": "Sports",
        "price": 1800000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/0d37801b299c7f11e8e210371c00cd24",
        "id": "162",
        "seats": 2
    },
    {
        "name": "Schwartzer",
        "category": "Sports",
        "price": 700000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/771a571e4e467b9e70dff99d8f7552af",
        "id": "163",
        "seats": 2
    },
    {
        "name": "Sentinel Classique",
        "category": "Sports",
        "price": 950000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/39603b6eb6dfe10663486c2cde6c5fe7",
        "id": "164",
        "seats": 2
    },
    {
        "name": "Seven 70",
        "category": "Sports",
        "price": 1200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/3dd32314a27673d994d2e80dfa73476e",
        "id": "165",
        "seats": 2
    },
    {
        "name": "Specter",
        "category": "Sports",
        "price": 1400000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/6cb860ef20b5a3160ec6cbed8869c5dd",
        "id": "166",
        "seats": 2
    },
    {
        "name": "Specter Custom",
        "category": "Sports",
        "price": 1400000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/40bafc8a2d404e2e6f324cd73b7ce81e",
        "id": "167",
        "seats": 2
    },
    {
        "name": "Streiter",
        "category": "Sports",
        "price": 650000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/d1ca57c7057f1c7937ff31992dad6310",
        "id": "168",
        "seats": 4
    },
    {
        "name": "Sugoi",
        "category": "Sports",
        "price": 850000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/bee2f4a92dd3055e4f31f583e2c51b51",
        "id": "169",
        "seats": 4
    },
    {
        "name": "Sultan",
        "category": "Sports",
        "price": 700000,
        "trunkWeight": 150,
        "image": "https://gtacars.net/images/f0d3d7573097ca3ece6f1ee26b81c71d",
        "id": "170",
        "seats": 4
    },
    {
        "name": "Sultan Classique",
        "category": "Sports",
        "price": 850000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/979b441981dc7a783a766e3bd0cd3075",
        "id": "171",
        "seats": 4
    },
    {
        "name": "Tropos Rallye",
        "category": "Sports",
        "price": 650000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/479009d562ea90391ac44129bc03c96f",
        "id": "172",
        "seats": 2
    },
    {
        "name": "Vectre",
        "category": "Sports",
        "price": 1200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/8490b1ff97977806d8df9fe306db467e",
        "id": "173",
        "seats": 2
    },
    {
        "name": "Veto Classique [Karting]",
        "category": "Sports",
        "price": 900000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/69b5a110de5256fefef24a7c64063cc1",
        "id": "174",
        "seats": 1
    },
    {
        "name": "Veto Moderne [Karting]",
        "category": "Sports",
        "price": 950000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/11efc52bae8531ede391ef307ca8d41c",
        "id": "175",
        "seats": 1
    },
    {
        "name": "Verlierer",
        "category": "Sports",
        "price": 1100000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/b93b626495349f0bcd645b5b6ca1f0a7",
        "id": "176",
        "seats": 2
    },
    {
        "name": "V-STR",
        "category": "Sports",
        "price": 1400000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/6e771e45f10cb45e07d19c090d753ce4",
        "id": "177",
        "seats": 4
    },
    {
        "name": "ZR350",
        "category": "Sports",
        "price": 1100000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/e2746bee728ea389e66dade7b4e9dbe6",
        "id": "178",
        "seats": 2
    },
    {
        "name": "Comet S2 Cabrio",
        "category": "Sports",
        "price": 1500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/fea4da7b31358eeea1b133987ca81765",
        "id": "179",
        "seats": 2
    },
    {
        "name": "300R",
        "category": "Sports",
        "price": 1000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/8f496e077c688299c096e8d9a9359e66",
        "id": "180",
        "seats": 2
    },
    {
        "name": "Corsita",
        "category": "Sports",
        "price": 2200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/1d4ec83f0958af6288ff16197aa627b5",
        "id": "181",
        "seats": 2
    },
    {
        "name": "9F",
        "category": "Sports",
        "price": 2000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/fc00d0c7b1a8eb0f3fd44e8de2d2a009",
        "id": "182",
        "seats": 2
    },
    {
        "name": "9F Cabrio",
        "category": "Sports",
        "price": 2500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/16aeceef84e24582df7e1c3ec6da2830",
        "id": "183",
        "seats": 2
    },
    {
        "name": "Itali GTO Stinger TT",
        "category": "Sports",
        "price": 4000000,
        "trunkWeight": 100,
        "image": "https://static.wikia.nocookie.net/gtawiki/images/d/d3/StingerTT-GTAOe-front.png",
        "id": "184",
        "seats": 2
    },
    {
        "name": "La Coureuse",
        "category": "Sports",
        "price": 1500000,
        "trunkWeight": 100,
        "image": "https://static.wikia.nocookie.net/gtawiki/images/a/a0/LaCoureuse-GTAOee-FrontQuarter.png",
        "id": "185",
        "seats": 2
    },
    {
        "name": "Hotring Hellfire",
        "category": "Sports",
        "price": 800000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/19cf898d4caa13d8eb385f36eea30fd2",
        "id": "186",
        "seats": 2
    },
    {
        "name": "Sultan RS Classique",
        "category": "Sports",
        "price": 900000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/2ed346f4ab3de8093a6f2e5da4d04f4a",
        "id": "187",
        "seats": 2
    },
    {
        "name": "Surano",
        "category": "Sports",
        "price": 950000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/de610e3f62998a12aa48c8fa38250f1e",
        "id": "188",
        "seats": 2
    },
    {
        "name": "8F Drafter",
        "category": "Sports",
        "price": 1500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/601ee8a8f5edfe8deb9fedb8ffef499f",
        "id": "189",
        "seats": 2
    },
    {
        "name": "Comet Safari",
        "category": "Sports",
        "price": 800000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/3327020704521d694ea57d70f35fcb35",
        "id": "190",
        "seats": 2
    },
    {
        "name": "Bison",
        "category": "Vans",
        "price": 600000,
        "trunkWeight": 750,
        "image": "https://gtacars.net/images/05a0dd1613162ba9bad31b3bb5e87d78",
        "id": "191",
        "seats": 6
    },
    {
        "name": "Bobcat XL",
        "category": "Vans",
        "price": 700000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/7d8f2930b52a9b3df8e5f5092b08b3a0",
        "id": "192",
        "seats": 2
    },
    {
        "name": "Burrito",
        "category": "Vans",
        "price": 900000,
        "trunkWeight": 1000,
        "image": "https://gtacars.net/images/fd81bcd18ef175673d9e95374e3f7dc4",
        "id": "193",
        "seats": 4
    },
    {
        "name": "Burrito II (Enneigé)",
        "category": "Vans",
        "price": 1000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/622542c92344e01797acded396a35355",
        "id": "194",
        "seats": 4
    },
    {
        "name": "Camper",
        "category": "Vans",
        "price": 700000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/23827338f2e3d806e3c541593e965a40",
        "id": "195",
        "seats": 2
    },
    {
        "name": "Van de Clown",
        "category": "Vans",
        "price": 900000,
        "trunkWeight": 666,
        "image": "https://gtacars.net/images/ec5f52cf9f1a10bde9e5aa3a4e533570",
        "id": "196",
        "seats": 4
    },
    {
        "name": "Journey",
        "category": "Vans",
        "price": 250000,
        "trunkWeight": 1000,
        "image": "https://gtacars.net/images/acf9760205917e8dc2858669166080c5",
        "id": "197",
        "seats": 6
    },
    {
        "name": "Minivan",
        "category": "Vans",
        "price": 500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/0d2be41d0d54dc45b0eecd40b481534e",
        "id": "198",
        "seats": 4
    },
    {
        "name": "Minivan Custom",
        "category": "Vans",
        "price": 700000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/e6f67bcd7abb4f942dd813a6459e2170",
        "id": "199",
        "seats": 4
    },
    {
        "name": "Paradise",
        "category": "Vans",
        "price": 800000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/89ed2d9fad3f5170d90e999441a8d0e0",
        "id": "200",
        "seats": 4
    },
    {
        "name": "Pony",
        "category": "Vans",
        "price": 750000,
        "trunkWeight": 1000,
        "image": "https://gtacars.net/images/8887515ae8d57f545914d41c4bddb5be",
        "id": "201",
        "seats": 4
    },
    {
        "name": "Rumpo Custom",
        "category": "Vans",
        "price": 1200000,
        "trunkWeight": 1000,
        "image": "https://gtacars.net/images/57ebc3559747d157d4e3dd2270a83b24",
        "id": "202",
        "seats": 4
    },
    {
        "name": "Speedo",
        "category": "Vans",
        "price": 1500000,
        "trunkWeight": 1250,
        "image": "https://gtacars.net/images/28fbf52a43982354e42ddbdff018f704",
        "id": "203",
        "seats": 4
    },
    {
        "name": "Surfer",
        "category": "Vans",
        "price": 600000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/5dcddbef2b1f243fc681dcd2533e03f0",
        "id": "204",
        "seats": 2
    },
    {
        "name": "Surfer II (Sale)",
        "category": "Vans",
        "price": 300000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/7b384480f828ad3a9acb47c52afd24a5",
        "id": "205",
        "seats": 2
    },
    {
        "name": "Youga",
        "category": "Vans",
        "price": 750000,
        "trunkWeight": 1000,
        "image": "https://gtacars.net/images/511ce5be7549d5cbc3ae33c7e702477c",
        "id": "206",
        "seats": 2
    },
    {
        "name": "Youga Classique",
        "category": "Vans",
        "price": 800000,
        "trunkWeight": 1000,
        "image": "https://gtacars.net/images/b8d49d6986fa3c02153ff1185af6fdf0",
        "id": "207",
        "seats": 4
    },
    {
        "name": "Youga Classique 4x4",
        "category": "Vans",
        "price": 1000000,
        "trunkWeight": 1000,
        "image": "https://gtacars.net/images/d673e8737f54ca4c2c30b94a10619a93",
        "id": "208",
        "seats": 4
    },
    {
        "name": "Burrito de Gang II",
        "category": "Vans",
        "price": 750000,
        "trunkWeight": 1000,
        "image": "https://gtacars.net/images/67d0234c8ad16f6845f594bc1c924761",
        "id": "210",
        "seats": 4
    },
    {
        "name": "Burrito de Gang",
        "category": "Vans",
        "price": 800000,
        "trunkWeight": 1000,
        "image": "https://gtacars.net/images/30b96e6bbf8cbb61cf5327ffa00dbd66",
        "id": "211",
        "seats": 4
    },
    {
        "name": "Journey II",
        "category": "Vans",
        "price": 400000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/823c56c6146cbe3a5303e508cf36e451",
        "id": "212",
        "seats": 6
    },
    {
        "name": "Surfer Custom",
        "category": "Vans",
        "price": 350000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/efc35e9d62024f11dfe0faf35cda0d6f",
        "id": "213",
        "seats": 4
    },
    {
        "name": "Akuma",
        "category": "Motos",
        "price": 375000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/39c76d9f98271dc1b45db2facbcfc543",
        "id": "214",
        "seats": 2
    },
    {
        "name": "Avarus",
        "category": "Motos",
        "price": 300000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/82ce2ae3ed51e44507a95f5ac9549bcc",
        "id": "215",
        "seats": 1
    },
    {
        "name": "Bagger",
        "category": "Motos",
        "price": 350000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/f9d21aeb604cf6920b86bbc0c9d5b4a1",
        "id": "216",
        "seats": 2
    },
    {
        "name": "Bati 801",
        "category": "Motos",
        "price": 800000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/4d18e6b30e8ad542c24bd5f6ae60aed9",
        "id": "217",
        "seats": 2
    },
    {
        "name": "Bati 801RR",
        "category": "Motos",
        "price": 850000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/2d719b787719bafd374c5c0092a42b52",
        "id": "218",
        "seats": 2
    },
    {
        "name": "BF400",
        "category": "Motos",
        "price": 450000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/f9d9fd33166da0ea09aded035d0f00df",
        "id": "219",
        "seats": 2
    },
    {
        "name": "Carbon RS",
        "category": "Motos",
        "price": 900000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/dcf9bd7aaab76670935d319b09b0daad",
        "id": "220",
        "seats": 2
    },
    {
        "name": "Chimera",
        "category": "Motos",
        "price": 525000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/4de643f0e6f9014a21c016034dbce4d8",
        "id": "221",
        "seats": 1
    },
    {
        "name": "Cliffhanger",
        "category": "Motos",
        "price": 325000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/9e4b5372d911d4024e1768cc89449699",
        "id": "222",
        "seats": 2
    },
    {
        "name": "Daemon",
        "category": "Motos",
        "price": 400000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/6d88616a80d8f359d4fa92bfbaa14a79",
        "id": "223",
        "seats": 2
    },
    {
        "name": "Daemon II",
        "category": "Motos",
        "price": 425000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/7db85df3a18dde52e8dfc3ca6c4b9829",
        "id": "224",
        "seats": 2
    },
    {
        "name": "BMX",
        "category": "Motos",
        "price": 20000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/4596bd7f7aab3d7e1d537ea929b239e4",
        "id": "225",
        "seats": 1
    },
    {
        "name": "Cruiser",
        "category": "Motos",
        "price": 20000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/9ba8ac906e802139d944306a9b93c9f1",
        "id": "226",
        "seats": 1
    },
    {
        "name": "Fixter",
        "category": "Motos",
        "price": 20000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/d68a6db35a1b6cafd73aa6d16fdf59c6",
        "id": "227",
        "seats": 1
    },
    {
        "name": "Scorcher",
        "category": "Motos",
        "price": 25000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/015ed1fc03952611c4602f3e9370e7b9",
        "id": "228",
        "seats": 1
    },
    {
        "name": "Whippet",
        "category": "Motos",
        "price": 25000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/99265646a1a1a77f003b4824e87e9ddb",
        "id": "229",
        "seats": 1
    },
    {
        "name": "Endurex",
        "category": "Motos",
        "price": 25000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/974e78da5a4d5dfb3769029bc4c6c0d9",
        "id": "230",
        "seats": 1
    },
    {
        "name": "Tri-Cycles",
        "category": "Motos",
        "price": 25000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/581b41af5bda1a54851f6cdd5cf17e1b",
        "id": "231",
        "seats": 1
    },
    {
        "name": "Zombie Bobber",
        "category": "Motos",
        "price": 450000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/646bf4c795541fe30e5deaf74af0ba5e",
        "id": "232",
        "seats": 1
    },
    {
        "name": "Zombie Chopper",
        "category": "Motos",
        "price": 475000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/7c7bc5e1ccad869bfa2cd8c251e62b53",
        "id": "233",
        "seats": 2
    },
    {
        "name": "Defiler",
        "category": "Motos",
        "price": 400000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/ca229f1a1721be755f28be2f94142472",
        "id": "234",
        "seats": 1
    },
    {
        "name": "Diabolus",
        "category": "Motos",
        "price": 250000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/757ad6ec2eb8dc3a46398cc6eb943a09",
        "id": "235",
        "seats": 1
    },
    {
        "name": "Diabolus Custom",
        "category": "Motos",
        "price": 375000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/1688aeb81e99ade197be07139d58e99d",
        "id": "236",
        "seats": 1
    },
    {
        "name": "Double-T",
        "category": "Motos",
        "price": 825000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/389fcc1d7919c02d204d768234e67c34",
        "id": "237",
        "seats": 2
    },
    {
        "name": "Enduro",
        "category": "Motos",
        "price": 250000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/f2d2741969000e6bda655a8fefa86930",
        "id": "238",
        "seats": 2
    },
    {
        "name": "Esskey",
        "category": "Motos",
        "price": 325000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/8cfcc847bd7044a7d19dae8bb031c627",
        "id": "239",
        "seats": 2
    },
    {
        "name": "Faggio Sport",
        "category": "Motos",
        "price": 50000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/4e9d4b550889326ab411e4a631566987",
        "id": "240",
        "seats": 2
    },
    {
        "name": "Faggio Mod",
        "category": "Motos",
        "price": 150000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/e41dc1c0ffe80722833980303c2b1f6c",
        "id": "241",
        "seats": 2
    },
    {
        "name": "FCR 1000",
        "category": "Motos",
        "price": 275000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/a88e4cdff2b75f31ef3d44c3090babe9",
        "id": "242",
        "seats": 1
    },
    {
        "name": "FCR 1000 Custom",
        "category": "Motos",
        "price": 325000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/52ba3127b052024e1bf4a9e5407e19be",
        "id": "243",
        "seats": 1
    },
    {
        "name": "Gargoyle",
        "category": "Motos",
        "price": 350000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/edcb569b63d70194852303b20845d76d",
        "id": "244",
        "seats": 2
    },
    {
        "name": "Hakuchou",
        "category": "Motos",
        "price": 750000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/ba59d1b9eeef08d59659f2c25ffb8bea",
        "id": "245",
        "seats": 2
    },
    {
        "name": "Hackuchou Drag",
        "category": "Motos",
        "price": 925000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/5d690c0611092463e056bedf5b7eff71",
        "id": "246",
        "seats": 2
    },
    {
        "name": "Hexer",
        "category": "Motos",
        "price": 350000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/31520d63077b264408009b47863d07f1",
        "id": "247",
        "seats": 2
    },
    {
        "name": "Innovation",
        "category": "Motos",
        "price": 375000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/26c1a9ed24988dc3b452fd5d18a6d4b9",
        "id": "248",
        "seats": 2
    },
    {
        "name": "Manchez",
        "category": "Motos",
        "price": 250000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/b6762b67d3c8c0fde50895a12413bcb2",
        "id": "249",
        "seats": 2
    },
    {
        "name": "Manchez Scout",
        "category": "Motos",
        "price": 275000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/d6f6ff79b8d83cc7a635913ede689f4e",
        "id": "250",
        "seats": 1
    },
    {
        "name": "Nemesis",
        "category": "Motos",
        "price": 325000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/5855e87bf698bb6972b6b44d717c7316",
        "id": "251",
        "seats": 2
    },
    {
        "name": "Nightblade",
        "category": "Motos",
        "price": 725000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/b9779afc60e4fd991782b32ef8fe02d6",
        "id": "252",
        "seats": 2
    },
    {
        "name": "PCJ 600",
        "category": "Motos",
        "price": 325000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/8f0e6d8ca52cd7187e328dc09ff35bc0",
        "id": "253",
        "seats": 2
    },
    {
        "name": "Rampant Rocket",
        "category": "Motos",
        "price": 950000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/e5fc7fb01a5985979dd8a855e16bc143",
        "id": "254",
        "seats": 1
    },
    {
        "name": "Rat Bike",
        "category": "Motos",
        "price": 250000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/af2e5d124ede74cf6ae7f9a9f13531c7",
        "id": "255",
        "seats": 2
    },
    {
        "name": "Ruffian",
        "category": "Motos",
        "price": 450000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/e7e611f65de29da6c14420c9558f80f1",
        "id": "256",
        "seats": 2
    },
    {
        "name": "Sanchez",
        "category": "Motos",
        "price": 250000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/e33eb1aaa4195a614fc52e4acad57c9f",
        "id": "257",
        "seats": 2
    },
    {
        "name": "Sanchez (Couleurs)",
        "category": "Motos",
        "price": 200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/d2bfd4be35aa1df4f839c18694e1b2be",
        "id": "258",
        "seats": 2
    },
    {
        "name": "Sanctus",
        "category": "Motos",
        "price": 750000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/04dc218ddda578aa19481451fd20bcac",
        "id": "259",
        "seats": 1
    },
    {
        "name": "Sovereign",
        "category": "Motos",
        "price": 550000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/824ebba8736286e34743a3873d55f720",
        "id": "260",
        "seats": 1
    },
    {
        "name": "Stryder",
        "category": "Motos",
        "price": 650000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/6836762d8e4cdab961ee237fc0a11160",
        "id": "261",
        "seats": 2
    },
    {
        "name": "Thrust",
        "category": "Motos",
        "price": 300000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/78ebcb350c39968e1931fff0cfe0a6b7",
        "id": "262",
        "seats": 2
    },
    {
        "name": "Vader",
        "category": "Motos",
        "price": 450000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/80a66b707f159131553c27b680a89cb5",
        "id": "263",
        "seats": 2
    },
    {
        "name": "Vindicator",
        "category": "Motos",
        "price": 325000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/0d0dbae42df527680895e2792e31dc99",
        "id": "264",
        "seats": 2
    },
    {
        "name": "Vortex",
        "category": "Motos",
        "price": 850000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/cded2d00aac8bfd7d4cc7c3cb1115fb0",
        "id": "265",
        "seats": 1
    },
    {
        "name": "Wolfsbane",
        "category": "Motos",
        "price": 450000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/3b87bdec34d143f28a8806e55f1de00e",
        "id": "266",
        "seats": 2
    },
    {
        "name": "Lectro",
        "category": "Motos",
        "price": 450000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/c56b558fbbe7e269fff2a8138b9e44b0",
        "id": "267",
        "seats": 2
    },
    {
        "name": "Shinobi",
        "category": "Motos",
        "price": 425000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/68673ab84921c49bfc2b5392a32c84a8",
        "id": "268",
        "seats": 1
    },
    {
        "name": "Reever",
        "category": "Motos",
        "price": 750000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/804190eafde87e39284d34980bf4bb2a",
        "id": "269",
        "seats": 1
    },
    {
        "name": "Powersurge",
        "category": "Motos",
        "price": 850000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/1e4b03e2cfe0f8cf4da1e1902cafe866",
        "id": "270",
        "seats": 1
    },
    {
        "name": "Manchez Scout C",
        "category": "Motos",
        "price": 550000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/c3a1462836a8dbe58a7f0be055f8b723",
        "id": "271",
        "seats": 1
    },
    {
        "name": "Inductor Junk Energy",
        "category": "Motos",
        "price": 25000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/06fa8b72c1e4ddcb532a3c3f9c037af7",
        "id": "272",
        "seats": 1
    },
    {
        "name": "Inductor",
        "category": "Motos",
        "price": 25000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/71152ef24669d4339161f7d75f92b4c3",
        "id": "273",
        "seats": 1
    },
    {
        "name": "190z",
        "category": "Sports classics",
        "price": 800000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/15bdda7a7065a07747469a7adf3b9c90",
        "id": "274",
        "seats": 2
    },
    {
        "name": "Casco",
        "category": "Sports classics",
        "price": 950000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/cffbfa1e7ebbd8158548852444d3155f",
        "id": "275",
        "seats": 2
    },
    {
        "name": "Cheburek",
        "category": "Sports classics",
        "price": 650000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/ffa5abdb48c00d0b715e203fd5970110",
        "id": "276",
        "seats": 4
    },
    {
        "name": "Cheetah Classique",
        "category": "Sports classics",
        "price": 1200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/ba4ba835632f6768a67a7726a620974b",
        "id": "277",
        "seats": 2
    },
    {
        "name": "Coquette Classique",
        "category": "Sports classics",
        "price": 1400000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/e1b1dd3201de4a8e9158924398988a1c",
        "id": "278",
        "seats": 2
    },
    {
        "name": "Dynasty",
        "category": "Sports classics",
        "price": 650000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/8e48457eb42799c288bd252e6d466877",
        "id": "279",
        "seats": 4
    },
    {
        "name": "Fagaloa",
        "category": "Sports classics",
        "price": 450000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/f266a9befaec2e78e8c19aed07ea9662",
        "id": "280",
        "seats": 2
    },
    {
        "name": "Franken Stange",
        "category": "Sports classics",
        "price": 850000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/3fc92bfee5c7c893c9eeb86adf284b73",
        "id": "281",
        "seats": 4
    },
    {
        "name": "GT500",
        "category": "Sports classics",
        "price": 1100000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/7b8e2f1c957bf4e4daf551a863743470",
        "id": "282",
        "seats": 2
    },
    {
        "name": "Infernus Classique",
        "category": "Sports classics",
        "price": 1500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/0d0838a019bd6bf7d122110f0c78bed1",
        "id": "283",
        "seats": 2
    },
    {
        "name": "Revolter",
        "category": "Sports classics",
        "price": 1200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/7bb72fa71d08ae2822d3ae61404a8608",
        "id": "284",
        "seats": 4
    },
    {
        "name": "Buffalo STX",
        "category": "Sports classics",
        "price": 1200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/40971556f6679d95a508e5928e3e3cca",
        "id": "285",
        "seats": 4
    },
    {
        "name": "JB 700W",
        "category": "Sports classics",
        "price": 900000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/bbfb815a1d474bc740e92f9c3171fdb7",
        "id": "286",
        "seats": 2
    },
    {
        "name": "Mamba",
        "category": "Sports classics",
        "price": 1200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/3f20a676700da328ea7632082f2beb8f",
        "id": "287",
        "seats": 2
    },
    {
        "name": "Manana",
        "category": "Sports classics",
        "price": 350000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/569ecf2e8e8c36f0e044fd6017d54d5d",
        "id": "288",
        "seats": 2
    },
    {
        "name": "Michelli GT",
        "category": "Sports classics",
        "price": 450000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/4300a845c6a5b78e85be4ff094cd2c34",
        "id": "289",
        "seats": 2
    },
    {
        "name": "Monroe",
        "category": "Sports classics",
        "price": 1100000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/fc9fd322616ca1dd6d21b150d835f2e8",
        "id": "290",
        "seats": 2
    },
    {
        "name": "Nebula Turbo",
        "category": "Sports classics",
        "price": 350000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/75c5e8363fd622daa90febafcfe78c55",
        "id": "291",
        "seats": 2
    },
    {
        "name": "Peyote",
        "category": "Sports classics",
        "price": 200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/46d06ebc7442f843c140ffb97a9b41bd",
        "id": "292",
        "seats": 2
    },
    {
        "name": "Peyote Custom",
        "category": "Sports classics",
        "price": 350000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/65aece56c9f87490929f496e91b0107d",
        "id": "293",
        "seats": 2
    },
    {
        "name": "Pigalle",
        "category": "Sports classics",
        "price": 400000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/c3b4c1d996c96134453341c5dc5255dc",
        "id": "294",
        "seats": 2
    },
    {
        "name": "Rapid GT Classique",
        "category": "Sports classics",
        "price": 700000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/40d2bc05ee99cd9f3c21b236be4dedf0",
        "id": "295",
        "seats": 2
    },
    {
        "name": "Retinue",
        "category": "Sports classics",
        "price": 750000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/7a39c2efd494f583d2a2c961e1c832ab",
        "id": "296",
        "seats": 2
    },
    {
        "name": "Roosevelt",
        "category": "Sports classics",
        "price": 850000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/47cd7fe388d2fdb791179ef3c48b069d",
        "id": "297",
        "seats": 6
    },
    {
        "name": "Roosevelt Valor",
        "category": "Sports classics",
        "price": 900000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/c3ec48eee15c6b4e5e09cea36ee27db8",
        "id": "298",
        "seats": 6
    },
    {
        "name": "Savestra",
        "category": "Sports classics",
        "price": 650000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/ef30e44906df118895548af408f8e76b",
        "id": "299",
        "seats": 2
    },
    {
        "name": "Stinger",
        "category": "Sports classics",
        "price": 750000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/2e09d34ae6d4df014b806e81466da59b",
        "id": "300",
        "seats": 2
    },
    {
        "name": "Stinger GT",
        "category": "Sports classics",
        "price": 800000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/8193f7c115438fad82613cff2a5d3418",
        "id": "301",
        "seats": 2
    },
    {
        "name": "Stirling GT",
        "category": "Sports classics",
        "price": 900000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/16caeba19daa8f48d96a62e2facf3662",
        "id": "302",
        "seats": 2
    },
    {
        "name": "Swinger",
        "category": "Sports classics",
        "price": 1500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/2edbe62476081a6748ce398854d0504b",
        "id": "303",
        "seats": 2
    },
    {
        "name": "Tornado",
        "category": "Sports classics",
        "price": 250000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/dd71f6ac91f93c6c16eaf4fbbb1c3948",
        "id": "304",
        "seats": 2
    },
    {
        "name": "Tornado II (Convertible)",
        "category": "Sports classics",
        "price": 300000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/08207b9f55a9a0853ced5547731df36b",
        "id": "305",
        "seats": 2
    },
    {
        "name": "Tornado III (Peu rouillée)",
        "category": "Sports classics",
        "price": 200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/9805252ab9e64524c442d13b1a8e55f4",
        "id": "306",
        "seats": 2
    },
    {
        "name": "Tornado IIII (Très rouillée)",
        "category": "Sports classics",
        "price": 200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/75b122f9de4379cd5e48c710491bed52",
        "id": "307",
        "seats": 2
    },
    {
        "name": "Tornado Custom",
        "category": "Sports classics",
        "price": 350000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/526327f174cc54063d857f5a8ed76269",
        "id": "308",
        "seats": 2
    },
    {
        "name": "Tornado Rat Rod",
        "category": "Sports classics",
        "price": 600000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/9abc8c884be4dada7de781c325acc50f",
        "id": "309",
        "seats": 2
    },
    {
        "name": "Turismo Classique",
        "category": "Sports classics",
        "price": 1400000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/aee8a5bc5135b026a3708e9ee8eeb38c",
        "id": "310",
        "seats": 2
    },
    {
        "name": "Zion Classique",
        "category": "Sports classics",
        "price": 1100000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/a420ea8cce3fbe525746df8b7deff4ab",
        "id": "311",
        "seats": 2
    },
    {
        "name": "Z-Type",
        "category": "Sports classics",
        "price": 1000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/f39273f124d491f0d0d9f6254c5ecef8",
        "id": "312",
        "seats": 2
    },
    {
        "name": "Hotring Everon",
        "category": "Sports classics",
        "price": 1000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/25e93dcb32776118d70c72e57aa2a4fc",
        "id": "313",
        "seats": 2
    },
    {
        "name": "Panthere",
        "category": "Sports classics",
        "price": 1600000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/04cf41941d132abd4836a9631f2cbb04",
        "id": "314",
        "seats": 2
    },
    {
        "name": "Omnis e-GT",
        "category": "Sports classics",
        "price": 3000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/7244b0fab15821a69b9bc926edc290c6",
        "id": "315",
        "seats": 4
    },
    {
        "name": "SM722",
        "category": "Sports classics",
        "price": 1400000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/9bd60a362151566f6b512fb2172b56ba",
        "id": "316",
        "seats": 2
    },
    {
        "name": "811",
        "category": "Super",
        "price": 1200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/a66803102a89831ef213b67f63d5efe3",
        "id": "317",
        "seats": 2
    },
    {
        "name": "Adder",
        "category": "Super",
        "price": 5200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/8866294c242a925d4e20170282a3fdfd",
        "id": "318",
        "seats": 2
    },
    {
        "name": "Autarch",
        "category": "Super",
        "price": 6000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/213dc2b50d169485c92cff56abc7b58d",
        "id": "319",
        "seats": 2
    },
    {
        "name": "Banshee 900R",
        "category": "Super",
        "price": 1500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/b1e75246a5c90766c266cbd00fe7b651",
        "id": "320",
        "seats": 2
    },
    {
        "name": "Bullet",
        "category": "Super",
        "price": 1400000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/288057fc7869f5f9d344292a1a00c419",
        "id": "321",
        "seats": 2
    },
    {
        "name": "Cheetah",
        "category": "Super",
        "price": 1800000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/9bf4d9bcf46b953bb655afbffd5645fb",
        "id": "322",
        "seats": 2
    },
    {
        "name": "Cyclone",
        "category": "Super",
        "price": 1300000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/8e9cb4636ac4e2aa21632164fe32acae",
        "id": "323",
        "seats": 2
    },
    {
        "name": "Deveste Eight",
        "category": "Super",
        "price": 6500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/c9817dfaeb9e8162cabbfcb98242814d",
        "id": "324",
        "seats": 2
    },
    {
        "name": "Emerus",
        "category": "Super",
        "price": 2000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/a9fb410a0ba8cdf728f25d293e37ecd5",
        "id": "325",
        "seats": 2
    },
    {
        "name": "Entity XF",
        "category": "Super",
        "price": 1800000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/82f09e0204cad64f01ff3c2b3ca8b280",
        "id": "326",
        "seats": 2
    },
    {
        "name": "Entity XXR",
        "category": "Super",
        "price": 2200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/e9195ad077bd55e4b21de7d93002cd0c",
        "id": "327",
        "seats": 2
    },
    {
        "name": "FMJ",
        "category": "Super",
        "price": 3000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/62ecea12bb863e78984b1b977f85fe4a",
        "id": "328",
        "seats": 2
    },
    {
        "name": "Furia",
        "category": "Super",
        "price": 2700000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/248ef8231feb8c7daeeb30d4754bc4eb",
        "id": "329",
        "seats": 2
    },
    {
        "name": "GP1",
        "category": "Super",
        "price": 3500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/cf0a6050551426fee4fd7d4c95fba829",
        "id": "330",
        "seats": 2
    },
    {
        "name": "Ignus",
        "category": "Super",
        "price": 3200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/78bcc5b51115aca5bf45540c3680cda2",
        "id": "331",
        "seats": 2
    },
    {
        "name": "Infernus",
        "category": "Super",
        "price": 2000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/ab29494a59ae97f2953d801ee786cf48",
        "id": "332",
        "seats": 2
    },
    {
        "name": "Itali GTB",
        "category": "Super",
        "price": 2500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/7eec638035a0e36c6360c5e588e86534",
        "id": "333",
        "seats": 2
    },
    {
        "name": "Itali GTB Custom",
        "category": "Super",
        "price": 2900000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/71cedbcd3b2e6000b2e155b57ffd130b",
        "id": "334",
        "seats": 2
    },
    {
        "name": "Krieger",
        "category": "Super",
        "price": 2700000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/db239a13b8e1de143facc23820ba8d84",
        "id": "335",
        "seats": 2
    },
    {
        "name": "Nero",
        "category": "Super",
        "price": 6000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/786490cd32aaf1226f0f230846c65b81",
        "id": "336",
        "seats": 2
    },
    {
        "name": "Nero Custom",
        "category": "Super",
        "price": 6800000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/81e9ec741f4ff9f0dff9d1803aa18be9",
        "id": "337",
        "seats": 2
    },
    {
        "name": "Osiris",
        "category": "Super",
        "price": 5000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/4d2b6f7dd18cf7b6bd59e0229a3ac156",
        "id": "338",
        "seats": 2
    },
    {
        "name": "Penetrator",
        "category": "Super",
        "price": 2500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/839583d41b51b14ec69f58649e72917e",
        "id": "339",
        "seats": 2
    },
    {
        "name": "RE-7B",
        "category": "Super",
        "price": 5000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/71931522da763417acf042ac37f37511",
        "id": "340",
        "seats": 2
    },
    {
        "name": "Reaper",
        "category": "Super",
        "price": 8000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/671a28ac359e6225402a49f3dbf62a09",
        "id": "341",
        "seats": 2
    },
    {
        "name": "S80RR",
        "category": "Super",
        "price": 7000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/f29bd57d82339b333a11cacb1175700d",
        "id": "342",
        "seats": 2
    },
    {
        "name": "SC1",
        "category": "Super",
        "price": 2500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/a0ce0f5203e10cf1507ae952ac843cca",
        "id": "343",
        "seats": 2
    },
    {
        "name": "Sultan RS",
        "category": "Super",
        "price": 1500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/07be1861890d36f4de402a87be274b4e",
        "id": "344",
        "seats": 2
    },
    {
        "name": "T20",
        "category": "Super",
        "price": 2500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/ba3b35deddb20bd58e5fe30e0d87b7de",
        "id": "345",
        "seats": 2
    },
    {
        "name": "Taipan",
        "category": "Super",
        "price": 3000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/25bd05ec3d225730acb383478dd4cc53",
        "id": "346",
        "seats": 2
    },
    {
        "name": "Tempesta",
        "category": "Super",
        "price": 4000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/41242cbbb2644235ec4bfc72864d0a56",
        "id": "347",
        "seats": 2
    },
    {
        "name": "Tezeract",
        "category": "Super",
        "price": 6000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/ce16950c7e52de16d11ffb27f0954a7c",
        "id": "348",
        "seats": 2
    },
    {
        "name": "Thrax",
        "category": "Super",
        "price": 9000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/7b61d9d5439d71c0c8dcf9155a9ee885",
        "id": "349",
        "seats": 2
    },
    {
        "name": "Tigon",
        "category": "Super",
        "price": 6000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/292cca5d9e841983122539c187f9db2a",
        "id": "350",
        "seats": 2
    },
    {
        "name": "Torero XO",
        "category": "Super",
        "price": 4000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/56b3512ea12af71b1f99ed079229fbe6",
        "id": "351",
        "seats": 2
    },
    {
        "name": "Turismo R",
        "category": "Super",
        "price": 6500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/3316578ec337a8b9f756c3ad5c7b8703",
        "id": "352",
        "seats": 2
    },
    {
        "name": "Tyrant",
        "category": "Super",
        "price": 8000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/3dd5c78c7be8efb8579df4afc2c6082d",
        "id": "353",
        "seats": 2
    },
    {
        "name": "Tyrus",
        "category": "Super",
        "price": 9000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/f1b11590e373f4dc4f0f2c9c1083c116",
        "id": "354",
        "seats": 2
    },
    {
        "name": "Vacca",
        "category": "Super",
        "price": 5000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/8e67459cdb0c6e4cbfd66c49514a1f72",
        "id": "355",
        "seats": 2
    },
    {
        "name": "Vagner",
        "category": "Super",
        "price": 8500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/4b6f726db6c90968c397d12eb569d586",
        "id": "356",
        "seats": 2
    },
    {
        "name": "Visione",
        "category": "Super",
        "price": 9500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/0699d68a4b054d19386995135ac603a7",
        "id": "357",
        "seats": 2
    },
    {
        "name": "Voltic",
        "category": "Super",
        "price": 1500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/11c98c09d5ecd5673d186451e264de6d",
        "id": "358",
        "seats": 2
    },
    {
        "name": "XA-21",
        "category": "Super",
        "price": 6500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/7dcf1c5b0b701405edf3c6d9d264233e",
        "id": "359",
        "seats": 2
    },
    {
        "name": "X80 Proto",
        "category": "Super",
        "price": 12000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/c84c5b76abaec9030a170629753b7bab",
        "id": "360",
        "seats": 2
    },
    {
        "name": "Zeno",
        "category": "Super",
        "price": 10000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/d9598a35e3b37425331dbee1003977d2",
        "id": "361",
        "seats": 2
    },
    {
        "name": "Zentorno",
        "category": "Super",
        "price": 6000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/2d10df4b2a87755c924fa1f3cc57cc18",
        "id": "362",
        "seats": 2
    },
    {
        "name": "Zorrusso",
        "category": "Super",
        "price": 7500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/1ae5701d3074736143c13cc10d8b81b2",
        "id": "363",
        "seats": 2
    },
    {
        "name": "Torero",
        "category": "Super",
        "price": 11000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/82028c7e552b59b486a953377568db8a",
        "id": "364",
        "seats": 2
    },
    {
        "name": "LM87",
        "category": "Super",
        "price": 10000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/176f17ece6a34573ed90defdb63373ac",
        "id": "365",
        "seats": 2
    },
    {
        "name": "Entity MT",
        "category": "Super",
        "price": 10500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/032eef3c73441b795f58763333a539dd",
        "id": "366",
        "seats": 2
    },
    {
        "name": "10F",
        "category": "Super",
        "price": 9500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/8f6e51fd682edc73229fd8dd65c0f96d",
        "id": "367",
        "seats": 2
    },
    {
        "name": "10F (Large)",
        "category": "Super",
        "price": 10500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/e2ddb5a37531af5af36ecf58c8ba78d2",
        "id": "368",
        "seats": 2
    },
    {
        "name": "Turismo Omaggio",
        "category": "Super",
        "price": 4000000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/2a70a01953c295e999834f6920da80b1",
        "id": "369",
        "seats": 2
    },
    {
        "name": "Beater Dukes",
        "category": "Muscle",
        "price": 400000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/5bb4475e7d27897d73b21ce337173080",
        "id": "370",
        "seats": 2
    },
    {
        "name": "Blade",
        "category": "Muscle",
        "price": 425000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/c388adc678417c5eaf4f82297defc40b",
        "id": "371",
        "seats": 2
    },
    {
        "name": "Buccaneer",
        "category": "Muscle",
        "price": 525000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/c7937175856209978d455b86e62574b8",
        "id": "372",
        "seats": 2
    },
    {
        "name": "Buccaneer Custom",
        "category": "Muscle",
        "price": 625000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/5477c210f54f26c6337ce787be48043e",
        "id": "373",
        "seats": 2
    },
    {
        "name": "Chino",
        "category": "Muscle",
        "price": 600000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/0b89ebbc0c4ffdfe457a704fbd63bb79",
        "id": "374",
        "seats": 2
    },
    {
        "name": "Chino Custom",
        "category": "Muscle",
        "price": 625000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/428cfe3d41a8b440cc9570abfca83c71",
        "id": "375",
        "seats": 2
    },
    {
        "name": "Clique",
        "category": "Muscle",
        "price": 675000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/1ac4fda47f628764d839441c98c20a2a",
        "id": "376",
        "seats": 2
    },
    {
        "name": "Coquette BlackFin",
        "category": "Muscle",
        "price": 700000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/1b636d1a6fefa5831f8da41480d97c6a",
        "id": "377",
        "seats": 2
    },
    {
        "name": "Deviant",
        "category": "Muscle",
        "price": 800000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/cf659aef537592b0a21e6d61b269ca64",
        "id": "378",
        "seats": 2
    },
    {
        "name": "Dominator",
        "category": "Muscle",
        "price": 450000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/b2f7e36dd4f86575c7cd35738d385fc1",
        "id": "379",
        "seats": 2
    },
    {
        "name": "Dominator GTX",
        "category": "Muscle",
        "price": 700000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/9d0be641faeb67579fb05f473b1fcbf7",
        "id": "380",
        "seats": 2
    },
    {
        "name": "Yosemite Drift",
        "category": "Muscle",
        "price": 725000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/4b90410d551ca25e40cc214ffd3e798c",
        "id": "381",
        "seats": 2
    },
    {
        "name": "Ellie",
        "category": "Muscle",
        "price": 550000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/946b18f32360e987433c4ef21bb6a3e2",
        "id": "382",
        "seats": 2
    },
    {
        "name": "Faction",
        "category": "Muscle",
        "price": 450000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/d26a512e3798b7ac017cdea5caf9f849",
        "id": "383",
        "seats": 2
    },
    {
        "name": "Faction Custom",
        "category": "Muscle",
        "price": 500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/1ee0059ce9c665f727f5ba2c5d73a7e2",
        "id": "384",
        "seats": 2
    },
    {
        "name": "Faction Custom Donk",
        "category": "Muscle",
        "price": 550000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/a4bd70d532bffb8f23e6a2c0407525dc",
        "id": "385",
        "seats": 2
    },
    {
        "name": "Gauntlet",
        "category": "Muscle",
        "price": 500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/a83f21bac1fedb428b4180594984f271",
        "id": "386",
        "seats": 2
    },
    {
        "name": "Gauntlet Classique",
        "category": "Muscle",
        "price": 550000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/773ee32e8ea693da3dc647182f4255d6",
        "id": "387",
        "seats": 2
    },
    {
        "name": "Gauntlet Classique Custom",
        "category": "Muscle",
        "price": 600000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/f9eca43cace77bd24d6d02392cc2fcf6",
        "id": "388",
        "seats": 2
    },
    {
        "name": "Gauntlet Hellfire",
        "category": "Muscle",
        "price": 800000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/ede307a542416908f1d6c5eb33bef6fc",
        "id": "389",
        "seats": 2
    },
    {
        "name": "Hermes",
        "category": "Muscle",
        "price": 325000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/ce014a0f3cba011b5aa1403127fb1727",
        "id": "390",
        "seats": 2
    },
    {
        "name": "Hotknife",
        "category": "Muscle",
        "price": 350000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/c00e209db025784239347e3c8ae706ed",
        "id": "391",
        "seats": 2
    },
    {
        "name": "Hustler",
        "category": "Muscle",
        "price": 400000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/8804e8f909a7da3ded52ec91a21c4273",
        "id": "392",
        "seats": 2
    },
    {
        "name": "Impaler",
        "category": "Muscle",
        "price": 400000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/cb61654e87b8e80c2a882c425cad9fb5",
        "id": "393",
        "seats": 2
    },
    {
        "name": "Lurcher",
        "category": "Muscle",
        "price": 500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/3804bf7622e5939bc6cb28af4b9b8c53",
        "id": "394",
        "seats": 2
    },
    {
        "name": "Manana Custom",
        "category": "Muscle",
        "price": 400000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/d354c674cdc8de9c76996976b328128e",
        "id": "395",
        "seats": 2
    },
    {
        "name": "Moonbeam",
        "category": "Muscle",
        "price": 450000,
        "trunkWeight": 1000,
        "image": "https://gtacars.net/images/9e575bbb2f15fa9714c92affb1c75bb8",
        "id": "396",
        "seats": 4
    },
    {
        "name": "Moonbeam Custom",
        "category": "Muscle",
        "price": 500000,
        "trunkWeight": 1000,
        "image": "https://gtacars.net/images/1f7d0fb0484b2526b8619f97488e4e4f",
        "id": "397",
        "seats": 4
    },
    {
        "name": "Nightshade",
        "category": "Muscle",
        "price": 550000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/2b659a00f8801616c3d1faefd6ac23ed",
        "id": "398",
        "seats": 2
    },
    {
        "name": "Peyote Gasser",
        "category": "Muscle",
        "price": 600000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/7f52028e0aea8c337ac2f6e72bfedf66",
        "id": "399",
        "seats": 2
    },
    {
        "name": "Phoenix",
        "category": "Muscle",
        "price": 450000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/1684d6c87f583f8c73cb5e1a3dc73a47",
        "id": "400",
        "seats": 2
    },
    {
        "name": "Picador",
        "category": "Muscle",
        "price": 425000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/44facb19c62aeb4658866c466a6f5e17",
        "id": "401",
        "seats": 2
    },
    {
        "name": "Rat-Loader",
        "category": "Muscle",
        "price": 200000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/f94e9cc6c7a12efe0c69679df98d0df9",
        "id": "402",
        "seats": 2
    },
    {
        "name": "Rat-Truck",
        "category": "Muscle",
        "price": 425000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/0589cc8500bbd05bcb07f0d69a77c855",
        "id": "403",
        "seats": 2
    },
    {
        "name": "Ruiner",
        "category": "Muscle",
        "price": 550000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/1825ca4b99bf4f5c260c8baf0b98b25c",
        "id": "404",
        "seats": 2
    },
    {
        "name": "Sabre Turbo",
        "category": "Muscle",
        "price": 575000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/69b56b0ba5bcaeaedb68765ece77062e",
        "id": "405",
        "seats": 2
    },
    {
        "name": "Sabre Turbo Custom",
        "category": "Muscle",
        "price": 600000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/c3c7c6d0557659827248ce0bc0b523f7",
        "id": "406",
        "seats": 2
    },
    {
        "name": "Slamvan",
        "category": "Muscle",
        "price": 475000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/b66b40d2ee1ad0b3568b3f743b46d49f",
        "id": "407",
        "seats": 2
    },
    {
        "name": "Slamvan Custom",
        "category": "Muscle",
        "price": 500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/a8e4561f229801324d330eb0c129b708",
        "id": "408",
        "seats": 2
    },
    {
        "name": "Stallion",
        "category": "Muscle",
        "price": 525000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/4904d0f05089536d09ed18989487af98",
        "id": "409",
        "seats": 2
    },
    {
        "name": "Tampa",
        "category": "Muscle",
        "price": 450000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/5decfcda9d082403831a72df24aa9c78",
        "id": "410",
        "seats": 2
    },
    {
        "name": "Tulip",
        "category": "Muscle",
        "price": 525000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/82c1bd3a0939adabf2b4217c6580ae22",
        "id": "411",
        "seats": 4
    },
    {
        "name": "Vamos",
        "category": "Muscle",
        "price": 575000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/b86e5ec4bf9ff13259ef237f0e1d16a2",
        "id": "412",
        "seats": 2
    },
    {
        "name": "Vigero",
        "category": "Muscle",
        "price": 500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/e50a5491d4613da09f83a50d17be5b75",
        "id": "413",
        "seats": 2
    },
    {
        "name": "Vigero ZX",
        "category": "Muscle",
        "price": 750000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/0a427ea2dc9ccd5558a1594855425083",
        "id": "414",
        "seats": 2
    },
    {
        "name": "Impaler SZ",
        "category": "Muscle",
        "price": 500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/dc8fabde7d6fae31f2295637b7166445",
        "id": "415",
        "seats": 4
    },
    {
        "name": "Vigero ZX (Décapotable)",
        "category": "Muscle",
        "price": 800000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/37310085c4ff1d970a9b464782caf98f",
        "id": "416",
        "seats": 2
    },
    {
        "name": "Impaler LX",
        "category": "Muscle",
        "price": 600000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/02e207923c36d71d808fbee5ab4a99df",
        "id": "417",
        "seats": 4
    },
    {
        "name": "Dominator GT",
        "category": "Muscle",
        "price": 900000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/3a12e40370a4953b500db923da62fcaf",
        "id": "418",
        "seats": 2
    },
    {
        "name": "Brigham",
        "category": "Muscle",
        "price": 550000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/81029c1e7e9a2cbf7c87bec78bb0035d",
        "id": "419",
        "seats": 4
    },
    {
        "name": "Buffalo EVX",
        "category": "Muscle",
        "price": 1500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/c956cfa00fa033cd9fc792ee2cf89fb5",
        "id": "420",
        "seats": 2
    },
    {
        "name": "Clique Break",
        "category": "Muscle",
        "price": 400000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/63bae8969e9380dd1d716c1919ee218c",
        "id": "421",
        "seats": 2
    },
    {
        "name": "Virgo",
        "category": "Muscle",
        "price": 425000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/7870e17d0235f77044a84446cdf53793",
        "id": "422",
        "seats": 2
    },
    {
        "name": "Virgo Classique Custom",
        "category": "Muscle",
        "price": 525000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/8554bec4abd692463210fcd101726125",
        "id": "423",
        "seats": 2
    },
    {
        "name": "Virgo Classique",
        "category": "Muscle",
        "price": 475000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/48a310a2ebba8280dcc1bd3444656df6",
        "id": "424",
        "seats": 2
    },
    {
        "name": "Voodoo Custom",
        "category": "Muscle",
        "price": 425000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/2e21d64db23865cdca6fa8685f99efd3",
        "id": "425",
        "seats": 2
    },
    {
        "name": "Voodoo",
        "category": "Muscle",
        "price": 450000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/b950545adee46cf5f508090ef53e8d7f",
        "id": "426",
        "seats": 2
    },
    {
        "name": "Yosemite",
        "category": "Muscle",
        "price": 550000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/368352c6c1a6304cdb9f94662584a78b",
        "id": "427",
        "seats": 2
    },
    {
        "name": "Eudora",
        "category": "Muscle",
        "price": 450000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/104bb878b056baf1e88a7abca0e8066e",
        "id": "428",
        "seats": 4
    },
    {
        "name": "Broadway",
        "category": "Muscle",
        "price": 475000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/20c30c03750a32dffc9a3cec5a5bb9d3",
        "id": "429",
        "seats": 2
    },
    {
        "name": "Tahoma Coupé",
        "category": "Muscle",
        "price": 525000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/bfabf01fb2c9bb92d0ee559147ba1a1b",
        "id": "430",
        "seats": 2
    },
    {
        "name": "Tulip M-100",
        "category": "Muscle",
        "price": 575000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/580bc4f7dbb8607f1da077542e3fffeb",
        "id": "431",
        "seats": 2
    },
    {
        "name": "Greenwood",
        "category": "Muscle",
        "price": 475000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/b12cab5048c264e7193a3f1ea2663928",
        "id": "432",
        "seats": 4
    },
    {
        "name": "Ruiner ZZ-8",
        "category": "Muscle",
        "price": 500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/53bd8a94bbfcb1b85ec55fd878b3dbe8",
        "id": "433",
        "seats": 2
    },
    {
        "name": "Weevil Custom",
        "category": "Muscle",
        "price": 500000,
        "trunkWeight": 100,
        "image": "https://gtacars.net/images/67ef267280705d066c7c79cca4b1e024",
        "id": "434",
        "seats": 2
    }
];

export function loadVehicles(): Vehicle[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Error loading vehicles from localStorage:", error);
  }
  return defaultVehicles;
}

export function saveVehicles(vehicles: Vehicle[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(vehicles));
  } catch (error) {
    console.error("Error saving vehicles to localStorage:", error);
  }
}

export function addVehicle(vehicle: Omit<Vehicle, "id">): Vehicle {
  const vehicles = loadVehicles();
  const newVehicle: Vehicle = {
    ...vehicle,
    id: Math.max(...vehicles.map((v) => parseInt(v.id)), 0) + 1 + "",
  };
  vehicles.push(newVehicle);
  saveVehicles(vehicles);
  return newVehicle;
}

export function updateVehicle(
  id: string,
  updates: Partial<Vehicle>,
): Vehicle | null {
  const vehicles = loadVehicles();
  const index = vehicles.findIndex((v) => v.id === id);
  if (index === -1) return null;

  vehicles[index] = { ...vehicles[index], ...updates };
  saveVehicles(vehicles);
  return vehicles[index];
}

export function deleteVehicle(id: string): boolean {
  const vehicles = loadVehicles();
  const filteredVehicles = vehicles.filter((v) => v.id !== id);
  if (filteredVehicles.length === vehicles.length) return false;

  saveVehicles(filteredVehicles);
  return true;
}
