import { Product } from "../types";

export const products: Product[] = [
  {
    id: "1",
    name: "Shape Pro Street",
    description:
      "Shape profissional para street com construção durável em maple 7 lâminas e arte personalizada.",
    price: 299.99,
    images: [
      "https://images.pexels.com/photos/5657589/pexels-photo-5657589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5657663/pexels-photo-5657663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "decks",
    featured: true,
    new: false,
    specs: {
      largura: '8.25"',
      comprimento: '31.85"',
      material: "Maple 7 lâminas",
      côncavo: "Médio",
    },
  },
  {
    id: "2",
    name: "Skate Completo Urban Cruiser",
    description:
      "Skate completo pronto para andar com componentes premium para cruising urbano.",
    price: 499.99,
    images: [
      "https://images.pexels.com/photos/4427816/pexels-photo-4427816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4427818/pexels-photo-4427818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "completes",
    featured: true,
    new: true,
    specs: {
      shape: 'Shape maple 8.0"',
      trucks: 'Trucks de alumínio 5.0"',
      rodas: "54mm 99A",
      rolamentos: "ABEC 7",
    },
  },
  {
    id: "3",
    name: "Trucks Profissionais",
    description:
      "Trucks leves e duráveis em alumínio com ótima capacidade de manobra e grind.",
    price: 259.99,
    images: [
      "https://images.pexels.com/photos/5657679/pexels-photo-5657679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5657647/pexels-photo-5657647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "trucks",
    featured: false,
    new: false,
    specs: {
      largura: '5.25"',
      altura: "Média",
      material: "Liga de alumínio",
      peso: "368g por par",
    },
  },
  {
    id: "4",
    name: "Rodas Street",
    description:
      "Rodas de uretano resistentes com excelente performance para slides e street skating.",
    price: 179.99,
    images: [
      "https://images.pexels.com/photos/13027668/pexels-photo-13027668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/13027677/pexels-photo-13027677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "wheels",
    featured: false,
    new: true,
    specs: {
      diâmetro: "52mm",
      dureza: "99A",
      formato: "Clássico redondo",
      núcleo: "Alta resistência",
    },
  },
  {
    id: "5",
    name: "Rolamentos Premium",
    description:
      "Rolamentos de alta velocidade e baixa manutenção para rolagem suave e redução de atrito.",
    price: 129.99,
    images: [
      "https://images.pexels.com/photos/5657660/pexels-photo-5657660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5657601/pexels-photo-5657601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "bearings",
    featured: false,
    new: false,
    specs: {
      tipo: "ABEC 9",
      material: "Aço cromo",
      blindagem: "Removível em borracha",
      lubrificante: "Speed cream",
    },
  },
  {
    id: "6",
    name: "Shape Pro Model Signature",
    description:
      "Shape pro model edição limitada com arte exclusiva e construção premium.",
    price: 349.99,
    images: [
      "https://images.pexels.com/photos/5657697/pexels-photo-5657697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5657671/pexels-photo-5657671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    category: "decks",
    featured: true,
    new: false,
    specs: {
      largura: '8.5"',
      comprimento: '32.0"',
      material: "Maple 7 lâminas",
      côncavo: "Profundo",
    },
  },
];

export const categories = [
  {
    id: "decks",
    name: "Shapes",
    image:
      "https://images.pexels.com/photos/5657665/pexels-photo-5657665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Shapes de skate profissionais",
  },
  {
    id: "completes",
    name: "Skates Completos",
    image:
      "https://images.pexels.com/photos/13027672/pexels-photo-13027672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Skates montados prontos para andar",
  },
  {
    id: "trucks",
    name: "Trucks",
    image:
      "https://images.pexels.com/photos/5657679/pexels-photo-5657679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Trucks duráveis para todos os estilos",
  },
  {
    id: "wheels",
    name: "Rodas",
    image:
      "https://images.pexels.com/photos/13027668/pexels-photo-13027668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Rodas de performance para street, park e cruising",
  },
];
