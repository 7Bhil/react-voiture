export const cars = [
  {
    id: 1,
    name: 'Mercedes Classe C',
    type: 'berline',
    price: '25 000 FCFA/jour',
    image: 'https://media.istockphoto.com/id/182185108/fr/photo/chrome-voiture-de-sport.webp?a=1&b=1&s=612x612&w=0&k=20&c=6OZFlx1Uck1_Fa5YYRh-O3R9URxaOr98WBRjLu2MQ4I=',
    featured: true,
    purchasePrice: '12 500 000 FCFA',
    availableForPurchase: true,
    features: ['GPS Navigation', 'Bluetooth', 'Caméra de recul', 'Sièges en cuir'],
    details: {
      passengers: 5,
      bags: 2,
      transmission: 'Automatique',
      ac: true,
      fuel: 'Essence',
      years: 2020,
      mileage: '45 000 km'
    }
  },
  {
    id: 2,
    name: 'Toyota RAV4',
    type: 'suv',
    price: '20 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    purchasePrice: '11 200 000 FCFA',
    availableForPurchase: true,
    features: ['AWD', 'Écran tactile', 'Caméra 360°', 'Sièges chauffants'],
    details: {
      passengers: 5,
      bags: 3,
      transmission: 'Automatique',
      ac: true,
      fuel: 'Essence',
      years: 2019,
      mileage: '52 000 km'
    }
  },
  {
    id: 3,
    name: 'Peugeot 208',
    type: 'citadine',
    price: '15 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    purchasePrice: '5 800 000 FCFA',
    availableForPurchase: true,
    features: ['Régulateur de vitesse', 'Bluetooth', 'Ordinateur de bord'],
    details: {
      passengers: 4,
      bags: 1,
      transmission: 'Manuelle',
      ac: true,
      fuel: 'Diesel',
      years: 2018,
      mileage: '68 000 km'
    }
  },
  {
    id: 4,
    name: 'BMW Série 5',
    type: 'berline',
    price: '30 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    purchasePrice: '18 500 000 FCFA',
    availableForPurchase: true,
    features: ['iDrive', 'Sièges mémoire', 'Toit ouvrant', 'Système audio Harman Kardon'],
    details: {
      passengers: 5,
      bags: 2,
      transmission: 'Automatique',
      ac: true,
      fuel: 'Essence',
      years: 2021,
      mileage: '32 000 km'
    }
  },
  {
    id: 5,
    name: 'Renault Kadjar',
    type: 'suv',
    price: '18 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    purchasePrice: '8 900 000 FCFA',
    availableForPurchase: false,
    features: ['R-Link 2', 'Barres de toit', 'Feux LED', 'Détecteur d\'angle mort'],
    details: {
      passengers: 5,
      bags: 3,
      transmission: 'Manuelle',
      ac: true,
      fuel: 'Diesel',
      years: 2017,
      mileage: '75 000 km'
    }
  },
  {
    id: 6,
    name: 'Hyundai i20',
    type: 'citadine',
    price: '12 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1629005559534-e71542e2a24a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh5dW5kYWklMjBpMjB8ZW58MHx8MHx8fDA%3D',
    purchasePrice: '4 200 000 FCFA',
    availableForPurchase: true,
    features: ['Vitres électriques', 'Direction assistée', 'Radio CD'],
    details: {
      passengers: 4,
      bags: 1,
      transmission: 'Manuelle',
      ac: false,
      fuel: 'Essence',
      years: 2016,
      mileage: '95 000 km'
    }
  },
  {
    id: 7,
    name: 'Audi A4',
    type: 'berline',
    price: '28 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1614328467603-0444b9fcfc47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXVkaSUyMEE0fGVufDB8fDB8fHww',
    featured: true,
    purchasePrice: '16 800 000 FCFA',
    availableForPurchase: true,
    features: ['MMI Plus', 'Quattro AWD', 'Phares LED Matrix', 'Cockpit virtuel'],
    details: {
      passengers: 5,
      bags: 2,
      transmission: 'Automatique',
      ac: true,
      fuel: 'Essence',
      years: 2020,
      mileage: '38 000 km'
    }
  },
  {
    id: 8,
    name: 'Nissan X-Trail',
    type: 'suv',
    price: '22 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1593912123154-f4c8072e9a02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlzc2FuJTIweCUyMHRyYWlsfGVufDB8fDB8fHww',
    purchasePrice: '13 200 000 FCFA',
    availableForPurchase: true,
    features: ['ProPilot', '7 places', 'Toit panoramique', 'NissanConnect'],
    details: {
      passengers: 7,
      bags: 4,
      transmission: 'Automatique',
      ac: true,
      fuel: 'Diesel',
      years: 2019,
      mileage: '48 000 km'
    }
  },
  {
    id: 9,
    name: 'Volkswagen Golf',
    type: 'citadine',
    price: '16 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    purchasePrice: '7 500 000 FCFA',
    availableForPurchase: true,
    features: ['Car-Net', 'Feux LED', 'Aide au stationnement', 'Système Start/Stop'],
    details: {
      passengers: 5,
      bags: 2,
      transmission: 'Manuelle',
      ac: true,
      fuel: 'Essence',
      years: 2018,
      mileage: '62 000 km'
    }
  },
  {
    id: 10,
    name: 'Toyota Camry',
    type: 'berline',
    price: '26 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    purchasePrice: '14 200 000 FCFA',
    availableForPurchase: false,
    features: ['Toyota Safety Sense', 'Écran 10"', 'Caméra multicaméras', 'Chargeur sans fil'],
    details: {
      passengers: 5,
      bags: 2,
      transmission: 'Automatique',
      ac: true,
      fuel: 'Essence',
      years: 2019,
      mileage: '55 000 km'
    }
  },
  {
    id: 11,
    name: 'Honda CR-V',
    type: 'suv',
    price: '24 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    featured: true,
    purchasePrice: '15 800 000 FCFA',
    availableForPurchase: true,
    features: ['Honda Sensing', 'Toit ouvrant', 'Sièges chauffants', 'Apple CarPlay'],
    details: {
      passengers: 5,
      bags: 3,
      transmission: 'Automatique',
      ac: true,
      fuel: 'Essence',
      years: 2020,
      mileage: '41 000 km'
    }
  },
  {
    id: 12,
    name: 'Ford Focus',
    type: 'citadine',
    price: '14 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    purchasePrice: '6 800 000 FCFA',
    availableForPurchase: true,
    features: ['SYNC 3', 'Caméra arrière', 'Aide au stationnement', 'Feux automatiques'],
    details: {
      passengers: 5,
      bags: 2,
      transmission: 'Manuelle',
      ac: true,
      fuel: 'Essence',
      years: 2017,
      mileage: '72 000 km'
    }
  },
  {
    id: 13,
    name: 'Lexus ES',
    type: 'berline',
    price: '35 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    purchasePrice: '22 500 000 FCFA',
    availableForPurchase: true,
    features: ['Lexus Safety System+', 'Mark Levinson', 'Head-Up Display', 'Siège massant'],
    details: {
      passengers: 5,
      bags: 2,
      transmission: 'Automatique',
      ac: true,
      fuel: 'Hybride',
      years: 2021,
      mileage: '28 000 km'
    }
  },
  {
    id: 14,
    name: 'Mazda CX-5',
    type: 'suv',
    price: '21 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1687292625389-664f8c39586b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF6ZGElMjBjeDV8ZW58MHx8MHx8fDA%3D',
    purchasePrice: '12 800 000 FCFA',
    availableForPurchase: true,
    features: ['i-ACTIVSENSE', 'MAZDA CONNECT', 'Bose Audio', 'AWD disponible'],
    details: {
      passengers: 5,
      bags: 3,
      transmission: 'Automatique',
      ac: true,
      fuel: 'Essence',
      years: 2019,
      mileage: '46 000 km'
    }
  },
  {
    id: 15,
    name: 'Citroën C3',
    type: 'citadine',
    price: '13 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    purchasePrice: '5 200 000 FCFA',
    availableForPurchase: false,
    features: ['Écran tactile 7"', 'ConnectedCAM', 'Airbumps', 'Mirror Screen'],
    details: {
      passengers: 4,
      bags: 1,
      transmission: 'Manuelle',
      ac: true,
      fuel: 'Diesel',
      years: 2017,
      mileage: '88 000 km'
    }
  },
  {
    id: 16,
    name: 'Volkswagen Passat',
    type: 'berline',
    price: '27 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    purchasePrice: '16 200 000 FCFA',
    availableForPurchase: true,
    features: ['Digital Cockpit', 'ACC adaptatif', 'Area View', 'Dynaudio'],
    details: {
      passengers: 5,
      bags: 3,
      transmission: 'Automatique',
      ac: true,
      fuel: 'Diesel',
      years: 2020,
      mileage: '35 000 km'
    }
  },
  {
    id: 17,
    name: 'Kia Sportage',
    type: 'suv',
    price: '19 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1649921777129-a28a26031a03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lhJTIwc3BvcnRhZ2V8ZW58MHx8MHx8fDA%3D',
    purchasePrice: '9 800 000 FCFA',
    availableForPurchase: true,
    features: ['UVO Connect', 'Surveillance angles morts', 'Feux LED', 'Hayon électrique'],
    details: {
      passengers: 5,
      bags: 3,
      transmission: 'Manuelle',
      ac: true,
      fuel: 'Diesel',
      years: 2018,
      mileage: '64 000 km'
    }
  },
  {
    id: 18,
    name: 'Opel Corsa',
    type: 'citadine',
    price: '11 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    purchasePrice: '3 800 000 FCFA',
    availableForPurchase: true,
    features: ['IntelliLink', 'Caméra de recul', 'Phares adaptatifs'],
    details: {
      passengers: 4,
      bags: 1,
      transmission: 'Manuelle',
      ac: false,
      fuel: 'Essence',
      years: 2015,
      mileage: '105 000 km'
    }
  },
  {
    id: 19,
    name: 'Jaguar XE',
    type: 'berline',
    price: '40 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    featured: true,
    purchasePrice: '28 500 000 FCFA',
    availableForPurchase: true,
    features: ['InControl Touch Pro', 'Meridian Audio', 'All Surface Progress Control', 'Sièges Windsor'],
    details: {
      passengers: 5,
      bags: 2,
      transmission: 'Automatique',
      ac: true,
      fuel: 'Essence',
      years: 2021,
      mileage: '22 000 km'
    }
  },
  {
    id: 20,
    name: 'Land Rover Discovery',
    type: 'suv',
    price: '45 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1610625679301-38642e0a60bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZCUyMHJvdmVyJTIwZGlzY292ZXJ5fGVufDB8fDB8fHww',
    purchasePrice: '35 200 000 FCFA',
    availableForPurchase: false,
    features: ['Terrain Response', 'InControl Touch Pro Duo', 'Wade Sensing', '7 places configurables'],
    details: {
      passengers: 7,
      bags: 5,
      transmission: 'Automatique',
      ac: true,
      fuel: 'Diesel',
      years: 2020,
      mileage: '38 000 km'
    }
  },
  {
    id: 21,
    name: 'Mini Cooper',
    type: 'citadine',
    price: '17 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1600016326108-40b24ee22cd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaSUyMGNvb3BlcnxlbnwwfHwwfHx8MA%3D%3D',
    purchasePrice: '9 500 000 FCFA',
    availableForPurchase: true,
    features: ['MINI Connected', 'Toit ouvrant électrique', 'Feux LED', 'Harman Kardon'],
    details: {
      passengers: 4,
      bags: 1,
      transmission: 'Automatique',
      ac: true,
      fuel: 'Essence',
      years: 2019,
      mileage: '43 000 km'
    }
  },
  {
    id: 22,
    name: 'Volvo S90',
    type: 'berline',
    price: '32 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    purchasePrice: '24 800 000 FCFA',
    availableForPurchase: true,
    features: ['Pilot Assist', 'Bowers & Wilkins', 'Air Suspension', 'Crystal Gear Knob'],
    details: {
      passengers: 5,
      bags: 2,
      transmission: 'Automatique',
      ac: true,
      fuel: 'Hybride',
      years: 2021,
      mileage: '18 000 km'
    }
  },
  {
    id: 23,
    name: 'Subaru Outback',
    type: 'suv',
    price: '23 000 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1681680061152-d3fc0d999a8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ViYXJ1JTIwb3V0YmFja3xlbnwwfHwwfHx8MA%3D%3D',
    purchasePrice: '14 500 000 FCFA',
    availableForPurchase: true,
    features: ['EyeSight', 'STARLINK', 'X-MODE', 'Harman Kardon'],
    details: {
      passengers: 5,
      bags: 4,
      transmission: 'Automatique',
      ac: true,
      fuel: 'Essence',
      years: 2020,
      mileage: '39 000 km'
    }
  },
  {
    id: 24,
    name: 'Seat Ibiza',
    type: 'citadine',
    price: '14 500 FCFA/jour',
    image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    purchasePrice: '6 200 000 FCFA',
    availableForPurchase: true,
    features: ['SEAT Connect', 'Beats Audio', 'Full Link', 'Feux Full LED'],
    details: {
      passengers: 5,
      bags: 2,
      transmission: 'Manuelle',
      ac: true,
      fuel: 'Essence',
      years: 2018,
      mileage: '58 000 km'
    }
  }
];

export const carTypes = [
  { value: 'all', label: 'Tous' },
  { value: 'berline', label: 'Berlines' },
  { value: 'suv', label: 'SUV' },
  { value: 'citadine', label: 'Citadines' }
];