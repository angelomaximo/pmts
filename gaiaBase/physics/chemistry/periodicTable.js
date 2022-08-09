const show = document.getElementById('show');

function PeriodicTable(atomic, symbol, name, weight, html) {
    this.atomic = atomic;
    this.symbol = symbol;
    this.name = name;
    this.weight = weight;
}

// ROW 1
const hydrogen = new PeriodicTable(1, 'H', 'Hydrogen', 1.008);
const helium = new PeriodicTable(2, 'He', 'Helium', 4.0026);
// ROW 2
const lithium = new PeriodicTable(3, 'Li', 'Lithium', 6.94);
const beryllium = new PeriodicTable(4, 'Be', 'Beryllium', 9.0122);
const boron = new PeriodicTable(5, 'B', 'Boron', 10.81);
const carbon = new PeriodicTable(6, 'C', 'Carbon', 12.011);
const nitrogen = new PeriodicTable(7, 'N', 'Nitrogen', 14.007);
const oxygen = new PeriodicTable(8, 'O', 'Oxygen', 15.999);
const fluorine = new PeriodicTable(9, 'F', 'Fluorine', 18.998);
const neon = new PeriodicTable(10, 'Ne', 'Neon', 20.180);
// ROW 3
const sodium = new PeriodicTable(11, 'Na', 'Sodium', 22.990);
const magnesium = new PeriodicTable(12, 'Mg', 'Magnesium', 24.305);
const aluminium = new PeriodicTable(13, 'Al', 'Aluminium', 26.982);
const silicon = new PeriodicTable(14, 'Si', 'Silicon', 28.085);
const phosphorus = new PeriodicTable(15, 'P', 'Phosphorus', 30.974);
const sulfur = new PeriodicTable(16, 'S', 'Sulfur', 32.06);
const chlorine = new PeriodicTable(17, 'Cl', 'Chlorine', 35.45);
const argon = new PeriodicTable(18, 'Ar', 'Argon', 39.948);
// ROW 4
const potassium = new PeriodicTable(19, 'K', 'Potassium', 39.098);
const calcium = new PeriodicTable(20, 'Ca', 'Calcium', 40.078);
const scandium = new PeriodicTable(21, 'Sc', 'Scandium', 44.956);
const titanium = new PeriodicTable(22, 'Ti', 'Titanium', 47.867);
const vanadium = new PeriodicTable(23, 'V', 'Vanadium', 50.942);
const chromium = new PeriodicTable(24, 'Cr', 'Chromium', 51.996);
const manganese = new PeriodicTable(25, 'Mn', 'Manganese', 54.938);
const iron = new PeriodicTable(26, 'Fe', 'Iron', 55.845);
const cobalt = new PeriodicTable(27, 'Co', 'Cobalt', 58.933);
const nickel = new PeriodicTable(28, 'Ni', 'Nickel', 58.693);
const copper = new PeriodicTable(29, 'Cu', 'Copper', 63.546);
const zinc = new PeriodicTable(30, 'Zn', 'Zinc', 65.38);
const gallium = new PeriodicTable(31, 'Ga', 'Gallium', 69.723);
const germanium = new PeriodicTable(32, 'Ge', 'Germanium', 72.630);
const arsenic = new PeriodicTable(33, 'As', 'Arsenic', 74.922);
const selenium = new PeriodicTable(34, 'Se', 'Selenium', 78.971);
const bromine = new PeriodicTable(35, 'Br', 'Bromine', 79.904);
const krypton = new PeriodicTable(36, 'Kr', 'Krypton', 83.798);
// ROW 5
const rubidium = new PeriodicTable(37, 'Rb', 'Rubidium', 85.468);
const strontium = new PeriodicTable(38, 'Sr', 'Strontium', 87.62);
const yttrium = new PeriodicTable(39, 'Y', 'Yttrium', 88.906);
const zirconium = new PeriodicTable(40, 'Zr', 'Zirconium', 91.224);
const niobium = new PeriodicTable(41, 'Nb', 'Niobium', 92.906);
const molybdenum = new PeriodicTable(42, 'Mo', 'Molybdenum', 95.95)
const technetium = new PeriodicTable(43, 'Tc', 'Technetium', '(98)')
const ruthenium = new PeriodicTable(44, 'Ru', 'Ruthenium', 101.07);
const rhodium = new PeriodicTable(45, 'Rh', 'Rhodium', 102.91);
const palladium = new PeriodicTable(46, 'Pd', 'Palladium', 106.42);
const silver = new PeriodicTable(47, 'Ag', 'Silver', 107.87);
const cadmium = new PeriodicTable(48, 'Cd', 'Cadmium', 112.41);
const indium = new PeriodicTable(49, 'In', 'Indium', 114.82);
const tin = new PeriodicTable(50, 'Sn', 'Tin', 118.71);
const antimony = new PeriodicTable(51, 'Sb', 'Antimony', 121.76);
const tellurium = new PeriodicTable(52, 'Te', 'Tellurium', 127.60);
const iodine = new PeriodicTable(53, 'I', 'Iodine', 126.90);
const xenon = new PeriodicTable(54, 'Xe', 'Xenon', 131.29);
// ROW 6
const caesium = new PeriodicTable(55, 'Cs', 'Caesium', 132.91);
const barium = new PeriodicTable(56, 'Ba', 'Barium', 137.33);
const lanthanum = new PeriodicTable(57, 'La', 'Lanthanum', 138.91);
const cerium = new PeriodicTable(58, 'Ce', 'Cerium', 140.12);
const praseodymium = new PeriodicTable(59, 'Pr', 'Praseodymium', 140.91);
const neodymium = new PeriodicTable(60, 'Nd', 'Neodymium', 144.24);
const promethium = new PeriodicTable(61, 'Pm', 'Promethium', '(145)');
const samarium = new PeriodicTable(62, 'Sm', 'Samarium', 150.36);
const europium = new PeriodicTable(63, 'Eu', 'Europium', 151.96);
const gadolinium = new PeriodicTable(64, 'Gd', 'Gadolinium', 157.25);
const terbium = new PeriodicTable(65, 'Tb', 'Terbium', 158.93);
const dysprosium = new PeriodicTable(66, 'Dy', 'Dysprosium', 162.50);
const holmium = new PeriodicTable(67, 'Ho', 'Holmium', 164.93);
const erbium = new PeriodicTable(68, 'Er', 'Erbium', 167.26);
const thulium = new PeriodicTable(69, 'Tm', 'Thulium', 168.93);
const ytterbium = new PeriodicTable(70, 'Yb', 'Ytterbium', 173.05);
const lutetium = new PeriodicTable(71, 'Lu', 'Lutetium', 174.97);
const hafnium = new PeriodicTable(72, 'Hf', 'Hafnium', 178.49);
const tantalum = new PeriodicTable(73, 'Ta', 'Tantalum', 180.95);
const tungsten = new PeriodicTable(74, 'W', 'Tungsten', 183.84);
const rhenium = new PeriodicTable(75, 'Re', 'Rhenium', 186.21);
const osmium = new PeriodicTable(76, 'Os', 'Osmium', 190.23);
const iridium = new PeriodicTable(77, 'Ir', 'Iridium', 192.22);
const platinum = new PeriodicTable(78, 'Pt', 'Platinum', 195.08);
const gold = new PeriodicTable(79, 'Au', 'Gold', 196.97);
const mercury = new PeriodicTable(80, 'Hg', 'Mercury', 200.59);
const thallium = new PeriodicTable(81, 'Tl', 'Thallium', 204.38);
const lead = new PeriodicTable(82, 'Pb', 'Lead', 207.2);
const bismuth = new PeriodicTable(83, 'Bi', 'Bismuth', 208.98);
const polonium = new PeriodicTable(84, 'Po', 'Polonium', '(209)');
const astatine = new PeriodicTable(85, 'At', 'Astatine', '(210)');
const radon = new PeriodicTable(86, 'Rn', 'Radon', '(222)');
// ROW 7
const francium = new PeriodicTable(87, 'Fr', 'Francium', '(223)');
const radium = new PeriodicTable(88, 'Ra', 'Radium', '(226)');
const actinium = new PeriodicTable(89, 'Ac', 'Actinium', '(227)');
const thorium = new PeriodicTable(90, 'Th', 'Thorium', 232.04);
const protactinium = new PeriodicTable(91, 'Pa', 'Protactinium', 231.04);
const uranium = new PeriodicTable(92, 'U', 'Uranium', 238.03);
const neptunium = new PeriodicTable(93, 'Np', 'Neptunium', '(237)');
const plutonium = new PeriodicTable(94, 'Pu', 'Plutonium', '(244)');
const americium = new PeriodicTable(95, 'Am', 'Americium', '(243)');
const curium = new PeriodicTable(96, 'Cm', 'Curium', '(247)');
const berkelium = new PeriodicTable(97, 'Bk', 'Berkelium', '(247)');
const californium = new PeriodicTable(98, 'Cf', 'Californium', '(247)');
const einsteinium = new PeriodicTable(99, 'Es', 'Einsteinium', '(252)');
const fermium = new PeriodicTable(100, 'Fm', 'Fermium', '(257)');
const mendellevium = new PeriodicTable(101, 'Md', 'Mendelevium', '(258)');
const nobelium = new PeriodicTable(102, 'No', 'Nobelium', '(259)');
const lawrencium = new PeriodicTable(103, 'Lr', 'Lawrencium', '(266)');
const rutherfordium = new PeriodicTable(104, 'Rf', 'Rutherfordium', '(267)');
const dubnium = new PeriodicTable(105, 'Db', 'Dubnium', '(268)');
const seaborgium = new PeriodicTable(106, 'Sg', 'Seaborgium', '(269)');
const bohrium = new PeriodicTable(107, 'Bh', 'Bohrium', '(270)');
const hassium = new PeriodicTable(108, 'Hs', 'Hassium', '(277)');
const meitnerium = new PeriodicTable(109, 'Mt', 'Meitnerium', '(278)');
const darmstadtium = new PeriodicTable(110, 'Ds', 'Darmstadtium', '(281)');
const roentgenium = new PeriodicTable(111, 'Rg', 'Roentgenium', '(282)');
const copernicium = new PeriodicTable(112, 'Cn', 'Copernicium', '(285)');
const nihonium = new PeriodicTable(113, 'Nh', 'Nihonium', '(286)');
const flerovium = new PeriodicTable(114, 'Fl', 'Flerovium', '(289)');
const moscovium = new PeriodicTable(115, 'Mc', 'Moscovium', '(290)');
const livermorium = new PeriodicTable(116, 'Lv', 'Livermorium', '(293)');
const tennessine = new PeriodicTable(117, 'Ts', 'Tennessine', '(294)');
const oganesson = new PeriodicTable(118, 'Og', 'Oganesson', '(294)');


function displayAll(...elem) {
    let gigaText = '';
    let arr = elem;

    for (let i = 0; i < arr.length; i++) {
        gigaText += `<div class="chemical">
                        Atomic: ${arr[i].atomic}<br>
                        Symbol: ${arr[i].symbol}<br>
                        Name: ${arr[i].name}<br>
                        Weight: ${arr[i].weight}<br>
                        </div>
                    <hr>`;
    }

    return gigaText;
}

show.innerHTML = displayAll(hydrogen, helium, 
                            lithium, beryllium, boron, carbon, nitrogen, oxygen, fluorine, neon, 
                            sodium, magnesium, aluminium, silicon, phosphorus, sulfur, chlorine, argon, 
                            potassium, calcium, scandium, titanium, vanadium, chromium, manganese, iron, cobalt, nickel, copper, zinc, gallium, germanium, arsenic, selenium, bromine, krypton, 
                            rubidium, strontium, yttrium, zirconium, niobium, molybdenum, technetium, ruthenium, rhodium, palladium, silver, cadmium, indium, tin, antimony, tellurium, iodine, xenon, 
                            caesium, barium, lanthanum, cerium, praseodymium, neodymium, promethium, samarium, europium, gadolinium, terbium, dysprosium, holmium, erbium, thulium, ytterbium, lutetium, hafnium, tantalum, tungsten, rhenium, osmium, iridium, platinum, gold, mercury, thallium, lead, bismuth, polonium, astatine, radon, 
                            francium, radium, actinium, thorium, protactinium, uranium, neptunium, plutonium, americium, curium, berkelium, californium, einsteinium, fermium, mendellevium, nobelium, lawrencium, rutherfordium, dubnium, seaborgium, bohrium, hassium, meitnerium, darmstadtium, roentgenium, copernicium, nihonium, flerovium, moscovium, livermorium, tennessine, oganesson);





// function display(obj) {
//     let txt = ''

//     for (let x in obj) {
//         txt += sodium[x] + ' ';
//     }

//     return txt;
// }