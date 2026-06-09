import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "828-352-9901";
const PHONE_TEL = "+18283529901";
const ADDRESS = "60 Liledoun Rd, Taylorsville, NC 28681";
const HOURS = "Open Daily · 11am – 10pm";

type Item = { n?: string; name: string; desc?: string; price: string };
type Section = {
  id: string;
  label: string;
  tab: string;
  color: "chili" | "cactus" | "marigold" | "agave" | "mesa";
  image: string;
  blurb?: string;
  groups?: { title?: string; note?: string; items: Item[] }[];
  items?: Item[];
};

const SECTIONS: Section[] = [
  {
    id: "appetizers",
    label: "Appetizers, Nachos, Soups & More",
    tab: "Appetizers",
    color: "mesa",
    image: imgAppetizers,
    blurb: "Start it right. Chips down, guac up.",
    groups: [
      {
        title: "Appetizers",
        items: [
          { name: "Sampler Appetizers", desc: "4 wings, 2 taquitos, 1 mushroom quesadilla, 1 spinach quesadilla & guacamole.", price: "13.25" },
          { name: "Guacamole Traditional", price: "6.99" },
          { name: "Cheese Dip", price: "4.99" },
          { name: "Choriqueso", price: "7.99" },
          { name: "Guacamole Dip", price: "4.99" },
          { name: "Spinach Dip", price: "6.99" },
          { name: "Shrimp Delight", price: "13.99" },
          { name: "Chicken Wings", desc: "Plain, mild, hot or BBQ.", price: "11.75" },
          { name: "Elote", price: "4.99" },
        ],
      },
      {
        title: "Nachos",
        items: [
          { name: "Nachos Cheese", price: "7.99" },
          { name: "Nachos Beans", price: "7.99" },
          { name: "Nachos Ground Beef", price: "8.50" },
          { name: "Nachos Shredded Chicken", price: "8.50" },
          { name: "Nachos Steak or Chicken", price: "11.99" },
          { name: "Nachos Fajitas — Chicken", price: "10.99" },
          { name: "Nachos Fajitas — Steak", price: "11.99" },
          { name: "Nachos Fajitas — Texas", price: "14.99" },
          { name: "Nachos Shrimp", price: "13.99" },
        ],
      },
      {
        title: "Quesadillas",
        items: [
          { name: "Grilled Chicken Quesadilla", price: "11.25" },
          { name: "Steak Quesadilla", price: "12.25" },
          { name: "Cheese Quesadilla", price: "4.75" },
          { name: "Shredded Chicken Quesadilla", price: "7.50" },
          { name: "Beef Quesadilla", price: "7.75" },
        ],
      },
      {
        title: "Soups",
        items: [
          { name: "Sopa de Pollo", desc: "Chicken soup with vegetables.", price: "10.99" },
          { name: "Sopa de Carne", desc: "Shredded beef and vegetables.", price: "11.99" },
          { name: "Sopa de Camarón", desc: "Shrimp and vegetables.", price: "14.99" },
          { name: "Sopa de Mariscos", desc: "Shrimp, fish, scallops, vegetables.", price: "17.99" },
          { name: "Sopa de Tortilla", desc: "Tortilla soup with avocado.", price: "8.25" },
          { name: "Menudo", desc: "Traditional Mexican soup, made of beef stomach and spices. Served with hand-made tortillas.", price: "12.99" },
        ],
      },
      {
        title: "Salads",
        items: [
          { name: "Fajita Salad — Chicken", desc: "Grilled onions, bell peppers, tomatoes, lettuce, shredded cheese.", price: "11.25" },
          { name: "Fajita Salad — Steak", price: "12.25" },
          { name: "Fajita Salad — Shrimp", price: "12.99" },
          { name: "Fajita Salad — Texas", price: "14.99" },
          { name: "Fresh House Salad", desc: "Lettuce, bell peppers, tomatoes, shredded cheese.", price: "6.99" },
          { name: "Taco Salad", desc: "Chicken or beef in a crispy tortilla bowl with beans.", price: "10.25" },
          { name: "Caesar Salad", desc: "Sliced breaded chicken tenderloin, fresh lettuce, tomatoes, red onions, caesar dressing.", price: "10.25" },
          { name: "Taco Salad Fajita Style — Grilled Chicken", desc: "Onions, bell peppers, tomatoes in a crispy tortilla bowl.", price: "11.25" },
          { name: "Taco Salad Fajita Style — Steak", price: "12.25" },
          { name: "Taco Salad Fajita Style — Camarón", price: "12.99" },
          { name: "Taco Salad Fajita Style — Texas", price: "14.99" },
        ],
      },
      {
        title: "Tortas",
        items: [
          { name: "Torta Asada", price: "13.99" },
          { name: "Torta Pastor", price: "12.99" },
          { name: "Torta Jamón", price: "12.99" },
          { name: "Torta Chorizo", price: "12.99" },
          { name: "Torta Carnitas", price: "12.99" },
          { name: "Torta Pollo", price: "12.99" },
          { name: "Torta Cubana", price: "13.99" },
          { name: "Torta Milanesa", price: "13.99" },
        ],
      },
      {
        title: "Tacos Mexicanos",
        note: "Asada, lengua, buche, chorizo, pollo, campechanos, camarón, carnitas, pastor.",
        items: [
          { name: "Taco Mexicano (each)", price: "3.75" },
          { name: "Tacos Ensenada", desc: "Breaded shrimp, steak or chicken with lettuce, sour cream, pico de gallo and cheese.", price: "3.99" },
          { name: "Tacobirria", price: "13.50" },
          { name: "Sopes", price: "4.25" },
          { name: "Pizza Birria", price: "16.99" },
        ],
      },
    ],
  },
  {
    id: "lunch",
    label: "Lunch Menu",
    tab: "Lunch",
    color: "chili",
    image: imgLunch,
    blurb: "Served 11am – 3:30pm. Substitute or add cheese dip $1.75. *$1 extra on Sundays.",
    groups: [
      {
        items: [
          { n: "1", name: "Speedy Gonzalez", desc: "Taco & enchilada with rice or beans.", price: "7.25" },
          { n: "2", name: "Burrito", desc: "Served with rice and beans.", price: "7.99" },
          { n: "3", name: "Enchilada", desc: "Served with rice and beans.", price: "7.99" },
          { n: "4", name: "Burrito & Taco", desc: "Served with rice.", price: "7.99" },
          { n: "5", name: "Chile Relleno", desc: "Served with rice and beans.", price: "7.99" },
          { n: "6", name: "Burrito & Sour Cream Salad", desc: "Served with rice.", price: "8.25" },
          { n: "7", name: "Chile Relleno & Taco", desc: "Served with rice.", price: "8.25" },
          { n: "8", name: "Chalupa y Burrito", desc: "Served with rice.", price: "8.25" },
          { n: "9", name: "Enchilada y Quesadilla", desc: "Served with beans.", price: "8.25" },
          { n: "10", name: "Enchilada y Tostada", desc: "Served with beans.", price: "8.25" },
          { n: "11", name: "Enchiladas Rancheras", desc: "Two cheese enchiladas topped with shredded beef and ranchera sauce.", price: "8.50" },
          { n: "12", name: "Chimichanga", desc: "Soft deep-fried burrito with chicken or shredded beef, cheese dip and salad, rice or beans.", price: "8.50" },
          { n: "13", name: "Shrimp Chimichanga", desc: "Grilled shrimp with onions and tomatoes wrapped in a deep-fried flour tortilla.", price: "9.99" },
          { n: "14", name: "Quesadilla Especial", desc: "Chicken or beef quesadilla with rice and salad.", price: "9.75" },
          { n: "15", name: "Taquitos", desc: "Chicken or beef mini-burrito in a crispy corn tortilla.", price: "8.50" },
          { n: "16", name: "Enchiladas Supremas", desc: "Three enchiladas: one beef, one chicken, one bean, topped with salad.", price: "8.50" },
          { n: "17", name: "Taco Salad", desc: "Chicken or beef in a crispy tortilla bowl topped with salad.", price: "8.99" },
          { n: "18", name: "Taco Salad (Fajita Style)", desc: "Grilled chicken or steak with onions, tomatoes, bell peppers and beans.", price: "10.50" },
          { n: "19", name: "Taco Salad Camarón", desc: "Grilled shrimp with onions, tomatoes, bell peppers and beans.", price: "11.25" },
          { n: "20", name: "Taco Salad Texas", desc: "Grilled chicken, steak and shrimp with onions, tomatoes, bell peppers and beans.", price: "11.99" },
          { n: "21", name: "Fajitas Chicken", desc: "Grilled chicken with bell peppers, onions and tomatoes on a hot skillet.", price: "10.99" },
          { n: "22", name: "Fajitas Steak", desc: "Grilled steak with bell peppers, onions and tomatoes on a hot skillet.", price: "11.50" },
          { n: "23", name: "Texas Fajitas", desc: "Combination of grilled chicken, steak and shrimp.", price: "12.75" },
          { n: "24", name: "Fajitas Shrimp", desc: "Shrimp with bell peppers, onions and tomatoes.", price: "11.99" },
          { n: "25", name: "Fajitas Fish", desc: "Fish with bell peppers, onions and tomatoes.", price: "11.50" },
          { n: "26", name: "Fajitas Carnitas", desc: "Pork with bell peppers, onions and tomatoes.", price: "10.99" },
          { n: "27", name: "Huevos Rancheros", desc: "Two eggs covered with ranchero sauce. Served with rice and beans.", price: "8.99" },
          { n: "28", name: "Huevos con Chorizo", desc: "Two scrambled eggs with Mexican sausage, rice, beans and fresh Mexican cheese.", price: "8.99" },
          { n: "29", name: "Huevos con Jamón", desc: "Two scrambled eggs with chopped ham.", price: "8.99" },
          { n: "30", name: "Huevos a la Mexicana", desc: "Two scrambled eggs cooked with jalapeño, onions and tomatoes.", price: "8.99" },
          { n: "31", name: "Quesadilla Fajita", desc: "Cheese quesadilla stuffed with grilled chicken or steak, bell peppers, onions and tomatoes.", price: "10.75" },
          { n: "32", name: "Camarones a la Diabla", desc: "Grilled shrimp cooked in our spicy diabla sauce.", price: "11.99" },
          { n: "33", name: "Camarones al Mojo de Ajo", desc: "Shrimp cooked with butter and fresh garlic.", price: "11.99" },
          { n: "34", name: "Coctel de Camarón", desc: "Shrimp cooked until tender peeled and chilled. House cocktail sauce, avocado, pico de gallo.", price: "11.99" },
          { n: "35", name: "Chilaquiles", desc: "Soft tortilla chips topped with chicken or beef, cheese and one egg on top.", price: "10.99" },
          { n: "36", name: "Carne Asada", desc: "Grilled thin tender steak topped with grilled onions. Rice, beans and Mexican salad.", price: "11.99" },
          { n: "37", name: "Nachos Fajitas", desc: "Tortilla chips covered with grilled chicken or steak, vegetables and cheese dip.", price: "11.50" },
          { n: "38", name: "Nachos Supremos", desc: "Ground beef, shredded chicken. Served with beans on fresh tortilla chips topped with salad.", price: "9.25" },
          { n: "39", name: "Nachos Texanos", desc: "Chicken, steak and shrimp cooked with green peppers, onion and tomato, topped with cheese dip.", price: "11.99" },
          { n: "40", name: "Chile Colorado", desc: "Steak strips cooked in our special hot tomatoes sauce. Rice and beans.", price: "11.25" },
          { n: "41", name: "Fajita Burrito", desc: "Medium burrito stuffed with beans and grilled chicken or steak with vegetables, cheese dip.", price: "11.25" },
          { n: "42", name: "Cheese Steak Burrito", desc: "Grilled steak in a flour tortilla covered with cheese dip.", price: "11.25" },
          { n: "43", name: "A.C.P.", desc: "Grilled chicken over a bed of rice covered with cheese dip.", price: "10.99" },
          { n: "44", name: "Burrito Grande", desc: "Extra-large burrito with shredded beef, rice, refried beans, pico de gallo.", price: "10.99" },
          { n: "45", name: "Veggie A.C.P.", desc: "Grilled chicken, broccoli, zucchini and onions over rice with cheese dip.", price: "11.25" },
          { n: "46", name: "Pelusa Chicken", desc: "Grilled chicken with onions, bell peppers, tomatoes over rice with cheese dip.", price: "11.25" },
          { n: "47", name: "Pelusa Steak", desc: "Grilled steak with onions, bell peppers, tomatoes over rice with cheese dip.", price: "11.99" },
          { n: "48", name: "Pelusa Shrimp", desc: "Grilled shrimp with onions, bell peppers, tomatoes over rice with cheese dip.", price: "11.99" },
          { n: "49", name: "Chile Verde", desc: "Chicken or pork, served with rice and beans.", price: "10.99" },
          { n: "50", name: "Pelusa Texana", desc: "Combination of all three meats (chicken, steak & shrimp) over rice with grilled vegetables and cheese dip.", price: "12.25" },
          { n: "51", name: "Burrito California", desc: "10\" burrito with grilled chicken or steak, rice, beans, guacamole and cheese dip.", price: "11.99" },
          { n: "52", name: "Burrito Texano", desc: "Big burrito filled with grilled chicken, steak and shrimp covered with cheese dip with rice.", price: "12.25" },
          { n: "53", name: "Volcanito", desc: "Chicken or steak with rice and beans on the side and cheese dip on top.", price: "11.99" },
        ],
      },
    ],
  },
  {
    id: "specialties",
    label: "Specialties",
    tab: "Specialties",
    color: "mesa",
    image: imgSpecialties,
    blurb: "The kitchen's pride. Cast iron, big plates, real fire. Substitute or add cheese dip $1.75.",
    groups: [
      {
        items: [
          { n: "1", name: "Dos Amigos", desc: "Half chicken breast and tender thin steak topped with grilled onions. Rice, beans and salad.", price: "16.25" },
          { n: "2", name: "Carne Ranchera", desc: "8 oz rib-eye sliced in half topped with grilled red onions. Rice and black beans.", price: "16.25" },
          { n: "3", name: "Molcajete", desc: "Combines grilled steak, chicken, shrimp, Mexican sausage, onions and cactus. Served in a sizzling hot molcajete.", price: "28.99" },
          { n: "4", name: "Carnitas Dinner", desc: "Crispy outside, tender pork inside. Grilled onions, rice, beans and salad.", price: "14.99" },
          { n: "5", name: "Pelusa Chicken", desc: "Grilled chicken with onions, bell peppers and tomatoes over rice with cheese dip.", price: "13.99" },
          { n: "6", name: "Pelusa Steak", desc: "Grilled steak with onions, bell peppers and tomatoes over rice with cheese dip.", price: "14.99" },
          { n: "7", name: "Pelusa Shrimp", desc: "Grilled shrimp with onions, bell peppers and tomatoes over rice with cheese dip.", price: "14.99" },
          { n: "8", name: "Pelusa Texana", desc: "All three meats (chicken, steak & shrimp) over rice with grilled vegetables and cheese dip.", price: "15.99" },
          { n: "9", name: "Steak Ranchero", desc: "8 oz rib-eye steak with ranchero sauce on top. Rice and beans.", price: "16.25" },
          { n: "10", name: "Carne Asada", desc: "8 oz tender thin steak topped with grilled onions. Rice, beans, avocado, jalapeños, salad.", price: "16.25" },
          { n: "11", name: "Milanesa", desc: "Breaded chicken breast, deep fried golden brown. Rice and fresh salad with avocado.", price: "16.25" },
          { n: "12", name: "Arroz con Carne A.C.C.", desc: "Tender grilled steak strips over rice topped with cheese dip.", price: "14.99" },
          { n: "13", name: "Veggie A.C.C.", desc: "Grilled chicken strips with onions, zucchini and broccoli topped with cheese dip.", price: "15.25" },
          { n: "14", name: "Steak Mexicano", desc: "Rib-eye steak sliced into squares cooked with fresh jalapeños, onions and tomatoes sauce. Rice and beans.", price: "16.25" },
          { n: "15", name: "Chile Colorado", desc: "Steak strips cooked in our special hot tomatoes sauce. Rice and beans.", price: "15.99" },
          { n: "16", name: "Steak a la Tampiqueña", desc: "T-bone steak topped with grilled onions. Rice and beans.", price: "16.25" },
          { n: "17", name: "Steak & Shrimp", desc: "T-bone steak with grilled shrimp over it. Rice, beans and salad.", price: "18.99" },
          { n: "18", name: "Chiles Rellenos Plate", desc: "Two chiles rellenos wrapped with egg and stuffed with cheese, ranchero sauce. Rice and beans.", price: "13.99" },
          { n: "19", name: "Arroz con Pollo A.C.P.", desc: "Grilled chicken strips over Mexican rice topped with our signature cheese dip.", price: "13.99" },
          { n: "20", name: "Veggie A.C.P.", desc: "Grilled chicken strips with onions, zucchini and broccoli, cheese dip on rice.", price: "14.99" },
          { n: "21", name: "Choripollo", desc: "Grilled chicken breast and Mexican sausage topped with cheese sauce. Rice and beans.", price: "15.99" },
          { n: "22", name: "Mole Poblano", desc: "Chicken strips in thick brown sauce of chilies, garlic, chocolate, tomatoes, cloves and cinnamon. Rice and salad.", price: "12.50" },
          { n: "23", name: "Chilaquiles", desc: "Fried corn tortilla presses simmered with red or green salsa, topped with chicken or ground beef, shredded cheese and two eggs.", price: "13.50" },
          { n: "24", name: "Pollo Mexicano", desc: "Grilled chicken breast topped with onions, mushrooms, tomatoes and zucchini. Rice and salad.", price: "15.99" },
          { n: "25", name: "Pollo Adobado", desc: "Chicken breast cooked in our special adobado sauce. Rice and salad.", price: "15.99" },
          { n: "26", name: "Pollo con Crema", desc: "Grilled chicken strips simmered in a cream & cheese sauce. Rice and beans.", price: "14.50" },
          { n: "27", name: "Chimichanga Texana", desc: "Grilled chicken, steak and shrimp with onion and tomato in a deep fried tortilla. Salad and rice or beans.", price: "15.25" },
          { n: "28", name: "Chipotle Steak", desc: "Rib-eye steak chunks with onions, zucchini, squash covered with chipotle sauce. Rice and salad.", price: "16.25" },
          { n: "29", name: "Chipotle Chicken", desc: "Chicken strips with onions, zucchini, squash, spicy chipotle sauce. Rice and salad.", price: "15.99" },
        ],
      },
    ],
  },
  {
    id: "dinners",
    label: "Special Dinners, Quesadillas & Burritos",
    tab: "Burritos",
    color: "marigold",
    image: imgBurritos,
    groups: [
      {
        title: "Special Dinners",
        items: [
          { n: "30", name: "Mexican Pizza", desc: "Tortilla sandwich stuffed with ground beef or shredded chicken. Melted cheese and cheese dip.", price: "11.99" },
          { n: "31", name: "Pasta Chicken", desc: "Fresh made pasta with home-style alfredo sauce, grilled chicken.", price: "14.99" },
          { n: "32", name: "Pasta Steak", desc: "Fresh made pasta with home-style alfredo sauce, grilled steak.", price: "15.99" },
          { n: "33", name: "Pasta Shrimp", desc: "Fresh made pasta with home-style alfredo sauce, grilled shrimp.", price: "16.25" },
          { n: "34", name: "Chimichanga", desc: "Two tortillas stuffed with shredded beef, chicken or ground beef, cheese dip. Salad and beans or rice.", price: "12.99" },
          { n: "35", name: "Taquitos", desc: "Four small rolled-up tortillas with shredded chicken or beef and cream salad.", price: "11.99" },
          { n: "36", name: "Nachos Supremos", desc: "Crispy tortilla chips with ground beef, chicken, beans, lettuce, tomatoes, sour cream and shredded cheese.", price: "11.99" },
          { n: "37", name: "Casa Mexico Burger", desc: "Lettuce, tomatoes, mayonnaise, bacon, avocado and cheese. Served with fries.", price: "10.99" },
          { n: "38", name: "Crispy Chicken Sandwich", desc: "Lettuce, tomatoes, mayonnaise, onions and cheese. Served with fries.", price: "10.99" },
        ],
      },
      {
        title: "Burritos",
        items: [
          { n: "39", name: "Burrito Grande", desc: "Extra large burrito stuffed with rice, beans and shredded beef topped with pico de gallo.", price: "11.99" },
          { n: "40", name: "Burrito California", desc: "10\" burrito with grilled chicken or steak and rice, beans, guacamole, topped with cheese dip.", price: "13.99" },
          { n: "41", name: "Burrito Deluxe", desc: "One beef and one chicken burrito stuffed with beans, salad on top.", price: "12.25" },
          { n: "42", name: "Cheese Steak Burrito", desc: "Two steak burritos covered with cheese dip, stuffed with beans, salad on top.", price: "13.99" },
          { n: "43", name: "Burrito Texano", desc: "A big burrito filled with grilled chicken, steak and shrimp covered with cheese dip. Served with rice.", price: "15.99" },
          { n: "44", name: "Burrito Marino", desc: "Seafood burrito with shrimp, scallops, crab meat and grilled onions topped with cheese dip. Rice.", price: "15.99" },
          { n: "45", name: "Burrito Mexicano", desc: "Big burrito stuffed with chicken or steak, chorizo, rice and beans, covered with cheese dip.", price: "14.99" },
          { n: "46", name: "Burrito Fajita", desc: "Large burrito with chicken or steak with vegetables and cheese dip on top. Served with rice.", price: "13.99" },
          { n: "47", name: "Burrito Poblano — Chicken", desc: "Large burrito with chicken topped with mole poblano. Served with rice.", price: "12.99" },
          { n: "47", name: "Burrito Poblano — Steak", desc: "Large burrito with steak topped with mole poblano. Served with rice.", price: "13.99" },
          { n: "48", name: "BBQ Burritos", desc: "Two medium burritos stuffed with pork and BBQ sauce topped with cheese sauce.", price: "13.75" },
          { n: "49", name: "Chile Colorado Burrito", desc: "Flour tortilla stuffed with steak, rice, beans, topped chile colorado sauce.", price: "14.99" },
          { n: "50", name: "Burrito Verde", desc: "Flour tortilla stuffed with pork, rice, beans, in chile verde sauce.", price: "14.50" },
        ],
      },
      {
        title: "Quesadillas",
        items: [
          { n: "51", name: "Quesadilla Fajita — Chicken", desc: "Chicken with vegetables, rice and beans.", price: "12.50" },
          { n: "51", name: "Quesadilla Fajita — Steak", desc: "Steak with vegetables, rice and beans.", price: "14.99" },
          { n: "52", name: "Quesadilla Texana", desc: "Grilled chicken, steak and shrimp with vegetables. Rice and beans.", price: "15.99" },
          { n: "53", name: "Quesadilla Rellena", desc: "Shredded chicken or beef. Beans and salad.", price: "11.99" },
          { n: "54", name: "Quesadilla San Francisco — Chicken", desc: "X-large quesadilla with grilled onions, mushrooms and grilled chicken. Rice and beans.", price: "13.99" },
          { n: "54", name: "Quesadilla San Francisco — Shrimp", price: "15.99" },
          { n: "55", name: "Quesadilla Chorizo", desc: "Stuffed with Mexican sausage. Rice and salad.", price: "10.99" },
          { n: "56", name: "Quesadilla Marina", desc: "Grilled shrimp with scallops and imitation crab meat with grilled onions. Rice and salad.", price: "15.99" },
        ],
      },
    ],
  },
  {
    id: "fajitas",
    label: "Fajitas",
    tab: "Fajitas",
    color: "cactus",
    image: imgFajitas,
    blurb: "Sizzling skillets · rice, beans and salad included.",
    groups: [
      {
        items: [
          { n: "65", name: "Texas Fajitas", desc: "Grilled chicken, steak and shrimp with onions, bell peppers and tomatoes. For Two $28.25", price: "17.25" },
          { n: "66", name: "Chicken Fajitas", desc: "Sliced chicken with vegetables. For Two $24.99", price: "15.50" },
          { n: "67", name: "Steak Fajitas", desc: "Tender sliced beef with vegetables. For Two $27.99", price: "16.25" },
          { n: "68", name: "Pork Fajitas", desc: "Chunks of fried pork with bell peppers, onions and tomatoes. For Two $26.99", price: "15.50" },
          { n: "69", name: "Shrimp Fajitas", desc: "Grilled jumbo shrimp with vegetables. For Two $27.99", price: "16.25" },
          { n: "70", name: "Fish Fajitas", desc: "Two grilled fish fillets over grilled vegetables. For Two $26.99", price: "15.99" },
          { n: "71", name: "Fajitas Marinas", desc: "Seafood fajitas with shrimp, scallops, fish and vegetables. For Two $28.99", price: "17.99" },
          { n: "72", name: "County Fajitas", desc: "Steak, chorizo and pork with onions, zucchini and squash, topped with two slices of bacon. For Two $27.99", price: "16.99" },
          { n: "73", name: "Fajitas Mexicanas", desc: "Grilled chicken, shrimp and chorizo with onions, bell peppers, tomatoes, zucchini, squash and Mexican cheese. For Two $27.99", price: "16.99" },
          { n: "74", name: "Fajita Seafood Tropical", desc: "Fish fillets, shrimp, scallops, crab meat, onions, zucchini, squash. Served on a pineapple bowl with shredded cheese, rice, beans and salad.", price: "19.99" },
          { n: "75", name: "Fajitas Rancheras", desc: "Steak, chicken, pork, chorizo, zucchini, squash, onions on a pineapple bowl with shredded cheese.", price: "18.99" },
        ],
      },
    ],
  },
  {
    id: "enchiladas",
    label: "Enchiladas & Vegetarian",
    tab: "Enchiladas",
    color: "cactus",
    image: imgEnchiladas,
    groups: [
      {
        title: "Enchiladas",
        items: [
          { n: "57", name: "Enchiladas Supremas", desc: "One beef, one chicken, one bean and one cheese enchilada topped with salad.", price: "12.25" },
          { n: "58", name: "Enchiladas Rancheras", desc: "Two cheese enchiladas topped with shredded beef and ranchero sauce. Rice and salad.", price: "12.25" },
          { n: "59", name: "Enchiladas Suizas", desc: "Three chicken enchiladas. Rice and salad.", price: "12.25" },
          { n: "60", name: "Enchiladas Poblanas", desc: "Three chicken enchiladas with mole poblano sauce. Rice and salad.", price: "12.25" },
          { n: "61", name: "Enchiladas Potosinas", desc: "With fried potatoes, Mexican sausage, lettuce and fresh crumbled cheese.", price: "12.25" },
          { n: "62", name: "Enchiladas Verdes", desc: "Three chicken or beef enchiladas topped with green sauce. Rice and salad.", price: "12.25" },
          { n: "63", name: "Enchiladas Rojas", desc: "Three chicken enchiladas topped with special red sauce. Rice and salad.", price: "12.25" },
          { n: "64", name: "Enchiladas de Camarón", desc: "Three shrimp enchiladas topped with special red sauce. Rice and salad.", price: "14.99" },
        ],
      },
      {
        title: "Vegetarian",
        items: [
          { n: "76", name: "Veggie Enchiladas Supreme", desc: "One cheese, one bean and one spinach enchilada with salad on top.", price: "11.99" },
          { n: "77", name: "Veggie Burrito Grand", desc: "X-large burrito stuffed with rice, beans, potatoes and grilled tomatoes. Pico de gallo.", price: "12.25" },
          { n: "78", name: "Veggie A.C.P.", desc: "Grilled onions, zucchini, mushrooms and broccoli on a bed of rice, topped with cheese dip.", price: "12.25" },
          { n: "79", name: "Veggie Fajitas", desc: "Grilled bell peppers, onions, tomatoes, zucchini and broccoli. Rice, beans and salad.", price: "13.99" },
          { n: "80", name: "Green Quesadilla", desc: "Stuffed with spinach, onions and tomatoes. Rice and salad.", price: "12.25" },
          { n: "81", name: "Green Tacos", desc: "Three tacos with spinach, onions, tomatoes, lettuce and cheese.", price: "10.99" },
          { n: "82", name: "Enchiladas de Papa", desc: "Three potato enchiladas. Rice and salad.", price: "11.99" },
        ],
      },
    ],
  },
  {
    id: "seafood",
    label: "Seafood",
    tab: "Seafood",
    color: "agave",
    image: imgSeafood,
    blurb: "From the Gulf — Acapulco-style.",
    groups: [
      {
        items: [
          { n: "83", name: "Camarones al Mojo de Ajo", desc: "Shrimp cooked in special garlic sauce. Rice and salad.", price: "16.25" },
          { n: "84", name: "Camarones a la Diabla", desc: "Grilled shrimp with hot diabla-style sauce. Rice and salad.", price: "16.25" },
          { n: "85", name: "Mojarra", desc: "Whole tilapia fish deep fried. Rice and salad.", price: "17.25" },
          { n: "86", name: "Camarones Casa Mexico", desc: "Grilled shrimp with onions and mushrooms, covered with cheese dip. Rice and salad.", price: "16.25" },
          { n: "87", name: "Arroz con Camarón", desc: "Grilled shrimp with onions and broccoli on a bed of rice topped with cheese dip.", price: "16.25" },
          { n: "88", name: "Shrimp Delight", desc: "Jumbo shrimp grilled with onions on tortilla chips, topped with cheese dip. Rice.", price: "16.25" },
          { n: "89", name: "Filete de Pescado", desc: "Two grilled fish fillets. Rice and salad.", price: "16.25" },
          { n: "90", name: "Shrimp Chimichanga", desc: "X-large flour tortilla stuffed with shrimp, onions and tomatoes. Smothered with cheese sauce, rice or beans and salad.", price: "16.25" },
          { n: "91", name: "Arroz Cancún", desc: "Shrimp and scallops with onions and cheese dip. Rice and salad.", price: "16.25" },
          { n: "92", name: "Sopa de Mariscos", desc: "Seafood soup with shrimp, scallops, fish and vegetables.", price: "17.99" },
          { n: "93", name: "Burrito Marino", desc: "Seafood burrito with shrimp, scallops, crab meat and grilled onions, cheese dip on top. Rice.", price: "15.99" },
          { n: "94", name: "Camarones Empanizados", desc: "Butterfly breaded shrimp. Rice and salad.", price: "16.25" },
          { n: "95", name: "Shrimp Pasta", desc: "Delicious fresh-made pasta with special alfredo sauce and shrimp on top.", price: "16.25" },
          { n: "96", name: "Mojarra Veracruz", desc: "Whole tilapia deep fried with grilled shrimp on top, covered with “a la diabla” sauce. Rice and salad.", price: "19.99" },
          { n: "97", name: "Coctel de Camarón", desc: "Shrimp cooked until tender, peeled and chilled. House cocktail sauce, avocado and pico de gallo.", price: "16.99" },
          { n: "98", name: "Coctel Campechano", desc: "Octopus and shrimp cooked until tender, peeled and chilled. House cocktail sauce, avocado, pico de gallo.", price: "17.99" },
          { n: "99", name: "Ceviche Camarón", desc: "Shrimp cooked in lemon juice with onions, tomatoes, jalapeño, cilantro and avocado. Crackers or tostadas.", price: "16.99" },
          { n: "100", name: "Ceviche Campechano", desc: "Shrimp and octopus cooked in lemon juice with onions, tomatoes, jalapeño, cilantro and avocado. Crackers or tostadas.", price: "17.99" },
          { n: "101", name: "El Acapulco", desc: "Mix of shrimp and scallops with grilled zucchini, squash over rice and topped with cheese sauce.", price: "16.99" },
        ],
      },
    ],
  },
  {
    id: "combinations",
    label: "Combinations & A La Carte",
    tab: "Combinations",
    color: "chili",
    image: imgCombos,
    blurb: "Every combination $11.99. Pick your favorites.",
    groups: [
      {
        title: "Combinations — all $11.99",
        items: [
          { n: "1", name: "Two Enchiladas, Rice & One Taco", price: "11.99" },
          { n: "2", name: "One Enchilada, One Chalupa & One Taco", price: "11.99" },
          { n: "3", name: "Two Enchiladas, Rice & Beans", price: "11.99" },
          { n: "4", name: "One Burrito Taco, Rice & Beans", price: "11.99" },
          { n: "5", name: "Two Tacos, Rice & Beans", price: "11.99" },
          { n: "6", name: "One Burrito, One Enchilada & One Taco", price: "11.99" },
          { n: "7", name: "One Burrito, One Chile Relleno & One Taco", price: "11.99" },
          { n: "8", name: "One Chile Relleno, One Enchilada, Rice & Bean", price: "11.99" },
          { n: "9", name: "One Enchilada, One Quesadilla, Rice", price: "11.99" },
          { n: "10", name: "One Burrito, One Enchilada, Rice & Bean", price: "11.99" },
          { n: "11", name: "Two Burritos, Rice & Bean", price: "11.99" },
          { n: "12", name: "One Chile Relleno, One Taco, Rice & Bean", price: "11.99" },
          { n: "13", name: "One Burrito, One Enchilada & One Tamal", price: "11.99" },
          { n: "14", name: "One Tostada, One Chalupa & One Taco", price: "11.99" },
        ],
      },
      {
        title: "Pick Your Own",
        note: "Pick from: rice · beans · burrito · taco · enchilada · tamal · chalupa · tostada · cheese quesadilla · chile relleno.",
        items: [
          { name: "Pick 3", price: "10.99" },
          { name: "Pick 4", price: "11.99" },
        ],
      },
      {
        title: "A La Carte",
        items: [
          { name: "Hard Shell Taco", desc: "1 for $2.99 · 3 for $7.99", price: "2.99" },
          { name: "Taco Suave / Soft Taco", desc: "1 for $3.25 · 3 for $8.50", price: "3.25" },
          { name: "Enchiladas", desc: "1 for $3.50 · 3 for $9.25", price: "3.50" },
          { name: "Tamales", desc: "1 for $3.75 · 3 for $10.99", price: "3.75" },
          { name: "Chiles Rellenos", desc: "1 for $3.99 · 3 for $10.99", price: "3.99" },
          { name: "Burritos", desc: "1 for $4.50 · 2 for $8.99", price: "4.50" },
        ],
      },
    ],
  },
  {
    id: "sides",
    label: "Desserts & Sides",
    tab: "Desserts",
    color: "marigold",
    image: imgDesserts,
    groups: [
      {
        title: "Desserts",
        items: [
          { name: "Sopapilla", price: "4.25" },
          { name: "Flan", price: "4.75" },
          { name: "Nieve", price: "5.99" },
          { name: "Churros Cheesecake", price: "6.25" },
          { name: "Churros", price: "6.25" },
        ],
      },
      {
        title: "Sides",
        items: [
          { name: "One Hard Taco", price: "2.99" },
          { name: "One Soft Taco", price: "3.25" },
          { name: "One Enchilada", price: "3.50" },
          { name: "One Burrito", price: "4.50" },
          { name: "One Tostada", price: "4.50" },
          { name: "One Chile Relleno", price: "3.99" },
          { name: "One Chalupa", price: "4.50" },
          { name: "One Tamal", price: "3.75" },
          { name: "Beans", price: "3.99" },
          { name: "Rice", price: "3.99" },
          { name: "Tortillas", price: "1.75" },
          { name: "Sour Cream", price: "2.25" },
          { name: "Shredded Cheese", price: "2.99" },
          { name: "French Fries", price: "3.99" },
          { name: "Tomatoes", price: "1.75" },
          { name: "Lettuce", price: "2.50" },
          { name: "Pico de Gallo", price: "2.75" },
        ],
      },
    ],
  },
  {
    id: "kids",
    label: "Kids Plates",
    tab: "Kids",
    color: "agave",
    image: imgKids,
    blurb: "Only for kids 10 and under.",
    groups: [
      {
        items: [
          { n: "1", name: "Cheeseburger", price: "6.99" },
          { n: "2", name: "Chicken Tenders", price: "6.99" },
          { n: "3", name: "Hot Dog", price: "6.99" },
          { n: "4", name: "Pizza", price: "6.50" },
          { n: "5", name: "Quesadilla, Rice and Beans", price: "6.99" },
          { n: "6", name: "Kids A.C.P.", price: "7.25" },
          { n: "7", name: "Kids A.C.C. Steak", price: "7.99" },
          { n: "8", name: "Beef or Chicken Burrito with Rice and Beans", price: "7.25" },
          { n: "9", name: "Kids A.C.C. Shrimp", price: "7.99" },
        ],
      },
    ],
  },
];

function colorClasses(c: Section["color"]) {
  const map = {
    chili: { bg: "bg-chili", text: "text-chili", border: "border-chili", soft: "bg-chili/10" },
    cactus: { bg: "bg-cactus", text: "text-cactus", border: "border-cactus", soft: "bg-cactus/10" },
    marigold: { bg: "bg-marigold", text: "text-marigold", border: "border-marigold", soft: "bg-marigold/10" },
    agave: { bg: "bg-agave", text: "text-agave", border: "border-agave", soft: "bg-agave/10" },
    mesa: { bg: "bg-mesa", text: "text-mesa", border: "border-mesa", soft: "bg-mesa/10" },
  } as const;
  return map[c];
}

function ItemRow({ it, accent }: { it: Item; accent: string }) {
  return (
    <div className="bg-card/80 backdrop-blur p-5 hover:bg-card transition flex gap-4">
      {it.n && (
        <span className={`font-display text-2xl ${accent} shrink-0 w-10`}>{it.n}</span>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl tracking-wide text-cream">{it.name}</h3>
          <span className={`font-display text-xl ${accent} shrink-0`}>${it.price}</span>
        </div>
        {it.desc && <p className="mt-1 text-sm text-cream/70 leading-relaxed">{it.desc}</p>}
      </div>
    </div>
  );
}

function Index() {
  const [active, setActive] = useState(SECTIONS[0].id);

  return (
    <div className="min-h-screen text-foreground">
      {/* Top phone bar */}
      <div className="bg-chili text-primary-foreground text-sm">
        <div className="mx-auto max-w-6xl px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <span className="font-medium">📍 {ADDRESS}</span>
          <span className="font-medium">🕒 {HOURS}</span>
          <a href={`tel:${PHONE_TEL}`} className="font-bold tracking-wide hover:underline">
            📞 {PHONE}
          </a>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <img
          src={heroBg}
          alt="Volcano at sunset"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 md:pt-24 md:pb-28 text-center">
          <p className="font-script text-2xl md:text-3xl text-marigold mb-2">¡Bienvenidos a!</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display leading-none">
            <span className="text-chili text-stroke-dark">CASA </span>
            <span className="text-cactus text-stroke-dark">MEXICO</span>
          </h1>
          <p className="mt-3 font-display text-2xl md:text-3xl text-cream/90 tracking-[0.3em]">
            R E S T A U R A N T
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-cream/90 text-lg">
            Family recipes, sizzling fajitas, fresh seafood and the kind of guacamole worth
            driving across town for. Right here in Taylorsville.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 bg-chili text-primary-foreground font-bold px-6 py-3 rounded-full shadow-lg shadow-chili/30 hover:scale-105 transition"
            >
              📞 Call {PHONE}
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-cactus text-secondary-foreground font-bold px-6 py-3 rounded-full shadow-lg shadow-cactus/30 hover:scale-105 transition"
            >
              View the Menu
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-cream/80">
            <span>🌶 Authentic Mexican</span>
            <span>🦐 Fresh Seafood</span>
            <span>🍹 Margaritas & Piña Coladas</span>
            <span>👨‍👩‍👧 Kids Menu</span>
          </div>
        </div>
      </header>

      {/* Sticky section tabs */}
      <nav
        id="menu"
        className="sticky top-0 z-30 wood-texture border-y border-border/40 backdrop-blur"
      >
        <div className="mx-auto max-w-6xl px-2 overflow-x-auto">
          <ul className="flex gap-1 py-2 min-w-max">
            {SECTIONS.map((s) => {
              const c = colorClasses(s.color);
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setActive(s.id)}
                    className={`block px-4 py-2 rounded-md font-display tracking-wider text-sm md:text-base transition ${
                      isActive
                        ? `${c.bg} text-white shadow-md`
                        : "text-cream/80 hover:text-cream hover:bg-white/5"
                    }`}
                  >
                    {s.tab}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Menu sections */}
      <main className="mx-auto max-w-6xl px-4 py-12 space-y-20">
        {SECTIONS.map((s) => {
          const c = colorClasses(s.color);
          return (
            <section key={s.id} id={s.id} className="scroll-mt-20">
              {/* Section hero */}
              <div className="grid md:grid-cols-[1.1fr_1fr] gap-6 items-stretch">
                <div className="relative rounded-2xl overflow-hidden border border-border/30 min-h-56 md:min-h-72 group">
                  <img
                    src={s.image}
                    alt={s.label}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <div className={`inline-block ${c.bg} text-white px-4 py-1.5 rounded-md shadow-lg mb-2`}>
                      <span className="font-display tracking-widest text-sm">{s.tab}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display tracking-wide text-white drop-shadow-lg">
                      {s.label}
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  {s.blurb && <p className="font-script text-2xl md:text-3xl text-cream/90">{s.blurb}</p>}
                  <p className="mt-3 text-cream/70 text-sm">
                    Tap{" "}
                    <a href={`tel:${PHONE_TEL}`} className={`${c.text} font-bold underline`}>
                      {PHONE}
                    </a>{" "}
                    to order ahead or stop by — we're at {ADDRESS}.
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="mt-6 space-y-8">
                {(s.groups ?? [{ items: s.items ?? [] }]).map((g, gi) => (
                  <div key={gi}>
                    {g.title && (
                      <h3 className={`font-display text-2xl tracking-wider ${c.text} mb-1`}>
                        {g.title}
                      </h3>
                    )}
                    {g.note && (
                      <p className="text-sm text-cream/70 italic mb-3">{g.note}</p>
                    )}
                    <div className={`grid gap-px ${c.soft} rounded-xl overflow-hidden border ${c.border}/30 md:grid-cols-2`}>
                      {g.items.map((it, i) => (
                        <ItemRow key={i} it={it} accent={c.text} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        <p className="text-xs text-cream/60 italic text-center max-w-2xl mx-auto">
          *Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase
          your risk of foodborne illness, especially if you have certain medical conditions.
          Prices subject to change.
        </p>
      </main>

      {/* Footer */}
      <footer className="wood-texture border-t border-border/40 mt-8">
        <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-display text-3xl">
              <span className="text-chili">Casa </span>
              <span className="text-cactus">Mexico</span>
            </h3>
            <p className="mt-2 text-cream/80 text-sm">
              Authentic Mexican kitchen serving Taylorsville and Alexander County.
            </p>
          </div>
          <div>
            <h4 className="font-display text-xl text-marigold tracking-wider">Visit</h4>
            <p className="mt-2 text-cream/90">{ADDRESS}</p>
            <p className="mt-1 text-cream/80 text-sm">{HOURS}</p>
          </div>
          <div>
            <h4 className="font-display text-xl text-marigold tracking-wider">Call to Order</h4>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-2 inline-block font-display text-3xl text-chili hover:text-marigold transition"
            >
              {PHONE}
            </a>
          </div>
        </div>
        <div className="border-t border-border/30 py-4 text-center text-xs text-cream/60">
          © {new Date().getFullYear()} Casa Mexico Restaurant. ¡Gracias por visitarnos!
        </div>
      </footer>

      {/* Floating call button (mobile) */}
      <a
        href={`tel:${PHONE_TEL}`}
        className="md:hidden fixed bottom-5 right-5 z-40 bg-chili text-white rounded-full shadow-2xl shadow-chili/40 px-5 py-3 font-bold flex items-center gap-2 active:scale-95"
      >
        📞 Call
      </a>
    </div>
  );
}
