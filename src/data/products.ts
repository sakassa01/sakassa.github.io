export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  featured: boolean;
  specs: {
    cpu: string;
    gpu: string;
    ram: string;
    storage: string;
    display: string;
    os: string;
    weight: string;
    ports: string[];
    extraFeatures: string[];
  };
  description: string;
}

export const products: Product[] = [
  {
    id: "legion-5-pro",
    name: "Lenovo Legion 5 Pro",
    price: 14999,
    image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    brand: "Lenovo",
    featured: true,
    specs: {
      cpu: "AMD Ryzen 7 5800H",
      gpu: "NVIDIA RTX 3070 8GB",
      ram: "16GB DDR4 3200MHz",
      storage: "1TB NVMe SSD",
      display: "16\" WQXGA IPS 165Hz",
      os: "Windows 11 Home",
      weight: "2.45kg",
      ports: [
        "3x USB-A 3.2",
        "1x USB-C 3.2 (DisplayPort 1.4)",
        "1x HDMI 2.1",
        "1x RJ45",
        "1x 3.5mm Jack"
      ],
      extraFeatures: [
        "RGB Backlit Keyboard",
        "Wi-Fi 6",
        "Bluetooth 5.1",
        "720p HD Webcam with Privacy Shutter"
      ]
    },
    description: "The Lenovo Legion 5 Pro features a 16-inch QHD display with a 165Hz refresh rate and 500 nits of brightness. It's powered by AMD Ryzen 7 5800H and NVIDIA RTX 3070, making it perfect for demanding games and creative work."
  },
  {
    id: "rog-strix-g15",
    name: "ASUS ROG Strix G15",
    price: 15499,
    image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    brand: "ASUS",
    featured: true,
    specs: {
      cpu: "AMD Ryzen 9 5900HX",
      gpu: "NVIDIA RTX 3060 6GB",
      ram: "16GB DDR4 3200MHz",
      storage: "1TB NVMe SSD",
      display: "15.6\" FHD IPS 300Hz",
      os: "Windows 11 Home",
      weight: "2.3kg",
      ports: [
        "3x USB-A 3.2",
        "1x USB-C 3.2 (DisplayPort 1.4)",
        "1x HDMI 2.0b",
        "1x RJ45",
        "1x 3.5mm Jack"
      ],
      extraFeatures: [
        "Per-Key RGB Keyboard",
        "Wi-Fi 6",
        "Bluetooth 5.2",
        "ROG Intelligent Cooling"
      ]
    },
    description: "The ROG Strix G15 delivers powerful gaming performance with AMD Ryzen 9 5900HX and NVIDIA RTX 3060. The 300Hz display with 3ms response time ensures smooth, competitive gameplay, while the intelligent cooling system keeps temperatures in check during intense gaming sessions."
  },
  {
    id: "razer-blade-15",
    name: "Razer Blade 15",
    price: 19999,
    image: "https://images.pexels.com/photos/1038277/pexels-photo-1038277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    brand: "Razer",
    featured: true,
    specs: {
      cpu: "Intel Core i7-11800H",
      gpu: "NVIDIA RTX 3080 8GB",
      ram: "32GB DDR4 3200MHz",
      storage: "1TB NVMe SSD",
      display: "15.6\" QHD IPS 240Hz",
      os: "Windows 11 Home",
      weight: "2.01kg",
      ports: [
        "3x USB-A 3.2",
        "2x USB-C 3.2 (Thunderbolt 4)",
        "1x HDMI 2.1",
        "1x SD Card Reader",
        "1x 3.5mm Jack"
      ],
      extraFeatures: [
        "Per-Key RGB Keyboard",
        "Wi-Fi 6E",
        "Bluetooth 5.2",
        "CNC Aluminum Unibody"
      ]
    },
    description: "The Razer Blade 15 combines power with portability in a sleek CNC aluminum chassis. With Intel Core i7-11800H, 32GB RAM, and RTX 3080, it handles the most demanding games while maintaining professional aesthetics. The QHD 240Hz display is ideal for both gaming and content creation."
  },
  {
    id: "aorus-15p",
    name: "Gigabyte AORUS 15P",
    price: 15999,
    image: "https://images.pexels.com/photos/2693529/pexels-photo-2693529.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    brand: "Gigabyte",
    featured: false,
    specs: {
      cpu: "Intel Core i7-11800H",
      gpu: "NVIDIA RTX 3070 8GB",
      ram: "16GB DDR4 3200MHz",
      storage: "1TB NVMe SSD",
      display: "15.6\" FHD IPS 240Hz",
      os: "Windows 11 Home",
      weight: "2.2kg",
      ports: [
        "3x USB-A 3.2",
        "1x USB-C 3.2 (Thunderbolt 4)",
        "1x HDMI 2.1",
        "1x Mini DisplayPort 1.4",
        "1x SD Card Reader",
        "1x 3.5mm Jack"
      ],
      extraFeatures: [
        "RGB Fusion 2.0 Per-Key RGB Keyboard",
        "Wi-Fi 6",
        "Bluetooth 5.2",
        "WINDFORCE Cooling System"
      ]
    },
    description: "The AORUS 15P is engineered for gamers and creators, featuring a 240Hz display calibrated with X-Rite Pantone certification. The powerful hardware configuration with Intel i7-11800H and RTX 3070 ensures high-performance gaming, while the WINDFORCE cooling system maintains optimal temperatures."
  },
  {
    id: "msi-ge76-raider",
    name: "MSI GE76 Raider",
    price: 18499,
    image: "https://images.pexels.com/photos/930004/pexels-photo-930004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    brand: "MSI",
    featured: false,
    specs: {
      cpu: "Intel Core i9-11980HK",
      gpu: "NVIDIA RTX 3080 16GB",
      ram: "32GB DDR4 3200MHz",
      storage: "2TB NVMe SSD",
      display: "17.3\" FHD IPS 360Hz",
      os: "Windows 11 Pro",
      weight: "2.9kg",
      ports: [
        "3x USB-A 3.2",
        "2x USB-C (1x Thunderbolt 4)",
        "1x HDMI 2.1",
        "1x Mini DisplayPort 1.4",
        "1x SD Card Reader",
        "1x RJ45",
        "1x 3.5mm Jack"
      ],
      extraFeatures: [
        "Per-Key RGB SteelSeries Keyboard",
        "Wi-Fi 6E",
        "Bluetooth 5.2",
        "MSI Cooler Boost 5 Technology",
        "Dynaudio Speakers with Nahimic Audio"
      ]
    },
    description: "The MSI GE76 Raider is a powerhouse gaming laptop featuring a large 17.3-inch 360Hz display, Intel Core i9 processor, and RTX 3080 16GB graphics. With advanced cooling technology and impressive connectivity options, it delivers desktop-grade performance in a portable form factor."
  },
  {
    id: "hp-omen-16",
    name: "HP OMEN 16",
    price: 13999,
    image: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    brand: "HP",
    featured: false,
    specs: {
      cpu: "AMD Ryzen 7 5800H",
      gpu: "NVIDIA RTX 3060 6GB",
      ram: "16GB DDR4 3200MHz",
      storage: "1TB NVMe SSD",
      display: "16.1\" QHD IPS 165Hz",
      os: "Windows 11 Home",
      weight: "2.3kg",
      ports: [
        "3x USB-A 3.2",
        "1x USB-C 3.2 (DisplayPort 1.4)",
        "1x HDMI 2.1",
        "1x Mini DisplayPort",
        "1x SD Card Reader",
        "1x RJ45",
        "1x 3.5mm Jack"
      ],
      extraFeatures: [
        "4-Zone RGB Keyboard",
        "Wi-Fi 6",
        "Bluetooth 5.2",
        "OMEN Tempest Cooling Technology"
      ]
    },
    description: "The HP OMEN 16 combines style and power with AMD Ryzen 7 5800H and NVIDIA RTX 3060. The 16.1-inch QHD display with adaptive sync technology provides smooth visuals, while OMEN Tempest Cooling keeps thermals under control during extended gaming sessions."
  }
];